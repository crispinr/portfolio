import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./assets/scss/style.scss";
import home from "./pages/home";
import error from "./pages/404";
import loader from "./components/loader";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/load" component={loader} />
          <Route exact path="/404" component={error} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
