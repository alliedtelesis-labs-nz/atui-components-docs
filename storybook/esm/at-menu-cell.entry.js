import { r as registerInstance, a as getElement, h, H as Host } from './index-CFoMekA-.js';

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
        return (h(Host, { key: '39f51bdcefd31b9780d275c799073fae977d5951', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'bd259315ce408b46525b039d47fd9ca5a764bbd8', width: "fit-content", position: "left" }, h("at-button", { key: '99c9dd0a9de01f4f5bdcdbde2b271ac526945287', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: 'a4b37e17576499a6d95b0b502ba54f39a3a5fc34', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'f4f7e0d606db08d0b5e52674be2769f1b7ba6e08', class: "flex flex-col" }, actions &&
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
