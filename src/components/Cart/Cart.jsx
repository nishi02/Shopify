import { useState, useEffect } from "react";
import ShoppingTabLinks from "./ShoppingTabLinks/ShoppingTabLinks";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ShippingDetails from "./ShippingDetails/ShippingDetails";
import PaymentOptions from "./PaymentOptions/PaymentOptions";
import { useLoaderData } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../styles/cart.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const product = useSelector((state) => state.myCart);
  const tax = 20;
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [products, setProducts] = useState(product);
  const [paymentMode, setPaymentMode] = useState(1);
  const [countries, setCountries] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setaddress] = useState("");
  const [address2, setaddress2] = useState("");
  const [country, setCountry] = useState("Select your country");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const bill = products.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    setTotalBill(bill + tax);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
        );
        const data = await response.text();
        const countriesArray = data
          .split("\n")
          .filter((country) => country.trim() !== "");
        setCountries(["Select your country", ...countriesArray]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <ShoppingTabLinks
        links={["Shopping Cart", "Shipping Details", "Payment Options"]}
        activeIndex={activeIndex}
        onSetActiveIndex={setActiveIndex}
      />
      {activeIndex == 0 && (
        <ShoppingCart
          products={products}
          onSetProducts={setProducts}
          tax={tax}
          onSetActiveIndex={setActiveIndex}
          onSetTotalBill={setTotalBill}
          totalBill={totalBill}
          shippingCost={shippingCost}
        />
      )}
      {activeIndex == 1 && (
        <ShippingDetails
          onSetActiveIndex={setActiveIndex}
          totalBill={totalBill}
          tax={tax}
          products={products}
          shippingCost={shippingCost}
          onSetTotalBill={setTotalBill}
          onSetShippingCost={setShippingCost}
          countries={countries}
          setFirstName={setFirstName}
          firstName={firstName}
          lastName={lastName}
          address={address}
          address2={address2}
          country={country}
          zip={zip}
          city={city}
          phone={phone}
          setLastName={setLastName}
          setaddress={setaddress}
          setaddress2={setaddress2}
          setCountry={setCountry}
          setZip={setZip}
          setCity={setCity}
          setPhone={setPhone}
        />
      )}
      {activeIndex == 2 && (
        <PaymentOptions
          totalBill={totalBill}
          tax={tax}
          products={products}
          shippingCost={shippingCost}
          paymentMode={paymentMode}
          onSetPaymentMode={setPaymentMode}
          firstName={firstName}
          lastName={lastName}
          address={address}
          address2={address2}
          country={country}
          zip={zip}
          city={city}
          phone={phone}
        />
      )}
      <Footer />
    </>
  );
}
