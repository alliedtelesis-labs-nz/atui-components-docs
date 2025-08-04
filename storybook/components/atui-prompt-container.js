import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$9 } from './p-C9eqBXeS.js';
import { d as defineCustomElement$8 } from './p-D9T3c7Wy.js';
import { d as defineCustomElement$7 } from './p-CjuJO3CY.js';
import { d as defineCustomElement$6 } from './p-BmgpvZ_L.js';
import { d as defineCustomElement$5 } from './p-DmXXAG3i.js';
import { d as defineCustomElement$4 } from './p-DpUodvdR.js';
import { d as defineCustomElement$3 } from './p-CyK5Pva4.js';
import { d as defineCustomElement$2 } from './p-CpnV9PUz.js';

const AtuiPromptContainer$1 = /*@__PURE__*/ proxyCustomElement(class AtuiPromptContainer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
        this.atuiStop = createEvent(this, "atuiStop", 7);
        this.atuiNewThread = createEvent(this, "atuiNewThread", 7);
        this.atuiMessageCopy = createEvent(this, "atuiMessageCopy", 7);
        this.atuiMessageRetry = createEvent(this, "atuiMessageRetry", 7);
        this.atuiMessageEdit = createEvent(this, "atuiMessageEdit", 7);
        this.atuiMessageVote = createEvent(this, "atuiMessageVote", 7);
        /**
         * Array of messages to display in the conversation thread
         */
        this.messages = [];
        /**
         * Title displayed in the header section
         */
        this.header_title = 'AI Assistant';
        /**
         * Placeholder text for the input field
         */
        this.placeholder = 'Type your message here...';
        /**
         * Shows loading state and disables input
         */
        this.loading = false;
        /**
         * Disables all interactions with the container
         */
        this.disabled = false;
        /**
         * Controls visibility of the header section
         */
        this.show_header = true;
        /**
         * Controls visibility of the "New Thread" button in the header
         */
        this.show_new_thread_button = true;
        /**
         * Maximum character length for input messages
         */
        this.max_message_length = 2000;
        /**
         * Display voting actions for assistant messages
         */
        this.enable_vote = true;
        /**
         * Display copy action for assistant messages
         */
        this.enable_copy = true;
        /**
         * Display edit action for user messages
         */
        this.enable_edit = false;
        this.currentInput = '';
        this.inputInvalid = false;
        this.inputError = '';
        this.isSendEnabled = true;
        this.translations = {};
        this.handleSubmit = async (content) => {
            if (!content || this.disabled || this.loading || !this.isSendEnabled) {
                return;
            }
            this.isSendEnabled = false;
            await this.addMessage('user', content);
            this.atuiSubmit.emit(content);
        };
        this.handleStop = () => {
            this.atuiStop.emit();
        };
        this.handleNewThread = async () => {
            await this.newThread();
        };
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    handleInputSubmit(event) {
        const content = event.detail.trim();
        if (content && this.isSendEnabled && !this.disabled && !this.loading) {
            this.handleSubmit(content);
        }
    }
    handleMessageCopy(event) {
        this.atuiMessageCopy.emit(event.detail);
    }
    handleMessageRetry(event) {
        this.atuiMessageRetry.emit(event.detail);
    }
    async handleMessageEdit(event) {
        this.atuiMessageEdit.emit(event.detail);
        if (this.inputComponent) {
            this.inputComponent.value = event.detail.content;
            await this.focusInput();
        }
    }
    handleMessageVote(event) {
        event.stopPropagation();
        const messageIndex = this.messages.findIndex((msg) => msg.id === event.detail.messageId);
        if (messageIndex !== -1) {
            const updatedMessages = [...this.messages];
            updatedMessages[messageIndex] = Object.assign(Object.assign({}, updatedMessages[messageIndex]), { vote_status: event.detail.score });
            this.messages = updatedMessages;
        }
    }
    /**
     * Programmatically add a message to the conversation thread
     * @param role - The message role
     * @param content - The message content
     */
    async addMessage(role, content) {
        const message = {
            id: Date.now().toString(),
            role,
            content,
        };
        this.messages = [...this.messages, message];
    }
    /**
     * Append content to the last message in the thread (useful for streaming responses)
     * @param content - The content to append
     * @returns Promise<boolean> - Returns true if successful, false if no messages exist or last message is not from assistant
     */
    async appendToLastMessage(content) {
        if (this.messages.length === 0)
            return false;
        const lastMessage = this.messages[this.messages.length - 1];
        if (lastMessage.role !== 'assistant')
            return false;
        lastMessage.content += content;
        this.messages = [...this.messages];
        return true;
    }
    /**
     * Start a new conversation thread by clearing all messages and resetting state
     */
    async newThread() {
        this.messages = [];
        this.currentInput = '';
        this.isSendEnabled = true;
        this.atuiNewThread.emit();
        setTimeout(() => this.focusInput(), 100);
    }
    /**
     * Control the send button state programmatically
     * @param enabled - Whether the send functionality should be enabled
     */
    async setSendEnabled(enabled) {
        this.isSendEnabled = enabled;
    }
    /**
     * Programmatically focus the input field
     */
    async focusInput() {
        if (this.inputComponent) {
            setTimeout(() => {
                this.inputComponent.focus();
            }, 0);
        }
    }
    renderHeader() {
        var _a, _b, _c;
        if (!this.show_header)
            return null;
        const newThreadText = ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.NEW_THREAD) || 'New Thread';
        return (h("atui-header", { size: "h3", header_title: this.header_title, subtitle: this.subtitle, border: true, "data-name": "prompt-container-header" }, this.show_new_thread_button && (h("atui-button", { slot: "actions", size: "sm", type: "secondaryText", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText))));
    }
    renderFooter() {
        return (h("div", { class: "p-4" }, h("atui-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtuiSubmit: (event) => this.handleSubmit(event.detail), onAtuiStop: () => this.handleStop() })));
    }
    render() {
        return (h(Host, { key: 'fc3d37ac6b1bc83e2c62c35e0edf6ab0ea3202ee', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), h("slot", { key: '3c0361b99775169258d4d21ed0a27fb5cb92bba4', name: "prompt-container-header" }), h("div", { key: '6a6680558d1057e5fed2a8d232482edf9a121264', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, h("atui-prompt-thread", { key: '9ccc7ec300c4ef81f2f076350a53e506965d75a4', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, "data-name": "container-thread" })), h("div", { key: '752593cbe013d353355ba3eb8967104d3e078799', class: "flex flex-col gap-4" }, this.renderFooter(), h("slot", { key: '8d5c37295d79001f79268d74920570f258b0bb12', name: "prompt-container-footer" }))));
    }
    get el() { return this; }
}, [260, "atui-prompt-container", {
        "messages": [1040],
        "header_title": [1],
        "subtitle": [1],
        "placeholder": [1],
        "error_text": [1],
        "loading": [4],
        "disabled": [4],
        "show_header": [4],
        "show_new_thread_button": [4],
        "max_message_length": [2],
        "enable_vote": [4],
        "enable_copy": [4],
        "enable_edit": [4],
        "currentInput": [32],
        "inputInvalid": [32],
        "inputError": [32],
        "isSendEnabled": [32],
        "translations": [32],
        "addMessage": [64],
        "appendToLastMessage": [64],
        "newThread": [64],
        "setSendEnabled": [64],
        "focusInput": [64]
    }, [[0, "atuiSubmit", "handleInputSubmit"], [0, "atuiMessageCopy", "handleMessageCopy"], [0, "atuiMessageRetry", "handleMessageRetry"], [0, "atuiMessageEdit", "handleMessageEdit"], [0, "atuiMessageVote", "handleMessageVote"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-prompt-container", "atui-button", "atui-form-label", "atui-header", "atui-loading", "atui-prompt-input", "atui-prompt-message", "atui-prompt-thread", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-prompt-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPromptContainer$1);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "atui-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atui-prompt-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-prompt-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-prompt-thread":
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

const AtuiPromptContainer = AtuiPromptContainer$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiPromptContainer, defineCustomElement };
//# sourceMappingURL=atui-prompt-container.js.map

//# sourceMappingURL=atui-prompt-container.js.map