import { createStore, applyMiddleware } from 'redux';
import {thunk,withExtraArgument} from 'redux-thunk';
import rootStore from '../reducers/index'
import { configureStore } from '@reduxjs/toolkit'

const store =  createStore(rootStore,applyMiddleware(thunk));
export default store;
