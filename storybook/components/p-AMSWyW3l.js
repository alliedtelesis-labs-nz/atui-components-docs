import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

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
const AtButtonGroupOption = /*@__PURE__*/ proxyCustomElement(class AtButtonGroupOption extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * ID of the button element and its option
     */
    option_id;
    /**
     * String to be displayed in the button
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
    get el() { return this; }
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
        return (h("button", { key: 'c43b13e3406f8acdf1492307cd0beea5b1f3ec24', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, this.icon && (h("span", { key: '002da095895a32efc83eeeec21efacb65872efa9', class: `material-icons h-16 w-16 text-[16px] leading-[16px]`, "data-name": "button-group-option-icon" }, this.icon)), h("slot", { key: 'bbd3785e38a054044d3cb6f192643707a55c4781', name: "icon" }), this.label));
    }
}, [260, "at-button-group-option", {
        "option_id": [1],
        "label": [1],
        "icon": [1],
        "disabled": [4],
        "is_active": [4],
        "host_disabled": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-button-group-option"];
    components.forEach(tagName => { switch (tagName) {
        case "at-button-group-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtButtonGroupOption);
            }
            break;
    } });
}

export { AtButtonGroupOption as A, defineCustomElement as d };
//# sourceMappingURL=p-AMSWyW3l.js.map

//# sourceMappingURL=p-AMSWyW3l.js.map