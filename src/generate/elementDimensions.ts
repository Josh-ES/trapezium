import Dimensions from "../models/dimensions";

export function elementDimensions(element: HTMLElement): Dimensions {
  let elementWidth: number = 0;
  let elementHeight: number = 0;

  if (typeof element.offsetWidth !== "undefined") {
    elementWidth = element.offsetWidth;
    elementHeight = element.offsetHeight;
  }

  return {
    width: elementWidth,
    height: elementHeight,
  };
}

export default elementDimensions;
