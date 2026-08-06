/**
 * The relative prose that at-relative-datetime-cell displays ("3 days ago"), shared with
 * table search so the text it indexes cannot drift from the text on screen.
 */
export declare function parseCellDateTime(value: any): Date | null;
/**
 * `now` is injectable so callers can derive a label against a fixed instant; it defaults to
 * the current time, which is what the cell renders against.
 */
export declare function getRelativeTimeLabel(date: Date, now?: number): string;
