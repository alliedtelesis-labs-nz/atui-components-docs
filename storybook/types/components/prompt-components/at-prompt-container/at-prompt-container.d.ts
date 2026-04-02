import { EventEmitter } from '../../../stencil-public-runtime';
import type { PromptMessage, MessageRole } from '../../../types/prompt';
/**
 * @category Prompt
 * @description A complete conversational interface container that combines a message thread, input field, and header. Provides a full-featured chat experience with message management, threading, and customizable UI elements.
 * @slot prompt-container-header - Custom content displayed above the message thread
 * @slot prompt-container-footer - Custom content displayed below the message input
 */
export declare class AtPromptContainer {
    el: HTMLElement;
    /**
     * Array of messages to display in the conversation thread
     */
    messages: PromptMessage[];
    /**
     * Title displayed in the header section
     */
    header_title: string;
    /**
     * Subtitle displayed below the title in the header
     */
    subtitle: string;
    /**
     * Placeholder text for the input field
     */
    placeholder: string;
    /**
     * Error text displayed when invalid is set via max length
     */
    error_text: string;
    /**
     * Shows loading state and disables input
     */
    loading: boolean;
    /**
     * Disables all interactions with the container
     */
    disabled: boolean;
    /**
     * Controls visibility of the header section
     */
    show_header: boolean;
    /**
     * Controls visibility of the "New Thread" button in the header
     */
    show_new_thread_button: boolean;
    /**
     * Maximum character length for input messages
     */
    max_message_length: number;
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
    currentInput: string;
    inputInvalid: boolean;
    inputError: string;
    isSendEnabled: boolean;
    translations: any;
    /**
     * Emits when a message should be sent
     */
    atSubmit: EventEmitter<string>;
    /**
     * Emits when the stop button is clicked
     */
    atStop: EventEmitter<void>;
    /**
     * Emitted when the "New Thread" button is clicked
     */
    atNewThread: EventEmitter<void>;
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
    private inputComponent;
    componentWillLoad(): Promise<void>;
    handleInputSubmit(event: CustomEvent<string>): void;
    handleMessageCopy(event: CustomEvent<{
        messageId: string;
        content: string;
    }>): void;
    handleMessageRetry(event: CustomEvent<{
        messageId: string;
    }>): void;
    handleMessageEdit(event: CustomEvent<{
        messageId: string;
        content: string;
    }>): Promise<void>;
    handleMessageVote(event: CustomEvent<{
        messageId: string;
        score: number;
    }>): void;
    /**
     * Programmatically add a message to the conversation thread
     * @param role - The message role
     * @param content - The message content
     */
    addMessage(role: MessageRole, content: string): Promise<void>;
    /**
     * Append content to the last message in the thread (useful for streaming responses)
     * @param content - The content to append
     * @returns Promise<boolean> - Returns true if successful, false if no messages exist or last message is not from assistant
     */
    appendToLastMessage(content: string): Promise<boolean>;
    /**
     * Start a new conversation thread by clearing all messages and resetting state
     */
    newThread(): Promise<void>;
    /**
     * Control the send button state programmatically
     * @param enabled - Whether the send functionality should be enabled
     */
    setSendEnabled(enabled: boolean): Promise<void>;
    /**
     * Programmatically focus the input field
     */
    focusInput(): Promise<void>;
    private handleSubmit;
    private handleStop;
    private handleNewThread;
    private renderHeader;
    private renderFooter;
    render(): any;
}
