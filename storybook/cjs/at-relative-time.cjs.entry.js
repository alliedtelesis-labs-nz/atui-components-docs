'use strict';

var index = require('./index-D93m6lxs.js');
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
        return (index.h(index.Host, { key: '3ea1dd3a7a783deea4a3ccf739794ace0b0cd9b5', class: "inline-flex" }, index.h("at-tooltip", { key: '81c4f4c4871d2a86aa3e0aee2678442137599d0b', position: "top", disabled: !this.titleText }, index.h("time", { key: '67ecea91719b9a7b66a516fdbb3302bbf629d782', slot: "tooltip-trigger", part: "time", "data-name": "relative-time", dateTime: this.datetimeAttr }, this.relativeTimeText), this.titleText)));
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

exports.at_relative_time = AtRelativeTimeComponent;
