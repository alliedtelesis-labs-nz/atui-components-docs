import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

const AtMenuCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '887b291d37a81892fa1b0ddeb01e4b680397950b', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '5f590fd885168fe6ca1220ff98e85cbda17d2714', width: "fit-content", position: "left" }, h("at-button", { key: '3de6cf6eb78d53fec9ebbe8ce3b977a92ad8a65d', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '093cbe4f7879d25cb8af10a7bc5d622e4a0851ae', slot: "icon", name: "overflow_menu" }))), h("div", { key: '275fef61c46e20539e454e61f31627d159db8331', class: "flex flex-col" }, actions &&
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
};

export { AtMenuCell as at_menu_cell };
