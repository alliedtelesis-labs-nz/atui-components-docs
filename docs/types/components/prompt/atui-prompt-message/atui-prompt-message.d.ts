import { EventEmitter } from '../../../stencil-public-runtime';
import { MessageRole } from '../../../types/prompt';
/**
 * @category Prompt
 * @description A message component for displaying individual chat messages with different roles (user, assistant). Supports optional avatars, loading states, error states, and interactive actions like copy, edit, and retry.
 */
export declare class AtuiPromptMessage {
    /**
     * The role/type of the message sender (only 'user' and 'assistant' are supported)
     */
    role: Exclude<MessageRole, 'system'>;
    /**
     * The message content text
     */
    content: string;
    /**
     * URL for a custom avatar image
     */
    avatar: string;
    /**
     * Display name for the message sender
     */
    name: string;
    /**
     * Shows loading state with animated placeholder content
     */
    loading: boolean;
    /**
     * Shows error state styling and enables retry action
     */
    error: boolean;
    /**
     * Custom error message text (defaults to generic error message)
     */
    error_message: string;
    /**
     * Emitted when the copy action is triggered
     */
    atuiCopy: EventEmitter<string>;
    /**
     * Emitted when positive feedback action is triggered
     */
    atuiFeedbackPositive: EventEmitter<void>;
    /**
     * Emitted when negative feedback action is triggered
     */
    atuiFeedbackNegative: EventEmitter<void>;
    /**
     * Emitted when the retry action is triggered (for assistant messages with errors)
     */
    atuiRetry: EventEmitter<void>;
    /**
     * Emitted when the edit action is triggered (for user messages)
     */
    atuiEdit: EventEmitter<string>;
    /**
     * @slot - Custom message content (alternative to using the content prop)
     */
    translations: any;
    errorEl: HTMLDivElement;
    el: HTMLAtuiInputElement;
    componentWillLoad(): Promise<void>;
    private handleCopy;
    private handleRetry;
    private handleEdit;
    private handleFeedbackPositive;
    private handleFeedbackNegative;
    private renderAvatar;
    private renderActions;
    private renderContent;
    render(): any;
}
