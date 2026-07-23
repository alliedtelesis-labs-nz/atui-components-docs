import { EventEmitter } from '../../../stencil-public-runtime';
import { AtPromptResponseAnimation, AtIPromptMessage } from '../../../types';
/**
 * @category Prompt
 * @description A message thread component for displaying user and chatbot messages in a conversation format. Supports auto-scrolling, empty states, loading indicators, and message interaction events.
 * @slot thread-empty-state - Content is placed within the empty state wrapper. Used for placing custom empty state content.
 * @slot thread-messages - Content is placed within the messages wrapper. Used for placing custom messages content.
 */
export declare class AtPromptThread {
    /**
     * Array of messages to display in the conversation thread
     */
    messages: AtIPromptMessage[];
    /**
     * Shows a loading indicator for incoming messages
     */
    loading: boolean;
    /**
     * Automatically scroll to the bottom when new messages are added
     */
    auto_scroll: boolean;
    /**
     * Display name for chatbot/assistant messages
     */
    chatbot_title: string;
    /**
     * Display voting actions for assistant messages
     */
    enable_vote: boolean;
    /**
     * Display copy action for assistant messages
     */
    enable_copy: boolean;
    /**
     * Display edit action for user messages
     */
    enable_edit: boolean;
    /**
     * Enable streaming text animations for system/assistant messages
     * - 'none': No animation (default)
     * - 'fade': Fade in the entire message
     * - 'words': Animate words appearing sequentially like ChatGPT
     */
    response_animation: AtPromptResponseAnimation;
    /**
     * Identifies the current conversation. Change this when the consumer
     * switches to a different saved conversation while this thread stays
     * mounted (e.g. picking another chat from a history sidebar) so its
     * messages are treated as history rather than live/new — otherwise
     * every message in that conversation's history would incorrectly
     * replay the intro animation on load, same as the very first mount.
     */
    conversation_id?: string;
    /**
     * Emitted when a message copy action is requested
     */
    atThreadMessageCopy: EventEmitter<{
        messageId: string;
        content: string;
    }>;
    /**
     * Emitted when a message retry action is requested
     */
    atThreadMessageRetry: EventEmitter<{
        messageId: string;
    }>;
    /**
     * Emitted when a message edit action is requested
     */
    atThreadMessageEdit: EventEmitter<{
        messageId: string;
        content: string;
    }>;
    /**
     * Emitted when a message vote action is requested
     */
    atThreadMessageVote: EventEmitter<{
        messageId: string;
        score: number;
    }>;
    /**
     * @slot messages - Custom message content (alternative to using the messages prop)
     */
    private scrollContainer;
    /** IDs present when the current conversation's history was loaded — these never animate. */
    private initialMessageIds;
    /**
     * IDs that are allowed to play the intro animation, sticky for the
     * component's lifetime once granted. A message keeps streaming in
     * across several `messages` updates (same id, growing content) — if
     * "new" were re-evaluated as "not in initialMessageIds" on every
     * update instead of recorded once, only the first chunk would animate
     * and every later chunk of the same message would flip back to 'fade'.
     */
    private animatableMessageIds;
    /**
     * Starts `true`: the first `messages` this component ever sees should
     * be treated as history, not just whatever `componentWillLoad` finds.
     * In practice `messages` is populated via a property set *after* mount
     * (an Angular binding, a $eval in tests, etc.), not as an HTML
     * attribute present before the component upgrades — so by the time
     * componentWillLoad runs, `this.messages` is almost always still the
     * default `[]`. Consumed by the first `handleMessagesChange` firing;
     * re-armed by handleConversationIdChange when the consumer switches to
     * a different saved conversation while this thread stays mounted.
     */
    private pendingHistoryReset;
    componentWillLoad(): void;
    handleConversationIdChange(): void;
    handleMessagesChange(newMessages: AtIPromptMessage[]): void;
    componentDidUpdate(): void;
    /**
     * Scrolls the thread to the bottom with smooth animation
     */
    scrollToBottom(): Promise<void>;
    /**
     * Scrolls the last user message to the top of the viewport
     */
    scrollLastMessageToTop(): Promise<void>;
    handleVote(event: CustomEvent<{
        messageId: string;
        score: number;
    }>): void;
    handleMessageCopy(event: CustomEvent<string>): void;
    handleMessageRetry(event: CustomEvent<void>): void;
    handleMessageEdit(event: CustomEvent<string>): void;
    private getMessageIndexFromEvent;
    private renderLoadingIndicator;
    private renderMessage;
    private renderMessages;
    render(): any;
}
