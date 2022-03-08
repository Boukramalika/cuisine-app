import React from "react";
import './App.css';
import Nav from "./components/navbar/Nav"
import Home from './components/pages/home/Home';
import Connexion from "./components/pages/connexion/Connexion"
import Footer from "./components/footer/Footer.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
         <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recettes" exact component={Connexion} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
