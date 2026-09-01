import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-m_dTEvgo.js';
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
        return (h(Host, { key: '5665ebbec16d613e1f45935196021b9cd238ce5c', role: "checkbox", "aria-checked": this.indeterminate
                ? 'mixed'
                : this.checked
                    ? 'true'
                    : 'false', "aria-labelledby": this.label ? this.labelId : undefined, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: '29b18e60d8aeea6a7213226609993928b6298c95', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.inputId, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '83ad33915d64a52c1e496ba0245ded1e953e4595', class: "pointer-events-none flex flex-col" }, h("slot", { key: '05ec621ec8713f84d643721f3c00f463be6ba566', name: "label" }), this.label && (h("label", { key: '10d9a17129085b244aa262b0b1dacfe297095fe1', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: 'a689355aab3e36987a893acc0f36eda0d7fcf5ac', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: 'e3c338afb58865b6b87acb287425a4b94141fcba' })));
    }
};

export { AtCheckbox as at_checkbox };
