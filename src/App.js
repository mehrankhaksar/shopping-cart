import { Provider } from "react-redux";

import store from "./redux/store";

import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CartPage from "./components/templates/CartPage";
import DetailsPage from "./components/templates/DetailsPage";
import StorePage from "./components/templates/StorePage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/products/:id" component={DetailsPage} />
          <Route path="/products" component={StorePage} />
          <Redirect to="/products" />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
