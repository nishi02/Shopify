import Product from "./Product";

function ShoppingCartProducts({ onSetTotalBill, products, onSetProducts }) {
  return (
    <div className="shpCartProduct">
      <p>Shopping Details</p>
      <hr />
      <div className="shpProductList">
        {products.length == 0
          ? "No product is added to your cart."
          : products.map((el) => (
              <Product
                img={el.img}
                name={el.name}
                price={el.price}
                count={el.count}
                id={el.id}
                key={el.id}
                onSetTotalBill={onSetTotalBill}
                onSetProducts={onSetProducts}
              />
            ))}
      </div>
    </div>
  );
}

export default ShoppingCartProducts;
