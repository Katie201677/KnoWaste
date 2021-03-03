import react from 'react';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

// hi guys

export default App;