import React, {createContext, useState, useEffect} from 'react';
import {auth, firestore} from "../firebase.js";
import {useHistory} from 'react-router-dom';

export const UserContext = createContext({})

const contextUser = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({})
  const data = {
    user,
    setUser
  }
  useEffect(() => {
    const loggedInUser = auth.onAuthStateChanged(user => {
      console.log(user);
      firestore.collection("users").doc(user.uid).get().then(userDoc => {
        setUser(userDoc.data());
        if(user.isAdmin){ 
          history.push("/admin")
        }
        }
      )
    })

    return loggedInUser
  }, [])

  return (
    <UserContext.Provider value={data}>
      {props.children}
    </UserContext.Provider>
  )
}

export default contextUser
