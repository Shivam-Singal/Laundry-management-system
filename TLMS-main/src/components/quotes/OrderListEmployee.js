import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OrderItemEmployee from "./OrderItemEmployee";
import classes from "./QuoteList.module.css";
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  const history = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.orders, isSortingAscending);
  const changeSortingHandler = () => {
    history("?sort=" + (isSortingAscending ? "desc" : "asc"));
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          {isSortingAscending ? "Recent Orders First" : "Earliest Orders First"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <OrderItemEmployee
            key={quote.id}
            id={quote.id}
            date={quote.date}
            status={quote.status}
            total={quote.total}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
