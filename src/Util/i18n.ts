import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import httpBackend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import en_US from "~/Assets/Locales/en-US/translation.json";
import ja_JP from "~/Assets/Locales/ja-JP/translation.json";

export const defaultNS = "translation";
export const resources = {
	en: { [defaultNS]: en_US },
	ja: { [defaultNS]: ja_JP }
} as const;

i18n
	.use(httpBackend)
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		ns: defaultNS,
		defaultNS,
		resources,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
