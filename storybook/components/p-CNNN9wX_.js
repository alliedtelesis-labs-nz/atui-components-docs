import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$4 } from './p-CneQ50Br.js';
import { d as defineCustomElement$3 } from './p-DS8rd89A.js';
import { d as defineCustomElement$2 } from './p-bn76tgB4.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

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
        return (h(Host, { key: 'd8d136b3842cd70e7c140fe61ccba2beac2f1b72', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '45be2ede957cf93e314111d25e1027e2544b2095', class: "flex flex-col" }, h("slot", { key: 'e8bd5f5187dbd9453c71c8197f3889b795452292', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '0872190d7243f633df4871d23d3b5822627a3dec', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: 'c8106abe5d016aebd25733e79d488f53f469c9d6', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: 'b1f1a1c2602f074b6ce8c5592ea400e0e4d355aa', class: containerClass }, h("textarea", { key: '35c4c99d36d0fc5245032a526c74e04d28baf87c', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: '7b16cfbbe2b02dc369cb727cbf5befa8c98a8042', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: 'd4e914fc724411d5a1101eeaa4060069a8bd7382', class: "flex items-center gap-4" }, h("slot", { key: '2d442d80c56caefcbfe00538c8a88224bf2ae2b2', name: "actions-left" })), h("div", { key: '77b37e84dce32d786f06b9bde347129d8a414c0f', class: "flex items-center gap-4 self-end" }, h("slot", { key: 'f7fa395ac82fcf56f80f2e3a038dd5e2a1fe632e', name: "actions-right" }), h("at-button", { key: '78f71a501e3d097bb7265ad5a814df175ceda757', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '543b4369bddc16ac8ab7801a1f0bb91ba4d87fbe', name: "footer" }), this.invalid && (h("span", { key: 'b7d4440b474b5d9e0fb8c162a4164dc8b0a193dc', class: "text-error-dark text-xs", "data-name": "error-text" }, this.error_text
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
//# sourceMappingURL=p-CNNN9wX_.js.map

//# sourceMappingURL=p-CNNN9wX_.js.map