import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as RU from '/public/locales/ru/translation.json'
import * as EN from '/public/locales/en/translation.json'
import * as DE from '/public/locales/de/translation.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: RU
            },
            en: {
                translation: EN
            },
            de: {
                translation: DE
            }
        },
        lng: 'ru',
        supportedLngs: ['ru', 'en', 'de'],
        fallbackLng: 'ru',
        debug: false,
        detection: {  
            order: ["cookie", "localStorage"],
            caches: ["cookie", "localStorage"]
        },
        interpolation: {
            escapeValue: false
        }
        

    })
export default i18n