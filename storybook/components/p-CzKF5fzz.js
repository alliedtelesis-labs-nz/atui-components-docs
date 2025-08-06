import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$4 } from './p-C9eqBXeS.js';
import { d as defineCustomElement$3 } from './p-BenHHUgN.js';
import { d as defineCustomElement$2 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$1 } from './p-D9Wtum9m.js';

const promptInputContainerVariants = cva('relative flex flex-col items-end gap-2 rounded-lg border border-solid p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out', {
    variants: {
        invalid: {
            true: 'border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/30',
            false: 'border-med focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30',
        },
        disabled: {
            true: 'pointer-events-none bg-surface-1',
            false: 'bg-white',
        },
    },
    compoundVariants: [
        {
            disabled: true,
            className: 'focus-within:ring-0',
        },
    ],
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const promptInputVariants = cva('w-full resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0', {
    variants: {
        invalid: {
            true: 'border-destructive-foreground',
            false: 'border-med',
        },
        disabled: {
            true: 'pointer-events-none bg-surface-1',
            false: 'bg-disableD-LIGHT',
        },
    },
    defaultVariants: {
        invalid: false,
        disabled: false,
    },
});
const AtuiPromptInputComponent = /*@__PURE__*/ proxyCustomElement(class AtuiPromptInputComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.atuiStop = createEvent(this, "atuiStop", 7);
        this.atuiFocus = createEvent(this, "atuiFocus", 7);
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = 'Enter your message...';
        /**
         * Maximum height in pixels for auto-resize
         */
        this.max_height = 240;
        /**
         * Maximum character length with counter display
         */
        this.max_length = 2000;
        /**
         * Controls whether the component is in progress (shows stop button) or ready to send (shows send button)
         */
        this.in_progress = false;
        /**
         * The value of the input
         */
        this.value = '';
        /**
         * Disable input interactions and apply visual indication
         */
        this.disabled = false;
        this.invalid = false;
        /**
         * @slot label - Custom label content (alternative to using the label prop)
         */
        this.inputId = `prompt-input-${Math.random().toString(36).substring(2, 11)}`;
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    focusInput() {
        if (this.textareaEl) {
            this.textareaEl.focus();
            this.atuiFocus.emit();
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
        this.atuiChange.emit(this.value);
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
            this.atuiStop.emit();
        }
        else if (this.value && this.value.trim() !== '' && !this.invalid) {
            this.atuiSubmit.emit(this.value.trim());
            this.value = '';
            this.invalid = false; // Reset invalid state when message is sent
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
        return (h(Host, { key: 'aa968cd0ec4da3fe4afe9a8e53084a87c161d813', tabindex: "-1", id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: 'd3231c29c5b2926c8f2287c96fdafbf4815755ab', class: "flex flex-col" }, h("slot", { key: 'f22ecd5434d3ea0da975b8f3515f9038e43f9ac7', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: '5713272d9b12e90434bb8245f89d4d70c4538828', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: 'd480a19cb061b8dcd5b3ddb7932ca59eeb934d28', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '9e619856eb62d4cb9b77f4c0ac7c7189b8a01f0c', class: containerClass }, h("textarea", { key: 'bfb86532a9bde8ca2d47f06d98a558c970a6705c', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'hidden',
            }, "data-name": "prompt-input" }), h("div", { key: '7f7675707feffad6694ec5151ea3c690222161e4', class: "gap-1 flex w-full items-center justify-between" }, h("div", { key: 'b392664eaee8f5d98fdf798d88a65b3c2e4e650e', class: "flex items-center gap-4" }, h("slot", { key: '5e5aaee983a84b29f39592c9877e6869b806f0e1', name: "actions-left" })), h("div", { key: '3c8ad41b2964af794df0926e9eb9350be5e75292', class: "flex items-center gap-4 self-end" }, h("slot", { key: '7639389078abb571310dee5a9762d3caf0546886', name: "actions-right" }), h("atui-button", { key: 'c8657bbfe05dd62ae93f99e1a372e1edcd7d61fe', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '47da738299a326283f129c428f6a7e9b754c199c', name: "footer" }), this.invalid && (h("span", { key: 'f1d6f1a6f4af9d7d987113ceb7d43e148da2eef7', class: "text-xs text-error-dark", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
    get el() { return this; }
}, [260, "atui-prompt-input", {
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
    const components = ["atui-prompt-input", "atui-button", "atui-form-label", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-prompt-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPromptInputComponent);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiPromptInputComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CzKF5fzz.js.map

//# sourceMappingURL=p-CzKF5fzz.js.map