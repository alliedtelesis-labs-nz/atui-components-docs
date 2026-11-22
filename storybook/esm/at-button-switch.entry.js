import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DdGm_rA6.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { f as fetchTranslations } from './translation-BV6bz-3S.js';

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
    labelId = `${this.toggleId}-label`;
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
        return (h(Host, { key: '64edafe5992a3feb0dbdea50c43d821fadf310da', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": this.label ? this.labelId : undefined }, h("div", { key: '5ff6ccaf6b873b084fc447ac1c3c28739c4e34e1', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'a6cf94f9886bfe3d534cb977b58e6f0ae6b46af1', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '60559256b2f64a56d5f8b68515b3da4eb647731d', id: this.labelId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '325c2f7c9f971746bdff216191b9dab3645ba75c', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: '2ab7d1803b5b0a4a2da8d49924ca8ba90f86228a', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: 'b59820a6bf7352e3e347a12604a9fa7500815d97', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '2413e2e57b870e7c7ece2cdad6b1679aee16809e', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: 'de71901e63d90eda6651918f8231838de4f4cce9', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
