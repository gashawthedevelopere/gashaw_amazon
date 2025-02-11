
import { Router } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
import {useState, useEffect,useContext  } from 'react';
import { Type } from './Utility/action.type';
import { DataContext } from './Components/DataProvider/DataProvider';
import { auth } from './Utility/firebase'
import { Elements } from '@stripe/react-stripe-js';
function App() {
const [{ user }, dispatch] = useContext(DataContext);
useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        console.log(authUser);
        dispatch({
        type: Type.SET_USER,
        user: authUser,
        });
    } else {
        dispatch({ type: Type.SET_USER, user: null });
    }
    });
}, []);

return  <Routing />
    
}


export default App;