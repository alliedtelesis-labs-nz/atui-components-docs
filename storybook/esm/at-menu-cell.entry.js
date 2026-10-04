import { r as registerInstance, a as getElement, h, H as Host } from './index-C56p-u4D.js';

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
    /**
     * Returning `true` tells AG-Grid the cell handled the refresh itself, so the
     * component is reused rather than destroyed and recreated. That matters here
     * because the cell hosts an `at-menu` popover: on recreation the menu panel
     * briefly renders and measures before it is positioned and hidden, which
     * shows up as a flash/artifact in the column (most visible when the actions
     * column is pinned). `params` is `@State`, so reassigning it re-renders the
     * existing cell with the new data.
     */
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        const actions = typeof this.params.actions === 'function'
            ? this.params.actions(this.params)
            : this.params.actions;
        return (h(Host, { key: 'fc1a826a91d4b4e94be99fa3ffd08d37fcc2c4f4', class: "flex h-full items-center gap-4" }, h("at-menu", { key: 'a283c8d08e23c1569fb32a315c79ddb40475f30a', width: "fit-content", position: "left" }, h("at-button", { key: 'c886cdbbda714cf27eae8171c4fcad22ff86c68b', type: "secondaryText", slot: "menu-trigger" }, !this.params.icon && (h("at-icon", { key: '9d7bbabdd5f926c6fdce7d5cf76402ddc19e0fde', slot: "icon", name: "overflow_menu" }))), h("div", { key: 'd9130e1c92f463a43ebcce321ac12b80637a68be', class: "flex flex-col" }, actions &&
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
