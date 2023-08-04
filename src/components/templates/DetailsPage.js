import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Disclosure } from "@headlessui/react";

import { IoIosArrowDown } from "react-icons/io";

function DetailsPage(props) {
  const { id } = props.match.params;

  const { products } = useSelector((state) => state.productsState);

  const { title, price, description, category, image } = products[id - 1];

  return (
    <section>
      <div className="max-w-sm grid gap-5 bg-white mx-auto p-5 shadow-lg rounded-lg sm:max-w-full sm:grid-cols-2 sm:items-start sm:gap-10 md:max-w-4xl">
        <img src={image} alt={title} />
        <div className="grid gap-3 bg-white p-2.5 rounded-md shadow-md">
          <h3 className="text-lg font-bold text-blue-500">{title}</h3>
          <Disclosure>
            {({ open }) => (
              <div className="grid gap-2 py-5 px-2.5 rounded-md shadow-md">
                <Disclosure.Button className="w-full flex justify-between items-center">
                  <h4 className="font-semibold">Extra Information</h4>
                  <IoIosArrowDown
                    size={20}
                    className={`${open && "transform rotate-180"}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 text-justify break-all">
                  {description}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
          <div className="font-semibold text-orange-500">
            Category: <span className="font-medium text-black">{category}</span>
          </div>
          <div className="grid gap-3">
            <span className="w-fit text-sm font-medium text-white bg-green-500 p-1 px-2 rounded-sm">
              {price}$
            </span>
            <Link to="/products">
              <button className="w-full font-semibold text-white bg-blue-500 py-1.5 rounded">
                Back to Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;
