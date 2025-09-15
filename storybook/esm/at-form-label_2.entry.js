import { r as registerInstance, h, H as Host, g as getElement } from './index-C8uvvL0O.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift, b as size } from './floating-ui.dom-BO6p966C.js';

const AtFormLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (h("div", { key: 'e52a5a37130898e8537efeea0d5bc6b041fd426b', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '7c0dc564ab386bb31cf5dc79c5b741b8b7e19864', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'aba209d4d38d4954bb3edc9773cb0211019e08fb', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '84a13a0b082af880513ec632864012e6b2256f2d', position: "right" }, h("span", { key: '2b19e12fb91e1c09fe731f3bc7e7307f0dad61f4', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: '817587626ab1406bc6c6b321f54f1e2fb2cb323e' }, this.info_text))),
        ]));
    }
};

const DEFAULT_TOOLTIP_MAX_WIDTH = 200;
const AtTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.triggerEls = [];
        this.updatePosition = async () => {
            if (this.triggerEl && this.tooltipEl && this.isOpen) {
                await this.updateFloatingPosition();
            }
        };
        this.externalTriggerListeners = [];
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
        this.updateAriaExpanded();
    }
    /**
     * Closes the tooltip.
     */
    async closeTooltip() {
        if (this.tooltipEl) {
            this.tooltipEl.hidePopover();
            this.isOpen = false;
        }
        this.updateAriaExpanded();
    }
    updateAriaExpanded() {
        if (this.trigger_id && this.triggerEl) {
            this.triggerEl.setAttribute('aria-expanded', this.isOpen ? 'true' : 'false');
        }
    }
    async componentDidLoad() {
        this.popoverId = `atui-tooltip-${Math.random().toString(36).substr(2, 9)}`;
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-tooltip: No elements found with data-id="${this.trigger_id}"`);
                return;
            }
        }
        else {
            this.triggerEl = this.el.querySelector('[data-name="tooltip-trigger"]');
        }
        await this.setupFloatingUI();
        setTimeout(() => this.setupPopoverEventListeners(), 0);
        if (this.trigger_id && this.triggerEls.length) {
            this.setupExternalTriggerListeners();
        }
    }
    disconnectedCallback() {
        this.cleanupFloatingUI();
        this.cleanupExternalTriggerListeners();
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = undefined;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = undefined;
        }
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
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
    setupExternalTriggerListeners() {
        if (!this.triggerEls || this.triggerEls.length === 0)
            return;
        this.triggerEls.forEach((el) => {
            const mouseEnterHandler = () => {
                if (!this.disabled) {
                    this.triggerEl = el;
                    this.mouseEnterHandler();
                }
            };
            const mouseLeaveHandler = () => {
                if (!this.disabled) {
                    this.triggerEl = el;
                    this.mouseLeaveHandler();
                }
            };
            el.addEventListener('mouseenter', mouseEnterHandler);
            el.addEventListener('mouseleave', mouseLeaveHandler);
            this.externalTriggerListeners.push({
                element: el,
                event: 'mouseenter',
                handler: mouseEnterHandler,
            }, {
                element: el,
                event: 'mouseleave',
                handler: mouseLeaveHandler,
            });
            el.setAttribute('aria-haspopup', 'true');
            el.setAttribute('aria-expanded', 'false');
        });
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
        return (h(Host, { key: 'd9c4852f273f61b008e3d860fa05f22acde8069c', class: "relative" }, !this.trigger_id && (h("div", { key: 'd5d74b266a4b292bf903041fbbb03933a29080e4', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.mouseEnterHandler() : null, onMouseLeave: () => !this.disabled ? this.mouseLeaveHandler() : null }, h("slot", { key: '8b4fed86d8e5b33dc8750f03efac75b33748fbca', name: "tooltip-trigger" }))), h("div", { key: '7252d08175177699c85a36a9d20234963ca3b5d3', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "pointer-events-none w-fit rounded-md bg-gray-950/80 px-[6px] py-2 text-sm text-white opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, h("slot", { key: 'e5e13a0a9060b47052030a04987e133c913bf804' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
};

export { AtFormLabelComponent as at_form_label, AtTooltip as at_tooltip };
//# sourceMappingURL=at-form-label.at-tooltip.entry.js.map

//# sourceMappingURL=at-form-label_2.entry.js.map