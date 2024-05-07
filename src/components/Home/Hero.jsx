import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { website_name } from "../../constants";
import FeatureProducts from "./FeatureProducts";

function Hero() {
  const [hrClass, setHrClass] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    setHrClass("hr-full");
  }, []);

  return (
    <section className="hero-section">
      <div className="div1">
        <h1>
          Welcome to <span>{website_name}</span>, Where Quality Meets
          Affordability.
        </h1>
        <p>
          Your One-Stop <span>Shop</span> for Everything Online<span>.</span>
        </p>
      </div>
      <hr className={hrClass ? hrClass : ""} />
      <FeatureProducts data={data} />
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </section>
  );
}

export default Hero;

export async function getHeroProducts() {
  // Change Here
  const response1 = fetch("http://127.0.0.1:5001/product/421", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response2 = fetch("http://127.0.0.1:5001/product/412", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response3 = fetch("http://127.0.0.1:5001/product/411", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [res1, res2, res3] = await Promise.all([
    response1,
    response2,
    response3,
  ]);
  const [data1, data2, data3] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json(),
  ]);
  if (data1 && data2 && data3) {
    return { data1, data2, data3 };
  }
  return null;
}
