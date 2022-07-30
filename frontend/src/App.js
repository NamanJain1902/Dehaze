import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./Components/home";
import about from "./Components/about";
import results from "./Components/results";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/nav";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/results" component={results} /> 
      </Switch>
    </Router>
  );
}

export default App;
