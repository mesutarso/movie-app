import Home from "./layouts/Home";
import Films from "./layouts/Films";
import Series from "./layouts/Series";
import Tendances from "./layouts/Tendances";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/series" component={Series} />
        <Route path="/tendances" component={Tendances} />
      </Switch>
    </div>
  );
}

export default App;
