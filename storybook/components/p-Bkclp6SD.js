import { p as proxyCustomElement, H, h, c as Host } from './p-DzGFYGds.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift, b as size } from './p-CQbxAaEb.js';

const DEFAULT_TOOLTIP_MAX_WIDTH = 200;
const AtuiTooltip = /*@__PURE__*/ proxyCustomElement(class AtuiTooltip extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Position of opened tooltip element relative to the trigger element.
         */
        this.position = 'top';
        /**
         * Alignment of opened tooltip element relative to trigger element.
         */
        this.align = 'center';
        /**
         * Prevent opening tooltip
         */
        this.disabled = false;
        /**
         * Maximum width constraint for the tooltip in pixels. Defaults to 300px for readability.
         */
        this.width = '200px';
        /**
         * Offset in pixels from the edge of the trigger element
         */
        this.offset = 8;
        /**
         * Delay before showing and hiding the tooltip when interacting with the trigger element.
         */
        this.delay = 150;
        this.isOpen = false;
        this.updatePosition = async () => {
            if (this.triggerEl && this.tooltipEl && this.isOpen) {
                await this.updateFloatingPosition();
            }
        };
    }
    async disabledChanged(newValue) {
        if (newValue && this.isOpen) {
            await this.closeTooltip();
        }
    }
    /**
     * Opens the tooltip.
     */
    async openTooltip() {
        if (this.disabled)
            return;
        if (this.tooltipEl) {
            this.tooltipEl.showPopover();
            this.isOpen = true;
        }
        await this.updatePosition();
    }
    /**
     * Closes the tooltip.
     */
    async closeTooltip() {
        if (this.tooltipEl) {
            this.tooltipEl.hidePopover();
            this.isOpen = false;
        }
    }
    async componentDidLoad() {
        this.popoverId = `atui-tooltip-${Math.random().toString(36).substr(2, 9)}`;
        await this.setupFloatingUI();
        setTimeout(() => this.setupPopoverEventListeners(), 0);
    }
    disconnectedCallback() {
        this.cleanupFloatingUI();
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = undefined;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = undefined;
        }
    }
    async setupPopoverEventListeners() {
        if (this.tooltipEl) {
            this.tooltipEl.addEventListener('toggle', (event) => {
                const customEvent = event;
                this.isOpen = customEvent.newState === 'open';
                if (this.isOpen) {
                    requestAnimationFrame(() => {
                        this.tooltipEl.style.opacity = '1';
                        this.updatePosition();
                    });
                }
                else {
                    this.tooltipEl.style.opacity = '0';
                }
            });
        }
    }
    async mouseEnterHandler() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = undefined;
        }
        if (this.isOpen)
            return;
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
        }
        this.showTimeout = setTimeout(async () => {
            if (!this.disabled && !this.isOpen) {
                await this.openTooltip();
            }
            this.showTimeout = undefined;
        }, this.delay || 0);
    }
    async mouseLeaveHandler() {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = undefined;
        }
        if (!this.isOpen)
            return;
        const hideDelay = Math.min(this.delay || 0, 150);
        this.hideTimeout = setTimeout(async () => {
            if (this.isOpen) {
                await this.closeTooltip();
            }
            this.hideTimeout = undefined;
        }, hideDelay);
    }
    async setupFloatingUI() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
        }
        if (this.triggerEl && this.tooltipEl) {
            const observer = new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting && this.isOpen) {
                    this.closeTooltip();
                }
            }, { threshold: 0 });
            observer.observe(this.triggerEl);
            this.cleanupAutoUpdate = autoUpdate(this.triggerEl, this.tooltipEl, () => {
                var _a;
                if (this.isOpen) {
                    const placement = this.getFloatingUIPlacement();
                    const strategy = 'fixed';
                    computePosition(this.triggerEl, this.tooltipEl, {
                        placement,
                        strategy,
                        middleware: [
                            offset((_a = this.offset) !== null && _a !== void 0 ? _a : 8),
                            flip({
                                fallbackStrategy: 'bestFit',
                                padding: 8,
                            }),
                            shift({
                                padding: 8,
                                mainAxis: true,
                                crossAxis: true,
                            }),
                            size({
                                apply: ({ availableWidth, availableHeight, elements, }) => {
                                    const userMax = parseInt((this.width || '200px').toString(), 10) || DEFAULT_TOOLTIP_MAX_WIDTH;
                                    Object.assign(elements.floating.style, {
                                        maxWidth: `${Math.min(availableWidth, userMax)}px`,
                                        maxHeight: `${availableHeight}px`,
                                    });
                                },
                            }),
                        ],
                    }).then(({ x, y }) => {
                        const styles = {
                            position: strategy,
                            left: `${x}px`,
                            top: `${y}px`,
                            margin: '0',
                            transform: 'none',
                            maxWidth: this.width || '200px',
                        };
                        Object.assign(this.tooltipEl.style, styles);
                    });
                }
            }, {
                ancestorScroll: true,
                ancestorResize: true,
                elementResize: true,
                layoutShift: true,
                animationFrame: true,
            });
            const originalCleanup = this.cleanupAutoUpdate;
            this.cleanupAutoUpdate = () => {
                originalCleanup();
                observer.disconnect();
            };
        }
    }
    cleanupFloatingUI() {
        var _a;
        (_a = this.cleanupAutoUpdate) === null || _a === void 0 ? void 0 : _a.call(this);
        this.cleanupAutoUpdate = undefined;
    }
    async updateFloatingPosition() {
        if (!this.triggerEl || !this.tooltipEl)
            return;
        this.setupFloatingUI();
    }
    getFloatingUIPlacement() {
        const positionMap = {
            top: 'top',
            bottom: 'bottom',
            left: 'left',
            right: 'right',
        };
        const alignMap = {
            start: 'start',
            end: 'end',
            center: 'center',
        };
        const position = positionMap[this.position] || 'bottom';
        const align = alignMap[this.align] || 'center';
        return `${position}-${align}`;
    }
    render() {
        return (h(Host, { key: '940d6889b7728360a5f35c80c7e9ff052dd62d73', class: "relative" }, h("div", { key: '81b7537909dcd1a7be899c9702eb2a200a82bb24', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.mouseEnterHandler() : null, onMouseLeave: () => !this.disabled ? this.mouseLeaveHandler() : null }, h("slot", { key: '64b188a432c067200b63fc6e48eec2079681d332', name: "tooltip-trigger" })), h("div", { key: 'cd56d8d701203e835dcc485560cc693409943404', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "pointer-events-none w-fit rounded-md bg-gray-950/80 px-[6px] py-2 text-sm text-white opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, h("slot", { key: '3b5e34aa71d4a69c557f1868628c02b29b01f7de', name: "tooltip-content" }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
}, [260, "atui-tooltip", {
        "position": [1],
        "align": [1],
        "disabled": [4],
        "width": [1],
        "offset": [2],
        "delay": [2],
        "isOpen": [32],
        "openTooltip": [64],
        "closeTooltip": [64]
    }, undefined, {
        "disabled": ["disabledChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTooltip);
            }
            break;
    } });
}

export { AtuiTooltip as A, defineCustomElement as d };
//# sourceMappingURL=p-Bkclp6SD.js.map

//# sourceMappingURL=p-Bkclp6SD.js.map