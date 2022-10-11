import React from 'react';
import { useEffect, useState } from "react";
import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList";
import {
  webAppPortfolio,
  webSitePortfolio,
  mobilePortfolio,
  descktopPortfolio,
} from "../../data";
import { Modal } from "../modal/Modal";
import { ReactDimmer } from "react-dimmer";
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../LocaleProvider';
import { FormattedMessage } from 'react-intl';


export default function Portfolio() {
  //use state pour changer la categorie
  const [selected, setSelected] = useState("webApp");
  const [data, setData] = useState([]);
  //cet etat controle le model ouvert ou non
  const [isModalOpen, setModal] = useState(false);
  const [locale, setLocale] = useLocale();
  
  //toggle la langue fr/en
  const isEnglish = locale === 'en';

  const list = [
    {
      id: "webApp",
      titleEn: "Web App",
      titleFr: "App Web",
    },
    {
      id: "webSite",
      titleEn: "Web Site",
      titleFr: "Site Web",
    },
    {
      id: "mobile",
      titleEn: "Mobile App",
      titleFr: "App Mobile",
    },
    {
      id: "desktop",
      titleEn: "Desktop App",
      titleFr: "App Bureau",
    },
  ];

  //selon la categorie selectionne charger la variable data avecles donnees de cette categorie
  useEffect(() => {
    switch (selected) {
      case "webApp":
        setData(webAppPortfolio);
        break;
      case "webSite":
        setData(webSitePortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "desktop":
        setData(descktopPortfolio);
        break;
      default:
        setData(webAppPortfolio);
    }
  }, [selected]);

  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  return (
  <div className='portfolio' id="portfolio">
    <Helmet>
    <title>Portfolio - </title>
        <meta name="description" content="Page Porfolio de Mohsen Zouari"/>
    </Helmet>
     <h1><FormattedMessage id="app.portfolio.title" /></h1>
     <ul>
     {list.map((item) => (
       <div key={item.id}>
          <PortfolioList 
            title={isEnglish ? item.titleEn : item.titleFr}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        </div>
        ))}
     </ul>
     <div className="container">
      {data.map((d) => (
            <div key={d.id} className="item" onClick={handleClick}>
                <img
                  src={d.img}
                  alt={d.titleEn}
                />
                <h3>{isEnglish ? d.titleEn : d.titleFr}</h3>
            <div>
             {isEnglish?
             isModalOpen &&  <Modal closeModal={setModal} img={d.img} title={d.titleEn} description={d.descriptionEn} />
            : isModalOpen &&  <Modal closeModal={setModal} img={d.img} title={d.titleFr} description={d.descriptionFr} />
            }
           </div>   
            </div>
           
          ))}
     </div>
     {/*isModalOpen && <Modal closeModal={setModal} />*/}
     <ReactDimmer
                isOpen={isModalOpen}
                exitDimmer={setModal}
                zIndex={100}
                blur={1.5}
              />
      
  </div>
  )
}
