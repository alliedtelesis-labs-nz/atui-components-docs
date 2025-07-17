import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$5 } from './p-BkUGamka.js';
import { d as defineCustomElement$4 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$3 } from './p-DrInZzUc.js';
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
        return (h(Host, { key: '809243d67aee34d28410b68e86ae9dd8bb9c27e5', class: "flex h-full items-center gap-4" }, this.params.value && h("span", { key: 'd95e5d85d7b7f9777015773cf98688adba1f5c0a' }, this.params.value), h("atui-menu", { key: '355a60632a43905ed58668b9172eddc81d95f9dd' }, h("atui-button", { key: '683c9ecd748ed5499e383c448b6527aa134ddd25', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'de723058c933eadc7da2b62dac1f1d1b275384ed', slot: "menu-content", class: "flex max-h-120 w-full flex-col overflow-auto" }, this.params.actions &&
            this.params.actions.map((action) => {
                var _a;
                return typeof action === 'object' ? (h("atui-tooltip", { is_visible: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false }, "sssssssss", h("atui-button", { class: "w-full *:justify-start", type: "secondaryText", label: action.title, slot: "tooltip-trigger", disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
                        : false, onClick: (params) => {
                        if (action.onTrigger !==
                            undefined)
                            action.onTrigger(params);
                    } }), h("span", { slot: "tooltip-content" }, (_a = action.disabledTooltip) !== null && _a !== void 0 ? _a : ''))) : (h("span", { class: "py-4" }, "sssssssss", action));
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