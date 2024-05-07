import { useState } from "react";

import ShoppingCartProducts from "./ShoppingCartProducts";
import ShoppingCartSummary from "./ShoppingCartSummary";

import "./shoppingCart.css";

function ShoppingCart({
  products,
  tax,
  onSetActiveIndex,
  onSetTotalBill,
  totalBill,
  shippingCost,
  onSetProducts,
}) {
  return (
    <div className="shpCartMain">
      <ShoppingCartProducts
        onSetTotalBill={onSetTotalBill}
        products={products}
        onSetProducts={onSetProducts}
      />
      <ShoppingCartSummary
        totalBill={totalBill}
        onSetTotalBill={onSetTotalBill}
        tax={tax}
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

export default ShoppingCart;
