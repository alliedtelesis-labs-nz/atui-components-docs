'use strict';

var index = require('./index-V7Urjg2R.js');
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
        return (index.h(index.Host, { key: 'be2e2ae7a91df5475895b67bb005f7310d937586', role: "checkbox", "aria-checked": this.indeterminate
                ? 'mixed'
                : this.checked
                    ? 'true'
                    : 'false', "aria-labelledby": this.label ? this.labelId : undefined, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, index.h("input", { key: 'd1a192d7d299b0fc97a111c90fac9c7548b4e6b1', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.inputId, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (index.h("div", { key: '4ef72a33866abcaa7f70ca115e00ccf2ed3e4dd7', class: "pointer-events-none flex flex-col" }, index.h("slot", { key: '4aa014d603c0afcd39052e8fb201a58f32e3d794', name: "label" }), this.label && (index.h("label", { key: 'ee01c1f5ea3b29549c79b06c419eccb1ec39002b', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "checkbox-label" }, this.label)), this.hint_text && (index.h("span", { key: 'd0f918309ba1f2f8e5747de55d36cf95aadb0775', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), index.h("slot", { key: 'fc21274dbd5a11a2443dfe82a520683dd80b0f25' })));
    }
};

exports.at_checkbox = AtCheckbox;
