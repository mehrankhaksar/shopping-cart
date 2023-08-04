import axios from "axios";

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

export const fetchAPI = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/data`)
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchProductsFailure(error));
      });
  };
};
