
import {configureStore} from '@reduxjs/toolkit'
import actionReducer from './reducers/actionReducer'
//import {createStore,combineReducers} from 'react'
import  counterReducer  from './reducers/counterReducer'

export default configureStore({
    reducer: {
        counterR:counterReducer,
        actionR: actionReducer,
    }
})