'use strict';

var index = require('./index-B7bW4GPk.js');
var classlist = require('./classlist-BPb95vgj.js');

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-background text-active-foreground fill-active-foreground',
            false: 'text-foreground fill-foreground hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10',
        },
        disabled: {
            true: '!text-disabled !fill-disabled-foreground pointer-events-none',
            false: null,
        },
        hostDisabled: {
            true: '!text-disabled !fill-disabled-foreground pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist.classlist('focus-visible:border-active-accent focus-visible:ring-active-glow cursor-pointer relative flex items-center gap-4 rounded-input border border-solid border-transparent px-12 py-[6px] leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
const AtButtonGroupOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
    }
    /**
     * Value of the select option
     */
    value;
    /**
     * Displayed text value (optional) if not provided the value will be used as a fallback
     */
    label;
    /**
     * Will disable interaction if set
     */
    disabled;
    /**
     * Will apply active styling to the button
     */
    is_active;
    get el() { return index.getElement(this); }
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    host_disabled;
    provider;
    async componentDidLoad() {
        this.provider = this.el.closest('at-button-group');
        this.host_disabled = this.provider?.disabled;
    }
    handleClick(event) {
        if (this.disabled || this.host_disabled)
            return;
        if (!this.el.hasAttribute('data-ignore-selection')) {
            this.is_active = true;
        }
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-button-group-option',
            element: this.el,
        });
    }
    handleKeydown(event) {
        if (this.disabled || this.host_disabled)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleClick(event);
        }
    }
    hasIcon() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        return !!iconEl;
    }
    render() {
        const classname = getButtonClasses({
            active: this.is_active,
            disabled: this.disabled,
            hostDisabled: this.host_disabled,
        });
        const hasIcon = this.hasIcon();
        return (index.h(index.Host, { key: '955601a25b3765746b6fd506d793fe0ebf9412a8', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, "aria-disabled": this.disabled || this.host_disabled ? 'true' : undefined, onClick: (event) => this.handleClick(event), onKeyDown: (event) => this.handleKeydown(event), "data-name": "button-group-option" }, index.h("slot", { key: '2f78cfff33168442a15212b9c66c9df85aca4676', name: "icon", "data-name": "button-group-option-icon" }), index.h("slot", { key: '8ad43ed3863a6bc0b845c665a9f94a0f926ebf1c' }), this.label ? this.label : hasIcon ? '' : this.value, index.h("slot", { key: '6276a4ad35c19a8ba49220589eb36d912f167ab4', name: "after" })));
    }
};

exports.at_button_group_option = AtButtonGroupOption;
