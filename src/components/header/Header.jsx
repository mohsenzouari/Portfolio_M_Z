import React from 'react';
import "./header.scss";
import {PhoneAndroid, MailOutline, LinkedIn, Person, Mail, GitHub} from "@material-ui/icons";
import Link from '@material-ui/core/Link';
import Toggle from '../toggle/Toggle';
import { Icon } from "@iconify/react";



export default function Header(props) {

  const toggleOpenMenu = () => {
    props.setOpenMenu(!props.openMenu);
  }

  return (
  
  <div className={"header " + (props.openMenu && "active")}>
      <div className="wrapper">
          <div className="left">
              <a  href='/' className='logo'>Zouari.M.</a>
              <div className="itemContainer">
                <PhoneAndroid className="icon"/>
                <span> (+216) 20 169 630</span>
              </div>
              <div className="itemContainer">
                <MailOutline className="icon"/>
                <span>mohsennzouari@gmail.com</span>
              </div>
              <div className="itemContainer">
              <Link className="itemlink" href='https://www.linkedin.com/in/mohsen-zouari' >
                <LinkedIn className="icon"/>
                <span>mohsen-zouari</span>
              </Link>
              </div>
              
          </div>



          <div className="right">
          <div className="itemContainer">
              <Toggle />               
          </div>
         <div className="burgerMenu" onClick={toggleOpenMenu}>
             <span className='line1'></span>
             <span className='line2'></span>
             <span className='line3'></span>
         </div>
          </div>
      </div>
  </div>
  
  );
}
