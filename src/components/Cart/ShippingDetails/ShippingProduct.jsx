function ShippingProduct({ image, name, price, count }) {
  return (
    <div className="shippingProduct">
      <img src={image} alt={{ name } + "image"} />
      <div>
        <p>{name}</p>
        <p>
          ${price} * {count}
        </p>
      </div>
    </div>
  );
}

export default ShippingProduct;
