'use strict';

var index = require('./index-BJDFmEHZ.js');

const AtuiPromptInputComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiSubmit = index.createEvent(this, "atuiSubmit", 7);
        this.atuiStop = index.createEvent(this, "atuiStop", 7);
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = 'Enter your message...';
        /**
         * Maximum height in pixels for auto-resize
         */
        this.max_height = 240;
        /**
         * Controls whether the component is in progress (shows stop button) or ready to send (shows send button)
         */
        this.in_progress = false;
        /**
         * Controls whether the model select is shown
         */
        this.show_model_select = false;
        /**
         * The model to use
         */
        this.model = 'gpt-4o';
        /**
         * The value of the input
         */
        this.value = '';
        /**
         * @slot label - Custom label content (alternative to using the label prop)
         */
        this.inputId = `prompt-input-${Math.random().toString(36).substring(2, 11)}`;
    }
    focusInput() {
        if (this.textareaEl) {
            this.textareaEl.focus();
        }
    }
    handleInput(event) {
        event.stopPropagation();
        this.value = event.target.value;
        this.atuiChange.emit(this.value);
        this.autoResize();
    }
    autoResize() {
        if (this.textareaEl) {
            // Reset height to auto to get proper scrollHeight
            this.textareaEl.style.height = 'auto';
            // Calculate new height within bounds
            const scrollHeight = this.textareaEl.scrollHeight;
            const newHeight = Math.max(44, Math.min(scrollHeight, this.max_height));
            // Set the new height
            this.textareaEl.style.height = `${newHeight}px`;
        }
    }
    componentDidLoad() {
        // Initial auto-resize after component loads
        setTimeout(() => {
            this.autoResize();
        }, 0);
    }
    handleKeyDown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }
    sendMessage() {
        if (this.in_progress) {
            this.atuiStop.emit();
        }
        else if (this.value && this.value.trim() !== '') {
            this.atuiSubmit.emit(this.value.trim());
            this.value = '';
            setTimeout(() => {
                this.autoResize(); // Reset height after clearing
                this.focusInput();
            }, 0);
        }
    }
    render() {
        const canSend = this.value && this.value.trim() !== '';
        return (index.h(index.Host, { key: '3089ff97e474f77e13810157383561cbe26ba328', tabindex: "-1" }, index.h("div", { key: '91ff4852a8bf17c28272db3055922d9b018a609a', class: "flex flex-col" }, index.h("slot", { key: '0ec92994a481374e41c6fe2dc9b8e0f28fbb55ed', name: "label" }), (this.label || this.info_text) && (index.h("atui-form-label", { key: '61188cb52dfc7055880ae7326693c1ee1cd19731', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (index.h("span", { key: '7ef200a76fd5624d440e424f85bbe22afd88fb66', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), index.h("div", { key: '0642cc2df56f0ec52bb5431c7ce3603d2b1eba3f', class: "relative flex flex-col items-end gap-2 rounded-lg border border-solid border-med bg-white p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30" }, index.h("textarea", { key: '162e8b3fc70599eac354f3ad5c2defbd779d0278', id: this.inputId, placeholder: this.placeholder, maxlength: this.max_length, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                height: '44px',
                overflow: 'hidden',
            }, class: "w-full flex-1 resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0", "data-name": "prompt-input" }), index.h("div", { key: 'baa130e2fb47ec2020323701c58b82e82160c590', class: "gap-1 flex w-full items-center justify-between" }, index.h("div", { key: '2d92576e2a2f8d7e2bbf01f419596fbe122efca2', class: "flex items-center gap-4" }, index.h("slot", { key: 'df8cfa63833844c56a68ad02670c01a7b882e849', name: "actions-left" })), index.h("div", { key: '03fcfdb72cc01095015edbb770f98165a1c7c5e6', class: "flex items-center gap-4 self-end" }, index.h("slot", { key: 'd60cb05c66096bf94d1325df6fff6af6911054ad', name: "actions-right" }), index.h("atui-button", { key: 'ec25f2363288af43a36548820d8f4872c7d4731c', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), index.h("slot", { key: '872ad414bbcfc96efb98c85f0bfd431be043f4e3', name: "footer" })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_prompt_input = AtuiPromptInputComponent;
//# sourceMappingURL=atui-prompt-input.entry.cjs.js.map

//# sourceMappingURL=atui-prompt-input.cjs.entry.js.map