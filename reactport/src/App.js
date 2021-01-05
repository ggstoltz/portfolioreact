import React from 'react';
import Navbar from './components/Navbar';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/projects' component={Projects} />
    </Switch>
    </Router>
      

    </>
  );
}

export default App;
