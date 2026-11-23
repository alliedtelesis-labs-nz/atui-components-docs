'use strict';

var index = require('./index-D8ktVGcW.js');
var classlist = require('./classlist-BPb95vgj.js');
var slottedLabelId = require('./slotted-label-id-D9J5SVli.js');
var translation = require('./translation-Cr-s1VAe.js');

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
const getButtonClasses = classlist.classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
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
    labelId = `${this.toggleId}-label`;
    slottedLabelId;
    componentWillRender() {
        this.slottedLabelId = slottedLabelId.slottedLabelId(this.el, `${this.toggleId}-slotted-label`);
    }
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
        return (index.h(index.Host, { key: 'c460b35f34d207df0f27dca1eb8d79ea43380bb9', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": this.label ? this.labelId : this.slottedLabelId }, index.h("div", { key: 'eab1815dfe6068ce28421d92f87ccc31dcfe3784', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: 'a3cb50f7ac22dc5bda2aaadfebb44c7f499d689e', name: "label" }), (this.label || this.info_text) && (index.h("at-form-label", { key: '3ebfb898532db5af00031651b5e81700dd435a1b', id: this.labelId, label: this.label, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '0710c478dc755be6351242b1f7eb315fa076b96b', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), index.h("div", { key: 'cba3dbcbc233ca01b23814622b3a6e1e0918c33c', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, index.h("div", { key: '50ade529d63ee933ba8dc3b2896391da1fd274d8', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, index.h("button", { key: 'bd459e26e3ac5cbc68ee3a9f23a10428b2a32b47', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), index.h("button", { key: '973df7b67b5b613c42292eb86ebdd6514278668e', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

exports.at_button_switch = AtButtonSwitchComponent;
