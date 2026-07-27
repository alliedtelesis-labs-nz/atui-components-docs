/**
 * @category Navigation
 * @description A breadcrumb item component for the breadcrumb.
 */
export declare class AtBreadcrumbItem {
    /**
     * Applies different styling and makes the element non-clickable when set
     */
    is_active?: boolean;
    /**
     * Label for the breadcrumb item. Rendered verbatim — no casing transform is applied, so identifiers such as `AT-x550-hq-01` keep their exact casing.
     */
    label: string;
    el: any;
    render(): any;
}
