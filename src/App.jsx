// src/App.js

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Goodbye from "./pages/Goodbye";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/goodbye" component={Goodbye} />
        <Route component={() => <h1>404: Page Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
