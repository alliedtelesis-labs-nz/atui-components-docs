import { p as proxyCustomElement, H, h, F as Fragment, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-CdUod9Pr.js';

const AtTextIconCell = /*@__PURE__*/ proxyCustomElement(class AtTextIconCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    text = '';
    params;
    update(params) {
        this.params = params;
        if (params.text) {
            this.text = params.text(params.data);
        }
        else {
            this.text = params.value?.toString() || '';
        }
    }
    init(params) {
        this.update(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.update(params);
        return true;
    }
    renderIcons() {
        return (h(Fragment, null, this.params.icons().map((icon) => (h("at-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        const iconPosition = this.params?.iconPosition || 'before';
        return (h(Host, { key: 'fb685cda6c37d2f3f843eda2082ac71f87e7a524', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: 'fbf0213885f6bb7fc9736a11a08ba57e68d9efa4', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
}, [256, "at-text-icon-cell", {
        "text": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-text-icon-cell", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-text-icon-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTextIconCell);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTextIconCell as A, defineCustomElement as d };
//# sourceMappingURL=p-C_0SP4IO.js.map

//# sourceMappingURL=p-C_0SP4IO.js.map