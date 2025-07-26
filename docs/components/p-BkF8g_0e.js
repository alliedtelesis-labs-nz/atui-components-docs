import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$5 } from './p-DpoOUufO.js';
import { d as defineCustomElement$4 } from './p-CHkT-iof.js';
import { d as defineCustomElement$3 } from './p-FL7N6jaz.js';
import { d as defineCustomElement$2 } from './p-CFJFBWez.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h(Host, { key: 'caf59aa9ed7d4b177a48659a7ecdabe06a233561', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: 'e54de53498e7acc59a5d4406e06dc8f5e691da89', width: "auto", position: "left", portal: true }, h("atui-button", { key: '974ff119136def020b107d141f2500b44dde5728', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: '27702ed466dfe5d6782f9e1bd53d791373c3fdde', slot: "menu-content", class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("atui-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", { slot: "tooltip-content" }, action.disabledTooltip))) : (h("atui-menu-item", { label: action.title, disabled: action.disabled
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
//# sourceMappingURL=p-BkF8g_0e.js.map

//# sourceMappingURL=p-BkF8g_0e.js.map