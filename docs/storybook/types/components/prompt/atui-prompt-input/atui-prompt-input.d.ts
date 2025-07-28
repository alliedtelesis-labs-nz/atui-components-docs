import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Prompt
 * @description A specialized input component optimized for AI prompt interfaces. Supports both single-line and multi-line variants with auto-resize, character counting, send/stop functionality, and enhanced UX for conversational interfaces.
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
     * Error text displayed when invalid is set
     */
    error_text: string;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder: string;
    /**
     * Shows the error text
     */
    invalid: boolean;
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
     * Controls whether the model select is shown
     */
    show_model_select: boolean;
    /**
     * The model to use
     */
    model: string;
    /**
     * The value of the input
     */
    value: string;
    textareaEl: HTMLTextAreaElement;
    el: HTMLElement;
    /**
     * Emits when the  value changes
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
     * @slot label - Custom label content (alternative to using the label prop)
     */
    private inputId;
    private focusInput;
    handleInput(event: Event): void;
    private autoResize;
    componentDidLoad(): void;
    handleKeyDown(event: KeyboardEvent): void;
    sendMessage(): void;
    render(): any;
}
