import "./toggle.scss";
import { useLocale } from '../LocaleProvider';

const Toggle = () => {

  const [locale, setLocale] = useLocale();

  const handleChangeLocale = () => {
    if (locale === 'en') {
        setLocale('fr');
    }
    else {
        setLocale('en');
    }
}

  return (
    <div className="toggle">
        {locale === 'en' ? 
        (<div className="toggleIcon" onClick={handleChangeLocale}>Fr</div>) :(
        <div className="toggleIcon" onClick={handleChangeLocale}>En</div>
        )}
    </div>
  );
};

export default Toggle;
