import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { user } from './reducers/userReducer';
import { book } from './reducers/bookReducer';
import { author } from './reducers/authorReducer';
import { task } from './reducers/taskReducer';
import { fb } from './reducers/fbReducer';
import { system } from './reducers/systemReducer';


const rootReducer = combineReducers({
    user,
    book,
	author,
	task,
	fb,
    system
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))