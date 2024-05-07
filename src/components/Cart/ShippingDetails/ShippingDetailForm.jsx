import { useState } from "react";
import RadioInputCard from "./RadioInputCard";

function ShippingDetailForm({
  onSetShippingCost,
  shippingCost,
  onSetTotalBill,
  countries,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  city,
  setCity,
  zip,
  setZip,
  address,
  setaddress,
  address2,
  setaddress2,
  phone,
  setPhone,
  country,
  setCountry,
}) {
  const [selectedOption, setSelectedOption] = useState(
    shippingCost == 0 ? 0 : 1
  );

  const handleRadioChange = (index) => {
    setSelectedOption(index);
    if (index === 0 && shippingCost != 0) {
      onSetTotalBill((bill) => bill - shippingCost);
      onSetShippingCost(0);
    }
    if (index === 1) {
      onSetShippingCost(20);
      onSetTotalBill((bill) => bill + 20);
    }
  };

  return (
    <div className="shippingDetailForm">
      <p>Shipping Details</p>
      <hr />
      <form>
        <div className="collectiveInput">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address2"
          value={address2}
          onChange={(e) => setaddress2(e.target.value)}
        />
        <div className="collectiveInput">
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="collectiveInput">
          <input
            type="text"
            placeholder="Zip/Postal Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </form>
      <hr />
      <div className="radioBtns">
        <RadioInputCard
          content={["Free Shipping", "Between 2-5 days"]}
          checked={selectedOption === 0}
          onChange={() => handleRadioChange(0)}
        />
        <RadioInputCard
          content={["Next day delivery - $20", "24 hours from checkout"]}
          checked={selectedOption === 1}
          onChange={() => handleRadioChange(1)}
        />
      </div>
    </div>
  );
}

export default ShippingDetailForm;
