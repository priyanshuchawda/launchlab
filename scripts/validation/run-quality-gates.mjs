import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const runId = new Date()
  .toISOString()
  .replaceAll(/[-:]/g, "")
  .replace(/\..+/, "")
  .replace("T", "-");
const artifactDir = path.join(rootDir, "artifacts", "validation", runId);

const gates = [
  "pnpm run format:check",
  "pnpm run typecheck",
  "pnpm run lint",
  "pnpm run test",
  "pnpm run build",
];

export function getRelevantFinalLines(output, limit = 6) {
  return output
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .slice(-limit);
}

export function toStatusLine({ command, durationSeconds, logPath, status }) {
  return `${status} | ${command} | ${durationSeconds.toFixed(1)}s | log=${logPath}`;
}

function logFileName(command) {
  return `${command
    .replaceAll(/[^a-zA-Z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "")
    .toLowerCase()}.log`;
}

export function getSpawnOptions(command, platform = process.platform) {
  const [binary, ...args] = command.split(" ");
  const isWindowsPnpm = platform === "win32" && binary === "pnpm";
  if (isWindowsPnpm) {
    return {
      binary: `pnpm.cmd ${args.join(" ")}`,
      args: [],
      shell: true,
    };
  }

  return {
    binary,
    args,
    shell: false,
  };
}

async function runGate(command) {
  const { binary, args, shell } = getSpawnOptions(command);
  const startedAt = performance.now();
  const child = spawn(binary, args, {
    cwd: rootDir,
    env: { ...process.env, CI: "1" },
    shell,
  });

  let output = "";
  child.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  const exitCode = await new Promise((resolve) => {
    child.on("close", resolve);
  });

  const durationSeconds = (performance.now() - startedAt) / 1000;
  const logPath = path.join(artifactDir, logFileName(command));
  await writeFile(logPath, output);

  return {
    command,
    durationSeconds,
    exitCode,
    logPath,
    output,
    status: exitCode === 0 ? "PASS" : "FAIL",
  };
}

async function main() {
  await mkdir(artifactDir, { recursive: true });

  let failed = false;
  for (const command of gates) {
    const result = await runGate(command);
    if (result.exitCode !== 0) {
      failed = true;
    }

    console.log(
      toStatusLine({
        command: result.command,
        durationSeconds: result.durationSeconds,
        logPath: result.logPath,
        status: result.status,
      }),
    );

    if (result.exitCode !== 0) {
      console.log("Relevant final lines:");
      for (const line of getRelevantFinalLines(result.output)) {
        console.log(line);
      }
    }
  }

  console.log(`RUN_ID=${runId}`);
  if (failed) {
    process.exitCode = 1;
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
