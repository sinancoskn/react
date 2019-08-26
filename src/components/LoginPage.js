import React, { Component } from 'react';
import { connect } from 'react-redux';
//style dosyalari
//import '../style/home.scss';

class LoginPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
      return(
        <div className="container-fluid">
            <h1>Merhaba Login Page</h1>
        </div>
      );
  }
}

export default connect(
  state => state,
  null,
)(LoginPage);
