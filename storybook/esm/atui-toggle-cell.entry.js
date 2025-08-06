import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiToggleCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
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
        return (h(Host, { key: '82de1279aa8c9e17a9b7f2ebbcd3af9064687a7f', class: "flex h-full items-center leading-[100%]" }, h("atui-toggle-switch", { key: '948f7f6d76fe0add0f5ced1f081bca1149aaa55c', label: this.params.getLabel(this.params), onChange: () => this.params.onTrigger(this.params), label_position: "after", value: this.params.value })));
    }
    get el() { return getElement(this); }
};

export { AtuiToggleCell as atui_toggle_cell };
//# sourceMappingURL=atui-toggle-cell.entry.js.map

//# sourceMappingURL=atui-toggle-cell.entry.js.map