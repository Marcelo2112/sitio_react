import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Deliveries from './pages/Deliveries';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/deliveries" component={Deliveries} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
   
  );
}

export default App;
