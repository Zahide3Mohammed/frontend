import { Link } from "react-router-dom";
import "./header-style.css";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import LanguageSelect from "./LanguageSelect";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
          <span className="Logo">
              <Link to="/"><img src="images/logo.png" alt="" /> </Link></span>
        {/* Actions */}
        <div className="header__actions">
          <LanguageSelect></LanguageSelect>
          <Link to="/sign-in" className="btn--ghost">{t.Login}</Link>
          <Link to="/sign-up" className="btn--primary">{t.signup}</Link>
        </div>
      </div>
    </header>
  );
}
