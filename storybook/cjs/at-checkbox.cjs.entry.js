'use strict';

var index = require('./index-C7y9_-Ob.js');
var classlist = require('./classlist-BPb95vgj.js');

const variants = classlist.classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 bg-input-background',
            true: 'bg-active-accent/20 accent-active-accent',
        },
    },
});
const checkboxVariants = classlist.classlist('shadow-inset-xs accent-active-accent pointer-events-none z-10 !min-h-16 !min-w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
            true: 'accent-active-accent group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-active-glow group-focus-visible/checkbox:ring',
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
    value;
    /**
     * State of the checkbox
     */
    checked;
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
        this.checked = value.target.checked;
        this.atuiChange.emit(this.checked);
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.checked,
        });
        const checkboxClassname = checkboxVariants({
            checked: this.checked,
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '53bd082fead1586500c4c53087b3566d4becd9f4', role: "checkbox", "aria-checked": this.checked, "aria-labelledby": `${this.value}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: '32804ce22375abf1db29eaf5b34489ac66525beb', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.value, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '993c2a39450f59f0c0c7af8699aab6162d9fa2dd', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: 'da526f056f6abf91af97642f43d87fb6fee4436a', name: "label" }), this.label && (index.h("label", { key: 'e77721fa7d7796e1fb2ecb2a70010eb6ab3f8c52', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: '8958c2860aa7853abdee115a6219f3b6f81f95f7', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: '93d69bb87dcea2250f6d71afcc0b10834308d1c4' })));
    }
};

exports.at_checkbox = AtCheckbox;
