import { r as registerInstance, a as getElement, h, H as Host } from './index-DgqokAJi.js';

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
        return (h(Host, { key: '568cdb41f88da0e6daf4d59b2cff031e7964dfb0', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'aa68b67def2bd0b0fbdd976e5267c6499429706b', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '9dffc4af432583334437747c2ae8c998dc21c74b', slot: "tooltip-trigger" }, h("span", { key: '4fbcabe1cfe4586fdd4330739bf21990c6164594', class: "truncate" }, this.textValue), h("at-badge", { key: 'c542e07c6001501004e23d8d2ce80400065a4066', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '6f66302af5082dd7f810e6517e98ca104701be8e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
