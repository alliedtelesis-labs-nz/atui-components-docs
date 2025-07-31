import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Prompt
 * @description A specialized input component optimized for AI prompt-components interfaces. Supports both single-line and multi-line variants with auto-resize, character counting, send/stop functionality, and enhanced UX for conversational interfaces.
 * @slot label -  Custom label content (alternative to using the label prop)
 * @slot actions-left - Custom content displayed at bottom left of input
 * @slot actions-right - Custom content displayed at bottom right of input
 * @slot footer - Custom content displayed below input
 */
export declare class AtuiPromptInputComponent {
    /**
     * Label above the input container
     */
    label: string;
    /**
     * Short description or validation hint if required
     */
    hint_text: string;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text: string;
    /**
     * Error text displayed when invalid is set via max length
     */
    error_text: string;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder: string;
    /**
     * Maximum height in pixels for auto-resize
     */
    max_height: number;
    /**
     * Maximum character length with counter display
     */
    max_length: number;
    /**
     * Controls whether the component is in progress (shows stop button) or ready to send (shows send button)
     */
    in_progress: boolean;
    /**
     * The value of the input
     */
    value: string;
    /**
     * Disable input interactions and apply visual indication
     */
    disabled?: boolean;
    textareaEl: HTMLTextAreaElement;
    translations: any;
    invalid: boolean;
    el: HTMLElement;
    /**
     * Emits when the value changes
     */
    atuiChange: EventEmitter<string>;
    /**
     * Emits when a message should be sent
     */
    atuiSubmit: EventEmitter<string>;
    /**
     * Emits when the stop button is clicked
     */
    atuiStop: EventEmitter<void>;
    /**
     * Emits when the input receives focus
     */
    atuiFocus: EventEmitter<void>;
    /**
     * @slot label - Custom label content (alternative to using the label prop)
     */
    private inputId;
    componentWillLoad(): Promise<void>;
    private focusInput;
    handleInput(event: Event): void;
    private autoResize;
    componentDidLoad(): void;
    handleKeyDown(event: KeyboardEvent): void;
    sendMessage(): void;
    render(): any;
}
