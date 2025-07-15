import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$5 } from './p-BOygyBmB.js';
import { d as defineCustomElement$4 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$3 } from './p-CDm6COvb.js';
import { d as defineCustomElement$2 } from './p-IMVeGR0G.js';

const AtuiMenuCellComponent = /*@__PURE__*/ proxyCustomElement(class AtuiMenuCellComponent extends H {
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
    refresh(_) {
        return false;
    }
    render() {
        var _a;
        return (h(Host, { key: '29bc6c5b3d5de13fbfae0f16a786d56c9fb62dba', class: "flex h-full items-center gap-4" }, this.params.value && h("span", { key: '32125c9e14d19bbd62aeac56f6f390419b8a9eb9' }, this.params.value), h("atui-menu", { key: 'd958befd2705c78264f209dcf890b94ac29709a5' }, h("atui-button", { key: 'ba46826631e0413b2d32f4c887b4048ce5044206', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'cbe95a4ba046f059818f7180df90886a6fdab18c', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
            this.params.actions.map((action) => {
                var _a;
                return typeof action === 'object' ? (h("atui-tooltip", { is_visible: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false }, h("atui-button", { class: "w-full *:justify-start", type: "secondaryText", label: action.title, slot: "tooltip-trigger", disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false, onClick: (params) => {
                        if (action.onTrigger !==
                            undefined)
                            action.onTrigger(params);
                    } }), h("span", { slot: "tooltip-content" }, (_a = action.disabledTooltip) !== null && _a !== void 0 ? _a : ''))) : (h("span", { class: "py-4" }, action));
            })))));
    }
    get el() { return this; }
}, [0, "atui-menu-cell", {
        "params": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-menu-cell", "atui-button", "atui-loading", "atui-menu", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-menu-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMenuCellComponent);
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
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiMenuCell = AtuiMenuCellComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiMenuCell, defineCustomElement };
//# sourceMappingURL=atui-menu-cell.js.map

//# sourceMappingURL=atui-menu-cell.js.map