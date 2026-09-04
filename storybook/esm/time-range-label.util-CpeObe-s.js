import { d as dayjs } from './at-time-date.util-Bfdzn_RG.js';
import { a as AbreviatedTimeUnits } from './at-time-range.models-yUuqzo3S.js';

/**
 * Name a relative range the way its language does: English drops the numeral in
 * the singular ("Last hour"), Japanese keeps it ("直近1時間"), so each locale
 * supplies whole phrases rather than parts this could concatenate.
 */
function atGetRelativeRangeLabel(time, translations) {
    if (!time?.unit || !time?.value) {
        return '';
    }
    const suffix = time.value === 1 ? 'ONE' : 'OTHER';
    const template = translations?.ATUI?.TIME?.RANGE_LABEL?.[`${time.unit}_${suffix}`];
    if (!template) {
        return `Last ${time.value} ${AbreviatedTimeUnits[time.unit]}`;
    }
    return template.replace('{value}', String(time.value));
}
const MONTH_DAY = 'MMM D';
const MONTH_DAY_YEAR = 'MMM D YYYY';
const TIME_OF_DAY = 'h:mm A';
/**
 * Endpoints for an absolute range, shortened by how far apart they are: the
 * year is dropped inside the current year, and a range that starts and ends on
 * one day states that day once.
 */
function atGetAbsoluteRangeParts(from, to) {
    const start = dayjs(from);
    const end = dayjs(to);
    const thisYear = dayjs().year();
    const datePart = start.year() === thisYear && end.year() === thisYear
        ? MONTH_DAY
        : MONTH_DAY_YEAR;
    if (start.isSame(end, 'day')) {
        return {
            start: start.format(`${datePart}, ${TIME_OF_DAY}`),
            end: end.format(TIME_OF_DAY),
        };
    }
    return {
        start: start.format(`${datePart}, ${TIME_OF_DAY}`),
        end: end.format(`${datePart}, ${TIME_OF_DAY}`),
    };
}
/** A single timestamp, shortened by the same year rule as a range endpoint. */
function atGetTimestampLabel(date) {
    const value = dayjs(date);
    const datePart = value.year() === dayjs().year() ? MONTH_DAY : MONTH_DAY_YEAR;
    return value.format(`${datePart}, ${TIME_OF_DAY}`);
}

export { atGetTimestampLabel as a, atGetAbsoluteRangeParts as b, atGetRelativeRangeLabel as c };
