import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  decrementProduct,
  removeProduct,
  incrementProduct,
  addToCart,
} from "../../features/cart/cartSlice";

import {
  shortenTitle,
  quantityCount,
  isInCart,
} from "../../utils/helperFunctions";

import { BiTrash } from "react-icons/bi";

import Button from "../elements/Button";

const Card = ({ cart, product }) => {
  const { image, title, id, price } = product;

  const { selectedProducts } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm w-full bg-white mx-auto p-5 rounded-lg shadow-lg">
      <img className="w-full h-72 object-contain" src={image} alt={title} />
      <h3 className="text-xl font-bold text-blue-500 mt-5">
        {shortenTitle(title)}
      </h3>
      <span className="inline-block text-sm text-white font-semibold bg-green-500 my-3 py-1 px-2 rounded-sm">
        {cart
          ? (quantityCount(selectedProducts, id) * price).toFixed(2)
          : price}
        $
      </span>
      <div className="flex justify-between items-center">
        <Link to={`/products/${id}`}>
          <Button styles="font-medium text-blue-500">Details</Button>
        </Link>
        {isInCart(selectedProducts, id) ? (
          <div className="grid grid-cols-3 justify-items-center items-center gap-1">
            {quantityCount(selectedProducts, id) > 1 ? (
              <Button
                styles="card-button"
                onClick={() => dispatch(decrementProduct(id))}
              >
                -
              </Button>
            ) : (
              <Button
                styles="card-button"
                onClick={() => dispatch(removeProduct(id))}
              >
                <BiTrash size={18} />
              </Button>
            )}
            <span className="w-7 h-7 inline-flex justify-center items-center font-semibold text-white bg-orange-500 rounded-full">
              {quantityCount(selectedProducts, id)}
            </span>
            <Button
              styles="card-button"
              onClick={() => dispatch(incrementProduct(id))}
            >
              +
            </Button>
          </div>
        ) : (
          <Button
            styles="text-sm font-semibold text-white bg-blue-500 py-1.5 px-3 rounded hover:bg-blue-600"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
