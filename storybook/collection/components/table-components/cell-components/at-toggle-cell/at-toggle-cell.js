import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a toggle.
 */
export class AtToggleCell {
    el;
    params;
    label;
    labelPosition;
    disabled;
    value;
    timer;
    init(params) {
        this.params = params;
        if (this.params.toggleValue) {
            this.value = this.params.toggleValue(params.data);
        }
        else {
            this.value = params.data?.toggleCell?.value || false;
        }
        if (this.params.label) {
            this.label = this.params.label(params.data);
        }
        else {
            this.label = params.data?.toggleCell?.label || '';
        }
        this.labelPosition = params.data?.toggleCell?.labelPosition || 'after';
        this.disabled = params.data?.toggleCell?.disabled || false;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.data);
        return true;
    }
    toggleHandler(change) {
        clearTimeout(this.timer);
        this.params.value = change.detail;
        this.timer = setTimeout(() => { }, 2000);
    }
    updateCell(newValue) {
        clearTimeout(this.timer);
        this.params.value = newValue;
        this.timer = setTimeout(() => { }, 2000);
    }
    render() {
        return (h(Host, { key: 'a1c27fe3e66bb9d18e38fe850fea21d2afb2f201', class: "flex h-full items-center leading-[100%]" }, h("at-toggle-switch", { key: 'c564d7f45fcada81fef9427406f5787e2e26659a', label: this.label, onChange: () => this.params.onTrigger?.(this.params), label_position: this.labelPosition, show_label: !!this.label, value: this.value, disabled: this.disabled })));
    }
    static get is() { return "at-toggle-cell"; }
    static get states() {
        return {
            "params": {},
            "label": {},
            "labelPosition": {},
            "disabled": {},
            "value": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "toggleFunction",
                "method": "toggleHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
