import { Router, Route, Switch, useHistory } from "react-router-dom";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import "./App.css";

export default function App() {
  const history = useHistory();

  return (
    <>
      <div className="buttons">
        <button className="button" onClick={() => history.push("/")}>
          1
        </button>
        <button className="button" onClick={() => history.push("/2")}>
          2
        </button>
        <button className="button" onClick={() => history.push("/3")}>
          3
        </button>
      </div>
      <main className="main">
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Slider1 />
            </Route>
            <Route exact path="/2">
              <Slider2 />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}
