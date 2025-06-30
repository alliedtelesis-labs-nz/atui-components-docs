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
        return (h(Host, { key: 'e3fa97b4cb3721c504987d0f3257cb1f22cfb4fa', class: "flex h-full items-center leading-[100%]" }, h("atui-toggle-switch", { key: '4e0951636e82653fa32d6e1661042c128fcedfe9', label: this.params.getLabel(this.params), onChange: () => this.params.onTrigger(this.params), label_position: "after", value: this.params.value })));
    }
    get el() { return getElement(this); }
};

export { AtuiToggleCell as atui_toggle_cell };
//# sourceMappingURL=atui-toggle-cell.entry.js.map

//# sourceMappingURL=atui-toggle-cell.entry.js.map