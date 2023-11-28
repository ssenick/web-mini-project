import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { LANGUAGE_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
// import LanguageDetector from 'i18next-browser-languagedetector'
void i18n
    .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: 'ru',
    debug: __IS_DEV__,
    interpolation: {
        escapeValue: false
    }
});
if (!localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY)) {
    localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, 'ru');
}
export default i18n;
