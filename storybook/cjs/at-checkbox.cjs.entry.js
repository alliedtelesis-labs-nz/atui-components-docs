'use strict';

var index = require('./index-GH7gxrjy.js');
var classlist = require('./classlist-BPb95vgj.js');

const variants = classlist.classlist('group/checkbox transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 focus:outline-0 focus-visible:ring', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 bg-input-background',
            true: 'bg-active-background accent-active-foreground',
        },
    },
});
const checkboxVariants = classlist.classlist('shadow-inset-xs accent-active-foreground pointer-events-none z-10 !min-h-16 !min-w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-accent-active group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
            true: 'accent-active-foreground group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
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
    /**
     * Shows the mixed state, for a checkbox standing for a set that is only partly
     * selected. Takes precedence over `checked` in what is displayed.
     */
    indeterminate;
    checkboxEl;
    /**
     * Not derived from `value`: two groups can carry the same values, so a
     * value-derived id collides, and the label id doubles as the
     * aria-labelledby target.
     */
    inputId = `at-checkbox-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.inputId}-label`;
    /**
     * When the checkbox is toggled, this will emit true if the current value is checked, vice versa.
     */
    atuiChange;
    handleChange(value) {
        this.checked = value.target.checked;
        this.atuiChange.emit(this.checked);
    }
    /**
     * `indeterminate` is a property with no attribute, so JSX cannot set it.
     */
    componentDidRender() {
        if (this.checkboxEl) {
            this.checkboxEl.indeterminate = !!this.indeterminate;
        }
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
        return (index.h(index.Host, { key: 'd13293940b4694876ec98d0f591a7b39a7d294b3', role: "checkbox", "aria-checked": this.indeterminate
                ? 'mixed'
                : this.checked
                    ? 'true'
                    : 'false', "aria-labelledby": this.label ? this.labelId : undefined, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: '88dbe63035148c2cff0e71c56b0d2f355220b039', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.inputId, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '999851a87b4c97fcf4200001046abe55fe6a7e97', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: '1fbd16d12f0294b01c6b99c82e5f4dc8bd9253fa', name: "label" }), this.label && (index.h("label", { key: '6df89193e6796d9789efdb299f4461b2942c9456', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: '1bef0bd23a6f551d1e3641a206d2a5e99500925f', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: 'cad54d8db4c401ecd90a21aedf0b6b41b5efa216' })));
    }
};

exports.at_checkbox = AtCheckbox;
