import { p as proxyCustomElement, H, d as createEvent, h } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('relative flex h-[30px] items-center gap-4 rounded-md border border-solid border-transparent px-12 py-8 font-normal leading-none outline-none transition-colors duration-300 ease-in-out focus-visible:border-active-foreground focus-visible:ring-2 focus-visible:ring-active-foreground/40 focus-visible:ring-offset-0', {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'text-dark',
        },
        disabled: {
            true: 'pointer-events-none text-disabled hover:text-disabled',
            false: null,
        },
        hostDisabled: {
            true: 'pointer-events-none text-disabled hover:text-disabled',
            false: null,
        },
    },
});
const AtuiButtonGroupOption = /*@__PURE__*/ proxyCustomElement(class AtuiButtonGroupOption extends H {
    constructor() {
        super();
        this.__registerHost();
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
        const classname = variants({
            active: this.is_active,
            disabled: this.disabled,
            hostDisabled: this.host_disabled,
        });
        return (h("button", { key: 'd1713457c8507a9b5ec90c9572fdadfad89f43db', class: classname, role: "radio", tabindex: 0, "aria-checked": this.is_active, disabled: this.disabled, onClick: (event) => this.handleClick(event), "data-name": "button-group-option", type: "button" }, h("slot", { key: '641078dd6226545a1744d4c79f44bc64629d6fde', name: "icon" }), this.label));
    }
    get el() { return this; }
}, [260, "atui-button-group-option", {
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
    const components = ["atui-button-group-option"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-button-group-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiButtonGroupOption);
            }
            break;
    } });
}

export { AtuiButtonGroupOption as A, defineCustomElement as d };
//# sourceMappingURL=p-B3M5mbQv.js.map

//# sourceMappingURL=p-B3M5mbQv.js.map