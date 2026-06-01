type ConnectorColor = "cyan" | "violet" | "lime" | "amber";

const gradientMap: Record<ConnectorColor, string> = {
  cyan:   "linear-gradient(90deg, rgb(34 211 238 / 0.6), rgb(139 92 246 / 0.4))",
  violet: "linear-gradient(90deg, rgb(139 92 246 / 0.6), rgb(163 230 53 / 0.4))",
  lime:   "linear-gradient(90deg, rgb(163 230 53 / 0.6), rgb(251 191 36 / 0.4))",
  amber:  "linear-gradient(90deg, rgb(251 191 36 / 0.6), transparent)",
};

interface FlowConnectorProps {
  color: ConnectorColor;
}

export function FlowConnector({ color }: FlowConnectorProps) {
  return (
    <div
      className="flow-connector"
      aria-hidden="true"
      style={{ background: gradientMap[color] }}
    />
  );
}
