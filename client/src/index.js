import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/index.scss";
import Nav from "./Components/Nav.jsx";
// import Home from "./Screens/Home.jsx";
// import Teams from "./Screens/Teams.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Loader.jsx";
import Projects from "./Screens/Projects.jsx";
// import Blogs from "./Screens/Blogs.jsx";
import Events from "./Screens/Events.jsx";
import Conduct from "./Screens/Conduct.jsx";
import "bootstrap/dist/css/bootstrap.css";
// import Teams2021 from "./Screens/Teams2021.jsx";

const Home = lazy(() => import("./Screens/Home.jsx"));
const Teams2020 = lazy(() => import("./Screens/Teams2020.jsx"));
const Teams2021 = lazy(() => import("./Screens/Teams2021.jsx"));
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
              <Route path="/team/2020" exact component={Teams2020} />
              <Route path="/team/2021" exact component={Teams2021} />
              <Route path="/blogs" exact component={Blogs} />
              <Route path="/events" exact component={Events} />
              <Route path="/conduct" exact component={Conduct} />
            </Switch>
          </Suspense>
        </Nav>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
