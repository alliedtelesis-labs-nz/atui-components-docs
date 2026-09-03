import { r as registerInstance, a as getElement, h, H as Host } from './index-m_dTEvgo.js';

const AtTextBadgeCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    textValue;
    badgeTextValue;
    params;
    init(params) {
        this.applyParams(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.applyParams(params);
        return true;
    }
    applyParams(params) {
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
    render() {
        return (h(Host, { key: 'e014ab65332454e2369bf971519f79115b26516b', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '35bf19f135ce25a8d41128acd250328888fc5512', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '636af9bdeda0f4c6e602d46cd9becaeed1bdedc4', slot: "tooltip-trigger" }, h("span", { key: '1e6e47fe4e71738ce7c32b473050cffa70cc3f75', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '632e328c9e80c6c377e5b4f27fdbc4cd6acc6f6d', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '21ca992257272ab2b60a89200fce9c3c8a39586e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
