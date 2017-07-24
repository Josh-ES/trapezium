import Dimensions from "../models/dimensions";

export function viewPortDimensions(): Dimensions {
  let viewPortWidth: number = 0;
  let viewPortHeight: number = 0;

  if (typeof window.innerWidth !== "undefined") {
    viewPortWidth = window.innerWidth;
    viewPortHeight = window.innerHeight;
  }

  return {
    width: viewPortWidth,
    height: viewPortHeight,
  };
}

export default viewPortDimensions;
