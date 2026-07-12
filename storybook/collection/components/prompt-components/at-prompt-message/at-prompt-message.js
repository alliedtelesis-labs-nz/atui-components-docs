import { Fragment, h, Host, } from "@stencil/core";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { classlist } from "../../../utils/classlist";
import { fetchTranslations } from "../../../utils/translation";
import { AtPromptResponseScore, } from "../../../types";
const messageVariantsConfig = {
    variants: {
        role: {
            user: 'bg-surface-2 text-foreground ml-auto inline-block p-8',
            assistant: 'text-foreground mr-auto',
            system: 'text-foreground mr-auto',
        },
        loading: {
            true: 'animate-pulse',
            false: '',
        },
    },
    defaultVariants: {
        role: 'user',
        loading: false,
    },
};
const getMessageClasses = classlist('rounded-lg py-4 text-base', messageVariantsConfig);
/**
 * @category Prompt
 * @description A message component for displaying individual chat messages with different roles (user, assistant). Supports optional avatars, loading states, error states, and interactive actions like copy, edit, and retry. Assistant messages support markdown rendering and word-by-word animation.
 * @slot - Custom message content (alternative to using the content prop)
 */
export class AtPromptMessage {
    /**
     * The role/type of the message sender (only 'user' and 'assistant' are supported)
     */
    role = 'user';
    /**
     * The message content text
     */
    content = '';
    /**
     * Display name for the message sender
     */
    name;
    /**
     * Shows loading state with animated placeholder content
     */
    loading = false;
    /**
     * Shows error state styling and enables retry action
     */
    error = false;
    /**
     * Custom error message text (defaults to generic error message)
     */
    error_message;
    /**
     * The current vote score of the message
     */
    score = AtPromptResponseScore.NONE;
    /**
     * Display voting actions for assistant messages
     */
    enable_vote = false;
    /**
     * Display copy action for assistant messages - copies message content to clipboard
     */
    enable_copy = false;
    /**
     * Display edit action for user messages
     */
    enable_edit = false;
    /**
     * Unique identifier for the message
     */
    message_id;
    /**
     * Animation type for text streaming effect
     * - 'none': No animation (default)
     * - 'fade': Fade in the entire message
     * - 'words': Animate words appearing sequentially
     */
    response_animation = 'words';
    /**
     * Emitted when the copy action is triggered
     */
    atCopy;
    /**
     * Emitted when a vote action is triggered
     */
    atVote;
    /**
     * Emitted when the retry action is triggered (for assistant messages with errors)
     */
    atRetry;
    /**
     * Emitted when the edit action is triggered (for user messages)
     */
    atEdit;
    translations;
    copyFeedbackVisible = false;
    animatedContent = '';
    isAnimating = false;
    errorEl;
    el;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
        this.initializeContent();
    }
    watchContentChange(newContent) {
        if (newContent &&
            this.response_animation === 'words' &&
            this.role === 'assistant') {
            this.startWordAnimation(newContent);
        }
        else {
            this.animatedContent = newContent;
        }
    }
    initializeContent() {
        if (this.content &&
            this.response_animation === 'words' &&
            this.role === 'assistant') {
            this.startWordAnimation(this.content);
        }
        else {
            this.animatedContent = this.content;
        }
    }
    startWordAnimation(content) {
        if (this.isAnimating)
            return;
        this.isAnimating = true;
        this.animatedContent = '';
        const words = content.split(' ');
        let currentWordIndex = 0;
        const animateNextWord = () => {
            if (currentWordIndex < words.length) {
                if (currentWordIndex === 0) {
                    this.animatedContent = words[currentWordIndex];
                }
                else {
                    this.animatedContent += ' ' + words[currentWordIndex];
                }
                currentWordIndex++;
                const delay = Math.random() * 30 + 30;
                setTimeout(animateNextWord, delay);
            }
            else {
                this.isAnimating = false;
            }
        };
        setTimeout(animateNextWord, 30);
    }
    handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(this.content);
            this.copyFeedbackVisible = true;
            this.atCopy.emit(this.content);
            setTimeout(() => {
                this.copyFeedbackVisible = false;
            }, 2000);
        }
        catch (err) {
            console.error('Failed to copy text:', err);
        }
    };
    handleRetry = () => {
        this.atRetry.emit();
    };
    handleEdit = () => {
        this.atEdit.emit(this.content);
    };
    handleVote = (score) => {
        const newScore = this.score === score ? AtPromptResponseScore.NONE : score;
        this.atVote.emit({ messageId: this.message_id, score: newScore });
    };
    renderActions() {
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }, h("at-icon", { slot: "icon", name: "edit" })), h("span", null, this.translations?.ATUI?.PROMPT?.EDIT || 'Edit'))), this.role === 'assistant' && this.enable_vote && (h(Fragment, null, h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(AtPromptResponseScore.UP), "data-name": "vote-up-button" }, h("at-icon", { slot: "icon", name: this.score === AtPromptResponseScore.UP
                ? 'thumbs_up_filled'
                : 'thumbs_up' })), h("span", null, this.translations?.ATUI?.PROMPT?.HELPFUL ||
            'Helpful')), h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(AtPromptResponseScore.DOWN), "data-name": "vote-down-button" }, h("at-icon", { slot: "icon", name: this.score ===
                AtPromptResponseScore.DOWN
                ? 'thumbs_down_filled'
                : 'thumbs_down' })), h("span", null, this.translations?.ATUI?.PROMPT?.NOT_HELPFUL ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }, h("at-icon", { slot: "icon", name: this.copyFeedbackVisible ? 'check' : 'copy' })), h("span", null, this.copyFeedbackVisible
            ? this.translations?.ATUI?.PROMPT?.COPIED ||
                'Copied'
            : this.translations?.ATUI?.PROMPT?.COPY ||
                'Copy'))), this.role === 'assistant' && this.error && (h("at-tooltip", { position: "top" }, h("at-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: this.handleRetry, "data-name": "retry-button" }, h("at-icon", { slot: "icon", name: "retry" })), h("span", null, this.translations?.ATUI?.PROMPT?.RETRY || 'Retry')))));
    }
    renderContent() {
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-wrapper" }, h("at-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive-foreground" }, this.error_message ||
                this.translations?.ATUI?.PROMPT
                    ?.ERROR_GENERATING_RESPONSE ||
                'Error generating response')));
        }
        const contentToDisplay = this.response_animation === 'words' && this.role === 'assistant'
            ? this.animatedContent
            : this.content;
        const animationClass = this.response_animation === 'fade' ||
            this.response_animation === 'words'
            ? 'at-prompt-fade-in'
            : '';
        return (h("div", { class: `prose prose-sm preserve-newlines max-w-none ${animationClass}`, "data-name": "message-content" }, h("slot", null), this.renderSafeContent(contentToDisplay)));
    }
    renderSafeContent(content) {
        if (this.role === 'assistant') {
            const html = marked.parse(content);
            const safeHtml = DOMPurify.sanitize(html);
            return h("span", { innerHTML: safeHtml });
        }
        else {
            return h("span", null, content);
        }
    }
    render() {
        const messageClasses = getMessageClasses({
            role: this.role,
            loading: this.loading,
        });
        return (h(Host, { key: '3285597900b7bed4243ec2840699cd9c7f6ec33d', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, h("div", { key: 'c88f657805d5d1f6b3478dae4b71edc4d6465116', class: "flex flex-1 flex-col" }, this.name && (h("span", { key: '8ec23a1b47182ac49656407607394006a1d5d90f', class: "text-muted self-start text-sm", "data-name": "message-name" }, this.name)), h("div", { key: '4700f08069135aa36a25993382ae7d187c7ea639', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    static get is() { return "at-prompt-message"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-prompt-message.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-prompt-message.css"]
        };
    }
    static get properties() {
        return {
            "role": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtPromptUserRole",
                    "resolved": "\"assistant\" | \"user\"",
                    "references": {
                        "AtPromptUserRole": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtPromptUserRole",
                            "referenceLocation": "AtPromptUserRole"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The role/type of the message sender (only 'user' and 'assistant' are supported)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "role",
                "defaultValue": "'user'"
            },
            "content": {
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
                    "text": "The message content text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content",
                "defaultValue": "''"
            },
            "name": {
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
                    "text": "Display name for the message sender"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "loading": {
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
                    "text": "Shows loading state with animated placeholder content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "error": {
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
                    "text": "Shows error state styling and enables retry action"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error",
                "defaultValue": "false"
            },
            "error_message": {
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
                    "text": "Custom error message text (defaults to generic error message)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error_message"
            },
            "score": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "AtPromptResponseScore",
                    "resolved": "AtPromptResponseScore.DOWN | AtPromptResponseScore.NONE | AtPromptResponseScore.UP",
                    "references": {
                        "AtPromptResponseScore": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtPromptResponseScore",
                            "referenceLocation": "AtPromptResponseScore"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current vote score of the message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "score",
                "defaultValue": "AtPromptResponseScore.NONE"
            },
            "enable_vote": {
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
                    "text": "Display voting actions for assistant messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_vote",
                "defaultValue": "false"
            },
            "enable_copy": {
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
                    "text": "Display copy action for assistant messages - copies message content to clipboard"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_copy",
                "defaultValue": "false"
            },
            "enable_edit": {
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
                    "text": "Display edit action for user messages"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable_edit",
                "defaultValue": "false"
            },
            "message_id": {
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
                    "text": "Unique identifier for the message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message_id"
            },
            "response_animation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtPromptResponseAnimation",
                    "resolved": "\"fade\" | \"none\" | \"words\"",
                    "references": {
                        "AtPromptResponseAnimation": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::AtPromptResponseAnimation",
                            "referenceLocation": "AtPromptResponseAnimation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Animation type for text streaming effect\n- 'none': No animation (default)\n- 'fade': Fade in the entire message\n- 'words': Animate words appearing sequentially"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "response_animation",
                "defaultValue": "'words'"
            }
        };
    }
    static get states() {
        return {
            "translations": {},
            "copyFeedbackVisible": {},
            "animatedContent": {},
            "isAnimating": {}
        };
    }
    static get events() {
        return [{
                "method": "atCopy",
                "name": "atCopy",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the copy action is triggered"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "atVote",
                "name": "atVote",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a vote action is triggered"
                },
                "complexType": {
                    "original": "{\n        messageId: string;\n        score: number;\n    }",
                    "resolved": "{ messageId: string; score: number; }",
                    "references": {}
                }
            }, {
                "method": "atRetry",
                "name": "atRetry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the retry action is triggered (for assistant messages with errors)"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "atEdit",
                "name": "atEdit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the edit action is triggered (for user messages)"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "content",
                "methodName": "watchContentChange"
            }];
    }
}
