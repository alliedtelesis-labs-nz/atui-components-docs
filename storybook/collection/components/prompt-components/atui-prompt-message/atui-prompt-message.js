import { Host, h, Fragment, } from "@stencil/core";
import { cva } from "class-variance-authority";
import { fetchTranslations } from "../../../utils/translation";
// Add vote status enum to match Angular implementation
export var VoteStatus;
(function (VoteStatus) {
    VoteStatus[VoteStatus["None"] = 0] = "None";
    VoteStatus[VoteStatus["Up"] = 1] = "Up";
    VoteStatus[VoteStatus["Down"] = -1] = "Down";
})(VoteStatus || (VoteStatus = {}));
const messageVariants = cva('text-base rounded-lg py-4', {
    variants: {
        role: {
            user: 'ml-auto inline-block bg-surface-2 p-8 text-dark',
            assistant: 'mr-auto text-dark',
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
});
/**
 * @category Prompt
 * @description A message component for displaying individual chat messages with different roles (user, assistant). Supports optional avatars, loading states, error states, and interactive actions like copy, edit, and retry.
 * @slot - Custom message content (alternative to using the content prop)
 */
export class AtuiPromptMessage {
    constructor() {
        /**
         * The role/type of the message sender (only 'user' and 'assistant' are supported)
         */
        this.role = 'user';
        /**
         * The message content text
         */
        this.content = '';
        /**
         * Shows loading state with animated placeholder content
         */
        this.loading = false;
        /**
         * Shows error state styling and enables retry action
         */
        this.error = false;
        /**
         * The current vote status of the message
         */
        this.vote_status = VoteStatus.None;
        /**
         * Display voting actions for assistant messages
         */
        this.enable_vote = false;
        /**
         * Display copy action for assistant messages - copies message content to clipboard
         */
        this.enable_copy = false;
        /**
         * Display edit action for user messages
         */
        this.enable_edit = false;
        this.copyFeedbackVisible = false;
        this.handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(this.content);
                this.copyFeedbackVisible = true;
                this.atuiCopy.emit(this.content);
                setTimeout(() => {
                    this.copyFeedbackVisible = false;
                }, 2000);
            }
            catch (err) {
                console.error('Failed to copy text:', err);
            }
        };
        this.handleRetry = () => {
            this.atuiRetry.emit();
        };
        this.handleEdit = () => {
            this.atuiEdit.emit(this.content);
        };
        this.handleVote = (score) => {
            const newScore = this.vote_status === score ? VoteStatus.None : score;
            this.atuiVote.emit({ messageId: this.message_id, score: newScore });
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    renderActions() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (this.loading)
            return null;
        return (h("div", { class: "mt-2 flex items-center justify-end gap-2", "data-name": "message-actions" }, this.role === 'user' && this.enable_edit && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "edit", class: "text-xs", onClick: this.handleEdit, "data-name": "edit-button" }), h("span", { slot: "tooltip-content" }, ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.EDIT) || 'Edit'))), this.role === 'assistant' && this.enable_vote && (h(Fragment, null, h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(VoteStatus.Up), "data-name": "vote-up-button" }, this.vote_status === VoteStatus.Up ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#adb5bd" // token-border-dark
        }, h("path", { d: "M720-144H264v-480l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L786.93-187.8Q778-168 760-156t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Z" })))), h("span", { slot: "tooltip-content" }, ((_f = (_e = (_d = this.translations) === null || _d === void 0 ? void 0 : _d.ATUI) === null || _e === void 0 ? void 0 : _e.PROMPT) === null || _f === void 0 ? void 0 : _f.HELPFUL) ||
            'Helpful')), h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", onClick: () => this.handleVote(VoteStatus.Down), "data-name": "vote-down-button" }, this.vote_status === VoteStatus.Down ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "15px", viewBox: "0 -960 960 960", width: "15px", fill: "#000000" }, h("path", { d: "M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15px", viewBox: "0 -960 960 960", height: "15px", fill: "#adb5bd" // token-border-dark
        }, h("path", { d: "M240-816h456v480L408-48l-32-22q-17-12-26-30.5t-5-38.5l1-5 38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm384 72H240L120-465v57h352l-49 243 201-201v-378Zm0 378v-378 378Z" })))), h("span", { slot: "tooltip-content" }, ((_j = (_h = (_g = this.translations) === null || _g === void 0 ? void 0 : _g.ATUI) === null || _h === void 0 ? void 0 : _h.PROMPT) === null || _j === void 0 ? void 0 : _j.NOT_HELPFUL) ||
            'Not Helpful')))), this.role === 'assistant' && this.enable_copy && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", icon: this.copyFeedbackVisible
                ? 'check'
                : 'content_copy', type: "secondaryText", onClick: this.handleCopy, "data-name": "copy-button" }), h("span", { slot: "tooltip-content" }, this.copyFeedbackVisible
            ? ((_m = (_l = (_k = this.translations) === null || _k === void 0 ? void 0 : _k.ATUI) === null || _l === void 0 ? void 0 : _l.PROMPT) === null || _m === void 0 ? void 0 : _m.COPIED) ||
                'Copied'
            : ((_q = (_p = (_o = this.translations) === null || _o === void 0 ? void 0 : _o.ATUI) === null || _p === void 0 ? void 0 : _p.PROMPT) === null || _q === void 0 ? void 0 : _q.COPY) ||
                'Copy'))), this.role === 'assistant' && this.error && (h("atui-tooltip", { position: "top" }, h("atui-button", { slot: "tooltip-trigger", size: "sm", type: "secondaryText", icon: "refresh", onClick: this.handleRetry, "data-name": "retry-button" }), h("span", { slot: "tooltip-content" }, ((_t = (_s = (_r = this.translations) === null || _r === void 0 ? void 0 : _r.ATUI) === null || _s === void 0 ? void 0 : _s.PROMPT) === null || _t === void 0 ? void 0 : _t.RETRY) || 'Retry')))));
    }
    renderContent() {
        var _a, _b, _c;
        if (this.loading) {
            return (h("div", { class: "py-8", "data-name": "loading-wrapper" }, h("atui-loading", { class: "flex items-center gap-4 py-8", "data-name": "loading-content", variant: "typing", size: "sm" })));
        }
        if (this.error) {
            return (h("div", { class: "space-y-2", ref: (el) => (this.errorEl = el), "data-name": "error-content" }, h("p", { class: "text-destructive-foreground" }, this.error_message ||
                ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.ERROR_GENERATING_RESPONSE) ||
                'Error generating response')));
        }
        return (h("div", { class: "prose prose-sm preserve-newlines max-w-none", "data-name": "message-content" }, h("slot", null), this.content));
    }
    render() {
        const messageClasses = messageVariants({
            role: this.role,
            loading: this.loading,
        });
        return (h(Host, { key: '72b46c749303325fcf53598a6bc3cad2b489a7ab', class: "flex w-full gap-8", "data-name": "message-container", "data-role": this.role }, h("div", { key: '86b25133b3d2847222e3d4ae4721495a5030cfef', class: "flex flex-1 flex-col" }, this.name && (h("span", { key: '6b707f76a474b3f743a1dd4a942b02f6e660301b', class: "self-start text-sm text-light", "data-name": "message-name" }, this.name)), h("div", { key: '8afefba823510d0925b174605a38b07d901f443c', class: messageClasses }, this.renderContent()), this.renderActions())));
    }
    static get is() { return "atui-prompt-message"; }
    static get properties() {
        return {
            "role": {
                "type": "string",
                "attribute": "role",
                "mutable": false,
                "complexType": {
                    "original": "Exclude<MessageRole, 'system'>",
                    "resolved": "\"assistant\" | \"user\"",
                    "references": {
                        "Exclude": {
                            "location": "global",
                            "id": "global::Exclude"
                        },
                        "MessageRole": {
                            "location": "import",
                            "path": "../../../types",
                            "id": "src/types/index.ts::MessageRole"
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
                "defaultValue": "'user'"
            },
            "content": {
                "type": "string",
                "attribute": "content",
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
                "defaultValue": "''"
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                "reflect": false
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
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
                "defaultValue": "false"
            },
            "error": {
                "type": "boolean",
                "attribute": "error",
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
                "defaultValue": "false"
            },
            "error_message": {
                "type": "string",
                "attribute": "error_message",
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
                "reflect": false
            },
            "vote_status": {
                "type": "number",
                "attribute": "vote_status",
                "mutable": false,
                "complexType": {
                    "original": "VoteStatus",
                    "resolved": "VoteStatus.Down | VoteStatus.None | VoteStatus.Up",
                    "references": {
                        "VoteStatus": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/prompt-components/atui-prompt-message/atui-prompt-message.tsx",
                            "id": "src/components/prompt-components/atui-prompt-message/atui-prompt-message.tsx::VoteStatus"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current vote status of the message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "VoteStatus.None"
            },
            "enable_vote": {
                "type": "boolean",
                "attribute": "enable_vote",
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
                "defaultValue": "false"
            },
            "enable_copy": {
                "type": "boolean",
                "attribute": "enable_copy",
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
                "defaultValue": "false"
            },
            "enable_edit": {
                "type": "boolean",
                "attribute": "enable_edit",
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
                "defaultValue": "false"
            },
            "message_id": {
                "type": "string",
                "attribute": "message_id",
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
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "translations": {},
            "copyFeedbackVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiCopy",
                "name": "atuiCopy",
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
                "method": "atuiVote",
                "name": "atuiVote",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a vote action is triggered"
                },
                "complexType": {
                    "original": "{ messageId: string; score: number }",
                    "resolved": "{ messageId: string; score: number; }",
                    "references": {}
                }
            }, {
                "method": "atuiRetry",
                "name": "atuiRetry",
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
                "method": "atuiEdit",
                "name": "atuiEdit",
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
}
//# sourceMappingURL=atui-prompt-message.js.map
