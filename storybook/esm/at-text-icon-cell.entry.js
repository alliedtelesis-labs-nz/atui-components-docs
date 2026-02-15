import { r as registerInstance, g as getElement, h, F as Fragment, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Fragment, null, this.params.icons().map((icon) => (h("at-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        const iconPosition = this.params?.iconPosition || 'before';
        return (h(Host, { key: 'db45e60f084f5abf4aa64d09ed9581004614f3f1', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: '35f5a053fd87d2193775d28319e22567a2a64135', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
};

export { AtTextIconCell as at_text_icon_cell };
