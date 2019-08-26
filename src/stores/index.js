import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';
import userReducer from '../reducers/userReducer';

export default function configureStore(initialState){
    const reducers = {
        root:rootReducer,
        user:userReducer
    };
    const middleware = [
        thunk,
    ];

    const anaReducer = combineReducers({
        ...reducers,
        routing:routerReducer
    });

    return createStore(
        anaReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    )
}