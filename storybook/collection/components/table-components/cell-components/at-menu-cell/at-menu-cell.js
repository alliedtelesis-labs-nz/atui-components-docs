import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a menu.
 */
export class AtMenuCell {
    el;
    params;
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return false;
    }
    render() {
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'f8e80362b49e7a018c2a88dd826a168927d26c78', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '4d853ff7cba73b7df4ca677eace3e8f255bbd2e2', width: "fit-content", position: "left" }, h("at-button", { key: '5a4582c07418124cb4638ffaace5a535ad670d6d', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: 'a20cbed8a5c49bbe439cd049e703252b4e1c0e5c', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'dd690c2c626d9d43654c20d61c2ce43274b7f1ff', class: "flex flex-col" }, actions &&
            actions.map((action) => typeof action === 'object' &&
                (action.disabled &&
                    action.disabled(this.params.data) &&
                    action.disabledTooltip ? (h("at-tooltip", null, h("div", { slot: "tooltip-trigger", class: "w-full" }, h("at-menu-item", { label: action.title, disabled: true, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } })), h("span", null, action.disabledTooltip))) : (h("at-menu-item", { label: action.title, disabled: action.disabled
                        ? action.disabled(this.params.data)
                        : false, onClick: () => {
                        if (action.onTrigger !==
                            undefined) {
                            action.onTrigger(this.params);
                        }
                    } }))))))));
    }
    static get is() { return "at-menu-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
