import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-BRRmBK9P.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$8 } from './p-nHcnaAyy.js';
import { d as defineCustomElement$7 } from './p-DUrPhBc7.js';
import { d as defineCustomElement$6 } from './p-CIqSXlz0.js';
import { d as defineCustomElement$5 } from './p-oFBzrVt6.js';
import { d as defineCustomElement$4 } from './p-9yJ4llPu.js';
import { d as defineCustomElement$3 } from './p-zUrngKZE.js';
import { d as defineCustomElement$2 } from './p-CB1W_yTO.js';

const AtPromptContainer$1 = /*@__PURE__*/ proxyCustomElement(class AtPromptContainer extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atSubmit = createEvent(this, "atSubmit", 7);
        this.atStop = createEvent(this, "atStop", 7);
        this.atNewThread = createEvent(this, "atNewThread", 7);
        this.atMessageCopy = createEvent(this, "atMessageCopy", 7);
        this.atMessageRetry = createEvent(this, "atMessageRetry", 7);
        this.atMessageEdit = createEvent(this, "atMessageEdit", 7);
        this.atMessageVote = createEvent(this, "atMessageVote", 7);
        /**
         * Array of messages to display in the conversation thread
         */
        this.messages = [];
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
        /**
         * Enable streaming text animations for system/assistant messages
         * - 'none': No animation
         * - 'fade': Fade in the entire message
         * - 'words': Animate words appearing sequentially like ChatGPT
         */
        this.response_animation = 'words';
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
            this.atSubmit.emit(content);
        };
        this.handleStop = () => {
            this.atStop.emit();
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
        this.atMessageCopy.emit(event.detail);
    }
    handleMessageRetry(event) {
        this.atMessageRetry.emit(event.detail);
    }
    async handleMessageEdit(event) {
        this.atMessageEdit.emit(event.detail);
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
            updatedMessages[messageIndex] = Object.assign(Object.assign({}, updatedMessages[messageIndex]), { score: event.detail.score });
            this.messages = updatedMessages;
            this.atMessageVote.emit(event.detail);
        }
        this.atMessageVote.emit(event.detail);
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
        this.atNewThread.emit();
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
        if (!this.show_new_thread_button)
            return null;
        const newThreadText = ((_c = (_b = (_a = this.translations) === null || _a === void 0 ? void 0 : _a.ATUI) === null || _b === void 0 ? void 0 : _b.PROMPT) === null || _c === void 0 ? void 0 : _c.NEW_THREAD) || 'New Thread';
        return (h("div", { class: "flex justify-end pb-16" }, h("at-button", { slot: "actions", size: "md", type: "primaryOutline", onClick: this.handleNewThread, disabled: this.loading, "data-name": "new-thread-button" }, newThreadText)));
    }
    renderFooter() {
        return (h("div", { class: "p-4" }, h("at-prompt-input", { ref: (el) => (this.inputComponent = el), placeholder: this.placeholder, in_progress: this.loading, max_length: this.max_message_length, error_text: this.error_text, "data-name": "prompt-container-input", onAtSubmit: (event) => this.handleSubmit(event.detail), onAtStop: () => this.handleStop() })));
    }
    render() {
        return (h(Host, { key: '1b4a2f9303bf79e919246ddda56c9a5dc2b30583', class: "flex h-full w-full flex-col overflow-hidden", "data-name": "prompt-container" }, this.renderHeader(), h("slot", { key: '1eb89b561e1f49406903e65c599a52b42ed17bbb', name: "prompt-container-header" }), h("div", { key: 'd1e50c1fded3f42cc75b4370f91340226f99a414', class: "min-h-0 flex-1", "data-name": "thread-wrapper" }, h("at-prompt-thread", { key: '22c364fa66a33feb9a360ff3fd27f0f325f005d2', messages: this.messages, loading: this.loading, auto_scroll: true, enable_vote: this.enable_vote, enable_copy: this.enable_copy, enable_edit: this.enable_edit, response_animation: this.response_animation, "data-name": "container-thread" })), h("div", { key: '06147f03e1e05b5927777fcce1bdfca5f599acc4', class: "flex flex-col gap-4" }, this.renderFooter(), h("slot", { key: '76e57bcd3c8fc16e15d0d747cf5f19664fe95b66', name: "prompt-container-footer" }))));
    }
    get el() { return this; }
}, [260, "at-prompt-container", {
        "messages": [1040],
        "placeholder": [1],
        "error_text": [1],
        "loading": [4],
        "disabled": [4],
        "show_new_thread_button": [4],
        "max_message_length": [2],
        "enable_vote": [4],
        "enable_copy": [4],
        "enable_edit": [4],
        "response_animation": [1],
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
    }, [[0, "atSubmit", "handleInputSubmit"], [0, "atMessageCopy", "handleMessageCopy"], [0, "atMessageRetry", "handleMessageRetry"], [0, "atMessageEdit", "handleMessageEdit"], [0, "atMessageVote", "handleMessageVote"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-prompt-container", "at-button", "at-form-label", "at-loading", "at-prompt-input", "at-prompt-message", "at-prompt-thread", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-prompt-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtPromptContainer$1);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "at-prompt-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-prompt-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-prompt-thread":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtPromptContainer = AtPromptContainer$1;
const defineCustomElement = defineCustomElement$1;

export { AtPromptContainer, defineCustomElement };
//# sourceMappingURL=at-prompt-container.js.map

//# sourceMappingURL=at-prompt-container.js.map