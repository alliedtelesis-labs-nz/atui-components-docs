import { r as registerInstance, g as getElement, h, H as Host } from './index-EP34iaAr.js';

const AtToggleCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '556d659445b02d15c119c164cbd6aa2259f08a0e', class: "flex h-full items-center leading-[100%]" }, h("at-toggle-switch", { key: 'eaf5d2874adcd567fd00ebfad1fca9aa888485b5', label: this.label, onChange: () => this.params.onTrigger?.(this.params), label_position: this.labelPosition, show_label: !!this.label, value: this.value, disabled: this.disabled })));
    }
};

export { AtToggleCell as at_toggle_cell };
//# sourceMappingURL=at-toggle-cell.entry.js.map
