import { r as registerInstance, a as getElement, h, H as Host } from './index-DTnhfVT-.js';

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
        return (h(Host, { key: '23b81ca64e4d45439f60f3837200eb596067735d', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '02a02c145b93b305aedd05ad0f832186a2f6a3e2', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'c6b10ef91735b9ec056a6695f07710bceac07a1e', slot: "tooltip-trigger" }, h("span", { key: 'e00e94246877d5409e3a24544f7b884ef7e1daa5', class: "truncate" }, this.textValue), h("at-badge", { key: '9261d9b7dbae8ebb6ee1b9ca4927028ce325978a', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '5bcbb54dde2b2d69eb99808e0a4b3db66cf2013f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
