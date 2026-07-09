import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-8e2OpwTu.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';

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
const getButtonClasses = classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
        return (h(Host, { key: '4a37103bb1621d97abec470d0e8e4ba641a3e733', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, h("div", { key: '13dcdd57d6b63df663bd94ac922538fa96d64d15', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '543e4c54c7ecf65f204f8f19e5db55127d2c49eb', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '84ebe0c99f3e0880556c3ad1dbe31c0946ace8fa', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b65f2be8d54772c85043ebf7de1eee60a5a917a0', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: 'f536fb334d38a0037c2e740ef0ba0031d89f2301', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: '3af1935f9d25e75dcaeddc172750447048d8f487', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '79b3f41c1a2700c3c46e13af2fd70b21b7613eb6', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: 'c9482b2f5a3f1f824bb670cc43013980a7e47add', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
