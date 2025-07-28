import { EventEmitter } from '../../../stencil-public-runtime';
import { PromptMessage } from '../../../types/prompt';
/**
 * @category Prompt
 * @description A message thread component for displaying user and chatbot messages in a conversation format. Supports auto-scrolling, empty states, loading indicators, and message interaction events.
 */
export declare class AtuiPromptThread {
    /**
     * Array of messages to display in the conversation thread
     */
    messages: PromptMessage[];
    /**
     * Shows a loading indicator for incoming messages
     */
    loading: boolean;
    /**
     * Title text displayed when no messages are present
     */
    empty_state_title: string;
    /**
     * Description text displayed when no messages are present
     */
    empty_state_description: string;
    /**
     * Automatically scroll to the bottom when new messages are added
     */
    auto_scroll: boolean;
    /**
     * Display name for chatbot/assistant messages
     */
    chatbot_title: string;
    /**
     * Emitted when a message copy action is requested
     */
    atuiMessageCopy: EventEmitter<{
        messageId: string;
        content: string;
    }>;
    /**
     * Emitted when a message retry action is requested
     */
    atuiMessageRetry: EventEmitter<{
        messageId: string;
    }>;
    /**
     * Emitted when a message edit action is requested
     */
    atuiMessageEdit: EventEmitter<{
        messageId: string;
        content: string;
    }>;
    /**
     * @slot messages - Custom message content (alternative to using the messages prop)
     */
    private threadContainer;
    componentDidUpdate(): void;
    private scrollToBottom;
    handleMessageCopy(event: CustomEvent<string>): void;
    handleMessageRetry(event: CustomEvent<void>): void;
    handleMessageEdit(event: CustomEvent<string>): void;
    private getMessageIndexFromEvent;
    private renderLoadingIndicator;
    private renderEmptyState;
    private renderMessage;
    private renderMessages;
    render(): any;
}
