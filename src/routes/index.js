import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import Error404 from "../pages/Error404/Error404";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route component={Error404} />
    </Switch>
  );
};

export default Routes;
