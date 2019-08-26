import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiBell } from "react-icons/fi";
//style dosyalari
import '../../styles/block.scss';

class ProcessBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
        value:0,
        select:'arcihved',
        color:'black',
        data:{
            arcihved:{value:33.7,color:'#FBD15E'},
            active:{value:87.2,color:"#FF5C00"}
        }
    }
    this.proggressSelect = this.proggressSelect.bind(this);
  }

  componentDidMount(){
    this.proggressSelect('arcihved');
  }

  proggressSelect(param){
    //data islemleri
    this.setState({
        value:this.state.data[param].value,
        color:this.state.data[param].color,
        select:param
    })
  }

  render() {
      return(
        <div className="process-container" style={{marginTop:"10px"}}> 
            <div style={{flex:0.1}}>
                <img src={require('../../assets/img/proccess.png')} className="proccess-image"/>
            </div>
            <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                
                <span style={{fontSize:'15px',color:"#FFFFFF"}}>SMART rogress</span>
                <h6 style={{color:"#FFFFFF",marginTop:"5px"}}>{this.state.value}%</h6>
                <ProgressBar value={this.state.value} color={this.state.color} />
                
                <div style={{marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div onClick={() => this.proggressSelect('arcihved')} style={{flex:1,display:"flex",cursor:"pointer",alignItems:"center"}}>
                        <span style={{fontSize:'14px',color:this.state.select === 'arcihved' ? '#FFFFFF' : 'gray'}}>Arcihved</span>
                    </div>
                    <div onClick={() => this.proggressSelect('active')} style={{flex:1,display:"flex",cursor:"pointer",alignItems:"center"}}>
                        <span style={{fontSize:'14px',color:this.state.select === 'active' ? '#FFFFFF' : 'gray'}}>Active</span>
                    </div>
                </div>
            
            </div>
        </div>
      );
  }
}

function ProgressBar(props) {
    
    return(
        <div className='progress' style={{height:"6px",backgroundColor:"#38393E"}}>
            <div className='progress-bar'
                role='progressbar'
                aria-valuenow='70'
                aria-valuemin='0'
                aria-valuemax='100'
                style={{width:props.value +'%',backgroundColor:props.color}}>
            </div>
        </div>
    )
} 



export default ProcessBlock;
