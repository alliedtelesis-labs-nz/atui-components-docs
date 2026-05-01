import { r as registerInstance, h, g as getElement, H as Host } from './index-BAAX2Der.js';
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
        return (h("div", { key: '36becc88fe0694450a7cf2de15c1ba5f68ce3914', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '66ad8fb533e97f67094bf3897df4c894441f9a58', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '2c7d728a1ddbffe2f6eda5d015d1f311f08e1039', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: 'b890a9f88524b84e71fc60b9e9bab98f26ec8e5f', position: "right" }, h("at-icon", { key: '97b26a3eebff76dcadda784a546eca402effa240', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '607d0735a427bdf064097330fdd0c7ab15c05011' }, this.info_text))),
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
        return (h(Host, { key: '8a9606dc4803389fce65db50e9e30e49911a17f1', class: "relative" }, !this.trigger_id && (h("div", { key: '8264f8115e2b19cbf317ad46b25363925bd61d4c', "aria-haspopup": "true", "data-name": "tooltip-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, class: this.disabled ? 'contents' : '', onMouseEnter: () => !this.disabled ? this.mouseEnterHandler() : null, onMouseLeave: () => !this.disabled ? this.mouseLeaveHandler() : null }, h("slot", { key: '055c12142bc65c81edbfae1166b549bd6136aa5e', name: "tooltip-trigger" }))), h("div", { key: '44b1d0d45f74840164ca1cd03a2c83f2bfeab6a4', ref: (el) => (this.tooltipEl = el), "data-position": this.position, "data-align": this.align, popover: "auto", id: this.popoverId, class: "bg-surface-overlay/90 text-foreground-inv pointer-events-none w-fit rounded-md px-[6px] py-2 text-sm opacity-0 shadow-md transition-opacity duration-200 ease-out", "data-name": "tooltip-content-wrapper" }, h("slot", { key: 'f79fbc975675063a0d295c606d74d7e36bf8f93f' }))));
    }
    static get watchers() { return {
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};

export { AtFormLabelComponent as at_form_label, AtTooltip as at_tooltip };
