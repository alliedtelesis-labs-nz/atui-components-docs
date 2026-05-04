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
        return (h(Host, { key: 'a2675fbbb55a93d27c3a596de4fc90bce92557f0', class: "flex h-full items-center gap-4" }, h("at-menu", { key: '97531fd83cc2b2bbc23cab6c89caaee45a9f5aef', width: "fit-content", position: "left" }, h("at-button", { key: '55af708346cc3b1544203468169bd6cfe51b3d5f', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: 'fc361a8b0825cdce62a466a76cb860f8525ac44c', slot: "icon", name: "overflow_menu" }))), h("div", { key: '604cb7754e765174d50a2dd2764a7f474975a835', class: "flex flex-col" }, actions &&
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
