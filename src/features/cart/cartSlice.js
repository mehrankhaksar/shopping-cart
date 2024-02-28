import { createSlice } from "@reduxjs/toolkit";

import { sumProducts } from "../../utils/helperFunctions";

const initialState = {
  selectedProducts: [],
  totalProducts: 0,
  totalPrice: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        !state.selectedProducts.find((item) => item.id === action.payload.id)
      ) {
        state.selectedProducts.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.totalProducts = sumProducts(state.selectedProducts).totalProducts;
      state.totalPrice = sumProducts(state.selectedProducts).totalPrice;
    },
    removeProduct: (state, action) => {
      const newSelectedProducts = state.selectedProducts.filter(
        (item) => item.id !== action.payload
      );

      state.selectedProducts = [...newSelectedProducts];

      state.totalProducts = sumProducts(newSelectedProducts).totalProducts;
      state.totalPrice = sumProducts(newSelectedProducts).totalPrice;
    },
    incrementProduct: (state, action) => {
      const incrementProductIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload
      );

      state.selectedProducts[incrementProductIndex].quantity++;

      state.totalProducts = sumProducts(state.selectedProducts).totalProducts;
      state.totalPrice = sumProducts(state.selectedProducts).totalPrice;
    },
    decrementProduct: (state, action) => {
      const decrementProductIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload
      );

      state.selectedProducts[decrementProductIndex].quantity--;

      state.totalProducts = sumProducts(state.selectedProducts).totalProducts;
      state.totalPrice = sumProducts(state.selectedProducts).totalPrice;
    },
    clearAll: (state) => {
      state.selectedProducts = [];
      state.totalProducts = 0;
      state.totalPrice = 0;
      state.checkout = false;
    },
    checkout: (state) => {
      state.selectedProducts = [];
      state.totalProducts = 0;
      state.totalPrice = 0;
      state.checkout = true;
    },
  },
});

export const {
  addToCart,
  removeProduct,
  incrementProduct,
  decrementProduct,
  clearAll,
  checkout,
} = cartSlice.actions;
export default cartSlice.reducer;
