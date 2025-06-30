import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiPromptInputComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.atuiStop = createEvent(this, "atuiStop", 7);
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
        return (h(Host, { key: 'a78c04975a90a04e6e064dbcf3bc270ea7735120', tabindex: "-1" }, h("div", { key: '44a68c4ead78b3af62144ea6f1fd89a751221bb8', class: "flex flex-col" }, h("slot", { key: '3b0b28c2912cb2530cafbb47d7613c86f7007916', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: 'a4af6b7cc4c350bad654fc46baef6a1fead9cf5d', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '70e0977e6e5d375cdf43ea8cd88f669012d82022', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '8c8045413286a6db45536389102016cd4ee4f715', class: "relative flex flex-col items-end gap-2 rounded-lg border border-solid border-med bg-white p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("textarea", { key: '94c3c69e71cdd30cbd4f2a836d246324bb77756d', id: this.inputId, placeholder: this.placeholder, maxlength: this.max_length, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                height: '44px',
                overflow: 'hidden',
            }, class: "w-full flex-1 resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0", "data-name": "prompt-input" }), h("div", { key: '14755a627580444a3222efda6e2220d77eb4e807', class: "gap-1 flex w-full items-center justify-between" }, h("div", { key: '924ac0a60d7fff86cdfcf0a6dd93a52850fb3e33', class: "flex items-center gap-2" }, h("slot", { key: '475f17b72511762d04a21c80a042b0d09df4c798', name: "actions-left" })), h("div", { key: '9be15968ef8beab2479ef556034d6034c8c5aa76', class: "flex items-center gap-2 self-end" }, h("slot", { key: 'bec7c6dc7a550485aa99180c967bc116698a5cec', name: "actions-right" }), h("atui-button", { key: '377c5f81805e43600da94e682be5a2efb74c453a', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: 'ae2377f815cb72af22d0a62de67c0bb5bafbf877', name: "footer" })));
    }
    get el() { return getElement(this); }
};

export { AtuiPromptInputComponent as atui_prompt_input };
//# sourceMappingURL=atui-prompt-input.entry.js.map

//# sourceMappingURL=atui-prompt-input.entry.js.map