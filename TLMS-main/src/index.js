import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Auth0ProviderWithHistory from "./auth0provider";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
