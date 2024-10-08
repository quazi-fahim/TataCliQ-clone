 
import { applyMiddleware, combineReducers, legacy_createStore}from "redux"
import {thunk}from "redux-thunk";
import{logger} from "redux-logger"
import reducer from "./Reducer";
import { Authreducer } from "./Privateroutrs/reducer";
import { productReducer } from "./fetchdata/reducer";
import cartReducer from "./cart/cartreducer";





export const rootreducer=combineReducers({
  auth:Authreducer,
  sign:reducer,
 product:productReducer,
 cart:cartReducer,

})



 export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(logger,thunk)
 )