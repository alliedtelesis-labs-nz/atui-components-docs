import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

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
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-[2px]`;
    }
    get segments() {
        return this.status_bar.map((segment) => (h("at-tooltip", { position: "bottom", class: "flex flex-grow items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flexBasis: segment.percentage.toString() + '%',
            } }, h("div", { class: "absolute inset-0 h-full w-full", slot: "tooltip-trigger", style: {
                background: segment.backgroundColor,
            } }), h("span", null, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: 'a7bb472d71b5d3cf515e94d44d402542091d6cdf', class: this.statusBarClass }, h("div", { key: '52ef9608350c7a1acdbe9bee143c9e88a755e880', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

export { AtStatusBar as at_status_bar };
