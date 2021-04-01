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
import mealData from "./assets/data/meal-data.json";
import UserContext from "./context/contextUser.js";
import "./App.css";
import "./assets/styles/styles.scss";
import library from "./assets/data/fa-library";
import mealChoiceArr from "./assets/data/user-meal-choices.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminHome from "./components/Admin/AdminHome";
import { AuthProvider } from "./AuthContext.jsx"
import PrivateRoute from "./PrivateRoute.jsx"
import AdminMealPreview from "./components/Admin/AdminMealInput/AdminMealPreview";

const App = () => {
  // meal choice is an array for storing the users selected main meals

  // get meal choice is a function which adds the selected meals as recipe names
  // getMealChoice function is passed down as props: app -> mealselection -> .. -> DailySelection
  const getMealChoice = (activeMeal) => {
    mealChoiceArr.push(activeMeal);
    console.log(mealChoiceArr);
    return mealChoiceArr;
  };

  // function to clear meal array when edit button selected on meal confirmation page
  // passed as a prop to meal confirmation
  const clearMealChoiceArr = () => (mealChoiceArr.length = 0);
  const userContext = useContext(UserContext)
  return (
    <div>
      <Router>
      <AuthProvider>
        <UserContext>
          <Switch>
          
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/mealselection">
              <MealSelection  mealData={mealData} getMealChoice={getMealChoice}/>
            </PrivateRoute>
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/aboutus" component={AboutUs} />
            <PrivateRoute path="/mealconfirmation">
              <MealConfirmation mealChoiceArr={mealChoiceArr} clearArr={clearMealChoiceArr}/>
            </PrivateRoute>
            <PrivateRoute path="/gamification" component={Gamification} />
            <PrivateRoute path="/environment" component={Environment} />
            
            <PrivateRoute path="/admin" component={AdminHome} />
            <PrivateRoute path="/adminmealinput" component={AdminMealInput} />
            <PrivateRoute path="/adminweeklyplanner" component={AdminWeeklyPlanner} />

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
