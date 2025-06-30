'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiStatusBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * List of segments that make up the status bar. Each segment implements the StatusBar interface.
         */
        this.status_bar = [];
        /**
         * Height of the status bar
         */
        this.size = 'sm';
    }
    get statusBarClass() {
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-sm`;
    }
    get segments() {
        return this.status_bar.map((segment) => (index.h("atui-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", is_visible: !this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, index.h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), index.h("span", { slot: "tooltip-content" }, segment.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: '6a2fc508962e79381f3722653a3158614bd1cfaa', class: this.statusBarClass }, index.h("div", { key: '7368d6c14466fd557597003bb5d60af6d30fd9b9', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

exports.atui_status_bar = AtuiStatusBar;
//# sourceMappingURL=atui-status-bar.entry.cjs.js.map

//# sourceMappingURL=atui-status-bar.cjs.entry.js.map