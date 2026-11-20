import { h, Host, Fragment } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a text with icons. Text is optional and multiple icons are supported. Icons are resolved from the global icon registry via `at-icon`, and the `icons` accessor receives the row's data so a cell can show an icon only when that row warrants one.
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
        return (h(Fragment, null, this.params.icons(this.params.data).map((icon) => (h("at-tooltip", { position: "right", disabled: !icon.tooltip }, h("div", { slot: "tooltip-trigger" }, h("at-icon", { name: icon.iconName, size: "16px", class: icon.iconClass })), icon.tooltip && (h("span", { class: "leading-normal" }, icon.tooltip)))))));
    }
    render() {
        const iconPosition = this.params?.iconPosition || 'before';
        return (h(Host, { key: '0bc3dbc5a551247d0e2c468469329658986f6f1e', class: "flex h-full items-center gap-4 overflow-hidden leading-normal" }, iconPosition === 'before' && this.renderIcons(), h("span", { key: '9af7c229ac237b4f9e8ded4d9a2a8cf3be13ee28', class: "truncate" }, this.text), iconPosition === 'after' && this.renderIcons()));
    }
    static get is() { return "at-text-icon-cell"; }
    static get states() {
        return {
            "text": {}
        };
    }
    static get elementRef() { return "el"; }
}
