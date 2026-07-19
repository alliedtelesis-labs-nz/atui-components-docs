import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-jCYcKtgi.js';
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
            false: 'bg-surface-1 group-focus-visible/checkbox:border-active-accent group-focus-visible/checkbox:border-0',
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
        return (h(Host, { key: 'b1f28c290f35760bee3e3c55c6b0854516394de0', role: "checkbox", "aria-checked": this.checked, "aria-labelledby": `${this.value}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: '32dad0e11c4ac73bc7e4b80559598bc3d6a73ce3', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.checked, onChange: (event) => this.handleChange(event), id: this.value, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '8b0f2273af150c5d26ac3458d29757e67a3784fd', class: "pointer-events-none flex flex-col" }, h("slot", { key: '6fc1e5a0ebdd0cbadcb9c11c1162a6ac033f5777', name: "label" }), this.label && (h("label", { key: '0aad2bc8b1d2d6a2370ad61d925d62869f3089b1', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: '294845180ab7592ddeea728f59a68162e1cce9ac', class: "text-muted mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: '08b57571dc22aa12358e3e092aaa631ea5401997' })));
    }
};

export { AtCheckbox as at_checkbox };
