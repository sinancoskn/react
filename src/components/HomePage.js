import React, { Component } from 'react';
import { connect } from 'react-redux';
//ortak componentler
//import {Menu} from './ortak';
//style dosyalari
import '../styles/home.scss';
//layout
import { MenuLayout,SearchLayout } from './layout';
//block
import { LearnBlock,CalenderBlock,ProcessBlock, CardBlock } from './block';

//charcter link
//https://www.freepik.com/free-vector/people-doing-different-actions_3516365.htm#page=1&query=character&position=12

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
        containerFull:true,
    }
  }
  layoutChange(param){
    this.setState({containerFull:param});
  }
  render() {
      return(
        <div className="container-full">

          <MenuLayout changeMainLayout={(res) => this.layoutChange(res)} />
            
          <div className={this.state.containerFull ? 'container-side' : 'container-nav'}>
            <SearchLayout />    
            
            <div className="row">
              
              <div className="col-12 col-sm-8">
                <LearnBlock />
                <CalenderBlock />

                <div className="row" style={{marginTop:"40px"}}>
                  
                  <div className="col-12 col-sm-6" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <CardBlock />
                  </div>
                  <div className="col-12 col-sm-6" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <ProcessBlock />
                  </div>

                </div>

              </div>

              <div className="col-12 col-sm-4" style={{display:"flex",flexDirection:"column"}}>
                <div className="right-top">
                  <img src={require('../assets/img/right.jpg')} className="right-image"/>
                </div>
                <div className="right-bottom">
                  
                  <div className="right-bottom-body">
                    <div className="right-bottom-title">
                      <h5>Welcome to SMART</h5>
                    </div>
                    <div className="right-bottom-content">
                      <span>Goal setting and goal menagement sowftware for high achievers</span>
                      <button>
                        Get Started
                      </button>
                    </div>
                  </div>
                
                </div>
              </div>

            </div>  
          
          </div>
        
        </div>
      );
  }
}


export default connect(
  state => state,
  null,
)(HomePage);
