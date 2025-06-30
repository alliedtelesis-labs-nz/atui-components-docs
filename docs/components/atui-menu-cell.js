import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$5 } from './p-CNIPth1r.js';
import { d as defineCustomElement$4 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$3 } from './p-BlC_9xQ9.js';
import { d as defineCustomElement$2 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: '16fbfee3c2074bc24787ba07303bae75cefad817', class: "flex h-full items-center gap-4" }, this.params.value && h("span", { key: 'b21ba6be2820fa15b50a89772c1acbacf0e7ea3a' }, this.params.value), h("atui-menu", { key: '43ceeb55d07dc0144698598b3f739256fb286273' }, h("atui-button", { key: '15032f4a68816316136664fa33b988546a0f96f2', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'beb826895327152cf7352850ae6c2a7e884a9959', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
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