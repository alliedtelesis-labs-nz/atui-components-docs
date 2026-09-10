'use strict';

var index = require('./index-zRWHCAJe.js');

const AtStatusBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * List of segments that make up the status bar. Each segment implements the AtIStatusBarSegment interface.
     */
    status_bar = [];
    /**
     * Height of the status bar
     */
    size = 'sm';
    /**
     * Disables the tooltip when hovered
     */
    disable_tooltip;
    get statusBarClass() {
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-full overflow-hidden`;
    }
    get segments() {
        return this.status_bar.map((segment) => (index.h("at-tooltip", { position: "top", class: "flex items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flex: `0 0 ${segment.percentage}%`,
            } }, index.h("div", { class: "absolute inset-0 h-full w-full", slot: "tooltip-trigger", role: "img", "aria-label": segment.tooltip
                ? `${segment.tooltip}: ${segment.percentage}%`
                : `${segment.percentage}%`, style: {
                background: segment.backgroundColor,
            } }), index.h("span", null, segment.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: '38d94f7691d97209ffbc897510aab244347d7a53', class: this.statusBarClass }, index.h("div", { key: '1d60c616aa1e8441491f2a3ff196d0a360a2646c', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

exports.at_status_bar = AtStatusBar;
