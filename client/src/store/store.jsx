import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { user } from '../store/reducers/userReducer';
import { book } from '../store/reducers/bookReducer';
import { system } from '../store/reducers/systemReducer';


const rootReducer = combineReducers({
    user,
    book,
    system
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))