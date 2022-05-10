import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="centered">
      {/* <p>Page not found!</p> */}
      {/* <div> */}
      {/* <br /> */}
      {/* <button className="btn--flat"> */}
      {/* <Link to="/orders">Go Home</Link> */}
      {/* </button> */}
      {/* </div> */}
      <div className="noquote">
        <p>What Are U Looking For Son!</p>
        <Link className="btn" to="/login">
          LOGIN?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
