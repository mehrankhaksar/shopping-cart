import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    productsState: productsReducer,
    cartState: cartReducer,
  },
});

export default store;
