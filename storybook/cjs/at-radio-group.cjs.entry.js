'use strict';

var index = require('./index-CA9vC8ae.js');
var classlist = require('./classlist-BPb95vgj.js');

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const getLayoutClass = classlist.classlist('gap-4', layoutVariantsConfig);
const AtRadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label of the radio group.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     * Displayed at right of label.
     */
    info_text;
    /**
     * Direction that the radio elements are placed
     */
    layout = 'column';
    /**
     * Disables the radio options but keeps the text readable. Use for global readonly form state.
     */
    disabled;
    /**
     * Disables interaction with atui-radio elements when set
     */
    readonly;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Shown when 'invalid' prop is set
     */
    error_text;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Options displayed in the radio group.
     */
    options;
    /**
     * A string containing the Id of the currently selected radio
     */
    value;
    get el() { return index.getElement(this); }
    radioEls = [];
    radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when active radio element changes. `event.detail` is the ID of the active radio
     */
    atuiChange;
    handleChange(optionId) {
        if (this.value !== optionId) {
            this.value = optionId;
            this.atuiChange.emit(optionId);
        }
    }
    focusAndClickRelativeRadio(relativePosition) {
        const indexOfActiveRadio = this.radioEls.indexOf(this.el.ownerDocument.activeElement);
        const nextRadioEl = this.radioEls[(indexOfActiveRadio + relativePosition + this.radioEls.length) %
            this.radioEls.length];
        nextRadioEl.click();
        nextRadioEl.focus();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.focusAndClickRelativeRadio(1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.focusAndClickRelativeRadio(-1);
                break;
        }
    }
    get getRadios() {
        if (this.options && this.options.length > 0) {
            return this.options.map((option) => (index.h("at-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.option_id);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    render() {
        const classname = getLayoutClass({
            layout: this.layout,
        });
        return (index.h(index.Host, { key: 'e2df4194d626bed943722a9fb2cf5db74a1260e7', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, index.h("div", { key: '39e880170072bd0ed26c6a66e2ac2f2c31b3f857', class: "flex flex-col" }, index.h("slot", { key: 'e915eded0a1937f29e4d10f81972286e29fdbb9d', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '05db09c1f161f7164176504243367ac289ad27d2', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '93878d6b084d9dc138378194a21216a38d5b6973', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), index.h("ul", { key: 'f704703984c362a17f303d2306699c6a5585dc52', class: classname, "data-name": "radio-group-options" }, index.h("slot", { key: '7226d54fb47e5df880f3ae5bca33ae3bdbdaf831' }), this.getRadios &&
            this.getRadios.map((radio) => (index.h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (index.h("span", { key: '5b96e7c0c395d56c842301b4c599767ec87ba7ea', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
};

exports.at_radio_group = AtRadioGroup;
//# sourceMappingURL=at-radio-group.entry.cjs.js.map
