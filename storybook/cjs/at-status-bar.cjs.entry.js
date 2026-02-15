'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-[2px]`;
    }
    get segments() {
        return this.status_bar.map((segment) => (index.h("at-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, index.h("div", { class: "absolute inset-0 h-full w-full", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), index.h("span", null, segment.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: 'b77d90dfa5f6fe158f3d8ec242cacfa3c2e295cc', class: this.statusBarClass }, index.h("div", { key: '6cb44316f9148afc40bab554a04afc5b0b830806', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

exports.at_status_bar = AtStatusBar;
