import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { clearAll, checkout } from "../../features/cart/cartSlice";

import { IoCartOutline } from "react-icons/io5";

import Card from "../modules/Card";
import Button from "../elements/Button";

const CartPage = () => {
  const { selectedProducts, totalProducts, totalPrice } = useSelector(
    (state) => state.cartState
  );
  const dispatch = useDispatch();

  return (
    <section>
      <div className="grid gap-5 sm:grid-cols-2 sm:items-start lg:grid-cols-3">
        <ul
          className={`h-[calc(100vh-10rem)] grid gap-5 bg-white p-5 rounded-md shadow-md overflow-y-auto lg:col-span-2 lg:${
            selectedProducts.length && "grid-cols-2"
          }`}
        >
          {selectedProducts.length ? (
            selectedProducts.map((item) => (
              <li key={item.id}>
                <Card cart={true} product={item} />
              </li>
            ))
          ) : (
            <div className="grid justify-items-center content-center">
              <IoCartOutline className="text-[250px] text-blue-500" />
              <div>
                <h1 className="font-bold mb-2.5">
                  Your Cart is Currently Empty!
                </h1>
                <Link to="/products">
                  <Button styles="w-full font-semibold text-white bg-blue-500 py-1.5 rounded">
                    Back to Store
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </ul>
        <div className="space-y-5 bg-white p-5 rounded-md shadow-md">
          <div className="font-semibold text-blue-500">
            Total Products:{" "}
            <span className="font-medium text-black">{totalProducts}</span>
          </div>
          <div className="font-semibold text-blue-500">
            Total Price:{" "}
            <span className="font-medium text-black">{totalPrice}$</span>
          </div>
          <div className="grid gap-2.5 lg:grid-cols-2">
            <Button
              styles="cart-button bg-red-500 hover:bg-red-600"
              onClick={() => dispatch(clearAll())}
            >
              Clear All
            </Button>
            <Button
              styles="cart-button bg-green-500 hover:bg-green-600"
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
