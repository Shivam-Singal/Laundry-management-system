import { Link } from "react-router-dom";

import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No orders found!</p>
      {/* <Link className="btn" to="/new-order">
        Create an Order
      </Link> */}
    </div>
  );
};

export default NoQuotesFound;
