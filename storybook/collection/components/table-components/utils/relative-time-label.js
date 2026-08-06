/**
 * The relative prose that at-relative-datetime-cell displays ("3 days ago"), shared with
 * table search so the text it indexes cannot drift from the text on screen.
 */
export function parseCellDateTime(value) {
    if (!value) {
        return null;
    }
    const parsed = new Date(String(value).replace(' ', 'T'));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
}
function formatUnit(value, unit) {
    return `${value} ${unit}${value === 1 ? '' : 's'}`;
}
function formatSingleUnit(value, unit) {
    return `${formatUnit(value, unit)} ago`;
}
/**
 * `now` is injectable so callers can derive a label against a fixed instant; it defaults to
 * the current time, which is what the cell renders against.
 */
export function getRelativeTimeLabel(date, now = Date.now()) {
    const diffSeconds = Math.max(0, Math.floor((now - date.getTime()) / 1000));
    if (diffSeconds < 60) {
        return formatSingleUnit(diffSeconds, 'second');
    }
    const minutes = Math.floor(diffSeconds / 60);
    if (minutes < 60) {
        return formatSingleUnit(minutes, 'minute');
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return formatSingleUnit(hours, 'hour');
    }
    const days = Math.floor(hours / 24);
    if (days < 30) {
        return formatSingleUnit(days, 'day');
    }
    const months = Math.floor(days / 30);
    if (months < 12) {
        const monthRemainderDays = days % 30;
        if (monthRemainderDays > 0) {
            return `${formatUnit(months, 'month')}, ${formatUnit(monthRemainderDays, 'day')} ago`;
        }
        return formatSingleUnit(months, 'month');
    }
    const years = Math.floor(months / 12);
    const yearRemainderMonths = months % 12;
    if (yearRemainderMonths > 0) {
        return `${formatUnit(years, 'year')}, ${formatUnit(yearRemainderMonths, 'month')} ago`;
    }
    return formatSingleUnit(years, 'year');
}
