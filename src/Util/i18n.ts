import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import httpBackend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import en_US from "../../public/locales/en-US/translation.json";
import ja_JP from "../../public/locales/ja-JP/translation.json";

export const defaultNS = "translation";
export const resources = {
	en: {
		translation: en_US
	},
	ja: {
		translation: ja_JP
	}
} as const;

i18n
	.use(httpBackend)
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		ns: ["translation"],
		defaultNS,
		resources,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
