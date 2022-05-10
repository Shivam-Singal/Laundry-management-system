import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./QuoteItem.module.css";
import { ApproveOrder } from "../../lib/api";
import { deleteQuote } from "../../lib/api";
import useHttp from "../../Hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteItem = (props) => {
  const history = useNavigate();
  const { sendRequest, status } = useHttp(ApproveOrder, true);
  console.log("HIIII");
  console.log(props);
  useEffect(() => {
    if (status === "completed") {
      history("/EmployeeOrders");
      window.location.reload(false);
    }
  }, [status, history]);
  const submitHandler = (e) => {
    console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    e.preventDefault();
    sendRequest(props.id);
    //sendRequest(props.id);
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.date}</p>
        </blockquote>
        {console.log(props.date)}
        <figcaption>Total Items : {props.total}</figcaption>
        <figcaption>Status : {props.status}</figcaption>
      </figure>

      <Link className="btn" to={`${props.id}`}>
        View Details
      </Link>

      <form onSubmit={submitHandler}>
        <button className="btn2">Approve Order</button>
      </form>
    </li>
  );
};

export default QuoteItem;
