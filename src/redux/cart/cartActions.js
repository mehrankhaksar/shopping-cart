const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};

const increaseProduct = (id) => {
  return {
    type: "INCREASE_PRODUCT",
    payload: id,
  };
};

const decreaseProduct = (id) => {
  return {
    type: "DECREASE_PRODUCT",
    payload: id,
  };
};

const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

export {
  addToCart,
  removeProduct,
  increaseProduct,
  decreaseProduct,
  clearAll,
  checkout,
};
