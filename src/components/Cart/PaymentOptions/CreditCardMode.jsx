import { useState } from "react";

import { CiCreditCard1 } from "react-icons/ci";
import { IoInformationCircle } from "react-icons/io5";

function CreditCardMode({ active, onSetPaymentMode }) {
  const [expiryDate, setExpiryDate] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvvNo, setCvvNo] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  function handleExpiryChange(e) {
    const input = e.target.value;
    const cleanedInput = input.replace(/\D/g, "").slice(0, 4);
    let formattedInput = cleanedInput;
    if (cleanedInput.length > 2) {
      formattedInput = cleanedInput.slice(0, 2) + "/" + cleanedInput.slice(2);
    }

    setExpiryDate(formattedInput);
  }

  return (
    <div
      className={`${active ? "activePaymentMode" : ""}`}
      onClick={() => onSetPaymentMode(1)}
    >
      <div className="paymentmode">
        <div>
          <input type="radio" checked={active} readOnly />
          <div>
            <p>Credit Card</p>
          </div>
        </div>
        <div className="creds">
          <div className="cardNo">
            <input
              type="text"
              placeholder="0000  0000  0000  0000"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
            />
            <CiCreditCard1 className="card-icon" />
          </div>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryChange}
          />
          <div className="cvvNo">
            <input
              type="password"
              placeholder="CVV"
              value={cvvNo}
              onChange={(e) => setCvvNo(e.target.value)}
            />
            <IoInformationCircle className="info-icon" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Card Holder Name"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CreditCardMode;
