'use strict';

var index = require('./index-D1oh76XY.js');
var floatingUi_dom = require('./floating-ui.dom-BZk7Blsu.js');

const AtFormLabelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'ca46547c428a32e3b8566b625defc3fcbd4ff455', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: 'cfe0717e59d0374df2b29a7d744e421fe3c7467c', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '7920064022e73967fc14a2ab01ca8df2fdc41704', class: "text-error" }, "*"))),
            this.info_text && (index.h("at-tooltip", { key: '2c0b0fdbaffc0562f26ca8528cf80a94294ac2ca', position: "right" }, index.h("at-icon", { key: 'e80adaede6a58bfef582d5b96ff568ce8ea0d206', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '46fe56d5db135f1a11fc0d7af10d8da4ab70f6ed' }, this.info_text))),
        ]));
    }
};

const DEFAULT_TOOLTIP_MAX_WIDTH = 200;
const AtTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    get el() { return index.getElement(this); }
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
            this.cleanupAutoUpdate = floatingUi_dom.autoUpdate(this.triggerEl, this.tooltipEl, () => {
                if (this.isOpen) {
                    const placement = this.getFloatingUIPlacement();
                    const strategy = 'fixed';
                    floatingUi_dom.computePosition(this.triggerEl, this.tooltipEl, {
                        placement,
                        strategy,
                        middleware: [
                            floatingUi_dom.offset(this.offset ?? 8),
                            floatingUi_dom.flip({
                                fallbackStrategy: 'bestFit',
                                padding: 8,
                            }),
                            floatingUi_dom.shift({
                                padding: 8,
                                mainAxis: true,
                                crossAxis: true,
                            }),
                            floatingUi_dom.size({
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
        return (index.h(index.Host, { key: '8b2f79d52962639ae6953e031dcb688548ef6830', class: "relative" }, !this.trigger_id && (index.h("div", { key: '104367822dc197bf68dfd78065b1e63ce0ee6d49', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.mouseEnterHandler() : null, onMouseLeave: () => !this.disabled ? this.mouseLeaveHandler() : null }, index.h("slot", { key: '419858f772aa8c945d39557ee6c8e7ba0ef220b1', name: "tooltip-trigger" }))), index.h("div", { key: '9e967992788cada21c29c605688dffec4a84775c', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "bg-surface-overlay/90 text-foreground-inv pointer-events-none w-fit rounded-md px-[6px] py-[2px] text-sm leading-tight break-words whitespace-normal opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, index.h("slot", { key: '70fe9c10dbcbcdfdc3a00b4719ce8b68dbbedd92' }))));
    }
    static get watchers() { return {
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};

exports.at_form_label = AtFormLabelComponent;
exports.at_tooltip = AtTooltip;
