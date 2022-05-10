import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import OrderListEmployee from "../components/quotes/OrderListEmployee";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../Hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { getAllNames } from "../lib/api";

const AllQuotes = () => {
  const { sendRequest, status, data, error } = useHttp(getAllNames, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!data || data.length === 0)) {
    return <NoQuotesFound />;
  }

  return <OrderListEmployee orders={data} />;
};
export default AllQuotes;
