import TrapeziumResult, { Sides } from "../models/result";
import Trapezia from "../models/trapezia";

export function suggestionsFromTrapezia(trapezia: Trapezia): TrapeziumResult {
  let horizontal: "equal" | "right" | "left";
  let vertical: "equal" | "top" | "bottom";
  let best: "equal" | "horizontal" | "vertical" | Sides;

  if (trapezia.right === trapezia.left) {
    horizontal = "equal";
  } else {
    horizontal = trapezia.right > trapezia.left ? "right" : "left";
  }

  if (trapezia.top === trapezia.bottom) {
    vertical = "equal";
  } else {
    vertical = trapezia.top > trapezia.bottom ? "top" : "bottom";
  }

  if (horizontal === "equal" && vertical === "equal") {
    best = "equal";
  } else {
    if (horizontal === "equal") {
      best = trapezia.left > trapezia[vertical as "top" | "bottom"] ? "horizontal" : vertical;
    } else if (vertical === "equal") {
      best = trapezia[horizontal as "right" | "left"] > trapezia.top ? horizontal : "vertical";
    } else {
      best = trapezia[horizontal as "right" | "left"] > trapezia[vertical as "top" | "bottom"] ? horizontal : vertical;
    }
  }

  return {
    horizontal,
    vertical,
    best,
  };
}

export default suggestionsFromTrapezia;
