import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Reports from "./components/pages/Reports";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
