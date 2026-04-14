import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
import { classlist } from "../../../utils/classlist";
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
/**
 * @category Prompt
 * @description A specialized input component optimized for AI prompt-components interfaces. Supports both single-line and multi-line variants with auto-resize, character counting, send/stop functionality, and enhanced UX for conversational interfaces.
 * @slot label -  Custom label content (alternative to using the label prop)
 * @slot actions-left - Custom content displayed at bottom left of input
 * @slot actions-right - Custom content displayed at bottom right of input
 * @slot footer - Custom content displayed below input
 */
export class AtPromptInputComponent {
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
    el;
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
        return (h(Host, { key: '8491a9905e96476b5901df130273f654a0182751', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '12d505966a32e44d01daee9ba18d2808476639e5', class: "flex flex-col" }, h("slot", { key: '98d39764f55bb9b49713fa5bd4792bb86230bd3a', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '579f285f1845e30c60ffcf41f9cdae909a5527b4', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '604f75a9582956852b6d8c0c89ca7e3b780e7c12', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '5dabf3529c15fecd2a2ed990be74ad6429307130', class: containerClass }, h("textarea", { key: '817c7ead60ed25bae2abb0929f6352dd6c5cce4d', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: 'dc2c1a01da5f3d5431c468fbb6cb607c0e4c32ea', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: '727946fa10aa657f839678a24d510c6e091b91cb', class: "flex items-center gap-4" }, h("slot", { key: '96022dc50e4701a56d42fa422cd61c84d0fe316b', name: "actions-left" })), h("div", { key: '137b530f67e94ca2e5fa7726c75712dbdceff966', class: "flex items-center gap-4 self-end" }, h("slot", { key: '0bcf101cba47eb4de53024590612bc19fa8af73b', name: "actions-right" }), h("at-button", { key: '21af32dabe1bb5b19237b819d0e34946949186cf', class: "rounded-lg", size: "sm", type: "secondary", disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" }, h("at-icon", { key: '82ff67b5685931913c048aaa57f82c0910870318', slot: "icon", name: this.in_progress ? 'stop' : 'allowUp' }))))), h("slot", { key: '368c5b5f34a81e9541db2616984f55de26d1232f', name: "footer" }), this.invalid && (h("span", { key: 'c3cd4a9cc50be3edce1e31cebc44cb2cf028bcff', class: "text-error-dark text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
    static get is() { return "at-prompt-input"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label above the input container"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "hint_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Short description or validation hint if required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint_text"
            },
            "info_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional info icon with detailed tooltip description"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "error_text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Error text displayed when invalid is set via max length"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_text"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder text to be shown when no input is passed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'Enter your message...'"
            },
            "max_height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum height in pixels for auto-resize"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_height",
                "defaultValue": "240"
            },
            "max_length": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum character length with counter display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max_length",
                "defaultValue": "2000"
            },
            "in_progress": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls whether the component is in progress (shows stop button) or ready to send (shows send button)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "in_progress",
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disable input interactions and apply visual indication"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "textareaEl": {},
            "translations": {},
            "invalid": {}
        };
    }
    static get events() {
        return [{
                "method": "atChange",
                "name": "atChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the value changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atSubmit",
                "name": "atSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when a message should be sent"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atStop",
                "name": "atStop",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the stop button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atFocus",
                "name": "atFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the input receives focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
