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
        return (h(Host, { key: 'a92be3a1e39b1a3f580005fe56c85fb82f99759a', id: this.inputId + '-container', class: "w-full px-16" }, h("div", { key: '7a9730762c4e6fb6d84055c3b1b516e8da0a8ef9', class: "flex flex-col" }, h("slot", { key: 'ac089935dd15bd31c11820fea52ad57213e7e199', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '7bf097ab0c155c85203d1bef5158c51d4bb9bebe', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: '13c4791e1680faf088fd8709eeca48e7aa3fe0e5', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: '2bb81de1389c0112b650cddab44d82aeb965deea', class: containerClass }, h("textarea", { key: 'b4095a42fd7e1056d132048bda7baa7f4dd77d8e', class: inputClass, disabled: this.disabled, id: this.inputId, placeholder: this.placeholder, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                minHeight: '44px',
                maxHeight: this.max_height + 'px',
                overflow: 'auto',
            }, "data-name": "prompt-input" }), h("div", { key: '4e883c44e4507137e46860dfed5c2a2b005f4352', class: "flex w-full items-center justify-between gap-1" }, h("div", { key: 'a768d3db3aaedf2ab809df3f9a9f55f86d5d735d', class: "flex items-center gap-4" }, h("slot", { key: 'a4f449ac9df8d689e06cc46ed46ace44d5667565', name: "actions-left" })), h("div", { key: '4a15694bfabbfdd03db0a01e6458936d98ed0ad6', class: "flex items-center gap-4 self-end" }, h("slot", { key: '473664a212b9004f257f2f3a029634d17ab19728', name: "actions-right" }), h("at-button", { key: '63b60b6982ec32c0e20515d8f98900301674311a', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '82ef1305581236e017705a964b5f39766e5fcfcd', name: "footer" }), this.invalid && (h("span", { key: '10af5faad97d220caa699afa273e4f4f6c1b8c05', class: "text-error-dark text-xs", "data-name": "error-text" }, this.error_text
            ? this.error_text
            : this.translations.ATUI.PROMPT.ERROR_MESSAGE))));
    }
    static get is() { return "at-prompt-input"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
                "reflect": false
            },
            "hint_text": {
                "type": "string",
                "attribute": "hint_text",
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
                "reflect": false
            },
            "info_text": {
                "type": "string",
                "attribute": "info_text",
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
                "reflect": false
            },
            "error_text": {
                "type": "string",
                "attribute": "error_text",
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
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                "defaultValue": "'Enter your message...'"
            },
            "max_height": {
                "type": "number",
                "attribute": "max_height",
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
                "defaultValue": "240"
            },
            "max_length": {
                "type": "number",
                "attribute": "max_length",
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
                "defaultValue": "2000"
            },
            "in_progress": {
                "type": "boolean",
                "attribute": "in_progress",
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
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
//# sourceMappingURL=at-prompt-input.js.map
