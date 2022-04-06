import React, { useState, useEffect } from "react";
import Preloader from "../src/Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Games from "./Components/Games/Games";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume/Resume";
import NotFound404 from "./Components/Error/NotFound404"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./Components/ScrollToTop";

function App()
{
  const [load, upadateLoad] = useState(true);

  useEffect(() =>
  {
    const timer = setTimeout(() =>
    {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
