export declare function fetchTranslations(element: HTMLElement): Promise<any>;
/**
 * Synchronous translation lookup by locale string. Normalizes region subtags
 * (e.g. 'en-US' -> 'en') and falls back to English for unsupported locales.
 * Use this when there is no host element to derive the locale from.
 */
export declare function getTranslations(locale: string): any;
