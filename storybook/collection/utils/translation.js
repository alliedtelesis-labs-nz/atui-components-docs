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
 * Fills `{name}` placeholders in a translated string. Translations put the
 * placeholders where each language needs them, so callers must not build these
 * strings by concatenation.
 */
export function interpolate(template, values) {
    return template.replace(/\{(\w+)\}/g, (match, key) => key in values ? String(values[key]) : match);
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
