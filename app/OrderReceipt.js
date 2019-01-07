class OrderReceipt {
  constructor(o) {
    this.o = o;
  }

  printReceipt() {
    let output = '';

    // print headers
    output += '======Printing Orders======\n';

    // print date, bill no, customer name
    //        output.append("Date - " + order.getDate();
    output += this.o.getCustomerName();
    output += this.o.getCustomerAddress();
    //        output.append(order.getCustomerLoyaltyNumber());

    // prints lineItems
    let totSalesTx = 0;
    let tot = 0;

    this.o.getLineItems().forEach(lineItem => {
      output += lineItem.getDescription();
      output += '\t';

      output += lineItem.getPrice();
      output += '\t';

      output += lineItem.getQuantity();
      output += '\t';

      output += lineItem.totalAmount();
      output += '\n';

      // calculate sales tax @ rate of 10%
      let salesTax = lineItem.totalAmount() * 0.10;
      totSalesTx += salesTax;

      // calculate total amount of lineItem = price * quantity + 10 % sales tax
      tot += lineItem.totalAmount() + salesTax;
    });

    // prints the state tax
    output += "Sales Tax";
    output += "\t";
    output += totSalesTx;

    // print total amount
    output += "Total Amount";
    output += "\t";
    output += tot;

    return output;
  }
}

export default OrderReceipt;
