import { r as registerInstance, a as getElement, h, H as Host } from './index-46ti_ijN.js';

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
        return (h(Host, { key: 'fd2b0fa51a0ebbc26423a85a33e58cefa581ee98', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'e40663c9a27224736546eabfaed612f0aba18a26', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '7f22041f0368013dedfcb9bd486d06753bd830f2', slot: "tooltip-trigger" }, h("span", { key: '04a4666f3aecaf1298e6e8c9cc0d84b21d316a11', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: 'f60d2ac6bf71f62e9ae5d01407e06c904ff0a7ed', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: 'f086d4156bb571568419380cba47eda1619b1afe', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTextBadgeCell as at_text_badge_cell };
