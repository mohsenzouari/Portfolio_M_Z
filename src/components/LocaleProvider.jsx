import { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import EnglishData from "../i18n/en.json";
import FrenchData from "../i18n/fr.json";

/**
 * Objet contenant toutes les traductions de notre site web.
 */
const translations = {
    en: EnglishData,
    fr: FrenchData
}

/**
 * Contexte contenant un accesseur et mutateur de la langue 
 * présentement utilisée dans l'application.
 */
const LocaleContext = createContext()

/**
 * Composant englobant qui contient des contextes pour utiliser et 
 * modifier la langue utilisée dans votre application.
 */
export function LocaleProvider({ children }) {
    // La langue du navigateur est retourné avec un indicatif du pays
    // (ex: en-US, fr-CA). On veut juste la langue, donc on garde 
    // uniquement la première partie.
    let navigatorLanguage = navigator.language.split('-')[0];

    // On va chercher la langue dans le LocalStorage. Ça retourne "null"
    // s'il n'y a rien dans le LocalStorage.
    let localStorageLocale = localStorage.getItem('locale');
    
    let defaultLanguage;
    if (localStorageLocale) {
        // On regarde s'il y a une préférence de langue dans le
        // LocalStorage. Si oui, on la prends.
        defaultLanguage = localStorage.locale;
    }
    else if (translations[navigatorLanguage]) {
        // S'il n'y a rien dans le LocalStorage, on regarde la langue
        // par défaut du navigateur. Si on supporte cette langue, on 
        // l'utilise.
        defaultLanguage = navigatorLanguage;
    }  
    else {
        // Sinon, on utilise la langue par défaut de l'application 
        // (anglais dans ce cas)
        defaultLanguage = 'en';
    }

    // Variable d'état contenant la langue présentement utilisée par
    // l'application
    const [locale, setLocale] = useState(defaultLanguage);

    return <LocaleContext.Provider value={[locale, setLocale]}>
        <IntlProvider locale={locale} messages={translations[locale]}>
            {children}
        </IntlProvider>
    </LocaleContext.Provider>
}

/**
 * Hook permettant d'accéder à la langue courante et de la 
 * modifier au travers de l'application au complet.
 */
export function useLocale() {
    const [locale, setLocale] = useContext(LocaleContext)

    // On crée une fonction "setter" qui va non seulement
    // modifier la langue dans le contexte, mais aussi dans le
    // LocalStorage.
    const setLocaleWithLocalStorage = (locale) => {
        localStorage.setItem('locale', locale);
        setLocale(locale);
    }

    // On retourne la fonction "setter" qui modifie aussi le
    // LocalStorage.
    return [locale, setLocaleWithLocalStorage];
}