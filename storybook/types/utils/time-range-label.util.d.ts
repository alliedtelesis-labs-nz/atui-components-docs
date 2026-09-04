import { AtITimeWithUnit } from '../types/time';
/**
 * Name a relative range the way its language does: English drops the numeral in
 * the singular ("Last hour"), Japanese keeps it ("直近1時間"), so each locale
 * supplies whole phrases rather than parts this could concatenate.
 */
export declare function atGetRelativeRangeLabel(time: AtITimeWithUnit, translations?: any): string;
/**
 * Endpoints for an absolute range, shortened by how far apart they are: the
 * year is dropped inside the current year, and a range that starts and ends on
 * one day states that day once.
 */
export declare function atGetAbsoluteRangeParts(from: Date | string, to: Date | string): {
    start: string;
    end: string;
};
/** A single timestamp, shortened by the same year rule as a range endpoint. */
export declare function atGetTimestampLabel(date: Date | string): string;
