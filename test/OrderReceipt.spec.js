import chai from 'chai'
import LineItem from '../app/LineItem';
import Order from '../app/Order';
import OrderReceipt from '../app/OrderReceipt';

const expect = chai.expect

describe('OrderReceipt', () => {
  it('shouldPrintCustomerInformationOnOrder', function () {
    let order = new Order("Mr X", "Chicago, 60601", []);
    let receipt = new OrderReceipt(order);

    let output = receipt.printReceipt();

    expect(output).to.include("Mr X");
    expect(output).to.include("Chicago, 60601");
  });

  it('shouldPrintLineItemAndSalesTaxInformation', function () {
    let lineItems = [
      new LineItem("milk", 10, 2),
      new LineItem("biscuits", 5, 5),
      new LineItem("chocolate", 20, 1)
    ]

    let receipt = new OrderReceipt(new Order('', '', lineItems));

    let output = receipt.printReceipt();

    console.log("$$$$$$$", output);
    expect(output).to.include("milk\t10\t2\t20\n");
    expect(output).to.include("biscuits\t5\t5\t25\n");
    expect(output).to.include("chocolate\t20\t1\t20\n");
    expect(output).to.include("Sales Tax\t6.5");
    expect(output).to.include("Total Amount\t71.5");
  });
})
