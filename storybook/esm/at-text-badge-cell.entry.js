import { r as registerInstance, a as getElement, h, H as Host } from './index-BQWIFs0G.js';

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
        return (h(Host, { key: '2b67f22eb224f55ed708f6a3034a4a0a341ff90c', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '7806218a43a773039d5ec6982a1e79e322e6bcc9', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '7c87cefb5adc097d49cf3c6afca813458a74fbd1', slot: "tooltip-trigger" }, h("span", { key: '242dfb68f0751359081674c271397f9d88edeb81', class: "truncate" }, this.textValue), h("at-badge", { key: 'd152ed1f871fec1f77b405ab38269b161afe7b41', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '142ccf2f41079c7f105fbc5511a94da8b421bc3d', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
