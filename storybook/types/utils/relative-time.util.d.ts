/**
 * Converts a timestamp into a localized relative-time phrase using the native
 * `Intl.RelativeTimeFormat` API — no translation bundles required. Past
 * timestamps read as "3 minutes ago" / "yesterday"; future timestamps as
 * "in 3 minutes" / "tomorrow". Wording, pluralisation and tense come from the
 * engine's CLDR data for the given locale. Returns '' for empty/invalid input.
 *
 * @param timestamp Date object, ISO 8601 string or epoch milliseconds.
 * @param locale BCP 47 locale (e.g. 'en', 'ja'); defaults to 'en'.
 */
export declare function getRelativeTimeString(timestamp: Date | string | number, locale?: string): string;
/**
 * How long until the relative-time label should next be recomputed, in
 * milliseconds, based on how far the timestamp is from now. Coarser intervals
 * for older/further timestamps avoid pointless re-renders: a "3 years ago"
 * label does not need second-by-second updates. Used by the component's
 * self-scheduling tick. Works for past and future timestamps (uses |diff|).
 */
export declare function getRefreshDelay(timestamp: Date | string | number): number;
/**
 * Standalone helper for converting a timestamp into a human-readable relative
 * time string (e.g. "3 minutes ago"), usable outside of a component context —
 * for example to feed another component's prop:
 * `[subtitle]="atGetRelativeTime(timestamp)"`.
 *
 * Locale defaults to `<html lang>` (falling back to 'en') and can be overridden.
 *
 * @param timestamp Date object, ISO 8601 string or epoch milliseconds.
 * @param locale Optional BCP 47 locale (e.g. 'ja').
 */
export declare function atGetRelativeTime(timestamp: Date | string | number, locale?: string): string;
