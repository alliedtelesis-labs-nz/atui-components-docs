import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-Baj27LS8.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-TgeIMQBw.js';

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
const getButtonClasses = classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
        return (h(Host, { key: 'bb74fab8e89995cce00f1bb704cbc54aa24365e2', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, h("div", { key: '49daf4c2dfef8aaeef5f5b34564598b9e7373892', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'cf4278148dbf7a837ba40b4cc728a2145381a149', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '9bb1459795c89ff34f99dd2617160e016680fed5', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b94ca0df2d2c2a00c4ce96a403c1a094409cecc9', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: '705881c73af1b6428d0ed98ef49f3ae186831184', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: 'b81668e037f535597b4742549768989319c93b00', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '0b920362867a13f1676f4e8fa8998c2fa0cf4018', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: '7c8539a31fa7816b94a6f8262b88c11e7c23acf7', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
