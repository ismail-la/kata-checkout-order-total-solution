// A class representing a simple checkout system
export class Checkout {
  private UnitPrices: Map<string, number> = new Map();
  private ItemsScanned: string[] = [];

  private WeightedPrices: Map<string, number> = new Map();
  private WeightedItemsScanned: { name: string; weight: number }[] = [];

  private Markdowns: Map<string, number> = new Map();

  setPricePerUnit(itemName: string, price: number): void {
    if (price < 0) {
      throw new Error("Price cannot be negative");
    }
    this.UnitPrices.set(itemName, price);
  }

  setPricePerPound(itemName: string, price: number): void {
    if (price < 0) {
      throw new Error("Price cannot be negative");
    }
    this.WeightedPrices.set(itemName, price);
  }

  setMarkdown(itemName: string, markdown: number): void {
    if (markdown < 0) throw new Error("Markdown cannot be negative");
    const price =
      this.UnitPrices.get(itemName) ?? this.WeightedPrices.get(itemName);
    if (price === undefined) throw new Error("Item not found in price list");
    if (markdown > price) throw new Error("Markdown cannot exceed item price");
    this.Markdowns.set(itemName, markdown);
  }

  scan(itemName: string): void {
    if (!this.UnitPrices.has(itemName)) {
      throw new Error(`Item '${itemName}' not found in price list`);
    }
    this.ItemsScanned.push(itemName);
  }

  scanWeighted(itemName: string, weight: number): void {
    if (!this.WeightedPrices.has(itemName)) {
      throw new Error(`Item '${itemName}' not found in price list`);
    }
    this.WeightedItemsScanned.push({ name: itemName, weight });
  }

  /**
   * Calculate the total price of all scanned items.
   * @returns The total cost based on the scanned items and their unit prices
   */
  CalculateTotal(): number {
    const perUnitTotal = this.ItemsScanned.reduce((sum, item) => {
      const price = this.UnitPrices.get(item) || 0;
      const markdown = this.Markdowns.get(item) || 0;
      return sum + (price - markdown);
    }, 0);

    const weightedTotal = this.WeightedItemsScanned.reduce((sum, item) => {
      const pricePerPound = this.WeightedPrices.get(item.name) || 0;
      const markdown = this.Markdowns.get(item.name) || 0;
      return sum + (pricePerPound - markdown) * item.weight;
    }, 0);

    return perUnitTotal + weightedTotal;
  }
}
