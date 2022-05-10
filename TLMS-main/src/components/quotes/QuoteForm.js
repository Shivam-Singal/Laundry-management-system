import { Fragment, useRef } from "react";
// import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import "./QuoteForm.css";

const QuoteForm = (props) => {
  // const [isEntering, setIsEntering] = useState(false);
  // const authorInputRef = useRef();
  const textInputRef = useRef();
  const shirtInputRef = useRef();
  const tshirtInputRef = useRef();
  const jeansInputRef = useRef();
  const trouserInputRef = useRef();
  const sweaterInputRef = useRef();
  const towelInputRef = useRef();
  const bedsheetInputRef = useRef();
  const shortInputRef = useRef();

  var objToday = new Date(),
    // weekday = [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    // ],
    domEnder = (function () {
      var a = objToday;
      if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
      a = parseInt((a + "").charAt(1));
      return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
    })(),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? "0" + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder,
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour =
      objToday.getHours() > 12
        ? objToday.getHours() - 12
        : objToday.getHours() < 10
        ? "0" + objToday.getHours()
        : objToday.getHours(),
    curMinute =
      objToday.getMinutes() < 10
        ? "0" + objToday.getMinutes()
        : objToday.getMinutes(),
    curSeconds =
      objToday.getSeconds() < 10
        ? "0" + objToday.getSeconds()
        : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  var today =
    dayOfMonth +
    " " +
    curMonth +
    ", " +
    curYear +
    " " +
    curHour +
    ":" +
    curMinute +
    "." +
    curSeconds +
    curMeridiem;

  // const d = new Date();
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    const enteredShirt = shirtInputRef.current.value;
    const enteredTshirt = tshirtInputRef.current.value;
    const enteredJeans = jeansInputRef.current.value;
    const enteredTrouser = trouserInputRef.current.value;
    const enteredSweater = sweaterInputRef.current.value;
    const enteredTowel = towelInputRef.current.value;
    const enteredShort = shortInputRef.current.value;
    const enteredBedsheet = bedsheetInputRef.current.value;
    const defaultStatus = "Pending Approval";
    const totalVal =
      +enteredShirt +
      +enteredShort +
      +enteredTshirt +
      +enteredJeans +
      +enteredSweater +
      +enteredTowel +
      +enteredBedsheet;

    console.log(totalVal);

    props.onAddQuote({
      shirt: enteredShirt,
      tshirt: enteredTshirt,
      jeans: enteredJeans,
      trouser: enteredTrouser,
      sweater: enteredSweater,
      towel: enteredTowel,
      short: enteredShort,
      bedsheet: enteredBedsheet,
      date: today,
      request: enteredText,
      total: totalVal,
      status: defaultStatus,
    });
  }
  const formFocusedHandler = () => {
    // console.log("Focus!");
  };
  return (
    <Fragment>
      {/* <Prompt when={isEntering} /> */}
      <div className="centered">
        <div className="quoteform">
          <p>Add Order Details</p>
        </div>
      </div>
      <Card>
        <form
          className={classes.form}
          onFocus={formFocusedHandler}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Shirt</label>
            <input
              type="number"
              min="0"
              max="9"
              id="shirt"
              ref={shirtInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">T-Shirt</label>
            <input
              type="number"
              min="0"
              max="9"
              id="tshirt"
              ref={tshirtInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">Jeans</label>
            <input
              type="number"
              min="0"
              max="9"
              id="jeans"
              ref={jeansInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">Trousers</label>
            <input
              type="number"
              min="0"
              max="9"
              id="trousers"
              ref={trouserInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">Towels</label>
            <input
              type="number"
              min="0"
              max="9"
              id="towels"
              ref={towelInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">Sweaters</label>
            <input
              type="number"
              min="0"
              max="9"
              id="sweater"
              ref={sweaterInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">BedSheets</label>
            <input
              type="number"
              min="0"
              max="9"
              id="bedsheet"
              ref={bedsheetInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="author">Shorts</label>
            <input
              type="number"
              min="0"
              max="9"
              id="shorts"
              ref={shortInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="text">Special Requests</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Create Order</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
