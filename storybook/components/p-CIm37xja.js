import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$5 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$4 } from './p-bn76tgB4.js';
import { d as defineCustomElement$3 } from './p-DHT6iuTT.js';
import { d as defineCustomElement$2 } from './p-Bze1hNPA.js';
import { d as defineCustomElement$1 } from './p-DOs9EXMS.js';

const AtMenuCell = /*@__PURE__*/ proxyCustomElement(class AtMenuCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    params;
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
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: '3fa580a477f5e8ea1e6bad081757511ff0b0a051', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '567378f1fb1e253e01d3448bf0e3458759940bd5', width: "fit-content", position: "left" }, h("at-button", { key: 'ee006285f231543d187638cf355e5a24f9061495', type: "secondaryText", icon: this.params.icon ?? 'more_vert', slot: "menu-trigger" }), h("div", { key: '2723278d7f03a67d4a411edd0f974cb5fca4d0fe', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("at-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("at-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("at-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
}, [256, "at-menu-cell", {
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-menu-cell", "at-button", "at-loading", "at-menu", "at-menu-item", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-menu-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtMenuCell);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-menu-item":
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

export { AtMenuCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CIm37xja.js.map

//# sourceMappingURL=p-CIm37xja.js.map