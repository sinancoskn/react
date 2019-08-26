import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
//sayfalar
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
//socket İşlemleri
//import {socketOn} from './middleware/socketService';
import * as io from 'socket.io-client'
//const socket = io("http://localhost:4000");

class RouterComponent extends React.Component {
  constructor(props){
      super(props);
      //const {dispatch} = this.props;
      //dispatch(socketOn(socket));
      //document.documentElement.setAttribute('data-theme', 'dark');
    }
    render() {
        return (
          <Router>
            <PublicRoute path="/anasayfa" component={HomePage} />
            <PublicRoute path="/giris" component={LoginPage} />
          </Router>
        )
    }
}
export default connect(
  state => state,
  null,
)(RouterComponent);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      localStorage.getItem("authToken") ? (
        <Component { ...props } />
      ) : (
        <Redirect
          to={ {
            pathname: '/giris',
            state: { from: props.location }
          } }
        />
      )
    }
  />
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      localStorage.getItem("authToken") ? (
        <Redirect
          to={ {
            pathname: '/',
            state: { from: props.location }
          } }
        />
      ) : (
        <Component { ...props } />
      )
    }
  />
)
