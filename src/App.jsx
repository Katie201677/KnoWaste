import React,{useContext} from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import MealSelection from "./components/MealSelection";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
import MealConfirmation from "./components/MealConfirmation";
import Environment from "./components/Environment";
import Gamification from "./components/Gamification";
import AdminMealInput from "./components/Admin/AdminMealInput";
import AdminWeeklyPlanner from "./components/Admin/AdminWeeklyPlanner";
import AdminRecentOrders from "./components/Admin/AdminRecentOrders";
import mealData from "./assets/data/meal-data.json";
import UserContext from "./context/contextUser.js";
import "./App.css";
import "./assets/styles/styles.scss";
import library from "./assets/data/fa-library";
import mealChoiceArr from "./assets/data/user-meal-choices.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminHome from "./components/Admin/AdminHome";
import { AuthProvider } from "./context/AuthContext.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import AdminMealPreview from "./components/Admin/AdminMealInput/AdminMealPreview";
import RecentOrders from "./components/Admin/AdminRecentOrders";
import SwapForum from "./components/SwapForum/SwapForum";

const App = () => {
  return (
    <div>
      <Router>
      <AuthProvider>
        <UserContext>
          <Switch>
          
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/mealselection">
              <MealSelection  mealData={mealData} />
            </PrivateRoute>
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/aboutus" component={AboutUs} />
            <PrivateRoute path="/mealconfirmation">
              <MealConfirmation mealChoiceArr={mealChoiceArr} />
            </PrivateRoute>
            <PrivateRoute path="/gamification" component={Gamification} />
            <PrivateRoute path="/swapforum" component={SwapForum} />
            <PrivateRoute path="/environment" component={Environment} />
            
            <PrivateRoute path="/admin" component={AdminHome} />
            <PrivateRoute path="/adminmealinput" component={AdminMealInput} />
            <PrivateRoute path="/adminweeklyplanner" component={AdminWeeklyPlanner} />
            <PrivateRoute path="/recentorders" component={RecentOrders} />

            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/register" component={Register}/>
            <Route exac path="/" component={Login} />
          </Switch>
        </UserContext>
        </AuthProvider>
      </Router>
    </div>
  );
};
export const testFunction = () => {
  return "All Good";
};
export default App;
