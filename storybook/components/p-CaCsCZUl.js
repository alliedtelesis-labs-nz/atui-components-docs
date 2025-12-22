import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$4 } from './p-Dx91wqSp.js';
import { d as defineCustomElement$3 } from './p-CIL9MUFC.js';
import { d as defineCustomElement$2 } from './p-bn76tgB4.js';
import { d as defineCustomElement$1 } from './p-B8lZLFeC.js';

const promptInputContainerVariants = classlist('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
    variants: {
        invalid: {
            true: 'border-destructive focus-within:border-destructive focus-within:ring-destructive/30 focus-within:ring-2',
            false: 'border-med focus-within:border-active-foreground focus-within:ring-active-foreground/30 focus-within:ring-2',
        },
        disabled: {
            true: 'bg-surface-1 pointer-events-none',
            false: 'bg-white',
        },
    },
    compoundVariants: [
        {
            disabled: true,
            class: 'focus-within:ring-0',
        },
    ],
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const promptInputVariants = classlist('text-body text-dark w-full resize-none border-none bg-transparent break-words whitespace-pre-wrap shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
    variants: {
        invalid: {
            true: 'border-destructive-foreground',
            false: 'border-med',
        },
        disabled: {
            true: 'bg-surface-1 pointer-events-none',
            false: 'bg-disableD-LIGHT',
        },
    },
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const AtPromptInputComponent = /*@__PURE__*/ proxyCustomElement(class AtPromptInputComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
        this.atSubmit = createEvent(this, "atSubmit", 7);
        this.atStop = createEvent(this, "atStop", 7);
        this.atFocus = createEvent(this, "atFocus", 7);
    }
    /**
     * Label above the input container
     */
    label;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text;
    /**
     * Error text displayed when invalid is set via max length
     */
    error_text;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder = 'Enter your message...';
    /**
     * Maximum height in pixels for auto-resize
     */
    max_height = 240;
    /**
     * Maximum character length with counter display
     */
    max_length = 2000;
    /**
     * Controls whether the component is in progress (shows stop button) or ready to send (shows send button)
     */
    in_progress = false;
    /**
     * The value of the input
     */
    value = '';
    /**
     * Disable input interactions and apply visual indication
     */
    disabled = false;
    textareaEl;
    translations;
    invalid = false;
    get el() { return this; }
    /**
     * Emits when the value changes
     */
    atChange;
    /**
     * Emits when a message should be sent
     */
    atSubmit;
    /**
     * Emits when the stop button is clicked
     */
    atStop;
    /**
     * Emits when the input receives focus
     */
    atFocus;
    /**
     * @slot label - Custom label content (alternative to using the label prop)
     */
    inputId = `prompt-input-${Math.random().toString(36).substring(2, 11)}`;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    focusInput() {
        if (this.textareaEl) {
            this.textareaEl.focus();
            this.atFocus.emit();
        }
    }
    handleInput(event) {
        event.stopPropagation();
        this.value = event.target.value;
        if (this.max_length && this.value.length > this.max_length) {
            this.invalid = true;
        }
        else {
            this.invalid = false;
        }
        this.atChange.emit(this.value);
        this.autoResize();
    }
    autoResize() {
        if (this.textareaEl) {
            this.textareaEl.style.height = 'auto';
            const scrollHeight = this.textareaEl.scrollHeight;
            const newHeight = Math.max(44, Math.min(scrollHeight, this.max_height));
            this.textareaEl.style.height = `${newHeight}px`;
        }
    }
    componentDidLoad() {
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
            this.atStop.emit();
        }
        else if (this.value && this.value.trim() !== '' && !this.invalid) {
            this.atSubmit.emit(this.value.trim());
            this.value = '';
            this.invalid = false;
            setTimeout(() => {
                this.autoResize();
                this.focusInput();
            }, 0);
        }
    }
    render() {
        const canSend = !this.disabled &&
            !this.invalid &&
            (this.in_progress || (this.value && this.value.trim() !== ''));
        const containerClass = promptInputContainerVariants({
            invalid: this.invalid,
            disabled: this.disabled,
        });
        const inputClass = promptInputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'e68d4e84f799ddbdf860841bee9ec17c257dcf75', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: 'b5093971003c80d1d461c08ee0968f35f088ec6d', class: "flex flex-col" }, h("slot", { key: '910df1ac866fdf12b52bfc1772d7eabb87adfb99', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '9fd08c99b50b2f89c76ed463bd29d7c7dba8c4d5', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '17fa088f4d07c163256170e0790affcd44fc7112', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '10d9d0b04266206741e48fb4347671693708e40c', class: containerClass }, h("textarea", { key: '096eb8fe326b9a97c7d573d44b017e794dd92b65', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: 'a7e36022bdd95dd3a2462e6fcf7bec096526bb80', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: 'adced8f3b36d317913c56eb6d404c212fb09dd4f', class: "flex items-center gap-4" }, h("slot", { key: '26f86c5dbb96f1237406b3d46900b48df001ee3a', name: "actions-left" })), h("div", { key: '6b64bb3de82833e2c3f8b37892a9e3e356f3352a', class: "flex items-center gap-4 self-end" }, h("slot", { key: '26ccc69f2a683417e291eac09a2631eda0fdb3cf', name: "actions-right" }), h("at-button", { key: '03c60eb2ddb3ac338d378968d2df3a4c5265ff8e', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '5268777caf3fa8d4d6f1cf07c964aba5c36b6620', name: "footer" }), this.invalid && (h("span", { key: '62492db359ecb927633d95598a64478bfe7bde41', class: "text-error-dark text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
}, [260, "at-prompt-input", {
        "label": [1],
        "hint_text": [1],
        "info_text": [1],
        "error_text": [1],
        "placeholder": [1],
        "max_height": [2],
        "max_length": [2],
        "in_progress": [4],
        "value": [1025],
        "disabled": [4],
        "textareaEl": [32],
        "translations": [32],
        "invalid": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-prompt-input", "at-button", "at-form-label", "at-loading", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-prompt-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtPromptInputComponent);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtPromptInputComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CaCsCZUl.js.map

//# sourceMappingURL=p-CaCsCZUl.js.map