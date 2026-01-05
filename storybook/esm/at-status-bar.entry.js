import { r as registerInstance, h, H as Host } from './index-EP34iaAr.js';

const AtStatusBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return this.status_bar.map((segment) => (h("at-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "flex flex-grow", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", null, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '9224f800472b15cda85ea13ac9fb32fa935eef96', class: this.statusBarClass }, h("div", { key: 'c4acf764d7ea94f8aee38499bd4c19f883a978de', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

export { AtStatusBar as at_status_bar };
//# sourceMappingURL=at-status-bar.entry.js.map
