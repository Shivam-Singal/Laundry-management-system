import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      {/* <p>{props.request}</p> */}
      <p>{props.date}</p>
      <div>
        <figcaption className="centered">Requests : {props.request}</figcaption>
        <figcaption>Shirts : {props.shirt}</figcaption>
        <figcaption>TShirts : {props.tshirt}</figcaption>
        <figcaption>Jeans : {props.jeans}</figcaption>
        <figcaption>Trousers : {props.trouser}</figcaption>
        <figcaption>Towels : {props.towel}</figcaption>
        <figcaption>Sweaters : {props.sweater}</figcaption>
        <figcaption>BedSheets : {props.bedsheet}</figcaption>
        <figcaption>Shorts : {props.short}</figcaption>
        <figcaption>Status : {props.status}</figcaption>
      </div>
    </figure>
  );
};

export default HighlightedQuote;
