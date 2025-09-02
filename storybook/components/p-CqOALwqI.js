import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { d as defineCustomElement$5 } from './p-BkB7yMfB.js';
import { d as defineCustomElement$4 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$3 } from './p-C6qlH9rK.js';
import { d as defineCustomElement$2 } from './p-CgHJSbcg.js';
import { d as defineCustomElement$1 } from './p-CSWbCoPk.js';

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
        return (h(Host, { key: 'caf59aa9ed7d4b177a48659a7ecdabe06a233561', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: '29303460a13593a3a90b74b824b4e8a2045d0543', width: "fit-content", position: "left" }, h("atui-button", { key: 'febfeb579c929313f0d2df9bf56c4348ed53d205', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: '2aae9cb01fc39e1ddc1db2f428002857b2a24620', class: "flex flex-col" }, actions &&
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
//# sourceMappingURL=p-CqOALwqI.js.map

//# sourceMappingURL=p-CqOALwqI.js.map