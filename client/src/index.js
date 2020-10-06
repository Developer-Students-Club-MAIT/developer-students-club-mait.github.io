import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/index.scss";
import Nav from "./Components/Nav.jsx";
//import Home from "./Screens/Home.jsx";
//import Teams from "./Screens/Teams.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Loader.jsx";
//import Blogs from "./Screens/Blogs.jsx";

const Home = lazy(() => import("./Screens/Home.jsx"));
const Teams = lazy(() => import("./Screens/Teams.jsx"));
const Blogs = lazy(() => import("./Screens/Blogs.jsx"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav>
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/teams" exact component={Teams} />
              <Route path="/blogs" exact component={Blogs} />
            </Switch>
          </Suspense>
        </Nav>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
