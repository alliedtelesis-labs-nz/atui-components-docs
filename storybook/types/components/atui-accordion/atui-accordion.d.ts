export interface AccordionItem {
    item_id: string;
    label?: string;
    content?: string;
}
/**
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot - Content is placed within the accordion wrapper. Used for placing atui-accordion-items if not using items prop.
 */
/**
 * ### ```interface AccordionItem```
 * ```
 * item_id: string;
 * label: string;
 * content: string;
 * ```
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot - Content is placed within the accordion wrapper. Used for placing atui-accordion-items if not using items prop.
 */
export declare class AtuiAccordionComponent {
    el: HTMLElement;
    /**
     * Used to create accordion items.
     */
    items: AccordionItem[];
    /**
     * If set, all child accordions will be open by default.
     */
    default_open: boolean;
    accordionItems: HTMLAtuiAccordionItemElement[];
    componentDidLoad(): Promise<void>;
    /**
     * Toggles the open state of a specific accordion item
     * @param value Id of element to be toggled
     */
    toggleById(value: string): Promise<void>;
    /**
     * Opens all accordion items
     */
    openAll(): Promise<void>;
    /**
     * Closes all accordion items.
     */
    closeAll(): Promise<void>;
    /**
     * Toggles all accordion item's open state.
     */
    toggleAll(): Promise<void>;
    private accordionId;
    render(): any;
}
