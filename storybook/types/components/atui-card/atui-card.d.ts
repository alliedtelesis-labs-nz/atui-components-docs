/**
 * @category Layout
 * @description A flexible container component for organizing content with header, body, and footer sections. Features sticky headers/footers, configurable padding, shadows, and overflow handling.
 *
 * @slot card-header - Placed in the header of the card, above the header actions & before the icon and title
 * @slot card-header-actions - Placed in the header of the card, below the header content & after the icon and title
 * @slot - Placed in the content area of the card.
 * @slot card-footer - Placed below the content of the card
 */
export declare class AtuiCardComponent {
    /**
     * Title of the card.
     */
    card_title?: string;
    /**
     * Subtitle of the card, placed below title.
     */
    subtitle?: string;
    /**
     * Content of the card, placed below title, and subtitle.
     */
    content?: string;
    /**
     * Enables overflow on the content area. If false overflow will be applied on the host.
     */
    overflow_content?: boolean;
    /**
     * Display header persistently at top of card.
     */
    sticky_header?: boolean;
    /**
     * Display footer persistently at bottom of card.
     */
    sticky_footer?: boolean;
    /**
     * Apply or remove padding form the card content area.
     */
    padding?: boolean;
    /**
     * Box-shadow around card.
     */
    shadow?: 'none' | 'sm' | 'lg';
    render(): any;
}
