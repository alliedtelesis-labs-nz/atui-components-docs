import { r as registerInstance, h, H as Host } from './index-HJO1YDmC.js';

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
        return this.status_bar.map((segment) => (h("atui-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", is_visible: !this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", { slot: "tooltip-content" }, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '6a2fc508962e79381f3722653a3158614bd1cfaa', class: this.statusBarClass }, h("div", { key: '7368d6c14466fd557597003bb5d60af6d30fd9b9', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

export { AtuiStatusBar as atui_status_bar };
//# sourceMappingURL=atui-status-bar.entry.js.map

//# sourceMappingURL=atui-status-bar.entry.js.map