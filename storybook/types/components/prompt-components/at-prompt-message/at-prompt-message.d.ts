import { EventEmitter } from '../../../stencil-public-runtime';
import { AtPromptResponseAnimation, AtPromptResponseScore, AtPromptUserRole } from '../../../types';
/**
 * @category Prompt
 * @description A message component for displaying individual chat messages with different roles (user, assistant). Supports optional avatars, loading states, error states, and interactive actions like copy, edit, and retry. Assistant messages support markdown rendering and word-by-word animation.
 * @slot - Custom message content (alternative to using the content prop)
 */
export declare class AtPromptMessage {
    /**
     * The role/type of the message sender (only 'user' and 'assistant' are supported)
     */
    role: AtPromptUserRole;
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
    score: AtPromptResponseScore;
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
     * Animation type for text streaming effect
     * - 'none': No animation (default)
     * - 'fade': Fade in the entire message
     * - 'words': Animate words appearing sequentially
     */
    response_animation: AtPromptResponseAnimation;
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
    animatedContent: string;
    isAnimating: boolean;
    /** Full content already queued/animated, so a later update can tell
     *  whether it's just streamed-in more text or is a different message. */
    private animationTargetContent;
    private pendingWords;
    private animationTimer?;
    errorEl: HTMLDivElement;
    el: HTMLAtInputElement;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    watchContentChange(newContent: string): void;
    private initializeContent;
    private resetAnimationState;
    /**
     * Queue `content`'s words for the word-by-word reveal. Streaming content
     * grows by appending to what's already shown (see
     * `ChatbotConversationStore.handleCompletionChunk`), so when `content`
     * extends `animationTargetContent`, only the newly arrived words are
     * queued onto the existing animation instead of restarting it from
     * scratch. This also fixes a dropped-update bug: previously a content
     * change that arrived while `isAnimating` was still settling from the
     * prior word was silently ignored (`startWordAnimation` returned early),
     * permanently freezing the display. Queuing onto shared, instance-level
     * state instead of a per-call closure means a fresh token always gets
     * picked up, whether or not a word is already mid-animation.
     */
    private queueWordAnimation;
    private animateNextWord;
    private handleCopy;
    private handleRetry;
    private handleEdit;
    private handleVote;
    private renderActions;
    private renderContent;
    private renderSafeContent;
    render(): any;
}
