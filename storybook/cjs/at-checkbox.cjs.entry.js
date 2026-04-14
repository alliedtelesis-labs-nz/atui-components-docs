'use strict';

var index = require('./index-BRms7T38.js');
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
        return (index.h(index.Host, { key: '7382c7272251af484dcc5333d64f5c4801b79191', role: "checkbox", "aria-checked": this.checked, "aria-labelledby": `${this.value}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: 'bc28abc08fa0d16d651bbb571b1fb999dbe97b41', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.value, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '00465bae55aba4dadef4b39777b88997f22aa8b0', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: 'fc92bde129c1a8fe92622bed70f5c2115bc5876e', name: "label" }), this.label && (index.h("label", { key: '548a289677e825a91434cdb3dd10d145968e6559', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: 'd41f872388f02e965d5147e07f03a54a881ca13c', class: "text-light mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: '9ba7d35c1068feb9eb70b13a77cab724458d8bdd' })));
    }
};

exports.at_checkbox = AtCheckbox;
