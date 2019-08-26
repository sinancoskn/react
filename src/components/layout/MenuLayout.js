import React, { Component } from 'react';
import { MdExitToApp } from "react-icons/md";
import { FiHome,FiMessageSquare,FiClock,FiCalendar } from "react-icons/fi";
//style dosyalari
import '../../styles/layout.scss';

class MenuLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideMenuActive:true,
      selectMenu:"Anasayfa"
    }
    //bind
    this.pageChange = this.pageChange.bind(this);
  }

  componentDidMount() {
    //sayfa boyutunu kontrol et
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if(window.innerWidth <= 536){
      this.props.changeMainLayout(false);
      this.setState({sideMenuActive:false});
    }
    else{
      this.props.changeMainLayout(true);
      this.setState({sideMenuActive:true});
    }
  }

  //function
  pageChange(param){
    this.setState({selectMenu:param});
  }

  render() {
    if(this.state.sideMenuActive){
      return(
        <div className="side-menu">
          
          <div className="section-short">
            <h1>S</h1>
          </div>

          <div className="section-long">

            <div className="section-item">
              {
                this.state.selectMenu === "Anasayfa" ?
                  <span className="active-menu">Anasayfa</span> :
                  <FiHome className="menu-icon" onClick={() => this.pageChange('Anasayfa')} />
              }
            </div>

            <div className="section-item">
              {
                this.state.selectMenu === "Mesajlarım" ?
                  <span className="active-menu">Mesajlarım</span> :
                  <FiMessageSquare className="menu-icon" onClick={() => this.pageChange('Mesajlarım')} />
              }
            </div>

            <div className="section-item">
              {
                this.state.selectMenu === "Planlarım" ?
                  <span className="active-menu">Planlarım</span> :
                  <FiClock className="menu-icon" onClick={() => this.pageChange('Planlarım')} />
              }
            </div>

            <div className="section-item">
              {
                this.state.selectMenu === "Görevlerim" ?
                  <span className="active-menu">Görevlerim</span> :
                  <FiCalendar className="menu-icon" onClick={() => this.pageChange('Görevlerim')} />
              }
            </div>

          </div>

          <div className="section-short">
            <MdExitToApp className="menu-icon" />
          </div>

        </div>
      );
    }else{
      return(
        <div className="nav-menu">

            <div className="section-item">
              {
                this.state.selectMenu === "Anasayfa" ?
                  <span className="active-menu">Anasayfa</span> :
                  <FiHome className="menu-icon" onClick={() => this.pageChange('Anasayfa')} />
              }
            </div>

            <div className="section-item">
              {
                this.state.selectMenu === "Mesajlarım" ?
                  <span className="active-menu">Mesajlarım</span> :
                  <FiMessageSquare className="menu-icon" onClick={() => this.pageChange('Mesajlarım')} />
              }
            </div>

            <div className="section-item">
              {
                this.state.selectMenu === "Planlarım" ?
                  <span className="active-menu">Planlarım</span> :
                  <FiClock className="menu-icon" onClick={() => this.pageChange('Planlarım')} />
              }
            </div>

            <div className="section-item">
              {
                this.state.selectMenu === "Görevlerim" ?
                  <span className="active-menu">Görevlerim</span> :
                  <FiCalendar className="menu-icon" onClick={() => this.pageChange('Görevlerim')} />
              }
            </div>

            <div className="section-item">
              <MdExitToApp className="menu-icon" />
            </div>
        </div>
      )
    }
  }
}


export default MenuLayout;
