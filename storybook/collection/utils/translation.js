import en from "../translation/en.json";
import ja from "../translation/ja.json";
const bundledTranslations = { en, ja };
function getLocale(element) {
    const closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
export async function fetchTranslations(element) {
    const locale = getLocale(element);
    // Attempt to fetch from the host app otherwise fallback to bundled translations
    try {
        const response = await fetch(`/translation/${locale}.json`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    }
    catch (e) {
        const translation = bundledTranslations[locale];
        if (!translation) {
            console.warn(`Translation for locale "${locale}" not found. Falling back to English.`);
            return bundledTranslations['en'];
        }
        return translation;
    }
}
