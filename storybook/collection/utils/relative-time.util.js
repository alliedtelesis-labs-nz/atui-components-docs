const MS_PER_SECOND = 1000;
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
export function getRelativeTimeString(timestamp, locale = 'en') {
    if (timestamp === undefined || timestamp === null || timestamp === '') {
        return '';
    }
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) {
        return '';
    }
    let rtf;
    try {
        rtf = new Intl.RelativeTimeFormat(locale, {
            numeric: 'auto',
            style: 'long',
        });
    }
    catch {
        rtf = new Intl.RelativeTimeFormat('en', {
            numeric: 'auto',
            style: 'long',
        });
    }
    // Intl sign convention: negative = past ("3 days ago"), positive = future
    // ("in 3 days"). The sign goes into the value passed to format().
    const signedMs = Date.now() - date.getTime();
    const sign = signedMs < 0 ? 1 : -1;
    const absMs = Math.abs(signedMs);
    const [unit, value] = selectRelativeUnit(absMs);
    // value is 0 only for sub-second durations -> format(0, 'second') = "now".
    // numeric:'auto' turns a +-1 magnitude into CLDR words ("yesterday",
    // "last week", "last month", "last year"; and "tomorrow"/"next ..." ahead).
    return rtf.format(sign * value, unit);
}
/**
 * Picks the single relative-time unit and value to display, ported from
 * GitHub's relative-time-element `roundToSingleUnit`. The elapsed time is
 * decomposed into floored components (with month≈30d, year≈12mo
 * approximations, as GitHub does), then each component carries up into the next
 * unit once it crosses that unit's cutoff — >=55s -> minute, >=55m -> hour,
 * >=21h -> day (or >=12h when days are already present), >=6d -> week,
 * >=4w -> month, >=12mo -> year. The largest non-zero unit wins. This keeps the
 * finer unit a little longer than naive rounding would (e.g. 90s -> "1 minute",
 * not "2 minutes"), matching the reference element's output.
 */
function selectRelativeUnit(absMs) {
    const round = Math.round;
    let seconds = Math.floor(absMs / MS_PER_SECOND);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;
    let days = Math.floor(hours / 24);
    hours -= days * 24;
    let months = Math.floor(days / 30);
    days -= months * 30;
    let years = Math.floor(months / 12);
    months -= years * 12;
    let weeks = 0;
    if (seconds >= 55)
        minutes += round(seconds / 60);
    if (minutes >= 55)
        hours += round(minutes / 60);
    if (days && hours >= 12)
        days += round(hours / 24);
    else if (!days && hours >= 21)
        days += round(hours / 24);
    if (days >= 6) {
        weeks += round(days / 7);
        days = 0;
    }
    if (weeks >= 4)
        months += round(weeks / 4);
    if (months >= 12)
        years += round(months / 12);
    if (years)
        return ['year', years];
    if (months)
        return ['month', months];
    if (weeks)
        return ['week', weeks];
    if (days)
        return ['day', days];
    if (hours)
        return ['hour', hours];
    if (minutes)
        return ['minute', minutes];
    return ['second', seconds];
}
/**
 * How long until the relative-time label should next be recomputed, in
 * milliseconds, based on how far the timestamp is from now. Coarser intervals
 * for older/further timestamps avoid pointless re-renders: a "3 years ago"
 * label does not need second-by-second updates. Used by the component's
 * self-scheduling tick. Works for past and future timestamps (uses |diff|).
 */
export function getRefreshDelay(timestamp) {
    const time = new Date(timestamp).getTime();
    if (Number.isNaN(time)) {
        return Number.POSITIVE_INFINITY;
    }
    const seconds = Math.abs(Date.now() - time) / MS_PER_SECOND;
    if (seconds < 60)
        return 10_000; // < 1 min: every 10s
    if (seconds < 60 * 60)
        return 60_000; // < 1 hour: every minute
    if (seconds < 60 * 60 * 24)
        return 30 * 60_000; // < 1 day: every 30 min
    return 12 * 60 * 60_000; // otherwise: every 12 hours
}
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
export function atGetRelativeTime(timestamp, locale) {
    const resolved = locale ||
        (typeof document !== 'undefined'
            ? document.documentElement.lang
            : '') ||
        'en';
    return getRelativeTimeString(timestamp, resolved);
}
