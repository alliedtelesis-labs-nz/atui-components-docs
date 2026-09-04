import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CT99rxub.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variants = classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring', {
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
const checkboxVariants = classlist('shadow-inset-xs accent-active-foreground pointer-events-none z-10 !min-h-16 !min-w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-all duration-300 ease-in-out', {
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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'd8633deb5e8fafb7192763928855e8d9cae27520', role: "checkbox", "aria-checked": this.indeterminate
                ? 'mixed'
                : this.checked
                    ? 'true'
                    : 'false', "aria-labelledby": this.label ? this.labelId : undefined, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: 'd4931af8c364dafa2bf34c87ddf1f207dd402b87', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.inputId, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: 'bea8cb6ac60145d443464d29fea180798a21a9ab', class: "pointer-events-none flex flex-col" }, h("slot", { key: '2489fc0330fceadd1a8e1d3ddb5c555db550b448', name: "label" }), this.label && (h("label", { key: '1497860838ed42049c221c1c9a33d1c0d34448d4', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: '8399ac085ae8e9b29e5614519b4f832c76369b70', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: 'a03b9782068dc9b5d539d0cf0b7ba15e9185cb74' })));
    }
};

export { AtCheckbox as at_checkbox };
