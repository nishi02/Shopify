function PaypalMode({ active, onSetPaymentMode }) {
  return (
    <div
      className={`${active ? "activePaymentMode" : ""}`}
      onClick={() => onSetPaymentMode(2)}
    >
      <div className="paymentmode paymentmodePayPal">
        <div>
          <input type="radio" checked={active} readOnly />
          <div>
            <p>Paypal</p>
          </div>
        </div>
        <img src="/paypal.png" alt="Paypal Image" />
      </div>
    </div>
  );
}

export default PaypalMode;
