import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./displays/Home";
import Contacto from "./displays/Contacto";
import Propuestas from "./displays/Propuestas";
import Biografia from "./displays/Biografia";
import LaborSocial from "./displays/LaborSocial";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Biografia" component={Biografia}></Route>
            <Route exact path="/Contacto" component={Contacto}></Route>
            <Route exact path="/Propuestas" component={Propuestas}></Route>
            <Route exact path="/LaborSocial" component={LaborSocial}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
