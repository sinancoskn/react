import React, { Component } from 'react';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
//style dosyalari
import '../../styles/block.scss';

class CalenderBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
        value:"hafta",
        calenderColor:{
            hafta:{border:"1px solid #FF7045",color:"#FF7045"},
            ay:{border:"1px solid #5C6AFF",color:"#5C6AFF"},
        },
        hafta:{
            select:1,
            items:[{name:"Pz",number:5},{name:"Sl",number:6},{name:"Çr",number:7},{name:"Pr",number:8},{name:"Cm",number:9},{name:"Cmt",number:10},{name:"Pzr",number:11}]
        },
        ay:{
            select:null,
            items:[{name:"Ocak",number:1},{name:"Şubat",number:2},{name:"Mart",number:3},{name:"Nisan",number:4},{name:"Mayıs",number:5},{name:"Haziran",number:6},{name:"Temmuz",number:7},{name:"Ağustos",number:8},{name:"Eylül",number:9},{name:"Ekim",number:10},{name:"Kasım",number:11},{name:"Aralık",number:12}]
        },
    }
    this.calenderChange = this.calenderChange.bind(this); 
    this.changeList = this.changeList.bind(this);
    this.changeListIndex = this.changeListIndex.bind(this);
  }

  calenderChange(event){
    this.setState({value:event.target.value});
  }

  changeList(param){
    if(this.state[this.state.value].select === 1 && param === -1){
        return 0;
    }else{
        if(this.state[this.state.value].select === this.state[this.state.value].items.length && param === 1){
            return 0;
        }else{
            var data = this.state[this.state.value];
            data.select = data.select + param;
            this.setState({[this.state.value]:data});
        }
    }
  }

  changeListIndex(param){
    var data = this.state[this.state.value];
    data.select = param + 1
    this.setState({[this.state.value]:data});
  }
  
  render() {
      var list = this.state[this.state.value].items.map((item,i) => {
        var selectStyle = i + 1 === this.state[this.state.value].select ? {color:this.state.value === 'hafta' ? '#FF7045':'#5C6AFF' ,fontSize:"16px"} : {};
        return(
            <div className="calender-left-item" onClick={() => {this.changeListIndex(i)}}>
                <span style={selectStyle}>{item.name}</span>
                <span style={selectStyle}>{item.number}</span>
            </div>
        )
    })
      return(
        <div className="row" style={{marginTop:"30px",paddingLeft:"10px",paddingRight:"10px"}}>
          
          <div className="col-12">
              <div className="row">
                <div className="col-6 d-flex justify-content-start">
                    <span style={{marginRight:"15px",fontWeight:500}}>5 - 11 Ağustos</span>
                    <div tabindex="0" onClick={() => {this.changeList(-1)}} className="calender-change-button previous-button"><FiChevronLeft style={{color:"#FFFFFF"}} /></div>
                    <div tabindex="0" onClick={() => {this.changeList(1)}} className="calender-change-button next-button"><FiChevronRight style={{color:"#FFFFFF"}} /></div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <select className="calender-date" value={this.state.value} onChange={this.calenderChange}>
                      <option className="calender-date-item" value="hafta">HAFTA</option>
                      <option className="calender-date-item" value="ay">AY</option>
                    </select>
                </div>
              </div>
          </div>

          <div className="col-12">
            <div className="row calender-list" style={{marginTop:"9px"}}>
                <div className="col-9 calender-left">
                    {list}
                </div>
                <div className="col-3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div>
                        <div tabindex="0" className="calender-button" style={this.state.calenderColor[this.state.value]} value={this.state.value} onChange={this.calenderChange}>Görev</div>
                    </div>
                </div>
            </div>
          </div>
        
        </div>
      );
  }
}



export default CalenderBlock;
