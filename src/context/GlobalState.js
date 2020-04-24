import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
var fetchTimeout = require('fetch-timeout');
// Initial state
const initialState = {
 imgs_to_clissify:  [],
 items: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getImgsToClissify() {
    
      const res = await axios.get('/mail/itemInfos');
      console.log(res.data)
      
      dispatch({
        type: 'GET_IMGS_TO_CLASSIFY',
        payload: res.data.data
      });
    return res.data.data
  }

  async function sendimgs(transaction) {
    //console.log(transaction)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    const res = await fetchTimeout('http://localhost:8080/mail/getImgsOfItems', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({transaction}),
     },10000000000)
     .then((response) => response.json())
   .then((responseJson) => {
     console.log(responseJson)
     return responseJson;
   })
     
     .catch((error) => {
       console.error(error);
     });
      
     dispatch({
      type: 'GET_ITEMS',
      payload: res.data
    });
     
   
      console.log("this is the res"+res.data)
        return res;
      
    
    
  }

  return (<GlobalContext.Provider value={{
    imgs_to_clissify: state.imgs_to_clissify,
    error: state.error,
    loading: state.loading,
    items: state.items,
    getImgsToClissify,
    sendimgs,
  }}>
    {children}
  </GlobalContext.Provider>);
}