'use strict';

var index = require('./index-DK-3iCCu.js');
var classlist = require('./classlist-BPb95vgj.js');
var translation = require('./translation-D3uILiF8.js');

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
const getButtonClasses = classlist.classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-colors duration-300 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
        return (index.h(index.Host, { key: '6fa120b52257177894f4c0d526d198c02bd4e994', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, index.h("div", { key: '5c5d71542d83244017331bd6a0ce721287bafa96', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'af81fb86a740e0c1373136f2130b6d80639f851e', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: 'b997a6a2ead212ffa3488a5e6a1755ffbec454da', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'a5411e9c71bf51a6ba4c9fa798190aa0a0c336a1', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), index.h("div", { key: 'd465ff5c7c5382f783707f1d0de808a97f2320a3', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, index.h("div", { key: 'be18dd4a0802a0d6821aeec10dd7f071989f8365', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, index.h("button", { key: '928cf91eecaedcef617e9e8de6314680ef7d16a9', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), index.h("button", { key: '86b4687c8b3d7cc1e90f6bfa46eac5b620fec86e', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

exports.at_button_switch = AtButtonSwitchComponent;
