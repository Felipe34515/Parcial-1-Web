import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { useTranslation, i18n, I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from "./translations/es.json"
import global_en from "./translations/en.json"

const root = ReactDOM.createRoot(document.getElementById('root'));

i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources:{
        es: {
            global: global_es
        },
        en: {
            global: global_en
        },
    },
})
root.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
