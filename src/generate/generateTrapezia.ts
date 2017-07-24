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
  const dimensions: Dimensions = elementDimensions(element);

  return {
    top: trapeziumArea(viewport.width, dimensions.width, position.top),
    right: trapeziumArea(viewport.height, dimensions.height, viewport.width - position.right),
    bottom: trapeziumArea(viewport.width, dimensions.width, viewport.height - position.bottom),
    left: trapeziumArea(viewport.height, dimensions.height, position.left),
  };
}

export default generateTrapezia;
