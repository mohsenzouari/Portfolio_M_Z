import React from 'react';
import "./menu.scss";
import { NavLink } from 'react-router-dom';
import { useLocale } from '../LocaleProvider';
import { FormattedMessage } from 'react-intl';

export default function Menu(props) {
    //toggle la langue fr/en
    const [locale, setLocale] = useLocale();
    const isEnglish = locale === 'en';

    const toggleOpenMenu = () => {
        props.setOpenMenu(!props.openMenu);
      }

  return(
      //ajouter la classe active dynamiquement (si menu ouvert)
    <div className={"menu "+(props.openMenu && "active")}>
        <ul>
            <li onClick={toggleOpenMenu}>
                <NavLink to="about">
                <FormattedMessage id="app.menu.about" />
                </NavLink>
            </li>
            {/* <li onClick={toggleOpenMenu}>
                <NavLink to="portfolio">
                <FormattedMessage id="app.menu.portfolio" />
                </NavLink>
            </li> */}
            <li onClick={toggleOpenMenu}>
                <NavLink to="projects">
                <FormattedMessage id="app.menu.projects" />
                </NavLink>
            </li>
            <li onClick={toggleOpenMenu}>
                <NavLink to="contact">
                <FormattedMessage id="app.menu.contact" />
                </NavLink>
            </li>
        </ul>
    </div>
  ) 
}
