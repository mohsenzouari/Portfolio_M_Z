import React from 'react';
import { useState } from "react";
import "./projects.scss";
import { projectData} from "../../data";
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../LocaleProvider';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
 
  const [currentSlide, setCurrentSlide] = useState(0);
  let navigate = useNavigate();
  
  //toggle la langue fr/en
  const [locale, setLocale] = useLocale();
  const isEnglish = locale === 'en';
   
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < projectData.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="projects" id="projects">
      <Helmet>
        <title>Projects - </title>
        <meta name="description" content="Page des projets réalisé"/>
      </Helmet>
       {/* <h1><FormattedMessage id="app.projects.title" /></h1> */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projectData.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{isEnglish ? d.titleEn : d.titleFr}</h2>
                  <p>{isEnglish ? d.descriptionEn : d.descriptionFr}</p>
                  <p>Languages : {d.languages}</p>
                 </div>
                 <button onClick={()=> {
                   navigate(`/projects/${d.id}`);
                 }} type="submit">{isEnglish ? "More Details" : "Plus de Détails"}</button>
              </div>
              <div className="right">
                <img
                  src={`${process.env.PUBLIC_URL}/${d.img}`}
                  alt="imgProject"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
