import {configureStore} from "@reduxjs/toolkit";
import datareducer from "../reduxreducer/datareducer";
import cartreducer from "../reduxreducer/cartreducer";


// import { combineReducers } from "@reduxjs/toolkit";
// import persistReducer from "redux-persist/es/persistReducer";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// extension for Asyncstorage /local storage


// code for the Asynstore in store

// const rootreducer=combineReducers({
//     datainfo:datareducer,
//        addcart:cartreducer,
// })

// let presistconfig={
//    key:'root',
//    storage:AsyncStorage,
// };

// let presistedreducer=persistReducer(presistconfig,rootreducer);


// const Store=configureStore({
//     reducer:presistedreducer
// })


// export default Store;



const Store=configureStore({
    reducer:{
    datainfo:datareducer,
    addcart:cartreducer,
    }
})

// // Store.subscribe(() => console.log(Store.getState()));

export default Store;