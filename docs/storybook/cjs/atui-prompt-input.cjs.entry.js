'use strict';

var index = require('./index-BAt2i-T2.js');

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
        return (index.h(index.Host, { key: 'cfd4098bd8b6e9fa5ee361978017d6e040ee82f3', tabindex: "-1" }, index.h("div", { key: 'befc4c8f56011ed12da10931f0378f04cb6716ca', class: "flex flex-col" }, index.h("slot", { key: '249365aec7f13a58a269b122421ffdc11b47c017', name: "label" }), (this.label || this.info_text) && (index.h("atui-form-label", { key: '79009f0161c09ad1aedc805f4bc571fc7963a80b', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (index.h("span", { key: '5490eac8a6d854f2a0f65d26fa2ae5dface9f3ad', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), index.h("div", { key: '934abe9b0e29348489bd5076a71ad1960d92a5bd', class: "relative flex flex-col items-end gap-2 rounded-lg border border-solid border-med bg-white p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30" }, index.h("textarea", { key: 'b85aaf1f101ae6e23d20bcc0fd91fe3712d29618', id: this.inputId, placeholder: this.placeholder, maxlength: this.max_length, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                height: '44px',
                overflow: 'hidden',
            }, class: "w-full flex-1 resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0", "data-name": "prompt-input" }), index.h("div", { key: 'c36359077f63dae923b25e0d5e085ac3f242589f', class: "gap-1 flex w-full items-center justify-between" }, index.h("div", { key: '1a21920ffdbcbf85b3076178d088c37687f3a91b', class: "flex items-center gap-4" }, index.h("slot", { key: '3b7027321336414310b4291b073085587fa6dd64', name: "actions-left" })), index.h("div", { key: '6d72601ad399cda906fb6049a1ad8054b84cd4b2', class: "flex items-center gap-4 self-end" }, index.h("slot", { key: 'a29312df3abef4e41dd554ccb1c5863b2df7fafb', name: "actions-right" }), index.h("atui-button", { key: 'b07540a3dd17a6797d9d109f9d41b72d4aeb3803', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), index.h("slot", { key: 'a0829afb67478d6dc4ce53bf69eba92c8e926745', name: "footer" })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_prompt_input = AtuiPromptInputComponent;
//# sourceMappingURL=atui-prompt-input.entry.cjs.js.map

//# sourceMappingURL=atui-prompt-input.cjs.entry.js.map