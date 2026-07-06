import { Host, h } from "@stencil/core";
import { getRelativeTimeString, getRefreshDelay, } from "../../utils/relative-time.util";
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
export class AtRelativeTimeComponent {
    el;
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
        return (h(Host, { key: 'ffecf6bafd000182390d6ab7de317926b3bc6064', class: "inline-flex" }, h("at-tooltip", { key: '33ddee2c0e983cdce5f695cd5a87a5cb0e5d8cd8', position: "top", disabled: !this.titleText }, h("time", { key: '90fa2619a14cb4435bb893c70441f5dc113be68d', slot: "tooltip-trigger", part: "time", "data-name": "relative-time", dateTime: this.datetimeAttr }, this.relativeTimeText), this.titleText)));
    }
    static get is() { return "at-relative-time"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "timestamp": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "Date | string | number",
                    "resolved": "Date | number | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The timestamp to display as relative time. Prefer Date objects, ISO 8601\nstrings (e.g. `\"2026-06-02T10:30:00Z\"`) or epoch milliseconds. Non-ISO\nstrings such as `\"June 2, 2026\"` fall back to the browser's native date\nparser, which is inconsistent across browsers and may log a deprecation\nwarning \u2014 avoid them."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "timestamp"
            },
            "update_interval": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional fixed refresh interval in milliseconds. When unset (the default),\nthe component picks an adaptive cadence based on how old the timestamp is.\nSet this to pin a specific update frequency (e.g. `60000` for once a minute)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "update_interval"
            }
        };
    }
    static get states() {
        return {
            "relativeTimeText": {},
            "datetimeAttr": {},
            "titleText": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "timestamp",
                "methodName": "onInputChange"
            }, {
                "propName": "update_interval",
                "methodName": "onInputChange"
            }];
    }
}
