import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Paintings from "./components/Paintings/Paintings";
import Sculptures from "./components/sculptures/Sculptures";
import Footer from "./components/Footer";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Paintings />
      <Sculptures />
    </div>
  );
}

export default App;
