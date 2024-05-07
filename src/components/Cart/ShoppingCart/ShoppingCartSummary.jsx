import { useState } from "react";
import ShoppingCartBillCard from "./ShoppingCartBillCard";

function ShoppingCartSummary({ totalBill, onSetTotalBill, tax, shippingCost }) {
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("No coupon is added yet.");

  async function handleCouponSubmit(e) {
    e.preventDefault();

    // Fetch the coupon response as both totalBill and coupon will be sent so that the calc take place at backend

    const data = { discount: 100, valid: true, success: true };
    if (data?.success && data?.valid) {
      setCouponMessage("Coupon applied successfully.");
      onSetTotalBill((prevBill) => prevBill - data.discount);
      setCoupon("");
    } else {
      setCouponMessage("Coupon is not valid.");
      setCoupon("");
    }
  }

  return (
    <div className="shpCartSummary">
      <p>Summary</p>
      <hr />
      <form onSubmit={handleCouponSubmit}>
        <label htmlFor="coupon-code">ENTER COUPON CODE</label>
        <input
          type="text"
          id="coupon-code"
          placeholder="Enter your coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <p>{couponMessage}</p>
      </form>
      <ShoppingCartBillCard
        totalBill={totalBill}
        tax={tax}
        shippingCost={shippingCost}
      />
    </div>
  );
}

export default ShoppingCartSummary;
