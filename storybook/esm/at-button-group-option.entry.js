import { r as registerInstance, c as createEvent, g as getElement, h } from './index-jvbUuQtg.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'text-dark',
        },
        disabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
        hostDisabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist('focus-visible:border-active-foreground focus-visible:ring-active-foreground/40 relative flex h-[30px] items-center gap-4 rounded-md border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-0', variantsConfig);
const AtButtonGroupOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
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
    get el() { return getElement(this); }
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    host_disabled;
    provider;
    async componentDidLoad() {
        this.provider = this.el.closest('at-button-group');
        this.host_disabled = this.provider.disabled;
    }
    handleClick(event) {
        this.is_active = true;
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
        return (h("button", { key: '380d0958f6206b48e8f2ab5e92dda3518b9f8bb4', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, this.icon && (h("span", { key: 'eff14609147b06bc4e2ea858629663e933b79dc7', class: `material-icons h-16 w-16 text-[16px] leading-[16px]`, "data-name": "button-group-option-icon" }, this.icon)), h("slot", { key: '51813b68700d4a2943181b2b240477a389e14a98', name: "icon" }), this.label ? this.label : this.icon ? '' : this.value));
    }
};

export { AtButtonGroupOption as at_button_group_option };
