import { p as proxyCustomElement, H, d as createEvent, h } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

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
    constructor() {
        super();
        this.__registerHost();
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
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
        return (h("button", { key: '96906f6753e18011b80594a1d4acd3a8dae6eee9', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, h("slot", { key: '173611a4c1c2d028b342c61a665443734d6cc187', name: "icon" }), this.label));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-C-N_4Z35.js.map

//# sourceMappingURL=p-C-N_4Z35.js.map