import { r as registerInstance, a as getElement, h, F as Fragment, H as Host } from './index-CGGSFxDu.js';

const AtTextIconCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    text = '';
    params;
    update(params) {
        this.params = params;
        if (params.text) {
            this.text = params.text(params.data);
        }
        else {
            this.text = params.value?.toString() || '';
        }
    }
    init(params) {
        this.update(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.update(params);
        return true;
    }
    renderIcons() {
        return (h(Fragment, null, this.params.icons(this.params.data).map((icon) => (h("at-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("at-icon", { name: icon.iconName, size: "16px", class: icon.iconClass })), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        const iconPosition = this.params?.iconPosition || 'before';
        return (h(Host, { key: '10fd4c64c9d78e40f6a4eb4b212c1d54aea25693', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: '120f43f1599dec026f937e08f536a9935678ccab', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
};

export { AtTextIconCell as at_text_icon_cell };
