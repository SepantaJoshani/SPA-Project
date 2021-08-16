import { Route } from "react-router";
import Welcome from "./pages/welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import { Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <MainHeader />
     <Switch>
       <Route path="/" exact>
         <Redirect to="/welcome" />
       </Route>
     <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productId">
    <ProductDetail />
      </Route>
     </Switch>
    </div>
  );
}

export default App;
