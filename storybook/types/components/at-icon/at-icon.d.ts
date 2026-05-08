/**
 * @category Icon
 * @description An icon component that renders an SVG icon based on the provided name. The icon must be registered in the global icon registry to be used. You can use built-in icons included in `ATUI_ICONS` or register your own icons. Refer to the [icon documentation](../../documentation/development-guidelines/icons.md) for more details.
 */
export declare class AtIcon {
    /**
     * The name of carbon icon to use
     */
    name: string;
    /**
     * The size of the icon accepts number (in px), string with CSS units (e.g. "1.5rem"), or one of "xs", "sm", "md", or "lg".
     */
    size: number | string;
    private getIcon;
    private getSize;
    private renderSvgNode;
    render(): any;
}
