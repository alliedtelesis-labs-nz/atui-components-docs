import { r as registerInstance, a as getElement, h, H as Host } from './index-BEGRcYEc.js';

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
        return (h(Host, { key: '086fdd6a5372c2250de058b6efd0e4a5f0698d7a', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'a6e6e2e815c284f31be587e7c8b8b81db21fe45b', width: "fit-content", position: "left" }, h("at-button", { key: 'c47082f54a93404ede42be303c9108731fe38e4c', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '2ac4fc6570eccd69daa40400fdd3b65c6c90de27', slot: "icon", name: "overflow_menu" }))), h("div", { key: '822ce192ce7cb62ab87659d73470c6aecec422fd', class: "flex flex-col" }, actions &&
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
