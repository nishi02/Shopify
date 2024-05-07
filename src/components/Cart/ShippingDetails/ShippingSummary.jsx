import ShippingProduct from "./ShippingProduct";
import ShoppingCartBillCard from "../ShoppingCart/ShoppingCartBillCard";

function ShippingSummary({ totalBill, tax, products, shippingCost }) {
  return (
    <div className="shippingSummary">
      <p>Summary</p>
      <hr />
      <div className="shippingProductList">
        {products.map((el, i) => (
          <ShippingProduct
            image={el.img}
            name={el.name}
            price={el.price}
            count={el.count}
            key={i}
          />
        ))}
      </div>
      <hr />
      <ShoppingCartBillCard
        totalBill={totalBill}
        tax={tax}
        shippingCost={shippingCost}
      />
    </div>
  );
}

export default ShippingSummary;
