import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar/Navbar";
import { recipeColo } from "./Styles/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import "@fortawesome/fontawesome-free/css/all.min.css";

const GlobalStyle = createGlobalStyle`
    body{
      font-family: 'Open Sans', sans-serif;
      h1,h2,h3{
        font-family: 'Righteous', cursive;
      }
      margin: 0;

    }
`;
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
