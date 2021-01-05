import './App.css';
import Navigation from './components/navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/home/Home';
import Contact from './views/contact/Contact';
import Projects from './views/projects/Projects';
import Hero from './components/hero/Hero';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Hero />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
