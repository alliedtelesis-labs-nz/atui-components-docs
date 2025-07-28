/**
 * @category Feedback
 * @description A message component for displaying notifications, alerts, or informational messages.
 *
 * @slot - Placed after the content
 */
export declare class AtuiMessage {
    /**
     * Type of the message.
     */
    type: 'error' | 'warning' | 'success' | 'info' | 'default';
    /**
     * Theme of the message, either "light" or "default".
     */
    impact: 'low' | 'high';
    /**
     * Title of the app message.
     */
    message_title: string;
    /**
     * An icon is provided for success, warning, error, or info types.
     * You can provide a custom value to replace the default icon.
     *
     * Must use material icon name.
     */
    icon?: string;
    /**
     * Content of the message.
     */
    content: string;
    get iconName(): string;
    get hostClasses(): string;
    render(): any;
}
