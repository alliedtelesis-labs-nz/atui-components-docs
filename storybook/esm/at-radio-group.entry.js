import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const getLayoutClass = classlist('gap-4', layoutVariantsConfig);
const AtRadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Direction that the radio elements are placed
         */
        this.layout = 'column';
        this.radioEls = [];
        this.radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    }
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
            return this.options.map((option) => (h("at-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
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
        return (h(Host, { key: 'e2df4194d626bed943722a9fb2cf5db74a1260e7', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '39e880170072bd0ed26c6a66e2ac2f2c31b3f857', class: "flex flex-col" }, h("slot", { key: 'e915eded0a1937f29e4d10f81972286e29fdbb9d', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '05db09c1f161f7164176504243367ac289ad27d2', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '93878d6b084d9dc138378194a21216a38d5b6973', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: 'f704703984c362a17f303d2306699c6a5585dc52', class: classname, "data-name": "radio-group-options" }, h("slot", { key: '7226d54fb47e5df880f3ae5bca33ae3bdbdaf831' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: '5b96e7c0c395d56c842301b4c599767ec87ba7ea', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtRadioGroup as at_radio_group };
//# sourceMappingURL=at-radio-group.entry.js.map

//# sourceMappingURL=at-radio-group.entry.js.map