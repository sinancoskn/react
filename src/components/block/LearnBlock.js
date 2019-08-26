import React, { Component } from 'react';
import { FiTerminal,FiCloud } from "react-icons/fi";
//style dosyalari
import '../../styles/block.scss';

class LearnBlock extends Component {
  render() {
      return(
        <div className="row" style={{paddingLeft:"10px",paddingRight:"10px"}}>
          <div className="col-12" style={{backgroundColor:"#F5F6F8",borderRadius:"20px",height:"auto",minHeight:"200px",paddingLeft:"20px",padding:"20px"}}>
            <div className="row">
              
              <div className="col-12 col-sm-12 col-lg-6">
                <h1 style={{fontSize:"30px",fontWeight:500}}>What is SMART Planing</h1>
                <span style={{color:"gray",fontSize:"14px"}}>Dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırır.</span>
              </div>

              <div className="col-12 col-sm-12 col-lg-6">
                
                <div className="row">
                  <div className="col-12 col-sm-6">
                    
                    <div style={{height:"140px",margin:"5px",width:"20px;",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#FF7045",borderRadius:"10px"}}>
                      <FiCloud style={{fontSize:"30px",color:"#FFFFFF"}} />
                      <h5 style={{color:"#FFFFFF"}}>Cloud</h5>
                    </div>
                  
                  </div>
                  <div className="col-12 col-sm-6">
                    
                    <div style={{height:"140px",margin:"5px",width:"20px;",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#5C6AFF",borderRadius:"10px"}}>
                      <FiTerminal style={{fontSize:"30px",color:"#FFFFFF"}} />
                      <h5 style={{color:"#FFFFFF"}}>Online</h5>
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

export default LearnBlock;
