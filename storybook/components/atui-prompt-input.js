import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$5 } from './p-CGoVUV9r.js';
import { d as defineCustomElement$4 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$3 } from './p-ByK4-pDJ.js';
import { d as defineCustomElement$2 } from './p-BLBTk09G.js';

const AtuiPromptInputComponent = /*@__PURE__*/ proxyCustomElement(class AtuiPromptInputComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '89054d4c5ad3dc9293a1d0f7d497f6e3082491bc', tabindex: "-1" }, h("div", { key: '69a4c04f4dd8f902c427be67b8de16d6397726c4', class: "flex flex-col" }, h("slot", { key: '77f5eda2c4be95e534d341fc11c2d65223faf287', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: '4dba43cfcde6fd7cb9ea223d4b2228bc19b30e56', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '4560cc3549b097971103c9c7ad13d0341e4699b2', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '472189157aab3a7c03aab8456189124290f16121', class: "relative flex flex-col items-end gap-2 rounded-lg border border-solid border-med bg-white p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("textarea", { key: 'e18d7f2c2bf0ba6549a35dd38da6dcd33946b9b1', id: this.inputId, placeholder: this.placeholder, maxlength: this.max_length, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                height: '44px',
                overflow: 'hidden',
            }, class: "w-full flex-1 resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0", "data-name": "prompt-input" }), h("div", { key: 'c779b7447596e18e204a6849e240a87f3ab388d3', class: "gap-1 flex w-full items-center justify-between" }, h("div", { key: 'b7caa70a66c15f2eb225582afece516c427867f2', class: "flex items-center gap-4" }, h("slot", { key: '489f4cedd96e3c920ff910b754923093acfd4a26', name: "actions-left" })), h("div", { key: '6a113ce070971b7677436dc6a177d374d49e9a8c', class: "flex items-center gap-4 self-end" }, h("slot", { key: 'f84e1c88b8074c231fd523f392c3dc3582c6ec29', name: "actions-right" }), h("atui-button", { key: '53a224b61283be03700d7f0af5360e7c4c94caab', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '264d5ad7aaa4c285c42883cc754a29e488c45b8b', name: "footer" })));
    }
    get el() { return this; }
}, [4, "atui-prompt-input", {
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "placeholder": [1],
        "invalid": [4],
        "max_height": [2],
        "max_length": [2],
        "in_progress": [4],
        "show_model_select": [4],
        "model": [1],
        "value": [1025],
        "textareaEl": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-prompt-input", "atui-button", "atui-form-label", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-prompt-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPromptInputComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiPromptInput = AtuiPromptInputComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiPromptInput, defineCustomElement };
//# sourceMappingURL=atui-prompt-input.js.map

//# sourceMappingURL=atui-prompt-input.js.map