import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home.components';
import About from './components/Pages/About_us.components';
import Contact from './components/Pages/Contact.components';
import './App.css';
import Navbar from './components/Layout/Navbar.components';
import NotFound from './components/Pages/NotFound.components';
import AddUser from "./components/Users/AddUser.components";
import EditUser from "./components/Users/EditUser.components";
import ViewUser from "./components/Users/ViewUser.components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={ViewUser} />
          <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
