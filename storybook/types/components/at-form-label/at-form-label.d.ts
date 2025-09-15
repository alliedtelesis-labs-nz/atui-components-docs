/**
 * @category Form Controls
 * @description A form label component that provides accessible labeling with optional required indicators and info tooltips. Designed for use with form inputs.
 */
export declare class AtFormLabelComponent {
    /**
     * Label that appears before the info icon.
     */
    label: string;
    /**
     * When true, there will be a red star on the label.
     */
    required: boolean;
    /**
     * The text to be contained in the tooltip.
     */
    info_text: string;
    /**
     * Placed in the 'for' attribute on the label element
     */
    for: string;
    render(): any;
}
