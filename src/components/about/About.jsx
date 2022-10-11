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
      strings: ["React JS","TypeScript","Asp.Net Core MVC"]
    });
  }, []);

  return(
     <div className='about' id="about">
      <Helmet>
        <title>A Propos - Mouna Tebourski</title>
        <meta name="description" content="Page à propos pour en savoir plus sur le profil de Mouna Tebourski"/>
      </Helmet>
        <div className="left">
          <div className="containerImage">
            <img src="assets/mounaphoto.jpg" alt="me"/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2><FormattedMessage id="app.about.greeting" /></h2>
            <h1>Mouna Tebourski</h1>
            <h3><FormattedMessage id="app.about.title" /> <span ref={textRef}></span></h3>
            <div className="description">
            <FormattedMessage id="app.about.description" />
            </div>      
          </div>
            
          <a href="/portfolio">
            <img src="assets/down.png" alt="down"/>
          </a>
        </div> 
      </div>
  ) 
    
  
}
