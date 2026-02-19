import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-foreground/15 text-active',
            false: 'text-dark',
        },
        disabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist('focus-visible:border-active-foreground focus-visible:ring-active-foreground/40 relative flex h-[30px] items-center gap-4 rounded-md border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-0', variantsConfig);
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
        return (h(Host, { key: '11dd0ba65abf791498101ca2ade30ee61125ce08', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, h("div", { key: 'f9e83d1bf8544d82f04ef0dba19b4974a82de109', class: "flex flex-col" }, h("slot", { key: 'c4c88624bdbbaa2f6ce37254b44608661f6157a7', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '926411064dd6f99328ea4ad64e0f2e57371113ca', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b2c28222306b633cfa32b6651542e665f36471ea', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: 'a76892426a858455c5139a59450f58e88cde600a', class: "border-med relative w-fit rounded-lg border bg-white inset-shadow-xs" }, h("div", { key: '0b4b13884fea6e2c3e070e2b5ff5b7180d378d38', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '9854b37a7f8fd21f0d8ba898526e886caf7688af', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: 'def868872fe480b55200d1e0405a1375ce8072d2', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
