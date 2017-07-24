import { expect } from "chai";

import trapezium from "../../src";
import fixture from "./fixture";

const className: string = "window-box";

describe("Trapezium", () => {
  describe("Window Box", () => {

    // inject the HTML fixture for the tests
    beforeEach(() => {
      $("body").append(fixture);
    });

    // remove the HTML fixture from the DOM
    afterEach(() => {
      $(`.${className}`).remove();
    });

    it("should have a window box in the dom", () => {
      expect($(`.${className}`).length).to.equal(1);
    });

    it(`should generate the correct trapezia from a ${className} jQuery object`, () => {
      const result = trapezium($(`.${className}`));
      expect(result.horizontal).to.equal("left");
      expect(result.vertical).to.equal("bottom");
      expect(result.best).to.equal("left");
    });

    it(`should generate the correct trapezia from a ${className} HTMLElement object`, () => {
      const result = trapezium($(`.${className}`)[0]);
      expect(result.horizontal).to.equal("left");
      expect(result.vertical).to.equal("bottom");
      expect(result.best).to.equal("left");
    });

  });
});