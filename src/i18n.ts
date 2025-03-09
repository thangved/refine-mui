import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import vi from "./locales/vi/common.json";

i18n.use(initReactI18next).init({
  lng: "vi",
  resources: {
    vi: {
      translation: vi,
    },
    en: {
      translation: en,
    },
  },
  supportedLngs: ["vi"],
  fallbackLng: ["vi"],
});

export default i18n;
