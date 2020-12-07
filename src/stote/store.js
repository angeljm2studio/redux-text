import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


import {authReducers} from '../reducers/authReducers'
import { uiReducers } from '../reducers/uiReducers';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({
    auth: authReducers,
    ui: uiReducers
  
})



export const store = createStore(
reducer,
composeEnhancers(
    applyMiddleware(thunk)
)
)