import { Route } from "react-router";
import Welcome from "./pages/welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
    <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
