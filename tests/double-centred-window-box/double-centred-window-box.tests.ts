import { expect } from "chai";

import trapezium from "../../src";
import fixture from "./fixture";

const className: string = "double-centred-window-box";

describe("Trapezium", () => {
  describe("Double Centred Window Box", () => {

    // inject the HTML fixture for the tests
    before(() => {
      $("body").append(fixture);
    });

    // remove the HTML fixture from the DOM
    after(() => {
      $(`.${className}`).remove();
    });

    it("should have a window box in the dom", () => {
      expect($(`.${className}`).length).to.equal(1);
    });

    it(`should generate the correct trapezia from a ${className} jQuery object`, () => {
      const result = trapezium($(`.${className}`));
      expect(result.horizontal).to.equal("equal");
      expect(result.vertical).to.equal("equal");
      expect(result.best).to.equal("equal");
    });

    it(`should generate the correct trapezia from a ${className} HTMLElement object`, () => {
      const result = trapezium($(`.${className}`)[0]);
      expect(result.horizontal).to.equal("equal");
      expect(result.vertical).to.equal("equal");
      expect(result.best).to.equal("equal");
    });

  });
});