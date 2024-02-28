import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchAPI } from "../../features/products/productsSlice";

import Loading from "../elements/Loading";
import Card from "../modules/Card";

const StorePage = () => {
  const { loading, error, products } = useSelector(
    (state) => state.productsState
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="w-full h-full absolute top-0 left-0 flex justify-center items-center text-4xl font-bold">
        Whoops, something went wrong.
      </h1>
    );
  }

  return (
    <section>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <li key={item.id}>
            <Card product={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StorePage;
