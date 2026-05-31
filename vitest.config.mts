import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    exclude: ["**/*.test.mjs", "**/node_modules/**", "**/.next/**"],
    globals: false,
    setupFiles: ["./vitest.setup.ts"],
  },
});
