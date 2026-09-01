export declare function fetchTranslations(element: HTMLElement): Promise<any>;
/**
 * Fills `{name}` placeholders in a translated string. Translations put the
 * placeholders where each language needs them, so callers must not build these
 * strings by concatenation.
 */
export declare function interpolate(template: string, values: Record<string, string | number>): string;
/**
 * Synchronous translation lookup by locale string. Normalizes region subtags
 * (e.g. 'en-US' -> 'en') and falls back to English for unsupported locales.
 * Use this when there is no host element to derive the locale from.
 */
export declare function getTranslations(locale: string): any;
