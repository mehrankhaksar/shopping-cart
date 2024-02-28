const shortenTitle = (title) => {
  const splittedTitle = title.split(" ");
  if (splittedTitle[1] === "-") {
    return `${splittedTitle[0]} ${splittedTitle[1]} ${splittedTitle[2]}...`;
  } else {
    return `${splittedTitle[0]} ${splittedTitle[1]}...`;
  }
};

const sumProducts = (selectedProducts) => {
  const totalProducts = selectedProducts.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = selectedProducts
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return { totalProducts, totalPrice };
};

const isInCart = (selectedProducts, id) => {
  return !!selectedProducts.find((item) => item.id === id);
};

const quantityCount = (selectedProducts, id) => {
  const index = selectedProducts.findIndex((item) => item.id === id);

  return selectedProducts[index].quantity;
};

export { shortenTitle, sumProducts, isInCart, quantityCount };
