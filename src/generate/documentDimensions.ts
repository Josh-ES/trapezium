import Dimensions from "../models/dimensions";

export function documentDimensions(): Dimensions {
  let documentWidth: number = 0;
  let documentHeight: number = 0;

  if (typeof document.body.offsetHeight !== "undefined") {
    documentWidth = document.body.offsetWidth;
    documentHeight = document.body.offsetHeight;
  }

  return {
    width: documentWidth,
    height: documentHeight,
  };
}

export default documentDimensions;