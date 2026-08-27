import { r as registerInstance, a as getElement, h, H as Host } from './index-lWb16Ay7.js';

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
        return (h(Host, { key: 'e7172b4be2680c7811e226ee4049d19d5e6ec2eb', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '2b4d61dc3dba435da6cd03f750bb725e02720e1a', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'e77c5bcefb8cb81766cbe17056bc7b6a8b4bd154', slot: "tooltip-trigger" }, h("span", { key: '16840e6c8b7093f6011ad91d55c004afcc7e8da2', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '996431e801b271cfbd437c2d1a3d294d4e9ba2cb', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '92f21855eb848d10b6f5367b22490739e7c1be2e', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
