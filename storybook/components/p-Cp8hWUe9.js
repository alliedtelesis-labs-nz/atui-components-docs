import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$2 } from './p-BRoK1DxF.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

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
        return (h(Host, { key: 'b0dd0198f9d0c957c93569525a5d0b20bdcd0b5a', class: "flex h-full items-center" }, h("at-tooltip", { key: 'b4a1af0da0c25af81c756117efd370f03360e272', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: 'f80394e5b3d7aa3d49757cc2e5ddf772151f8eb1', slot: "tooltip-trigger" }, h("span", { key: '78ccc1ce25d97a52b99f151f4070bdb57853690a', class: "truncate" }, this.textValue), h("at-badge", { key: 'e2fdc77fa3c186ed356d817cdb164019f8c9cdd0', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: 'c3b9a27ecffca7a505fdc878a90815d9c5a401a3', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-Cp8hWUe9.js.map

//# sourceMappingURL=p-Cp8hWUe9.js.map