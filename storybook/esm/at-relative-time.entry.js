import { r as registerInstance, a as getElement, h, H as Host } from './index-BQWIFs0G.js';
import { g as getRelativeTimeString, a as getRefreshDelay } from './relative-time.util-lJSYZp0N.js';

const AtRelativeTimeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * The timestamp to display as relative time. Prefer Date objects, ISO 8601
     * strings (e.g. `"2026-06-02T10:30:00Z"`) or epoch milliseconds. Non-ISO
     * strings such as `"June 2, 2026"` fall back to the browser's native date
     * parser, which is inconsistent across browsers and may log a deprecation
     * warning — avoid them.
     */
    timestamp;
    /**
     * Optional fixed refresh interval in milliseconds. When unset (the default),
     * the component picks an adaptive cadence based on how old the timestamp is.
     * Set this to pin a specific update frequency (e.g. `60000` for once a minute).
     */
    update_interval;
    relativeTimeText = '';
    datetimeAttr;
    titleText;
    refreshTimer;
    componentDidLoad() {
        this.updateRelativeTime();
    }
    disconnectedCallback() {
        this.clearRefreshTimer();
    }
    onInputChange() {
        this.updateRelativeTime();
    }
    updateRelativeTime() {
        const source = this.timestamp;
        this.relativeTimeText = getRelativeTimeString(source, this.resolveLocale());
        const hasValue = source !== undefined && source !== null && source !== '';
        const date = hasValue ? new Date(source) : null;
        const valid = date !== null && !Number.isNaN(date.getTime());
        this.datetimeAttr = valid ? date.toISOString() : undefined;
        this.titleText = valid ? this.formatAbsolute(date) : undefined;
        this.scheduleNextTick(valid ? source : undefined);
    }
    scheduleNextTick(source) {
        this.clearRefreshTimer();
        if (source === undefined) {
            return;
        }
        const delay = this.update_interval && this.update_interval > 0
            ? this.update_interval
            : getRefreshDelay(source);
        if (!Number.isFinite(delay)) {
            return;
        }
        this.refreshTimer = setTimeout(() => this.updateRelativeTime(), delay);
    }
    clearRefreshTimer() {
        if (this.refreshTimer) {
            clearTimeout(this.refreshTimer);
            this.refreshTimer = undefined;
        }
    }
    /** Nearest `lang` for Intl formatting, falling back to `<html lang>` then 'en'. */
    resolveLocale() {
        const nearest = this.el.closest('[lang]')?.getAttribute('lang');
        return (nearest ||
            (typeof document !== 'undefined'
                ? document.documentElement.lang
                : '') ||
            'en');
    }
    /** Localised absolute date for the tooltip, e.g. "June 2, 2026 at 10:30 AM". */
    formatAbsolute(date) {
        try {
            return new Intl.DateTimeFormat(this.resolveLocale(), {
                dateStyle: 'long',
                timeStyle: 'short',
            }).format(date);
        }
        catch {
            return date.toLocaleString();
        }
    }
    render() {
        return (h(Host, { key: 'f5c197e49a6d4306371977ae28d33ca7011ad254', class: "inline-flex" }, h("at-tooltip", { key: '8f03c684a0ebc87b29c0802d05826e83b9aabcdf', position: "top", disabled: !this.titleText }, h("time", { key: '405e22a6a9986f7bc5260b0b3f2839ada65736fb', slot: "tooltip-trigger", part: "time", "data-name": "relative-time", dateTime: this.datetimeAttr }, this.relativeTimeText), this.titleText)));
    }
    static get watchers() { return {
        "timestamp": [{
                "onInputChange": 0
            }],
        "update_interval": [{
                "onInputChange": 0
            }]
    }; }
};

export { AtRelativeTimeComponent as at_relative_time };
