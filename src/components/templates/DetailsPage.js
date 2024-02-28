import React from "react";

import { useParams, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Disclosure } from "@headlessui/react";

import { IoIosArrowDown } from "react-icons/io";

import Button from "../elements/Button";

const DetailsPage = () => {
  const { id } = useParams();

  const { products } = useSelector((state) => state.productsState);

  const { image, title, description, category, price } = products[id - 1];

  return (
    <section>
      <div className="max-w-sm grid gap-5 bg-white mx-auto p-5 shadow-lg rounded-lg sm:max-w-full sm:grid-cols-5 sm:items-start sm:gap-10 md:max-w-4xl">
        <img className="sm:col-span-2" src={image} alt={title} />
        <div className="space-y-3 bg-white p-2.5 rounded-md shadow-md sm:col-span-3">
          <h3 className="text-xl font-bold text-blue-500">{title}</h3>
          <Disclosure>
            {({ open }) => (
              <div className="space-y-5 py-5 px-2.5 rounded-md shadow-md">
                <Disclosure.Button className="w-full flex justify-between items-center">
                  <h4 className="font-semibold">Extra Information</h4>
                  <IoIosArrowDown
                    size={20}
                    className={`${
                      open && "transform rotate-180"
                    } transition-transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-sm font-medium text-gray-500 text-justify whitespace-pre-line break-all sm:text-base">
                  {description}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
          <div className="font-semibold text-orange-500">
            Category: <span className="font-medium text-black">{category}</span>
          </div>
          <div>
            <span className="inline-block text-sm font-semibold text-white bg-green-500 mb-5 p-1 px-2 rounded-sm">
              {price}$
            </span>
            <Link to="/products">
              <Button styles="w-full font-semibold text-white bg-blue-500 py-1.5 rounded hover:bg-blue-600">
                Back to Store
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
