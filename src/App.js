import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

// Pages
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";

// styles
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container d-flex flex-column">        
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Wrapper>
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Footer />
            </Wrapper>
          </div>
        </div>
      </Router>
      
    )
  }
  
}


export default App;