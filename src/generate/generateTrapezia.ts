import Dimensions from "../models/dimensions";
import TrapeziumOptions from "../models/options";
import Trapezia from "../models/trapezia";

import elementDimensions from "./elementDimensions";
import elementPosition from "./elementPosition";
import trapeziumArea from "./trapeziumArea";
import viewPortDimensions from "./viewPortDimensions";

export function generateTrapezia(element: HTMLElement, options: TrapeziumOptions): Trapezia {
  const viewport: Dimensions = viewPortDimensions();
  const position: ClientRect = elementPosition(element);
  // const dimensions: Dimensions = elementDimensions(element);

  return {
    top: trapeziumArea(viewport.width, 0, 0),
    right: trapeziumArea(viewport.height, 0, viewport.width - 0),
    bottom: trapeziumArea(viewport.width, 0, viewport.height - 0),
    left: trapeziumArea(viewport.height, 0, 0),
  };
}

export default generateTrapezia;
