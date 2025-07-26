import { h, Host, } from "@stencil/core";
/**
 * @category Prompt
 * @description A specialized input component optimized for AI prompt interfaces. Supports both single-line and multi-line variants with auto-resize, character counting, send/stop functionality, and enhanced UX for conversational interfaces.
 */
export class AtuiPromptInputComponent {
    constructor() {
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
        return (h(Host, { key: '858638d522e8fbefdef3860483ba658a5e78394e', tabindex: "-1" }, h("div", { key: '6be2dbb2cb3e20b458b3518e4392e6fb5c35ef6e', class: "flex flex-col" }, h("slot", { key: 'fd654fe5cde68626610cc0456f3003cff35aea44', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: '4c054646d6d255f0041b01e315e9f11fcc44e8bc', label: this.label, for: this.inputId, info_text: this.info_text, "data-name": "prompt-input-label" })), this.hint_text && (h("span", { key: 'e063002c97f256d352e0742a1d4ae070753c701c', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "prompt-input-hint" }, this.hint_text))), h("div", { key: 'd39eb296e02811bff78f944e64eabf48b4e8ca29', class: "relative flex flex-col items-end gap-2 rounded-lg border border-solid border-med bg-white p-8 transition-[background-color,color,box-shadow] duration-300 ease-in-out focus-within:border-active-foreground focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("textarea", { key: 'f068ef0f15ac4f9930866498a1c9774ab839ea88', id: this.inputId, placeholder: this.placeholder, maxlength: this.max_length, onInput: (event) => this.handleInput(event), onKeyDown: (event) => this.handleKeyDown(event), value: this.value, ref: (el) => (this.textareaEl = el), style: {
                height: '44px',
                overflow: 'hidden',
            }, class: "w-full flex-1 resize-none whitespace-pre-wrap break-words border-none bg-transparent text-body text-dark shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0", "data-name": "prompt-input" }), h("div", { key: '6ace8ad87828f8bd6a1d73f30e8595fea7c70db2', class: "gap-1 flex w-full items-center justify-between" }, h("div", { key: 'ab5792276478e7a5886bb6abaad407b9c4b9adc4', class: "flex items-center gap-4" }, h("slot", { key: '86b3c2d4541d159de2c3bb16c3b2e07a628d113e', name: "actions-left" })), h("div", { key: 'ef6a51a05f1e9cd083d5771646dc3c7f4c8cd565', class: "flex items-center gap-4 self-end" }, h("slot", { key: '63437fe8fae2dfc5010c9bf5d8a10f8626e4413f', name: "actions-right" }), h("atui-button", { key: '6881031dae9952e50030e131d356367c710fd39d', class: "rounded-lg", size: "sm", type: "secondary", icon: this.in_progress ? 'stop' : 'arrow_upward', disabled: !canSend, onClick: () => this.sendMessage(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ') {
                    this.sendMessage();
                }
            }, "data-name": "prompt-send-button" })))), h("slot", { key: '5a820bce99b282c2284e20d5a2fc5fd2d0b2fa52', name: "footer" })));
    }
    static get is() { return "atui-prompt-input"; }
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
                    "text": "Error text displayed when invalid is set"
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
            "invalid": {
                "type": "boolean",
                "attribute": "invalid",
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
                    "text": "Shows the error text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                "reflect": false
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
            "show_model_select": {
                "type": "boolean",
                "attribute": "show_model_select",
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
                    "text": "Controls whether the model select is shown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "model": {
                "type": "string",
                "attribute": "model",
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
                    "text": "The model to use"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'gpt-4o'"
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
            }
        };
    }
    static get states() {
        return {
            "textareaEl": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiChange",
                "name": "atuiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the  value changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atuiSubmit",
                "name": "atuiSubmit",
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
                "method": "atuiStop",
                "name": "atuiStop",
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
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-prompt-input.js.map
