import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchAPI = createAsyncThunk("products/fetchAPI", () => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/data`)
    .then((response) => response.data);
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
