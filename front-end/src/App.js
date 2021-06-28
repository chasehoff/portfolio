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
import Logo from './images/main_logo.png';
import { IoMdClose } from 'react-icons/io';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import { Link } from 'react-router-dom';

function App() {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <Router>
      <div className="app">
        <Navigation setOpen={setOpen} isOpen={isOpen} />
        <Drawer className="mobile__nav__container" anchor="right" open={isOpen} onClose={() => setOpen(!isOpen)}>
          <div id="mobile__section__one" className="mobile__nav__section">
            <img className="mobile__nav__logo" src={Logo} alt="Company logo" />
            <IoMdClose onClick={() => setOpen(false)} className="mobile__nav__close" />
          </div>
          <div className="mobile__nav__section">
            <Link to="/" className="mobile__nav__link" onClick={() => setOpen(!isOpen)}>
              <HomeIcon className="mobile__nav__link__icon"/>
              <p className="mobile__nav__link__text">Home</p>
            </Link>
            <Link to="/projects" className="mobile__nav__link" onClick={() => setOpen(!isOpen)}>
              <ContactMailIcon className="mobile__nav__link__icon"/>
              <p className="mobile__nav__link__text">Projects</p>
            </Link>
            <Link to="/contact" className="mobile__nav__link" onClick={() => setOpen(!isOpen)}>
              <ViewCarouselIcon className="mobile__nav__link__icon"/>
              <p className="mobile__nav__link__text">Contact</p>
            </Link>
          </div>
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
