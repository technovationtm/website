import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './language/en.json' assert { type: 'json' }
import tk from './language/tk.json' assert { type: 'json' }
import ru from './language/ru.json' assert { type: 'json' }

// Supported languages
const langs = ['en', 'tk', 'ru']

const translations = {
    en: {
        translation: en
    },
    tk: {
        translation: tk
    },
    ru: {
        translation: ru
    }
}

const keys = Object.keys(en)

i18next.use(LanguageDetector).init({
    fallbackLng: 'en',
    supportedLngs: langs,
    detection: {
        order: ['querystring', 'navigator', 'htmlTag', 'path'],
        lookupQuerystring: 'lng',
        lookupFromPathIndex: 0
    },
    resources: translations
})

export {
    i18next,
    keys
}