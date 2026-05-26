import { h, Host, Fragment } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a text with icons, Text is optional and multiple icons are supported.
 */
export class AtTextIconCell {
    el;
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
        return (h(Host, { key: '1ecc83424f7481a9a2d2b6efe19e99e30092bdf5', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: '153e98f20dc6a4c904e1941ef31268e6b4c6ee03', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    static get is() { return "at-text-icon-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
