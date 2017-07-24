export type Sides = "top" | "right" | "bottom" | "left";

export interface TrapeziumResult {
  horizontal: "equal" | "left" | "right";
  vertical: "equal" | "top" | "bottom";
  best: "equal" | "horizontal" | "vertical" | Sides;
}

export default TrapeziumResult;
