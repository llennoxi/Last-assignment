import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    EN: {
        translation: {
            Finnish: "Finnish",
            English: "English",
            home: "Home",
            Increment: "Increment",
            Decrement: "Decrement",
            Save: "Save",
            "note-editor": "note-editor",
            "create-note": "create-note",
            "mynotes": "mynotes",
            loading: "Loading",
            dev: "dev",
            "trigger-loading": "trigger-loading",
            sensor: "sensor",
            settings: "settings",
            "Start loading": "Start loading"
        }
    },
    FI: {
        translation: {
            Finnish: "Suomi",
            English: "Englanti",
            home: "Koti",
            Increment: "Lisää",
            Decrement: "Vähennä",
            Save: "Tallenna",
            "note-editor": "Muokkaus",
            "create-note": "Tee Muistiinpano",
            "mynotes": "Muistiinpanot",
            loading: "Lataus",
            dev: "Kehittäjä",
            "trigger-loading": "Aloita Lataus",
            sensor: "Sensori",
            settings: "Asetukset",
            "Start loading": "Aloita Lataus"


        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: "EN",
        interpolation: {
            escapeValue: false
        }
    });
