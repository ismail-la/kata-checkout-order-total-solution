import { Checkout } from "../src/checkout";

// Checkout system Custom Test Suite:
describe("Checkout Order Total Kata", () => {
  describe("Basic functionality", () => {
    it("should initialize with zero total", () => {
      const checkout = new Checkout();
      expect(checkout.getTotal()).toBe(0);
    });
  });

describe("Per-unit items", () => {
  it("should add per-unit (single scanned item) item to total", () => {
    // Arrange:
    const checkout = new Checkout();
    checkout.setPricePerUnit("soup", 1.89);

    // Act:
    checkout.scan("soup");

    // Assert:
    expect(checkout.getTotal()).toBe(1.89);
  });

  it("sums Total for multiple per-unit items ", () => {
    // Arrange:
    const checkout = new Checkout();
    checkout.setPricePerUnit("soup", 1.89);
    checkout.setPricePerUnit("bread", 2.5);

    // Act:
    checkout.scan("soup");
    checkout.scan("bread");

    // Assert:
    expect(checkout.getTotal()).toBe(4.39);
  });
});









});
