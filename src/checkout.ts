// A class representing a simple checkout system
export class Checkout {
  private UnitPrices: Map<string, number> = new Map();
  private ItemsScanned: string[] = [];

  setPricePerUnit(itemName: string, price: number): void {
    if (price < 0) {
      throw new Error("Price cannot be negative");
    }
    this.UnitPrices.set(itemName, price);
  }

  scan(itemName: string): void {
    if (!this.UnitPrices.has(itemName)) {
      throw new Error(`Item '${itemName}' not found in price list`);
    }
    this.ItemsScanned.push(itemName);
  }

  /**
   * Calculate the total price of all scanned items.
   * @returns The total cost based on the scanned items and their unit prices
   */
  CalculateTotal(): number {
    return this.ItemsScanned.reduce((sum, item) => {
      const price = this.UnitPrices.get(item) || 0;
      return sum + price;
    }, 0);
  }
}
