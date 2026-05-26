import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-B5XBUsvV.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-accent/20 text-active-accent',
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
        return (h(Host, { key: 'd6d390f176e9724c6f1ca5cceba69cd13d0446a6', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, h("div", { key: '620ffd5e21a2c60ba335bb1cc5e27eb5b456bc61', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '29a40b456c9eb3350e5d3a2fe2453d8e7b10776b', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '8e564a6ed22c9614ae9d57bf3ecad075de203fa8', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'ba573fa497dc0af4229f805cc06e0f81db0b96dd', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: 'a0b61358c8c9f4de4d721e9825744b5f118b32cb', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: '8323aeb852e98719a8379169a4a2205684a981d7', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '6e3db2680e3a20a3b4e3c8ea5a0980439adfcec3', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: '1a06bd56d657a5b349460793e8128e5388c86078', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
