import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Component1 from "./component1";
import Component2 from "./Component2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">Header</a>
        <div class="header-right">
          <a className={window.location.pathname == "/Component1" ? "active" : ""} href="/Component1">Component1</a>
          <a className={window.location.pathname == "/Component2" ? "active" : ""} href="/Component2">Component2</a>
        </div>
      </div>
      <div class="footer">
        <p>Footer</p>
      </div>
      <Router>
        <Switch>
          <Route path="/Component1">
            <Component1 />
          </Route>
          <Route path="/Component2">
            <Component2 />
          </Route>
        </Switch>
      </Router>
      <ToastContainer limit={3}
        autoClose={7000} />
    </div>
  );
}

export default App;
