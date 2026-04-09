export type AtSrcDestAlign = 'left' | 'center';
/**
 * @category Utilities
 * @description A src-dest component for displaying source and destination information.
 */
export declare class AtSrcDestComponent {
    /**
     * Title displayed on the left
     */
    src_title: string;
    /**
     * Text displayed on the left
     */
    src_text: string;
    /**
     * Subtitle displayed on the left
     */
    src_subtitle: string;
    /**
     * Title displayed on the right
     */
    dest_title: string;
    /**
     * Text displayed on the right
     */
    dest_text: string;
    /**
     * Subtitle displayed on the right
     */
    dest_subtitle: string;
    /**
     * Aligns the content to the left or center of the container
     */
    align: AtSrcDestAlign;
    render(): any;
}
