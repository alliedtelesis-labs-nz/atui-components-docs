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
        return (h(Host, { key: 'd9c73e1b87c29c063a0db6d8f965f68cf37f0b6b', class: "flex h-full items-center" }, h("at-tooltip", { key: 'e443d59a1d523c047b305ae2e72f781143ef72f9', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '97cf15aa63abd961fcf0ba1d1693848fbc94a789', slot: "tooltip-trigger" }, h("span", { key: 'd841a42735157534bce56e7f8b4f72484daf49dd', class: "truncate" }, this.textValue), h("at-badge", { key: 'c84b899492cfab93504eb5c7ca2b2037c6a430dc', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '0fa9e86982d08c458c48242a72422a8614fcf881', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
