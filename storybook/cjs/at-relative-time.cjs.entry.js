'use strict';

var index = require('./index-CwnFn_Q4.js');
var relativeTime_util = require('./relative-time.util-_FQbwGgQ.js');

const AtRelativeTimeComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        if (!this.el.isConnected)
            return;
        this.updateRelativeTime();
    }
    updateRelativeTime() {
        const source = this.timestamp;
        this.relativeTimeText = relativeTime_util.getRelativeTimeString(source, this.resolveLocale());
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
            : relativeTime_util.getRefreshDelay(source);
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
        return (index.h(index.Host, { key: '5a6967e9b2362962b8a46b44a28aa1fb719f3405', class: "inline-flex" }, index.h("at-tooltip", { key: '641d06b5e9cc8da6a53e5568a9b18bb2d6d5fa50', position: "top", disabled: !this.titleText }, index.h("time", { key: '4b5292164150e717e282416578fdff9d0f570201', slot: "tooltip-trigger", part: "time", "data-name": "relative-time", dateTime: this.datetimeAttr }, this.relativeTimeText), this.titleText)));
    }
    static get watchers() { return {
        "timestamp": [{
                "onInputChange": 1
            }],
        "update_interval": [{
                "onInputChange": 1
            }]
    }; }
};

exports.at_relative_time = AtRelativeTimeComponent;
