import { r as registerInstance, c as createEvent, h, g as getElement } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

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
const AtuiButtonGroupOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    async componentDidLoad() {
        this.provider = this.el.closest('atui-button-group');
        this.host_disabled = this.provider.disabled;
    }
    handleClick(event) {
        this.is_active = true;
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'atui-button-group-option',
            element: this.el,
        });
    }
    render() {
        const classname = getButtonClasses({
            active: this.is_active,
            disabled: this.disabled,
            hostDisabled: this.host_disabled,
        });
        return (h("button", { key: '05ec6f2cf1830837f1836ff2d511d29643fb08fa', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, h("slot", { key: '6ad59961158ca3eb03b51725f574f0de3b5a6cda', name: "icon" }), this.label));
    }
    get el() { return getElement(this); }
};

export { AtuiButtonGroupOption as atui_button_group_option };
//# sourceMappingURL=atui-button-group-option.entry.js.map

//# sourceMappingURL=atui-button-group-option.entry.js.map