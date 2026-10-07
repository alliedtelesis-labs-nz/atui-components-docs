import { r as registerInstance, a as getElement, h, H as Host } from './index-Cw-6gA7Z.js';

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
        return (h(Host, { key: '84aac9a5a8dc641ace602b7066aadc3f0e7d7ebd', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '8d1d9330fa3c02bda66b2c123c75e58aaeaed375', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '4543a5aed1ab1a736cd2d6d5e45b609d44fc5ca3', slot: "tooltip-trigger" }, h("span", { key: '560d4b78f7838ae017a3202b0b1656b79d418a05', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '66b306230c0919069fc4a461a841cddd8086d825', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '1226443775c479d82c21333a546efebeb134ba21', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
