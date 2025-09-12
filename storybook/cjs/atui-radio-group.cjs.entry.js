'use strict';

var index = require('./index-i7hIKTeN.js');
var classlist = require('./classlist-BddvonaD.js');

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
const AtuiRadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
            return this.options.map((option) => (index.h("atui-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
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
        return (index.h(index.Host, { key: '92870c9fb516f5753ca3664b00a41bbf2a831c14', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, index.h("div", { key: '7815a822c78aa2d75c0dd44313163ec015bd1adb', class: "flex flex-col" }, index.h("slot", { key: 'c463e97e13a867accaeba13e7db2a94ceeef6355', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: '3114c5802e66c9c32930bd74eb2b24d2465ce0b4', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '5aaae0df1ebabb07320cbcc1524b8dbdb345f897', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), index.h("ul", { key: '3b84689d0900112c783de3c1bf637b890c609ab8', class: classname, "data-name": "radio-group-options" }, index.h("slot", { key: 'b845a953a0acc46355c9d820b3b845c52f8ebe85' }), this.getRadios &&
            this.getRadios.map((radio) => (index.h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (index.h("span", { key: 'b8c67eab2b406fe27da0f090a166607225e6a68c', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_radio_group = AtuiRadioGroup;
//# sourceMappingURL=atui-radio-group.entry.cjs.js.map

//# sourceMappingURL=atui-radio-group.cjs.entry.js.map