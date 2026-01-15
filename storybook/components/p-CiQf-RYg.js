import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$2 } from './p-BRoK1DxF.js';
import { d as defineCustomElement$1 } from './p-BlmpD1px.js';

const AtTextBadgeCell = /*@__PURE__*/ proxyCustomElement(class AtTextBadgeCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    textValue;
    badgeTextValue;
    params;
    init(params) {
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = params.value?.text || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = params.value?.badgeText || '';
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(String(params.value));
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.textValue = this.params.value;
    }
    render() {
        return (h(Host, { key: 'e4dd3283ddcd2e28255ee1c0f115ca143e349c60', class: "flex h-full items-center" }, h("at-tooltip", { key: 'c41279e16e12d6cfe26b3ecac3802e604f38e4ff', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '09deda0fabffc1f9b1280ecffac65bb0664b7822', slot: "tooltip-trigger" }, h("span", { key: '7a9fe4d0600eaade3b326b705795bd015a3e6adf', class: "truncate" }, this.textValue), h("at-badge", { key: '074d494c81886d35ab901c7f913b417064f6fc67', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '4cd2fc4daf2320817825dea49a9e7f1e1bdd4da1', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
}, [256, "at-text-badge-cell", {
        "textValue": [32],
        "badgeTextValue": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-text-badge-cell", "at-badge", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-text-badge-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTextBadgeCell);
            }
            break;
        case "at-badge":
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

export { AtTextBadgeCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CiQf-RYg.js.map

//# sourceMappingURL=p-CiQf-RYg.js.map