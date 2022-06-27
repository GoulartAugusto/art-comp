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
import Cavalcanti from "./components/categories/cavalcanti/Cavalcanti";
import Portinari from "./components/categories/portinari/Portinari";
import Tarsila from "./components/categories/tarsila/Tarsila";
import Posters from "./components/categories/posters/Posters";
import Photography from "./components/categories/photography/Photography";
import Modern from "./components/categories/modern/Modern";
import Contemporany from "./components/categories/contemporany/Contemporany";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/magritte' component={Magritte} />
          <Route path='/cavalcanti' component={Cavalcanti} />
          <Route path='/portinari' component={Portinari} />
          <Route path='/tarsila' component={Tarsila} />
          <Route path='/vintage' component={Posters} />
          <Route path='/photography' component={Photography} />
          <Route path='/modern' component={Modern} />
          <Route path='/contemporany' component={Contemporany} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
