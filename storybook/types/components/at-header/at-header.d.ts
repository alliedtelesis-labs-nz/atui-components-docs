export type AtHeaderSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
/**
 * @category Layout
 * @description A header component for page and section titles with optional subtitle support. Provides consistent typography and spacing for content headers.
 * @slot title-prefix - Placed before the 'header_title'
 * @slot title-suffix - Placed after the 'header_title'
 * @slot custom-title - Used instead of the 'header_title' prop to place your own title elements
 * @slot subtitle-content - Used to place your own subtitle content
 * @slot actions - Placed at the bottom of the element for additional actions
 */
export declare class AtHeader {
    /**
     * Size of the header.
     */
    size: AtHeaderSizes;
    /**
     * Icon of header. Must use mat-icon name.
     */
    icon?: string;
    /**
     * Title of the header.
     */
    header_title?: string;
    /**
     * Subtitle of the header.
     */
    subtitle?: string;
    /**
     * Adds a border to the bottom of the header.
     */
    border?: boolean;
    /**
     * Adds 16 pixels of padding to the header element
     */
    padding?: boolean;
    render(): any;
}
