import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Login,
  AboutUs,
  Home,
  Hardware,
  Pricing,
  Products,
  Learn,
  ContactUs,
  SecureCode,
  CodeVerified,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <div className="overflow">
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/hardware" exact component={Hardware} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/products" exact component={Products} />
          <Route path="/learn" exact component={Learn} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/securecode" exact component={SecureCode} />
          <Route path="/codeverified" exact component={CodeVerified} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
