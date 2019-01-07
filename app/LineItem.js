class LineItem {
  constructor(desc, p, qty) {
    this.desc = desc;
    this.p = p;
    this.qty = qty;
  }

  getDescription() {
    return this.desc;
  }

  getPrice() {
    return this.p;
  }

  getQuantity() {
    return this.qty;
  }

  totalAmount() {
    return this.p * this.qty;
  }
}

export default LineItem;
