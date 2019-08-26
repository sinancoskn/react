import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiBell } from "react-icons/fi";
//style dosyalari
import '../../styles/block.scss';

class NotficataionBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
    console.log(this.props.notification);
    this.toggleDropdownClick = this.toggleDropdownClick.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
  }

  toggleDropdownClick() {
    console.log(this.state.show);
    this.setState({
      show: !this.state.show
    });
  }

  //developer modda karışıklık olduğu için bunu ekledim
  toggleDropdownBlur() {
    this.setState({
      show:false
    })
  }

  render() {
      return(
        <div className='dropdown' style={{cursor:"pointer"}}>
          <div tabindex="0" className="notification"
            onClick={this.toggleDropdownClick}
            onBlur={this.toggleDropdownBlur}
          >
            <FiBell style={{fontSize:"25px"}} />
            <span class="badge"><div className="badge-light"></div></span>
          </div>
          <div className={this.state.show ? 'dropdown-menu show notification-body' : 'dropdown-menu notification-body'}>
            <Notifications data={this.props.notification} />
          </div>
        </div>
      );
  }
}

function Notifications(props) {
  var data = props.data !== null ? 
  props.data.map((item,i) => (
    <div>
      <div className="notification-item-title">
          <span>{item.user}</span>
      </div>
      <div className="notification-item-body">
          <span>{item.message}</span>
      </div>
    </div>
  )) : <></>;
  return data;
} 

export default connect(
  state => state.user,
  null,
)(NotficataionBlock);
