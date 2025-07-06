// Importing the Checkout class to be tested
import { Checkout } from "../src/checkout";

// Checkout system Custom Test Suite:
describe("Checkout Order Total Kata", () => {
  describe("Basic functionality", () => {
    it("should initialize with zero total", () => {
      const checkout = new Checkout();
      expect(checkout.CalculateTotal()).toBe(0);
    });
  });

  // Tests related to adding individual (per-unit) items
  describe("Per-unit items", () => {
    it("should add per-unit (single scanned item) item to total", () => {
      // Arrange:
      const checkout = new Checkout();
      checkout.setPricePerUnit("soup", 1.89);

      // Act:
      checkout.scan("soup");

      // Assert:
      expect(checkout.CalculateTotal()).toBe(1.89);
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
      expect(checkout.CalculateTotal()).toBe(4.39);
    });

    it("throws an error if a negative price is set", () => {
      const checkout = new Checkout();
      expect(() => checkout.setPricePerUnit("soup", -1.89)).toThrow(
        "Price cannot be negative" // Error expected for invalid price
      );
    });

    it("throws an error when scanning an item not in the price list", () => {
      const checkout = new Checkout();
      expect(() => checkout.scan("unknown")).toThrow(
        "Item 'unknown' not found in price list" // Expect error if item not found
      );
    });
  });
});
