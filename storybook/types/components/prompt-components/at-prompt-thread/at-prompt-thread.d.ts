import { EventEmitter } from '../../../stencil-public-runtime';
import type { PromptMessage } from '../../../types';
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
    messages: PromptMessage[];
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
     * Emitted when a message copy action is requested
     */
    atMessageCopy: EventEmitter<{
        messageId: string;
        content: string;
    }>;
    /**
     * Emitted when a message retry action is requested
     */
    atMessageRetry: EventEmitter<{
        messageId: string;
    }>;
    /**
     * Emitted when a message edit action is requested
     */
    atMessageEdit: EventEmitter<{
        messageId: string;
        content: string;
    }>;
    /**
     * Emitted when a message vote action is requested
     */
    atMessageVote: EventEmitter<{
        messageId: string;
        score: number;
    }>;
    /**
     * @slot messages - Custom message content (alternative to using the messages prop)
     */
    private scrollContainer;
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
