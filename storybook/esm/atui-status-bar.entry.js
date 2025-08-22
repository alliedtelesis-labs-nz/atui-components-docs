import { r as registerInstance, h, H as Host } from './index-CIq6mZ3i.js';

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
            } }), h("span", { slot: "tooltip-content" }, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '9bed28d51580ff58775039d87682b51be9183995', class: this.statusBarClass }, h("div", { key: '0fd990f0f15419bc69fa5d2c016b62ced0b3962e', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

export { AtuiStatusBar as atui_status_bar };
//# sourceMappingURL=atui-status-bar.entry.js.map

//# sourceMappingURL=atui-status-bar.entry.js.map