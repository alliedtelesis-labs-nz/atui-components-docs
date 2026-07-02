import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-D_TsKqPT.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variants = classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring', {
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
const checkboxVariants = classlist('shadow-inset-xs accent-active-accent pointer-events-none z-10 !min-h-16 !min-w-16 cursor-pointer rounded-sm border border-solid ' +
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
        return (h(Host, { key: '9ee8f56df91799d626bc69499174f6309c268911', role: "checkbox", "aria-checked": this.checked, "aria-labelledby": `${this.value}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: 'd57cf89fe17b6bb9fec9827b104c514be20da8f6', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.value, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '94f95acb0b632ec2390a5d7c16603c98d09e18d8', class: "pointer-events-none flex flex-col" }, h("slot", { key: 'cb347c0232c8fb3f2c14722b55e77ba5ad70beca', name: "label" }), this.label && (h("label", { key: '5b5b200eeeea9d99338f898c203bc08c10953ced', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: '5f8592c5daf63c824fd70a6c70b0368f66f4d259', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: 'de78a898e42801016af59842dc880eb560b220e7' })));
    }
};

export { AtCheckbox as at_checkbox };
