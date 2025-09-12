'use strict';

var index = require('./index-i7hIKTeN.js');

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
        return this.status_bar.map((segment) => (index.h("atui-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, index.h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), index.h("span", null, segment.tooltip))));
    }
    render() {
        return (index.h(index.Host, { key: 'e80ca29cc5d1b925042e588b1f908679a113688a', class: this.statusBarClass }, index.h("div", { key: '2b702c1dc4fc95af3ab1212f2d8f98e51b74c425', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

exports.atui_status_bar = AtuiStatusBar;
//# sourceMappingURL=atui-status-bar.entry.cjs.js.map

//# sourceMappingURL=atui-status-bar.cjs.entry.js.map