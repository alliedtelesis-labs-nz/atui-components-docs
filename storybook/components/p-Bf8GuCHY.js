import { p as proxyCustomElement, H, d as createEvent, h } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

const optionVariantsConfig = {
    variants: {
        active: {
            true: 'bg-active-light text-active',
            false: 'hover:bg-disabled-light bg-white',
        },
    },
};
const AtSelectOptionComponent = /*@__PURE__*/ proxyCustomElement(class AtSelectOptionComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * Value of the select option
     */
    value;
    /**
     * Will apply the active styling to the select option
     */
    is_active = false;
    /**
     * Emitted when the select option is clicked
     */
    atuiClick;
    handleClick() {
        this.atuiClick.emit(this.value);
    }
    render() {
        const getOptionClassname = classlist('transition[background-color,color,box-shadow] text-body focus:ring-active-foreground/40 flex w-full cursor-pointer items-center truncate p-8 font-normal duration-300 ease-in-out focus:ring-2 focus:outline-0 focus:ring-inset', optionVariantsConfig);
        const classname = getOptionClassname({
            active: this.is_active,
        });
        return (h("li", { key: '1ab83ae80e7e9c378ca57396ec16c75848ae6f3c', role: "option", value: this.value, "data-name": "select-option", "aria-selected": this.is_active ? 'true' : 'false', tabIndex: 0, class: classname, onClick: () => this.handleClick() }, h("slot", { key: '132f04858348182949c664d379e92f8aa14268ae' }), this.value));
    }
}, [260, "at-select-option", {
        "value": [1],
        "is_active": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-select-option"];
    components.forEach(tagName => { switch (tagName) {
        case "at-select-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtSelectOptionComponent);
            }
            break;
    } });
}

export { AtSelectOptionComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-Bf8GuCHY.js.map

//# sourceMappingURL=p-Bf8GuCHY.js.map