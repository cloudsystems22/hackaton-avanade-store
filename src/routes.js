import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
