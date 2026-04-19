import en from "../translation/en.json";
import ja from "../translation/ja.json";
const bundledTranslations = { en, ja };
function getLocale(element) {
    const closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
export async function fetchTranslations(element) {
    const locale = getLocale(element);
    return bundledTranslations[locale];
}
