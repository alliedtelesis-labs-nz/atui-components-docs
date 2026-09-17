'use strict';

var index = require('./index-CEz1eizW.js');
var classlist = require('./classlist-BPb95vgj.js');
var translation = require('./translation-NP6A4XKu.js');

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
const getButtonClasses = classlist.classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
        return (index.h(index.Host, { key: '760da7ffdd2ee75d73789bb1407b46ba32e23e66', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": `${this.toggleId}-label` }, index.h("div", { key: '0cc3a3bbcdd42d98966a1d57bf6b2421563558ab', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'e0201c75a8beb309e655ad6d5c52db7115f333d6', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '8d69c0b424012711f0efd12768415beae78bc17c', id: this.toggleId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'd076e362f12da112035e438f1ac3e1e02d806f5e', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), index.h("div", { key: '85bb8691dee7746d6d32f7aa4180d0850501401f', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, index.h("div", { key: 'd35ef85398528ec1875b997c5464e677f78e6a4b', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, index.h("button", { key: 'd319d55f2a46091124eafd1207a9ac2be87aa03e', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), index.h("button", { key: '754274f1dce06cf1b6c8dad5eb666aea1636cefb', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

exports.at_button_switch = AtButtonSwitchComponent;
