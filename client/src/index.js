import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/index.scss";
import Nav from "./Components/Nav.jsx";
//import Home from "./Screens/Home.jsx";
//import Teams from "./Screens/Teams.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Loader.jsx";
import Projects from "./Screens/Projects.jsx";
//import Blogs from "./Screens/Blogs.jsx";
import Events from "./Screens/Events.jsx";
import "bootstrap/dist/css/bootstrap.css";

const Home = lazy(() => import("./Screens/Home.jsx"));
const Teams = lazy(() => import("./Screens/Teams.jsx"));
const Blogs = lazy(() => import("./Screens/Blogs.jsx"));

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Nav>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/teams" exact component={Teams} />
              <Route path="/blogs" exact component={Blogs} />
              <Route path="/events" exact component={Events} />
            </Switch>
          </Suspense>
        </Nav>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
