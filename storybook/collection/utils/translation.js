import en from "../translation/en.json";
import ja from "../translation/ja.json";
const bundledTranslations = { en, ja };
function getLocale(element) {
    const closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
export async function fetchTranslations(element) {
    const locale = getLocale(element);
    const base = (locale || 'en').split('-')[0];
    return bundledTranslations[base] ?? bundledTranslations['en'];
}
/**
 * Synchronous translation lookup by locale string. Normalizes region subtags
 * (e.g. 'en-US' -> 'en') and falls back to English for unsupported locales.
 * Use this when there is no host element to derive the locale from.
 */
export function getTranslations(locale) {
    const base = (locale || 'en').split('-')[0];
    return bundledTranslations[base] ?? bundledTranslations['en'];
}
