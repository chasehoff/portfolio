import './App.css';
import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home/Home';
import Contact from './views/contact/Contact';
import Projects from './views/projects/Projects';
import Hero from './components/hero/Hero';
import Kanban from './views/projects/kanban/Kanban';
import TimeGuru from './views/projects/timeguru/TimeGuru';
import FoamSolutions from './views/projects/foamsolutions/FoamSolutions';
import NorthernContracting from './views/projects/northerncontracting/NorthernContracting';
import Drawer from '@material-ui/core/Drawer';

function App() {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <Router>
      <div className="app">
        <Navigation setOpen={setOpen} isOpen={isOpen} />
        <Drawer anchor="right" open={isOpen} onClose={() => setOpen(!isOpen)}>
            <p>Test</p>
          </Drawer>
        <Hero />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/kanban" component={Kanban} />
          <Route path="/projects/time-guru" component={TimeGuru} />
          <Route path="/projects/foam-solutions" component={FoamSolutions} />
          <Route path="/projects/northern-contracting" component={NorthernContracting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
