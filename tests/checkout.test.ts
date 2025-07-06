import { Checkout } from "../src/checkout";

describe("Checkout Order Total Kata", () => {
  describe("Basic functionality", () => {
    it("should initialize with zero total", () => {
      const checkout = new Checkout();
      expect(checkout.getTotal()).toBe(0);
    });
  });
});
