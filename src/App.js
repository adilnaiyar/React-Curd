import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home.components';
import About from './components/Pages/About_us.components';
import Contact from './components/Pages/Contact.components';
import './App.css';
import Navbar from './components/Layout/Navbar.components';
import NotFound from './components/Pages/NotFound.components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
