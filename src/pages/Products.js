import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Welcome;
