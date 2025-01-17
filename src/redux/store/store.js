// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; 
// import counterReducer from '../reducers/Counterslice'; 

//fn ely ht3del fl store called configureStore fn
const store = configureStore({
  reducer: rootReducer,
  // reducer:{counter:counterReducer}
});

export default store;
