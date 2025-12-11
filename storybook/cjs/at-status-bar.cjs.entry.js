'use strict';

var index = require('./index-COiLLAKF.js');

const AtStatusBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * List of segments that make up the status bar. Each segment implements the StatusBar interface.
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
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-sm`;
    }
    get segments() {
        return this.status_bar.map((segment) => (index.h("at-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, index.h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), index.h("span", null, segment.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: '84bded9fabd146c7f6e027204a69321e35955baf', class: this.statusBarClass }, index.h("div", { key: 'a30b19ff93f7269760bb2ed61a6f26ca7241b9fc', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

exports.at_status_bar = AtStatusBar;
//# sourceMappingURL=at-status-bar.entry.cjs.js.map
