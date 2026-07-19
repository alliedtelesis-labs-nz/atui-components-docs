import { r as registerInstance, a as getElement, h, H as Host } from './index-jCYcKtgi.js';

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
        return (h(Host, { key: '020fd994d9e3128b24e6badb6d0208db239156bc', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '819b263a88d774adf5a93ebb7e38e5a8887bba7e', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '3fccf8baba6a96b0d4d99edf1b0c345de6a38888', slot: "tooltip-trigger" }, h("span", { key: 'df407aebf6713a383b3344dbca1ab87039b14f79', class: "truncate" }, this.textValue), h("at-badge", { key: 'a2e7ac677b50ec1e039fd27557be1de291c2aecb', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '16dc09e2874632ad220bee9fc5496bf0d28c6f2a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
