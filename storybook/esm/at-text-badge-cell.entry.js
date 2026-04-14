import { r as registerInstance, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: '003e1a7fb74890f1a5755e2d6b9b18b97d063830', class: "flex h-full items-center" }, h("at-tooltip", { key: '06ce646943bf829e155c85283adf4d5a3aa094d1', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '4464228260e0ff0a0385060cdfe860eb099a45fb', slot: "tooltip-trigger" }, h("span", { key: 'bfbdb40cf06d5603bffe77267ef36b3b46557a82', class: "truncate" }, this.textValue), h("at-badge", { key: '77b024fd7581ed3e39f43ec3cfc786dde77a1737', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '823ce0f85e10995d9bc2ec365a02d8ff10521b90', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
