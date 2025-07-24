import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$5 } from './p-VjTTylTi.js';
import { d as defineCustomElement$4 } from './p-CHkT-iof.js';
import { d as defineCustomElement$3 } from './p-q1ydcm97.js';
import { d as defineCustomElement$2 } from './p-CJ-aC1Eo.js';
import { d as defineCustomElement$1 } from './p-DRSCT2MW.js';

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
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'ea3e0e66b77252986740d179645cf27ab7f6faaf', class: "flex h-full items-center gap-4" }, h("atui-menu", { key: 'c870a7e7a2198f458c893aed9c1e56b92941be63', width: "auto", portal: true }, h("atui-button", { key: 'eeeade5554c540c931103ec7970545816f538b11', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: 'a6644d2a49fbd756a26284ecfab7b951936f0df5', slot: "menu-content", class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.getDisabled &&
                    action.getDisabled(this.params.data) &&
                    action.disabledTooltip ? (h("atui-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("atui-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", { slot: "tooltip-content" }, action.disabledTooltip))) : (h("atui-menu-item", { label: action.title, disabled: action.getDisabled
                        ? action.getDisabled(this.params.data)
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

export { AtuiMenuCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-MXgaENgg.js.map

//# sourceMappingURL=p-MXgaENgg.js.map