import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$5 } from './p-CSzRt9NY.js';
import { d as defineCustomElement$4 } from './p-DBWEgk0R.js';
import { d as defineCustomElement$3 } from './p-BNd1Uawm.js';
import { d as defineCustomElement$2 } from './p-w6M_F7mA.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

const AtuiMenuCell = /*@__PURE__*/ proxyCustomElement(class AtuiMenuCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return false;
    }
    render() {
        var _a;
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: '089d357a69e76344f97728ff867b919fcf29ae56', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: '82bf7201d1d02722345ff4b2bf368d6c201f6ced', width: "fit-content", position: "left" }, h("atui-button", { key: '7b0080efe87bf05800e43b8f6482ed65e31b8df9', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: '53645427abd324f0ed039fbe1339f3263309dcb4', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("atui-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("atui-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    get el() { return this; }
}, [256, "atui-menu-cell", {
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-menu-cell", "atui-button", "atui-loading", "atui-menu", "atui-menu-item", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-menu-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMenuCell);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-menu-item":
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

export { AtuiMenuCell as A, defineCustomElement as d };
//# sourceMappingURL=p-Dw42-CGz.js.map

//# sourceMappingURL=p-Dw42-CGz.js.map