function CODMode({ active, onSetPaymentMode }) {
  return (
    <div
      className={`${active ? "activePaymentMode" : ""}`}
      onClick={() => onSetPaymentMode(3)}
    >
      <div className="paymentmode paymentmodePayPal">
        <div>
          <input type="radio" checked={active} readOnly />
          <div>
            <p>Cash On Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CODMode;
