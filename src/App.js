import { Provider } from "react-redux";
import store from "./app/store";

import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout";
import StorePage from "./components/templates/StorePage";
import DetailsPage from "./components/templates/DetailsPage";
import CartPage from "./components/templates/CartPage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/products" element={<StorePage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
