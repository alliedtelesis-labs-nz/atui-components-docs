'use strict';

var index = require('./index-CzDB71Wy.js');
var classlist = require('./classlist-BPb95vgj.js');
var translation = require('./translation-HqquF7bU.js');

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
const getButtonClasses = classlist.classlist('focus-visible:border-active-foreground focus-visible:ring-active-foreground/40 relative flex h-[30px] items-center gap-4 rounded-md border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-0', variantsConfig);
const AtButtonSwitchComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
    get el() { return index.getElement(this); }
    translations;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
    componentWillLoad() {
        translation.fetchTranslations(this.el).then((translations) => {
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
        return (index.h(index.Host, { key: '1a7117fce7e0bf5c66341ed07cecbd0aab670e56', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, index.h("div", { key: 'f06b5b594109440330f3ac6910f198a8b1abc431', class: "flex flex-col" }, index.h("slot", { key: '22e70d03c4396ab992bbf3f3f6386402a2f4d7e4', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '69eeba6c3e9a74d2e100fe0bd810dedd4a843f0a', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'fe8ec0269854559e91677ec9ec405ba378de789a', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), index.h("div", { key: 'f324dd3b356ddc21c205cbbc8ef8813d5aceaac0', class: "border-med relative w-fit rounded-lg border bg-white inset-shadow-xs" }, index.h("div", { key: '7cc75b06406fc78e548fed56ae06852ceae3a383', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, index.h("button", { key: '31ec6546d8f0b86a8a2ec4507ac99f4e2e52414d', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), index.h("button", { key: '1660c343a06d9bbbe0d96f65339ede1f6391cc3a', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

exports.at_button_switch = AtButtonSwitchComponent;
