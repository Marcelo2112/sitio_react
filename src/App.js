import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> {/* Home*/}
          <Login/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>


    </Router>
   
  );
}

export default App;
