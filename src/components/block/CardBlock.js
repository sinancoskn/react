import React, { Component } from 'react';
import { FiCheck } from "react-icons/fi";
//style dosyalari
import '../../styles/block.scss';

class CardBlock extends Component {
  render() {
      return(
        <div className="process-container" style={{backgroundColor:"#F5F6F8",marginTop:"10px"}}> 
            <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                
                <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <h5 style={{fontSize:'16px',fontWeight:600}}>Goals achived</h5>
                </div>

                <div style={{flex:1,display:"flex"}}>
                    <div style={{flex:0.3,display:"flex",justifyContent:"center",alignItems:"center"}}><FiCheck style={{color:"#FF5C01"}} /></div>
                    <div style={{flex:1,display:"flex",alignItems:"center"}}><span style={{fontSize:"14px",color:"gray"}}>Market share</span></div>
                </div>

                <div style={{flex:1,display:"flex",marginTop:'5px'}}>
                    <div style={{flex:0.3,display:"flex",justifyContent:"center",alignItems:"center"}}><FiCheck style={{color:"#FF5C01"}} /></div>
                    <div style={{flex:1,display:"flex",alignItems:"center"}}><span style={{fontSize:"14px",color:"gray"}}>Customer service</span></div>
                </div>

                <div style={{flex:1,display:"flex",marginTop:'5px'}}>
                    <div style={{flex:0.3,display:"flex",justifyContent:"center",alignItems:"center"}}><FiCheck style={{color:"#FF5C01"}} /></div>
                    <div style={{flex:1,display:"flex",alignItems:"center"}}><span style={{fontSize:"14px",color:"gray"}}>Increase efficiency</span></div>
                </div>

            </div>
            <div style={{flex:0.1}}>
                <img src={require('../../assets/img/left.png')} className="proccess-image"/>
            </div>
        </div>
      );
  }
}



export default CardBlock;
