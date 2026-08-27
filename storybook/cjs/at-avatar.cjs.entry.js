'use strict';

var index = require('./index-Bo1AxtqW.js');
var classlist = require('./classlist-BPb95vgj.js');

const avatarVariantsConfig = {
    variants: {
        size: {
            sm: 'h-24 w-24 text-xs',
            md: 'h-32 w-32 text-sm',
            lg: 'h-40 w-40 text-base',
        },
        variant: {
            primary: 'bg-primary text-foreground',
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
        index.registerInstance(this, hostRef);
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
        const getClasses = classlist.classlist('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', avatarVariantsConfig);
        const classes = getClasses({
            size: this.size,
            variant: this.variant,
        });
        return (index.h(index.Host, { key: '7f24b1c886704a4053d80d4854434f4dbf211ae9', class: classes, "data-name": "avatar-container" }, this.src && (index.h("img", { key: '12ab19dbfdbba9a0375a38b8a263d697b98d5fc1', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (index.h("span", { key: 'ff5a0fc07fb679ee3a4b9c90dba8e70bf9b27df5', "data-name": "avatar-initials" }, this.initials)), index.h("slot", { key: 'a294f95a91d3e84a48d26876f7ac28f07633ee75' })));
    }
};

exports.at_avatar = AtAvatar;
