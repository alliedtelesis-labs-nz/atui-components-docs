import { r as registerInstance, a as getElement, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: '4afd9872a720a6d074130a8b7cf127a315682876', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'efc0d5aaabdbc6569e55db5c19b381d23fc421de', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'd1b8855068d09d596250b16c43155046d7779052', slot: "tooltip-trigger" }, h("span", { key: 'cc7060e2a34b264264b51ccd3882ca05fb4efd2e', class: "truncate" }, this.textValue), h("at-badge", { key: '8707551e8ac9937fd10f2faa25d202edca20b14f', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '15f10fe890017fda99b5943000a274e602043843', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
