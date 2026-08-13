'use strict';

var index = require('./index-6KYrJiD1.js');
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
        return (index.h(index.Host, { key: 'e8c5851be30be3335d65414cb001f9de25986950', class: "relative" }, !this.trigger_id && (index.h("div", { key: '357a022a02bd7984a6b8904a3a5d1c467ee7eb48', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.mouseEnterHandler() : null, onMouseLeave: () => !this.disabled ? this.mouseLeaveHandler() : null }, index.h("slot", { key: '53967b972b21d09ce44890f857989a831ca066d8', name: "tooltip-trigger" }))), index.h("div", { key: '232b782b1ff0c73fe6b0d40ae298ca282143cbce', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "bg-surface-overlay/90 text-foreground-inv pointer-events-none w-fit rounded-md px-[6px] py-[2px] text-sm leading-tight break-words whitespace-normal opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, index.h("slot", { key: '0a1f605eaeaecf0de4a9ef071a4fcd6c5652059e' }))));
    }
    static get watchers() { return {
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};

exports.at_icon = AtIcon;
exports.at_tooltip = AtTooltip;
