'use strict';

var index = require('./index-CsFbabx6.js');
var classlist = require('./classlist-BPb95vgj.js');

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
        return (index.h(index.Host, { key: 'abef6acb9039d932b7319bb617619d1f917afcf2', class: classes, "data-name": "avatar-container" }, this.src && (index.h("img", { key: '40072596866abd508e07f40e887abc840b963211', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (index.h("span", { key: 'd659df12d8372e2ecc48b991b2aae1fbc53153a5', "data-name": "avatar-initials" }, this.initials)), index.h("slot", { key: 'b21b3a5d1a11580fa6c99ef967f16071bba8c9d9' })));
    }
};

exports.at_avatar = AtAvatar;
