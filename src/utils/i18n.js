import i18n from "i18n-js";
import memoize from "lodash.memoize";
import * as RNLocalize from "react-native-localize";

export const translationGetters = {
    en: () => require("../locales/en"),
    fr: () => require("../locales/fr"),
}

export const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const t = translate;

export const setI18nConfig = (requestedLang=null) => {
    const fallback = {languageTag: "en"};
    const lang = requestedLang ? {languageTag: requestedLang} : RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters));

    const {languageTag} = lang ? lang : fallback;

    translate.cache.clear();
    i18n.translations = {[languageTag]: translationGetters[languageTag]()};
    i18n.locale = languageTag;
}