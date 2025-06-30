export type AvatarSize = 'sm' | 'md' | 'lg';
export type AvatarVariant = 'primary' | 'secondary' | 'muted';
/**
 * @category Decoration
 * @description Purely decorative avatar component that displays user profile images or initials. Accessibility attributes should be added to the parent element if needed.
 */
export declare class AtuiAvatar {
    /**
     * URL for the avatar image
     *
     * Recommended cropped image sizes for optimal display:
     * - sm:24x24px
     * - md:32x32px
     * - lg:40x40px
     *
     * Higher resolution images (2x display size) are recommended for crisp display on high-DPI screens.
     */
    src?: string;
    /**
     * Alt text for the avatar image
     */
    alt?: string;
    /**
     * Initials text to display when no image is provided
     */
    initials?: string;
    /**
     * Size of the avatar
     */
    size: AvatarSize;
    /**
     * Visual variant of the avatar
     */
    variant: AvatarVariant;
    render(): any;
}
