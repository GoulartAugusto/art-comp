import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Paintings from "./components/Paintings/Paintings";
import Sculptures from "./components/sculptures/Sculptures";
import Footer from "./components/Footer";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Carousel />
      <Sculptures />
    </div>
  );
}

export default App;
