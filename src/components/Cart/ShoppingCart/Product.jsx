import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  deleteCart,
  increseCount,
} from "../../../State/Reducers";

function Product({
  img,
  name,
  price,
  onSetTotalBill,
  onSetProducts,
  id,
  count,
}) {
  const [productCount, setProductCount] = useState(count);
  const dispatch = useDispatch();

  function handleProductIncrease() {
    setProductCount((prevCount) => prevCount + 1);
    onSetProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id == id ? { ...product, count: productCount + 1 } : product
      )
    );
    onSetTotalBill((prevBill) => prevBill + price);
    dispatch(increseCount({ id }));
  }

  function handleProductDecrease() {
    if (productCount === 1) return;
    setProductCount((prevCount) => prevCount - 1);
    onSetProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id == id ? { ...product, count: productCount - 1 } : product
      )
    );
    onSetTotalBill((prevBill) => prevBill - price);
    dispatch(decreaseCount({ id }));
  }

  function handleRemoveItem() {
    onSetTotalBill((prevBill) => prevBill - price * productCount);
    onSetProducts((prevProducts) =>
      prevProducts.filter((product) => product.id != id)
    );
    dispatch(deleteCart({ id }));
  }

  return (
    <div className="cartProduct">
      <div>
        <img src={img} alt={name + " image"} />
        <div>
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="productCounter">
        <p>{productCount} pcs</p>
        <p>
          <button onClick={handleProductIncrease}>+</button>
          <button onClick={handleProductDecrease}>-</button>
        </p>
      </div>
      <div className="shpCartBtns">
        <button className="removeProduct" onClick={handleRemoveItem}>
          Remove Item <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default Product;
