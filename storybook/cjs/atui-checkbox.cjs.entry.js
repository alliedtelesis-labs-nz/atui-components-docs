'use strict';

var index = require('./index-43B6Ydvl.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group/checkbox transition-[color,background-color, box-shadow] relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'bg-white hover:bg-surface-1',
            true: 'bg-active-foreground/15',
        },
    },
});
const checkboxVariants = index$1.cva('material-icons shadow-inset-xs pointer-events-none z-10 !h-16 !w-16 cursor-pointer rounded-sm border border-solid accent-active-foreground ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-2 group-focus-visible/checkbox:border-active-foreground',
            true: 'bg-active-foreground/50 group-focus-visible/checkbox:border-2 group-focus-visible/checkbox:border-active-foreground',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-2 group-focus-visible/checkbox:ring-active-foreground/30',
            true: null,
        },
    },
});
const AtuiCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    handleChange(value) {
        this.value = value.target.checked;
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.value,
        });
        const checkboxClassname = checkboxVariants({
            checked: this.value,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '1d96ea79d1378928d4a7c59751b1e1d1e9045c8d', role: "checkbox", "aria-checked": this.value, "aria-labelledby": `${this.option_id}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: '22562de734e9797f577df154e6470feadf67ef93', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.value, onChange: (event) => this.handleChange(event), id: this.option_id, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '47d7e98b4e652fded24386b7be63a143de828e86', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: '8309d62d93dc1626e6a63363411c8a9f59ff2e32', name: "label" }), this.label && (index.h("label", { key: '9c010e7fa01f583e07d9c5af00f4614809efc4d8', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: 'd86518348a6ab2a5075611e2d6580d696790d9df', class: "mt-0 pl-4 text-xs text-light", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: '52a10f85f0f8547180c134f409dfc02e239d2a96' })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_checkbox = AtuiCheckbox;
//# sourceMappingURL=atui-checkbox.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox.cjs.entry.js.map