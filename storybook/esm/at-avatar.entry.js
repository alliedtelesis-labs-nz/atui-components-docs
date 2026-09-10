import { r as registerInstance, h, H as Host } from './index-46ti_ijN.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const avatarVariantsConfig = {
    variants: {
        size: {
            sm: 'h-24 w-24 text-xs',
            md: 'h-32 w-32 text-sm',
            lg: 'h-40 w-40 text-base',
        },
        variant: {
            primary: 'bg-surface-inv text-foreground-inv',
            secondary: 'bg-secondary text-secondary-foreground',
            muted: 'bg-muted text-muted-foreground',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'primary',
    },
};
const AtAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
    src;
    /**
     * Alt text for the avatar image
     */
    alt;
    /**
     * Initials text to display when no image is provided
     */
    initials;
    /**
     * Size of the avatar
     */
    size = 'md';
    /**
     * Visual variant of the avatar
     */
    variant = 'secondary';
    render() {
        const getClasses = classlist('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', avatarVariantsConfig);
        const classes = getClasses({
            size: this.size,
            variant: this.variant,
        });
        return (h(Host, { key: '8449bcc70ad6f5da313d6c6d0e72432b0f74a7a8', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: '54c6d4e9c05bed86337d1dbbf38a2d24a8ef34ae', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: 'f005216c61189f9d6b919494478bf2ba5637b16d', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '033fdda01952c6cd4362f9bdb049f168bf3def6e' })));
    }
};

export { AtAvatar as at_avatar };
