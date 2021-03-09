import react from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import MealSelection from './components/MealSelection';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import MealConfirmation from './components/MealConfirmation';
import Environment from './components/Environment';
import Gamification from './components/Gamification';
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
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/forgotpassword'>
          <ForgotPassword />
        </Route>
        <Route path='/mealselection'>
          <MealSelection />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
        <Route path='/mealconfirmation'>
          <MealConfirmation />
        </Route>
        <Route path='/environment'>
          <Environment />
        </Route>
        <Route path='/gamification'>
          <Gamification />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

// hi guys

export default App;