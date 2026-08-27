import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-lWb16Ay7.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-3Gn82Eck.js';

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
        return (h(Host, { key: 'd403a3c6dc10c79722d5747579e762b2d9a1a644', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, h("div", { key: '1bf61f722883688b91f9b496506166b14de2c086', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'e983820acd9f1477eea978fcecc8fa55421c68d3', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '3128513f6dc318e420388d11349e0cb69d5c9e2c', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '84f863104de2a5d7cafc274b119212ab8b747878', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: '725414793ba904aa28fe1807e61d275c11c28226', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: 'd43be5e76a2d5f1987c0fbcf733f508d9e6756b6', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: 'bd3658465fcc224cd943d8f9c5f25c523889519f', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: 'bd46c719c2205b683ee47fc39dddc35a8426a63b', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
