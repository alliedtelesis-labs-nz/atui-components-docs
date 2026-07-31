import { r as registerInstance, h, a as getElement, H as Host } from './index-m1WDiP3i.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift, b as size } from './floating-ui.dom-DDtwbwIl.js';

const AtFormLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Label that appears before the info icon.
     */
    label;
    /**
     * When true, there will be a red star on the label.
     */
    required;
    /**
     * The text to be contained in the tooltip.
     */
    info_text;
    /**
     * Placed in the 'for' attribute on the label element
     */
    for;
    render() {
        return (h("div", { key: 'c0d5bafdc0c466a194bca8905410d97b5f51a70f', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'deffef549f23721ef386b57c8e2f45fc83b09f8c', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '4b7f4176a11a059921f35c5fb32ef81b4fb2a95c', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: 'c33358e49633deb01318601198466d5134e50a32', position: "right" }, h("at-icon", { key: 'a80e3016cebafe6d8d07a712e05208dcd2152333', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '8a573111f43d256fc92074f9800cf773aae55287' }, this.info_text))),
        ]));
    }
};

const DEFAULT_TOOLTIP_MAX_WIDTH = 200;
const AtTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Position of opened tooltip element relative to the trigger element.
     */
    position = 'top';
    /**
     * Alignment of opened tooltip element relative to trigger element.
     */
    align = 'center';
    /**
     * Prevent opening tooltip
     */
    disabled = false;
    /**
     * Maximum width constraint for the tooltip in pixels. Defaults to 300px for readability.
     */
    width = '200px';
    /**
     * Offset in pixels from the edge of the trigger element
     */
    offset = 8;
    /**
     * Delay before showing and hiding the tooltip when interacting with the trigger element.
     */
    delay = 0;
    /**
     * Target an external element to use as the trigger. When provided, clicking an element with a matching data-tooltip attribute value will toggle the side panel.
     * */
    trigger_id;
    async disabledChanged(newValue) {
        if (newValue && this.isOpen) {
            await this.closeTooltip();
        }
    }
    isOpen = false;
    get el() { return getElement(this); }
    triggerEl;
    tooltipEl;
    triggerEls = [];
    cleanupAutoUpdate;
    popoverId;
    showTimeout;
    hideTimeout;
    updatePosition = async () => {
        if (this.triggerEl && this.tooltipEl && this.isOpen) {
            await this.updateFloatingPosition();
        }
    };
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
            this.triggerEls = Array.from(document.querySelectorAll(`[data-tooltip="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-tooltip: No elements found with data-tooltip="${this.trigger_id}"`);
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
    externalTriggerListeners = [];
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
                if (this.isOpen) {
                    const placement = this.getFloatingUIPlacement();
                    const strategy = 'fixed';
                    computePosition(this.triggerEl, this.tooltipEl, {
                        placement,
                        strategy,
                        middleware: [
                            offset(this.offset ?? 8),
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
        this.cleanupAutoUpdate?.();
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
        return (h(Host, { key: 'a727817bb4ae6368f23bd424dad0be9841dc9cb8', class: "relative" }, !this.trigger_id && (h("div", { key: '30e68164b42ab32b25ce76299a46adee1447470a', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.mouseEnterHandler() : null, onMouseLeave: () => !this.disabled ? this.mouseLeaveHandler() : null }, h("slot", { key: '7a0d41e4ac437f25e4d28d550e5a7fa7adbf3e8c', name: "tooltip-trigger" }))), h("div", { key: '2ce5fdc3dd770394592954d0299cf952332cac2a', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "bg-surface-overlay/90 text-foreground-inv pointer-events-none w-fit rounded-md px-[6px] py-[2px] text-sm leading-tight break-words whitespace-normal opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, h("slot", { key: '1abefad14d4320aac03da0d588970c5bd3be07d3' }))));
    }
    static get watchers() { return {
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};

export { AtFormLabelComponent as at_form_label, AtTooltip as at_tooltip };
