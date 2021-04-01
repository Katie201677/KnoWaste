

//3. define user using firebase
// 4. define contextuse as const
//5. wrap app using user.provider
//6. pass user to all children

//7. in login and registration call user

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
