import { p as proxyCustomElement, H, h, c as Host } from './p-BRRmBK9P.js';
import { d as defineCustomElement$2 } from './p-HlugIoZb.js';
import { d as defineCustomElement$1 } from './p-CB1W_yTO.js';

const AtTextBadgeCell = /*@__PURE__*/ proxyCustomElement(class AtTextBadgeCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    init(params) {
        var _a, _b;
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.text) || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = ((_b = params.value) === null || _b === void 0 ? void 0 : _b.badgeText) || '';
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
        var _a;
        return (h(Host, { key: 'b0dd0198f9d0c957c93569525a5d0b20bdcd0b5a', class: "flex h-full items-center" }, h("at-tooltip", { key: 'b4a1af0da0c25af81c756117efd370f03360e272', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: 'f80394e5b3d7aa3d49757cc2e5ddf772151f8eb1', slot: "tooltip-trigger" }, h("span", { key: '78ccc1ce25d97a52b99f151f4070bdb57853690a', class: "truncate" }, this.textValue), h("at-badge", { key: 'e2fdc77fa3c186ed356d817cdb164019f8c9cdd0', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (h("span", { key: 'c3b9a27ecffca7a505fdc878a90815d9c5a401a3', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-BY5nI3vq.js.map

//# sourceMappingURL=p-BY5nI3vq.js.map