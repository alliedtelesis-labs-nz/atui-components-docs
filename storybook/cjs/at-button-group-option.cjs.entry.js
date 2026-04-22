'use strict';

var index = require('./index--r5sCsiV.js');
var classlist = require('./classlist-BPb95vgj.js');

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-accent/20 text-active-accent fill-active-accent',
            false: 'text-foreground hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10',
        },
        disabled: {
            true: 'text-disabled-foreground hover:text-disabled-foreground pointer-events-none',
            false: null,
        },
        hostDisabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist.classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
     * Icon to be displayed in the button
     */
    icon;
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
        if (!this.el.hasAttribute('data-ignore-selection')) {
            this.is_active = true;
        }
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-button-group-option',
            element: this.el,
        });
    }
    render() {
        const classname = getButtonClasses({
            active: this.is_active,
            disabled: this.disabled,
            hostDisabled: this.host_disabled,
        });
        return (index.h("button", { key: '212c1e34d600fd3d105109ff07c26fd911ffcf71', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, this.icon && (index.h("span", { key: '9ebbaa3eb50c925a4a07c7da0e6c1eab25c4e525', class: `material-icons h-16 w-16 text-[16px] leading-[16px]`, "data-name": "button-group-option-icon" }, this.icon)), index.h("slot", { key: 'ba0aea4b735c88033727cde2f2b324b95319defe', name: "icon" }), index.h("slot", { key: '50fa53637a7b1f31a6a057a5cd462bf25867ef8c' }, this.label ? this.label : this.icon ? '' : this.value)));
    }
};

exports.at_button_group_option = AtButtonGroupOption;
