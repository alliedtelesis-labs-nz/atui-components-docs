import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$5 } from './p-CAIgKcTX.js';
import { d as defineCustomElement$4 } from './p-pDYyfeah.js';
import { d as defineCustomElement$3 } from './p-BvmILoSj.js';
import { d as defineCustomElement$2 } from './p-DgztXL-J.js';
import { d as defineCustomElement$1 } from './p-BUjvE2eq.js';

const AtMenuCell = /*@__PURE__*/ proxyCustomElement(class AtMenuCell extends H {
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
        return (h(Host, { key: 'bd300270c67975fde2f3ccbe7ebae7aa3496051d', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'b9db80c9ba133e540f9169a967db7d33d70e2606', width: "fit-content", position: "left" }, h("at-button", { key: 'ae607ed6a1d227f589ff053f9b099b3240a1e46a', type: "secondaryText", icon: (_a = this.params.icon) !== null && _a !== void 0 ? _a : 'more_vert', slot: "menu-trigger" }), h("div", { key: '1e87677cf5cbc15ac5493ac45db147a517fa7987', class: "flex flex-col" }, actions &&
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
    get el() { return this; }
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
//# sourceMappingURL=p-9STyUv9n.js.map

//# sourceMappingURL=p-9STyUv9n.js.map