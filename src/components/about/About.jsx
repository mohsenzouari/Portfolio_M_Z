import React from 'react';
import './about.scss';
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../LocaleProvider';
import { FormattedMessage } from 'react-intl';

export default function About() {
  const textRef = useRef();
  const [locale, setLocale] = useLocale();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1700,
      backSpeed:60,
      strings: ["Software Developer"]
    });
  }, []);

  return(
     <div className='about' id="about">
      <Helmet>
        <title>A Propos - </title>
        <meta name="description" content="Page à propos pour en savoir plus sur le profil de Mohsen Zouari"/>
      </Helmet>
        <div className="left">
          <div className="containerImage">
            <img src="assets/my_pic.png" alt="me"/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2><mark> <FormattedMessage id="app.about.greeting" /></mark></h2>
            <br/>
            <h2 className="ah2"> &nbsp;&nbsp;Mohsen Zouari</h2>
            <br/>
            <br/>
            <h3><FormattedMessage id="app.about.title" /> <span ref={textRef}></span></h3>
            {/* <div className="description">
            <FormattedMessage id="app.about.description" />
            </div>       */}
          </div>
            
          <a href="/projects">
            <img src="assets/down.png" alt="down"/>
          </a>
        </div> 
      </div>
  ) 
    
  
}
