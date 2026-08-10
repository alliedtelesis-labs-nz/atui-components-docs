import { r as registerInstance, a as getElement, h, H as Host } from './index-HD-uhvb8.js';

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
        return (h(Host, { key: '623fcda9f6f8fdaf145e924021b5096cea99ca3e', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '21fd04d8db70611540ee70da4375fd67271015eb', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '37174873fde3b9d7b36664f13a955543c036f971', slot: "tooltip-trigger" }, h("span", { key: '9983be9c6d9ab4cbfd5e5c343d3f19925eb80c4a', class: "truncate" }, this.textValue), h("at-badge", { key: '286a63a525230ded0a464e79109c36fcd7a3bd61', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '6a741a2d7b6d8e8185ddea295db09daedddb103f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
