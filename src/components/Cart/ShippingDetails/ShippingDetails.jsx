import ShippingDetailForm from "./ShippingDetailForm";
import ShippingSummary from "./ShippingSummary";

import "./shippingDetails.css";

function ShippingDetails({
  onSetActiveIndex,
  totalBill,
  tax,
  products,
  shippingCost,
  onSetShippingCost,
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
  return (
    <div className="shpDetailMain">
      <ShippingDetailForm
        onSetShippingCost={onSetShippingCost}
        shippingCost={shippingCost}
        onSetTotalBill={onSetTotalBill}
        countries={countries}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        address={address}
        setaddress={setaddress}
        address2={address2}
        setaddress2={setaddress2}
        country={country}
        setCountry={setCountry}
        zip={zip}
        setZip={setZip}
        city={city}
        setCity={setCity}
        phone={phone}
        setPhone={setPhone}
      />
      <ShippingSummary
        totalBill={totalBill}
        tax={tax}
        products={products}
        shippingCost={shippingCost}
      />
      <div className="shpCartBtns">
        <button onClick={() => onSetActiveIndex((a) => (a == 2 ? 2 : a + 1))}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ShippingDetails;
