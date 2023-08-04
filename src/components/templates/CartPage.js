import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { clearAll, checkout } from "../../redux/cart/cartActions";

import { IoCartOutline } from "react-icons/io5";

import Card from "../modules/Card";

function CartPage() {
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
              <div className="grid gap-2">
                <h1 className="font-bold">Your Cart is Currently Empty!</h1>
                <Link to="/products">
                  <button className="w-full font-semibold text-white bg-blue-500 py-1.5 rounded">
                    Back to Store
                  </button>
                </Link>
              </div>
            </div>
          )}
        </ul>
        <div className="grid gap-5 bg-white p-5 rounded-md shadow-md">
          <div className="font-semibold text-blue-500">
            Total Products:{" "}
            <span className="font-medium text-black">{totalProducts}</span>
          </div>
          <div className="font-semibold text-blue-500">
            Total Price:{" "}
            <span className="font-medium text-black">{totalPrice}$</span>
          </div>
          <div className="grid gap-2 lg:grid-cols-2">
            <button
              className="font-semibold text-white bg-green-500 py-1.5 rounded"
              onClick={() => dispatch(clearAll())}
            >
              Clear All
            </button>
            <button
              className="font-semibold text-white bg-blue-500 py-1.5 rounded"
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
