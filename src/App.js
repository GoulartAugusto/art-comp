import React from "react";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import Paintings from "./components/Paintings/Paintings";
import Sculptures from "./components/sculptures/Sculptures";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Carousel from "./components/carousel/Carousel";
import Magritte from "./components/categories/magritte/Magritte";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/magritte' component={Magritte} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
