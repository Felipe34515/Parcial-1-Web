// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" onChange={changeLanguage}>
        <option onClick={()=> i18n.changeLanguage("en")}>English</option>
        <option onClick={()=> i18n.changeLanguage("es")}>Español</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
