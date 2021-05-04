import Home from "./layouts/Home";
import Films from "./layouts/Films";
import Series from "./layouts/Series";
import Tendances from "./layouts/Tendances";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/series" component={Series} />
        <Route path="/tendances" component={Tendances} />
      </Switch>
    </div>
  );
}

export default App;
