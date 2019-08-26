import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './stores';
import RouterComponent from './Router';

//state config
const initialState = window.initialReduxState;
const store = configureStore( initialState);

ReactDOM.render(
    <Provider store={store}>
            <RouterComponent />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
