/**
 * @category Feedback
 * @description A component that converts a timestamp into a human-readable relative time string. Handles both past ("6 days ago", "yesterday") and future ("in 2 hours", "tomorrow") timestamps automatically based on the value, localized via the native Intl.RelativeTimeFormat API.
 * The label refreshes automatically on a self-scheduling timer (more often for recent times, less often for older ones), so the display never goes stale.
 * The underlying absolute date is exposed via the native `<time datetime>` attribute and shown as a styled tooltip on hover.
 * @example
 * <at-relative-time timestamp={new Date()} />
 * <at-relative-time timestamp="2026-06-02T10:30:00Z" />
 * @part time - The rendered relative-time text element (style via at-relative-time::part(time)).
 */
export declare class AtRelativeTimeComponent {
    el: HTMLElement;
    /**
     * The timestamp to display as relative time. Prefer Date objects, ISO 8601
     * strings (e.g. `"2026-06-02T10:30:00Z"`) or epoch milliseconds. Non-ISO
     * strings such as `"June 2, 2026"` fall back to the browser's native date
     * parser, which is inconsistent across browsers and may log a deprecation
     * warning — avoid them.
     */
    timestamp: Date | string | number;
    /**
     * Optional fixed refresh interval in milliseconds. When unset (the default),
     * the component picks an adaptive cadence based on how old the timestamp is.
     * Set this to pin a specific update frequency (e.g. `60000` for once a minute).
     */
    update_interval?: number;
    private relativeTimeText;
    private datetimeAttr?;
    private titleText?;
    private refreshTimer?;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    onInputChange(): void;
    private updateRelativeTime;
    private scheduleNextTick;
    private clearRefreshTimer;
    /** Nearest `lang` for Intl formatting, falling back to `<html lang>` then 'en'. */
    private resolveLocale;
    /** Localised absolute date for the tooltip, e.g. "June 2, 2026 at 10:30 AM". */
    private formatAbsolute;
    render(): any;
}
