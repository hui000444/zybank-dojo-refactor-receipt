class Order {
  constructor(nm, addr, li) {
    this.nm = nm;
    this.addr = addr;
    this.li = li;
  }

  getCustomerName() {
    return this.nm;
  }

  getCustomerAddress() {
    return this.addr;
  }

  getLineItems() {
    return this.li;
  }
}

export default Order;
