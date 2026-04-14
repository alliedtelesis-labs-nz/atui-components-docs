import { r as registerInstance, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: '32adf16418304ea48fff937d7eb54d26a2661c6a', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'fbfb56d49f8a8ceb94fb25f519c01bad74b35c92', width: "fit-content", position: "left" }, h("at-button", { key: 'e92041434406105375715c3f39c5ac556a8ba601', type: "secondaryText", icon: this.params.icon, slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '921566fbb4afb02d660bdaa63a5572b8c3157f3f', slot: "icon", name: "overflow_menu" }))), h("div", { key: '1bc16ec628b9922eaaa0ee627ea8f043fadfa9fc', class: "flex flex-col" }, actions &&
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
