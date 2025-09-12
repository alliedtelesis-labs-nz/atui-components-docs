import { r as registerInstance, h, H as Host } from './index-C8uvvL0O.js';

const AtuiStatusBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return this.status_bar.map((segment) => (h("atui-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", null, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: 'e80ca29cc5d1b925042e588b1f908679a113688a', class: this.statusBarClass }, h("div", { key: '2b702c1dc4fc95af3ab1212f2d8f98e51b74c425', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

export { AtuiStatusBar as atui_status_bar };
//# sourceMappingURL=atui-status-bar.entry.js.map

//# sourceMappingURL=atui-status-bar.entry.js.map