'use strict';

var index = require('./index-BzyfxOU6.js');
var floatingUi_dom = require('./floating-ui.dom-BZk7Blsu.js');

const AtIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The name of carbon icon to use
     */
    name;
    /**
     * The size of the icon accepts number (in px), string with CSS units (e.g. "1.5rem"), or one of "xs", "sm", "md", or "lg".
     */
    size = 16;
    getIcon() {
        return window.__atIconRegistry?.get(this.name);
    }
    getSize() {
        if (this.size === 'xs')
            return 24;
        else if (this.size === 'sm')
            return 48;
        else if (this.size === 'md')
            return 64;
        else if (this.size === 'lg')
            return 72;
        else
            return this.size;
    }
    renderSvgNode = (node, i) => {
        return index.h(node.elem, {
            key: i,
            ...node.attrs,
        });
    };
    render() {
        const icon = this.getIcon();
        const size = this.getSize();
        if (!icon)
            return null;
        return (index.h("svg", { width: size, height: size, viewBox: icon.attrs.viewBox }, icon.content.map(this.renderSvgNode)));
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
    popoverId = `atui-tooltip-${Math.random().toString(36).substr(2, 9)}`;
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
            const showHandler = () => {
                if (!this.disabled) {
                    this.triggerEl = el;
                    this.showHandler();
                }
            };
            const hideHandler = () => {
                if (!this.disabled) {
                    this.triggerEl = el;
                    this.hideHandler();
                }
            };
            el.addEventListener('mouseenter', showHandler);
            el.addEventListener('mouseleave', hideHandler);
            el.addEventListener('focusin', showHandler);
            el.addEventListener('focusout', hideHandler);
            this.externalTriggerListeners.push({
                element: el,
                event: 'mouseenter',
                handler: showHandler,
            }, {
                element: el,
                event: 'mouseleave',
                handler: hideHandler,
            }, {
                element: el,
                event: 'focusin',
                handler: showHandler,
            }, {
                element: el,
                event: 'focusout',
                handler: hideHandler,
            });
            el.setAttribute('aria-haspopup', 'true');
            el.setAttribute('aria-expanded', 'false');
            el.setAttribute('aria-describedby', this.popoverId);
        });
    }
    async showHandler() {
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
    async hideHandler() {
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
        return (index.h(index.Host, { key: '3a2c01850ec2abe8f7a3866189699e81dfe81d42', class: "relative" }, !this.trigger_id && (index.h("div", { key: '18bac17da3a3dc6a00dc2ac6b9f51ed8a7da0367', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, "aria-describedby": this.popoverId, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.showHandler() : null, onMouseLeave: () => !this.disabled ? this.hideHandler() : null, onFocusin: () => !this.disabled ? this.showHandler() : null, onFocusout: () => !this.disabled ? this.hideHandler() : null }, index.h("slot", { key: '0a88907da6faae885ffd3ffb5628693549d2a3f3', name: "tooltip-trigger" }))), index.h("div", { key: '08fc0ffb1d6252bc926b854ff7e55c2aee0c8a03', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "bg-surface-overlay/90 text-foreground-inv pointer-events-none w-fit rounded-md px-[6px] py-[2px] text-sm leading-tight break-words whitespace-normal opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, index.h("slot", { key: '10f88ba55a623b0e2082bd70764f6396c39c9a1c' }))));
    }
    static get watchers() { return {
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};

exports.at_icon = AtIcon;
exports.at_tooltip = AtTooltip;
