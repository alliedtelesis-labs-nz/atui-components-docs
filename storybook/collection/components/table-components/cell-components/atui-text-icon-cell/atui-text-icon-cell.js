import { h, Host, Fragment } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a text with icons, Text is optional and multiple icons are supported.
 */
export class AtuiTextIconCell {
    constructor() {
        this.text = '';
    }
    update(params) {
        var _a;
        this.params = params;
        if (params.text) {
            this.text = params.text(params.data);
        }
        else {
            this.text = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.toString()) || '';
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
        return (h(Fragment, null, this.params.icons().map((icon) => (h("atui-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("i", { class: `material-icons text-icon-md mt-4 cursor-pointer ${icon.iconClass || ''}` }, icon.iconName)), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        var _a;
        const iconPosition = ((_a = this.params) === null || _a === void 0 ? void 0 : _a.iconPosition) || 'before';
        return (h(Host, { key: 'e66b113331763b04e1a65fff505488f6bbd4a758', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: 'e23ab0d662e0c0bfe53ff45872c0248c97712934', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    static get is() { return "atui-text-icon-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-text-icon-cell.js.map
