import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$3 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$2 } from './p-pDYyfeah.js';
import { d as defineCustomElement$1 } from './p-BUjvE2eq.js';

const AtMultiBtnCell = /*@__PURE__*/ proxyCustomElement(class AtMultiBtnCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        const { containerStyles, buttons } = this.params;
        this.containerStyles = containerStyles;
        this.buttons =
            typeof buttons === 'function' ? buttons(params) : buttons;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
    }
    handleClick(btn) {
        return btn.click && btn.click(this.params);
    }
    get buttonsToRender() {
        return this.buttons.map((button) => {
            return (h("at-tooltip", { position: "right", disabled: !button.tooltip }, button && (h("at-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (h("span", { class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (h(Host, { key: '5e869e148e5c3ee3bd8984a022a6b4cec97c2942', class: "flex h-full items-center" }, this.buttonsToRender));
    }
    get el() { return this; }
}, [256, "at-multi-btn-cell", {
        "params": [32],
        "buttons": [32],
        "containerStyles": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-multi-btn-cell", "at-button", "at-loading", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-multi-btn-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtMultiBtnCell);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtMultiBtnCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CjPV6FTJ.js.map

//# sourceMappingURL=p-CjPV6FTJ.js.map