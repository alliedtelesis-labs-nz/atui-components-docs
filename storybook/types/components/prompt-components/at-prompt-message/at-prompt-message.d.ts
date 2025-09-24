import { EventEmitter } from '../../../stencil-public-runtime';
import type { MessageRole } from '../../../types';
export declare enum VoteStatus {
    None = 0,
    Up = 1,
    Down = -1
}
/**
 * @category Prompt
 * @description A message component for displaying individual chat messages with different roles (user, assistant). Supports optional avatars, loading states, error states, and interactive actions like copy, edit, and retry.
 * @slot - Custom message content (alternative to using the content prop)
 */
export declare class AtPromptMessage {
    /**
     * The role/type of the message sender (only 'user' and 'assistant' are supported)
     */
    role: Exclude<MessageRole, 'system'>;
    /**
     * The message content text
     */
    content: string;
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
     * The current vote score of the message
     */
    score: VoteStatus;
    /**
     * Display voting actions for assistant messages
     */
    enable_vote: boolean;
    /**
     * Display copy action for assistant messages - copies message content to clipboard
     */
    enable_copy: boolean;
    /**
     * Display edit action for user messages
     */
    enable_edit: boolean;
    /**
     * Unique identifier for the message
     */
    message_id: string;
    /**
     * Emitted when the copy action is triggered
     */
    atCopy: EventEmitter<string>;
    /**
     * Emitted when a vote action is triggered
     */
    atVote: EventEmitter<{
        messageId: string;
        score: number;
    }>;
    /**
     * Emitted when the retry action is triggered (for assistant messages with errors)
     */
    atRetry: EventEmitter<void>;
    /**
     * Emitted when the edit action is triggered (for user messages)
     */
    atEdit: EventEmitter<string>;
    translations: any;
    copyFeedbackVisible: boolean;
    errorEl: HTMLDivElement;
    el: HTMLAtInputElement;
    componentWillLoad(): Promise<void>;
    private handleCopy;
    private handleRetry;
    private handleEdit;
    private handleVote;
    private renderActions;
    private renderContent;
    render(): any;
}
