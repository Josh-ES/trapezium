export function elementPosition(element: HTMLElement): ClientRect {
  let rect: ClientRect = {
    top: 0,
    height: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
  };

  if (typeof element.getBoundingClientRect !== "undefined") {
    rect = element.getBoundingClientRect();
  }

  return rect;
}

export default elementPosition;
