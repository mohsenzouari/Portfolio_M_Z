import React from 'react';
import { useState } from "react";
import "./projectDetails.scss";
import { projectData} from "../../data";
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../LocaleProvider';
import {Link, useParams  } from 'react-router-dom';
import {ArrowBackIos} from "@material-ui/icons";

export default function ProjectDetails() {
 
  const [currentSlide, setCurrentSlide] = useState(0);
  
  let params= useParams();

  //toggle la langue fr/en
  const [locale, setLocale] = useLocale();
  const isEnglish = locale === 'en';

  const project =  projectData.filter((d) => d.id === Number(params.projectId));
 
  return (
    <div className="projectsdetails" id="projectsdetails">
      <Helmet>
        <title>Projects - </title>
        <meta name="description" content="Page details des projets"/>
      </Helmet>

       <div className="details">
         
            {project ? ( project.map((d) => (
   
            <div className="container" key={d.id}>
                
                <div className="item">
                    <div className="left">
                        <div className="back">
                        <ArrowBackIos color="primary" fontSize="small" />
                        <Link to="/projects" style={{textDecoration: 'none', color:'#00549A'}}>{isEnglish ? "Back" : "Retour"}</Link>
                        </div>
                        <h1>{isEnglish ? "Project Details" : "Détails du Projet"}</h1>
                        <h2>{isEnglish ? d.titleEn : d.titleFr}</h2>
                        <p>{isEnglish ? d.descriptionEn : d.descriptionFr}</p>
                        <p>Languages : {d.languages}</p>
                    </div>
                  
                    <div className="right">
                        <img src={`${process.env.PUBLIC_URL}/${d.img}`} alt="img" />
                    </div>
                    
                    
                    
                </div>
            </div>
            )) ):(  <div>Not found ! </div>)}
        </div>
       
    </div>
  
  );
}
