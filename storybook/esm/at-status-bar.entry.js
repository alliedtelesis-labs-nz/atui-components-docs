import { r as registerInstance, h, H as Host } from './index-CGGSFxDu.js';

const AtStatusBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return this.status_bar.map((segment) => (h("at-tooltip", { position: "top", class: "flex items-stretch justify-center", disabled: this.disable_tooltip, style: {
                flex: `0 0 ${segment.percentage}%`,
            } }, h("div", { class: "absolute inset-0 h-full w-full", slot: "tooltip-trigger", role: "img", "aria-label": segment.tooltip
                ? `${segment.tooltip}: ${segment.percentage}%`
                : `${segment.percentage}%`, style: {
                background: segment.backgroundColor,
            } }), h("span", null, segment.tooltip))));
    }
    render() {
        return (h(Host, { key: '3d23106c89f1d093b19bde8ce1c4ffe1f1827253', class: this.statusBarClass }, h("div", { key: 'd6369277d5987e8f2e0aa654249ef94e394bd2ff', class: "flex flex-1 items-stretch justify-start overflow-visible" }, this.segments)));
    }
};

export { AtStatusBar as at_status_bar };
