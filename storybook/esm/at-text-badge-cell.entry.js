import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

const AtTextBadgeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'b398f8f7bef648d7b5e0df0150c20b43db0f03cf', class: "flex h-full items-center" }, h("at-tooltip", { key: '64b05341d53ef60785fdac28194e76d23eb79277', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: 'f1f5f4bf6a132ff6ba17453bac55a8081792bdd8', slot: "tooltip-trigger" }, h("span", { key: '2891762d90543039d4f0f7efdf94605d45cefade', class: "truncate" }, this.textValue), h("at-badge", { key: '762fcfc28d44c65e482de052b77375a98fd9b5ad', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '2657ca892575c5c84daaee95a72d70c7e29b836e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
