import React from 'react';
import './App.scss';
import { Switch, Route } from "react-router-dom";

import About from "./pages/About/About.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Contact from "./pages/Contact/Contact.page";

import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main className="main">
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
    <footer className="footer">
    <div className="footer-item-container">
      <span className="footer-item"><i class="fa fa-envelope"></i></span>
      <span className="footer-item"><i class="fa fa-linkedin"></i></span>
      <span className="footer-item"><i class="fa fa-twitter"></i></span>
      <span className="footer-item"><i class="fa fa-github"></i></span>
    </div>
    <span>© 2020 Nour Balaha</span>
    </footer>
    </div>
  );
}

export default App;
