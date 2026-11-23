import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CNjTRhUr.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { s as slottedLabelId } from './slotted-label-id-yAuyDwgx.js';
import { f as fetchTranslations } from './translation-DNQTZ_VC.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-background text-active-foreground',
            false: 'text-foreground',
        },
        disabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
const AtButtonSwitchComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label displayed alongside the toggle.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Disable interaction with the toggle.
     */
    disabled;
    /**
     * Set the toggles state.
     */
    value = false;
    get el() { return getElement(this); }
    translations;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.toggleId}-label`;
    slottedLabelId;
    componentWillRender() {
        this.slottedLabelId = slottedLabelId(this.el, `${this.toggleId}-slotted-label`);
    }
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
    componentWillLoad() {
        fetchTranslations(this.el).then((translations) => {
            this.translations = translations;
        });
    }
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const onButtonClasses = getButtonClasses({
            active: this.value === true,
            disabled: this.disabled,
        });
        const offButtonClasses = getButtonClasses({
            active: this.value === false,
            disabled: this.disabled,
        });
        return (h(Host, { key: '3ab23cadf22d99878452e9dbbc9f905f7ecdb228', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": this.label ? this.labelId : this.slottedLabelId }, h("div", { key: '35396a3f57951e7fbbbef9d1bb9418a1cdaec75b', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '976b2799208125b3488f5c04c7b500a7fe11ced8', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '0f3954c99d56ff03880da0a6910c6c72cdd0cf9d', id: this.labelId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '15e2edf566cd9cdc303c0ade17ff60a79dd02747', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: '8ab1a432ee09af37e5d8f4563a8f0e27b46308e8', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: 'a7eabc2784df1bad34de5638fbed18facb29f4d1', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '6bb93569db9494de28f8652205f979b6bf880b1d', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: 'c62e6380d9ae48b0a92493a8fc085cd01cd0fbc6', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
