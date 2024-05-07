import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
