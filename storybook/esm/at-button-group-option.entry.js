import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DR-CD1o0.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-background text-active-foreground',
            false: 'text-foreground hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10',
        },
        disabled: {
            true: '!text-disabled pointer-events-none',
            false: null,
        },
        hostDisabled: {
            true: '!text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist('focus-visible:border-active-accent focus-visible:ring-active-glow cursor-pointer relative flex items-center gap-4 rounded-input border border-solid border-transparent px-12 py-[4px] leading-none font-normal transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
        this.host_disabled = this.provider?.disabled;
    }
    get inMultipleGroup() {
        return !!this.el.closest('at-button-group')?.multiple;
    }
    handleClick(event) {
        if (this.disabled || this.host_disabled)
            return;
        if (!this.el.hasAttribute('data-ignore-selection') &&
            !this.inMultipleGroup) {
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
        return (h(Host, { key: 'b0ef8cd426fc30ccd105f88e7856119196c61918', class: classname, role: this.inMultipleGroup ? 'checkbox' : 'radio', tabindex: 0, "aria-checked": this.is_active ? 'true' : 'false', "aria-disabled": this.disabled || this.host_disabled ? 'true' : undefined, onClick: (event) => this.handleClick(event), onKeyDown: (event) => this.handleKeydown(event), "data-name": "button-group-option" }, h("slot", { key: '765e643b524d697f7ff692457d1db1cd9dc8387f', name: "icon", "data-name": "button-group-option-icon" }), h("slot", { key: '5811efe8fc21a71b590c36fdccb9c500fccec72c' }), this.label ? this.label : hasIcon ? '' : this.value, h("slot", { key: '0d2e29c34fa5c5ef6195e90c81d3f68a4de81ec5', name: "after" })));
    }
};

export { AtButtonGroupOption as at_button_group_option };
