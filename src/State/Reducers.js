import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  myCart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = {
        id: nanoid(),
        img: action.payload.img,
        name: action.payload.name,
        price: action.payload.price,
        count: 1,
      };
      state.myCart.push(item);
    },
    deleteCart: (state, action) => {
      state.myCart = state.myCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increseCount: (state, action) => {
      state.myCart = state.myCart.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.myCart = state.myCart.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    },
    cancelCart: (state) => {
      state.myCart = [];
    },
  },
});

export const { addCart, deleteCart, increseCount, decreaseCount, cancelCart } =
  cartReducer.actions;
export default cartReducer.reducer;
