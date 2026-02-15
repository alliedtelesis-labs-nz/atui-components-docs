'use strict';

var index = require('./index-CzDB71Wy.js');
var classlist = require('./classlist-BPb95vgj.js');

const variants = classlist.classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-foreground/40 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring-2', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'hover:bg-surface-1 bg-white',
            true: 'bg-active-foreground/15',
        },
    },
});
const checkboxVariants = classlist.classlist('material-icons shadow-inset-xs accent-active-foreground pointer-events-none z-10 !h-16 !w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-active-foreground group-focus-visible/checkbox:border-2',
            true: 'bg-active-foreground/50 group-focus-visible/checkbox:border-active-foreground group-focus-visible/checkbox:border-2',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-active-foreground/40 group-focus-visible/checkbox:ring-2',
            true: null,
        },
    },
});
const AtCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Title of the checkbox component.
     */
    label;
    /**
     * Subtitle of the checkbox component.
     */
    hint_text;
    /**
     * Id of the checkbox.
     */
    option_id;
    /**
     * State of the checkbox
     */
    value;
    /**
     * Disables interaction with the checkbox
     */
    disabled;
    checkboxEl;
    /**
     * When the checkbox is toggled, this will emit true if the current value is checked, vice versa.
     */
    atuiChange;
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
        return (index.h(index.Host, { key: '9bb8f2d2f6ff273faeb04ef4c7b07b0d2f950050', role: "checkbox", "aria-checked": this.value, "aria-labelledby": `${this.option_id}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: '8dd986573cccfc96646239ea6249a4d9404e461d', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.value, onChange: (event) => this.handleChange(event), id: this.option_id, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '23fd7ce56f874d3b6d5a795f80128e63a6529710', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: 'fce9d9e7d21eff1f332907a39908f099a98cd122', name: "label" }), this.label && (index.h("label", { key: '1e3edd5e209cd81786fd1c1802f307a0875d0139', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: '4b741ab82ec39017ba0e05bbcccbdd1c780a6e5f', class: "text-light mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: '417d5be8de21295b44539a20274e5e249209049a' })));
    }
};

exports.at_checkbox = AtCheckbox;
