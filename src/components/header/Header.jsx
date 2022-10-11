import React from 'react';
import "./header.scss";
import {PhoneAndroid, MailOutline, LinkedIn} from "@material-ui/icons";
import Link from '@material-ui/core/Link';
import Toggle from '../toggle/Toggle';


export default function Header(props) {

  const toggleOpenMenu = () => {
    props.setOpenMenu(!props.openMenu);
  }

  return (
  
  <div className={"header " + (props.openMenu && "active")}>
      <div className="wrapper">
          <div className="left">
              <a  href='/' className='logo'>Tebourski.M.</a>
              <div className="itemContainer">
                <PhoneAndroid className="icon"/>
                <span> +1 (613) 600 5705</span>
              </div>
              <div className="itemContainer">
                <MailOutline className="icon"/>
                <span>mouna.tebourski.pro@gmail.com</span>
              </div>
              <div className="itemContainer">
              <Link className="itemlink" href='https://www.linkedin.com/in/mouna-tebourski/' >
                <LinkedIn className="icon"/>
                <span>mouna-tebourski</span>
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
