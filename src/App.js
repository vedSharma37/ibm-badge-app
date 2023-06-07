import React from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
