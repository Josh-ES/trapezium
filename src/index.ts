import defaultOptions from "./constants/defaultOptions";
import generateTrapezia from "./generate/generateTrapezia";
import suggestionsFromTrapezia from "./generate/suggestionsFromTrapezia";
import TrapeziumOptions from "./models/options";
import TrapeziumResult from "./models/result";
import Trapezia from "./models/trapezia";

export function trapezium(element: HTMLElement | JQuery, userOptions?: TrapeziumOptions): TrapeziumResult {
  const options: TrapeziumOptions = {
    ...defaultOptions,
    ...userOptions,
  };

  let el: HTMLElement;

  if ("jquery" in element) {
    el = (element as JQuery).get(0);
  } else {
    el = element as HTMLElement;
  }

  const trapezia: Trapezia = generateTrapezia(el, options);
  return suggestionsFromTrapezia(trapezia);
}

export default trapezium;
