import { sumProducts } from "../../utils/helperFunctions";

const initialState = {
  selectedProducts: [],
  totalProducts: 0,
  totalPrice: 0,
  checkout: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        !state.selectedProducts.find((item) => item.id === action.payload.id)
      ) {
        state.selectedProducts.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...sumProducts(state.selectedProducts),
      };
    case "REMOVE_PRODUCT":
      const newSelectedProducts = state.selectedProducts.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        selectedProducts: [...newSelectedProducts],
        ...sumProducts(newSelectedProducts),
      };
    case "INCREASE_PRODUCT":
      const increaseProductIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload
      );

      state.selectedProducts[increaseProductIndex].quantity++;

      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };
    case "DECREASE_PRODUCT":
      const decreaseProductIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload
      );

      state.selectedProducts[decreaseProductIndex].quantity--;

      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };
    case "CLEAR_ALL":
      return {
        selectedProducts: [],
        totalProducts: 0,
        totalPrice: 0,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedProducts: [],
        totalProducts: 0,
        totalPrice: 0,
        checkout: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
