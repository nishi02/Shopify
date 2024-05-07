function ShoppingCartBillCard({ totalBill, tax, shippingCost }) {
  return (
    <>
      <div className="purchaseTotal">
        <p>
          <span>SUBTOTAL</span> <span>${totalBill - tax - shippingCost}</span>
        </p>
        <p>
          <span>SHIPPING</span>{" "}
          <span>{shippingCost == 0 ? "Free" : `$${shippingCost}`}</span>
        </p>
        <p>
          <span>TAXES</span> <span>${tax}</span>
        </p>
      </div>
      <hr />
      <p className="grandTotalBill">
        <span>TOTAL</span> <span>${totalBill}</span>
      </p>
    </>
  );
}

export default ShoppingCartBillCard;
