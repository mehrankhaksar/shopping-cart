import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeProduct,
  increaseProduct,
  decreaseProduct,
} from "../../redux/cart/cartActions";

import {
  shortenTitle,
  isInCart,
  quantityCount,
} from "../../utils/helperFunctions";

import Button from "../elements/Button";

import { BiTrash } from "react-icons/bi";

function Card({ cart, product }) {
  const { id, title, price, image } = product;

  const { selectedProducts } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm bg-white mx-auto p-5 rounded-lg shadow-lg">
      <img className="w-full h-72 object-contain" src={image} alt={title} />
      <h3 className="text-lg font-bold text-blue-500 mt-5">
        {shortenTitle(title)}
      </h3>
      <span className="inline-block text-sm text-white bg-green-500 my-3 py-1 px-2 rounded-sm">
        {cart
          ? (quantityCount(selectedProducts, id) * price).toFixed(2)
          : price}
        $
      </span>
      <div className="flex justify-between items-center">
        <Link to={`/products/${id}`}>
          <Button styles="font-medium text-blue-500" text="Details" />
        </Link>
        {isInCart(selectedProducts, id) ? (
          <div className="grid grid-cols-3 justify-items-center items-center gap-1">
            {quantityCount(selectedProducts, id) > 1 ? (
              <Button
                styles="cart-buttons"
                onClick={() => dispatch(decreaseProduct(id))}
                text="-"
              />
            ) : (
              <Button
                styles="cart-buttons text-base"
                onClick={() => dispatch(removeProduct(id))}
                text={<BiTrash size={18} />}
              />
            )}
            <span className="w-7 h-7 flex justify-center items-center font-semibold text-white bg-orange-500 rounded-full">
              {quantityCount(selectedProducts, id)}
            </span>
            <Button
              styles="cart-buttons"
              onClick={() => dispatch(increaseProduct(id))}
              text="+"
            />
          </div>
        ) : (
          <Button
            styles="font-semibold text-white bg-blue-500 py-1.5 px-3 rounded lg:text-sm"
            onClick={() => dispatch(addToCart(product))}
            text="Add to Cart"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
