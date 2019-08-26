import React, { Component } from 'react';
import { connect } from 'react-redux';
//block
import {NotificationBlock} from '../block';
//style dosyalari
//import '../style/home.scss';

class SearchLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchActive:false
    }
    this.setActive = this.setActive.bind(this);
  }

  setActive(){
    this.setState({searchActive:!this.state.searchActive});
  }



  render() {
      return(
        <div className="row" style={{marginTop:"20px",marginBottom:"30px"}}>
            
            <div className={this.state.searchActive === true ? 'col-12 col-sm-8 search-container' : 'col-12 col-sm-4 search-container'}>
                <input className="search-input" placeholder="Arama" type="text" onBlur={this.setActive} onFocus={this.setActive}></input>
            </div>
            
            <div className={this.state.searchActive === true ? 'col-12 col-sm-4' : 'col-12 col-sm-8'}>
              <div className="row search-right">
                <div className="col-6 search-right-item">
                  <NotificationBlock />
                </div>
                <div className="col-6 search-right-item" style={{justifyContent:'flex-start'}}>
                  <img src={require('../../assets/img/man.png')} className="profile-image"/>
                  <span className="profile-name">Sinan COŞKUN</span>
                </div>
              </div>
            </div>
        
        </div>
      );
  }
}

export default SearchLayout;
