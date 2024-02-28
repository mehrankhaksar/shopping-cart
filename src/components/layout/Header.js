import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const { totalProducts } = useSelector((state) => state.cartState);

  return (
    <nav className="w-full sticky top-0 bg-white p-5 shadow-md z-50">
      <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
        <Link to="/products">
          <h2 className="text-2xl font-bold text-blue-500">Store</h2>
        </Link>
        <Link to="/cart">
          <div className="relative p-1.5 rounded-full transition-colors hover:bg-gray-200">
            <IoCartOutline size={30} />
            <span className="w-6 h-6 flex justify-center items-center absolute -top-1.5 -right-1.5 text-sm font-semibold text-white bg-orange-500 rounded-full">
              {totalProducts}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
