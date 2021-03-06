import Home from "./pages/Home";
import Films from "./pages/Films";
import Series from "./pages/Series";
import Tendances from "./pages/Tendances";
import { Switch, Route } from "react-router-dom";
import FilmDetail from "./pages/FilmDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/series" component={Series} />
        <Route path="/tendances" component={Tendances} />
        <Route path="/film-detail" component={FilmDetail} />
      </Switch>
    </div>
  );
}

export default App;
