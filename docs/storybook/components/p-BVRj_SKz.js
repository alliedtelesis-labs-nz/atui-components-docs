import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$3 } from './p-DRPzh5AP.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

const AtuiMultiBtnCell = /*@__PURE__*/ proxyCustomElement(class AtuiMultiBtnCell extends H {
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
            return (h("atui-tooltip", { position: "right", is_visible: !!button.tooltip }, button && (h("atui-button", { type: "secondaryText", label: button.value, disabled: button.disabled, "data-name": button.dataNameValue, onAtuiClick: () => this.handleClick(button) })), button && button.tooltip && (h("span", { slot: "tooltip-content", class: `leading-normal` }, button.tooltip))));
        });
    }
    render() {
        return (h(Host, { key: 'fe7f8d2feae47f8994719018d48ae1c0d70e99ca', class: "flex h-full items-center" }, this.buttonsToRender));
    }
    get el() { return this; }
}, [256, "atui-multi-btn-cell", {
        "params": [32],
        "buttons": [32],
        "containerStyles": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-multi-btn-cell", "atui-button", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-multi-btn-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMultiBtnCell);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiMultiBtnCell as A, defineCustomElement as d };
//# sourceMappingURL=p-BVRj_SKz.js.map

//# sourceMappingURL=p-BVRj_SKz.js.map