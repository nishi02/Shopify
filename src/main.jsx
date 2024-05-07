import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./State/Store";

import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Product, { getProduct } from "./components/Product/Product";
import Error404 from "./components/Error404/Error404";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Login from "./components/Login/Login";
import Register, { getLocation } from "./components/Register/Register";
import Dashboard, { getUserDetails } from "./components/Dashboard/Dashboard";
import { getHeroProducts } from "./components/Home/Hero";
import Category, { getCategoriesProduct } from "./components/Category/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404 />}>
      <Route path="" element={<Home />} loader={getHeroProducts} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} loader={getLocation} />
      <Route path="dashboard" element={<Dashboard />} loader={getUserDetails} />
      <Route path="product/:pid" element={<Product />} loader={getProduct} />
      <Route
        path="category/:cid"
        element={<Category />}
        loader={getCategoriesProduct}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
