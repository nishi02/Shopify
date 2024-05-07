import { useState } from "react";

import PaymentForm from "./PaymentForm";
import ShippingSummary from "../ShippingDetails/ShippingSummary";

import "./paymentOptions.css";
import Notification from "../../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../../State/Reducers";
import { useNavigate } from "react-router-dom";

function PaymentOptions({
  totalBill,
  tax,
  products,
  shippingCost,
  paymentMode,
  onSetPaymentMode,
  firstName,
  lastName,
  address,
  address2,
  country,
  zip,
  city,
  phone,
}) {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCart);
  const navigate = useNavigate();

  function handlePaymentDone(e) {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !address ||
      !country ||
      !zip ||
      !city ||
      !phone
    ) {
      return setMsg("Please fill all the shipping details.");
    }
    if (myCart.length == 0) {
      return setMsg("There is no product in the cart.");
    }
    setMsg("Order is placed successfully.");
  }

  function handleCancelOrder(e) {
    e.preventDefault();
    setMsg("Order is cancelled successfully.");
    dispatch(deleteCart());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="shpPaymentMain">
      <PaymentForm
        paymentMode={paymentMode}
        onSetPaymentMode={onSetPaymentMode}
      />
      <ShippingSummary
        totalBill={totalBill}
        tax={tax}
        products={products}
        shippingCost={shippingCost}
      />
      <div className="shpCartBtns">
        <button onClick={handlePaymentDone}>Order Now</button>
        <button onClick={handleCancelOrder}>Cancel Order</button>
        {msg && <Notification msg={msg} setMsg={setMsg} />}
      </div>
    </div>
  );
}

export default PaymentOptions;
