import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot accordion-trigger - Used for placing the atui-accordion-trigger for this accordion item. Only use if not using the 'label' prop on this element.
 * @slot default - Used for placing the content for this accordion item.
 */
export declare class AtAccordionItemComponent {
    el: HTMLElement;
    /**
     * Used to identify the accordion item among the other accordion items
     */
    item_id: string;
    /**
     * Provides an atui-accordion-trigger with this label if set
     */
    label: string;
    /**
     * Puts a light gray separator below the accordion item
     */
    border: boolean;
    /**
     * String content to display when the accordion is open
     */
    content: string;
    /**
     * Used for setting if the accordion is open.
     */
    open: boolean;
    /**
     * Emitted when the accordion item's open state changes
     */
    atuiAccordionChange: EventEmitter<boolean>;
    private accordionElement;
    componentDidLoad(): void;
    private handleSummaryInteraction;
    /**
     * Opens this accordion item
     */
    openAccordion(): Promise<void>;
    /**
     * Closes this accordion item
     */
    closeAccordion(): Promise<void>;
    /**
     * Return the accordion items open state
     */
    getIsOpen(): Promise<boolean>;
    render(): any;
}
