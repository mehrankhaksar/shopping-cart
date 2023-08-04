import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchAPI } from "../../redux/products/productsActions";

import Loading from "../elements/Loading";
import Card from "../modules/Card";

function StorePage() {
  const { loading, products } = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full h-full absolute top-0 left-0 grid justify-items-center content-center">
        <Loading />
      </div>
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
}

export default StorePage;
