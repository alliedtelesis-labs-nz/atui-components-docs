import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a text with a badge.
 */
export class AtTextBadgeCell {
    el;
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
        return (h(Host, { key: 'b0dd0198f9d0c957c93569525a5d0b20bdcd0b5a', class: "flex h-full items-center" }, h("at-tooltip", { key: 'b4a1af0da0c25af81c756117efd370f03360e272', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: 'f80394e5b3d7aa3d49757cc2e5ddf772151f8eb1', slot: "tooltip-trigger" }, h("span", { key: '78ccc1ce25d97a52b99f151f4070bdb57853690a', class: "truncate" }, this.textValue), h("at-badge", { key: 'e2fdc77fa3c186ed356d817cdb164019f8c9cdd0', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: 'c3b9a27ecffca7a505fdc878a90815d9c5a401a3', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-badge-cell"; }
    static get states() {
        return {
            "textValue": {},
            "badgeTextValue": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-text-badge-cell.js.map
