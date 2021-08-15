import { Route } from "react-router";
import Welcome from "./components/welcome";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/Products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
