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
