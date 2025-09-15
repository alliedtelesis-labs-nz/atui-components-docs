export interface StatusBar {
    tooltip?: string;
    percentage: number;
    backgroundColor: string;
}
type Size = 'sm' | 'lg';
/**
 * @category Data Visualization
 * @description A status bar component for displaying progress, completion, or state information with customizable colors and labels.
 */
export declare class AtStatusBar {
    /**
     * List of segments that make up the status bar. Each segment implements the StatusBar interface.
     */
    status_bar: StatusBar[];
    /**
     * Height of the status bar
     */
    size?: Size;
    /**
     * Disables the tooltip when hovered
     */
    disable_tooltip?: boolean;
    get statusBarClass(): string;
    get segments(): any;
    render(): any;
}
export {};
