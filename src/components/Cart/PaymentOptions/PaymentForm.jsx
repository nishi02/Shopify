import CreditCardMode from "./CreditCardMode";
import Paypal from "./PaypalMode";
import CODMode from "./CashOnDeliveryModel";

function PaymentForm({ paymentMode, onSetPaymentMode }) {
  return (
    <div className="paymentForm">
      <p>Payment</p>
      <hr />
      <div className="paymentMethods">
        {/* <CreditCardMode
          active={paymentMode == 1 ? true : false}
          onSetPaymentMode={onSetPaymentMode}
        />
        <Paypal
          active={paymentMode == 2 ? true : false}
          onSetPaymentMode={onSetPaymentMode}
        /> */}
        <CODMode
          active={paymentMode == 3 ? true : false}
          onSetPaymentMode={onSetPaymentMode}
        />
      </div>
    </div>
  );
}

export default PaymentForm;
