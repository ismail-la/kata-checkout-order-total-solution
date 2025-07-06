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

  // weighted items Tests:
  describe("Weight-based itemss", () => {
    it("adds a weighted item and computes total", () => {
      const checkout = new Checkout();
      checkout.setPricePerPound("ground beef", 5.99);

      checkout.scanWeighted("ground beef", 2.5);

      expect(checkout.CalculateTotal()).toBeCloseTo(14.98, 2); // 5.99 * 2.5
    });

    it("throws if a negative price is set for a weighted item", () => {
      const checkout = new Checkout();
      expect(() => checkout.setPricePerPound("apples", -2.38)).toThrow(
        "Price cannot be negative"
      );
    });

    it("throws if scanning a weighted item not in the price list", () => {
      const checkout = new Checkout();
      expect(() => checkout.scanWeighted("unknown", 1.0)).toThrow(
        "Item 'unknown' not found in price list"
      );
    });
  });

  // Markdown tests Suite:
  describe("Markdowns (sale prices)", () => {
    // Test: Apply a valid markdown to a single item
    it("applies markdown price for per-unit item", () => {
      const checkout = new Checkout();
      checkout.setPricePerUnit("soup", 1.89);
      checkout.setMarkdown("soup", 0.2); // Apply a $0.20 discount

      checkout.scan("soup");

      expect(checkout.CalculateTotal()).toBe(1.69);
    });

    it("does not allow negative markdowns", () => {
      const checkout = new Checkout();
      checkout.setPricePerUnit("soup", 1.89);
      expect(() => checkout.setMarkdown("soup", -0.1)).toThrow(
        "Markdown cannot be negative"
      );
    });

    it("does not allow markdown greater than price", () => {
      const checkout = new Checkout();
      checkout.setPricePerUnit("soup", 1.89);
      expect(() => checkout.setMarkdown("soup", 2.0)).toThrow(
        "Markdown cannot exceed item price"
      );
    });
  });
});
