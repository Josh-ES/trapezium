import { expect } from "chai";

import trapezium from "../../src";
import fixture from "./fixture";

const className: string = "scrolling-window-box";

describe.only("Trapezium", () => {
  describe("Scrolling Window Box", () => {

    // inject the HTML fixture for the tests
    beforeEach(() => {
      $("body").append(fixture);

      let filler = '';

      for (let i = 0; i < 20000; i++) {
        filler += 'b';
      }

      document.getElementById('scrollable').innerText = filler;
    });

    // remove the HTML fixture from the DOM
    afterEach(() => {
      $(`.${className}`).remove();
    });

    it("should have a window box in the dom", () => {
      expect($(`.${className}`).length).to.equal(1);
    });

    it(`should generate the correct trapezia from a ${className} jQuery object`, () => {
      console.log(window.innerWidth, document.documentElement.clientWidth, window.innerHeight, document.documentElement.clientHeight);
      const result = trapezium($(`.${className}`));
      console.log(window.innerWidth, document.documentElement.clientWidth, window.innerHeight, document.documentElement.clientHeight);
      expect(result.horizontal).to.equal("left");
      expect(result.vertical).to.equal("bottom");
      expect(result.best).to.equal("left");
    });

    it(`should generate the correct trapezia from a ${className} HTMLElement object`, () => {
      console.log(window.innerWidth, document.documentElement.clientWidth, window.innerHeight, document.documentElement.clientHeight);
      const result = trapezium($(`.${className}`)[0]);
      console.log(window.innerWidth, document.documentElement.clientWidth, window.innerHeight, document.documentElement.clientHeight);
      expect(result.horizontal).to.equal("left");
      expect(result.vertical).to.equal("bottom");
      expect(result.best).to.equal("left");
    });

  });
});