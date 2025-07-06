// A class representing a simple checkout system
export class Checkout {
  private UnitPrices: Map<string, number> = new Map();
  private ItemsScanned: string[] = [];

  private WeightedPrices: Map<string, number> = new Map();
  private WeightedItemsScanned: { name: string; weight: number }[] = [];

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
      return sum + price;
    }, 0);

    const TotalWeighted = this.WeightedItemsScanned.reduce((sum, item) => {
      const pricePerPound = this.WeightedPrices.get(item.name) || 0;
      return sum + pricePerPound * item.weight;
    }, 0);

    return perUnitTotal + TotalWeighted;
  }
}
