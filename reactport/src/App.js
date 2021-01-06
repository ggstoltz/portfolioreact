import React from 'react';
import Navbar from './components/Navbar';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Products from './components/pages/Products';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/products' component={Products} />
    </Switch>
    </Router>
      

    </>
  );
}

export default App;
