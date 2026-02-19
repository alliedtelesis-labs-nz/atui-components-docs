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
const checkboxVariants = classlist.classlist('material-icons shadow-inset-xs accent-active-foreground pointer-events-none z-10 !min-h-16 !min-w-16 cursor-pointer rounded-sm border border-solid ' +
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
        return (index.h(index.Host, { key: 'c1c322d059fc5a60c90e2b0cdc28017c94128ce0', role: "checkbox", "aria-checked": this.checked, "aria-labelledby": `${this.value}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: '00918287d30e410f7749a094b44847ce01b54f68', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.value, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '9d4e02c810373ddcdfc5fbba0abc28f613c35eea', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: '1e24dbba1b53bbbfd4bc7c7e475856ba20faaafc', name: "label" }), this.label && (index.h("label", { key: '96c079ed895bdf55be2ea3aa1fcf05633f030b7d', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: 'e0261777a5fd8523adc5682bee1f1f6a960d522b', class: "text-light mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: '43b19862a39555a0a63d3c609562a42da20e0d73' })));
    }
};

exports.at_checkbox = AtCheckbox;
