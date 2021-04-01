import React from 'react'
import { Route, Redirect, useHistory } from "react-router-dom"
import {useAuth} from "./AuthContext.jsx"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();
    const history =  useHistory();

    if(!currentUser) {
      history.push("");
      
    }

  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} /> 
      }}
    ></Route>
  )
}

export default PrivateRoute
