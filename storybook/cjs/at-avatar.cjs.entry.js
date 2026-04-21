'use strict';

var index = require('./index--r5sCsiV.js');
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
        return (index.h(index.Host, { key: '70072a5aa694c09380c546da31d93eef97e824fa', class: classes, "data-name": "avatar-container" }, this.src && (index.h("img", { key: '447e84922f707f542a9ad95860acd2abcbd3320b', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (index.h("span", { key: '9afc44feb1ef6fffb48cd182b1bbf3cd388b143c', "data-name": "avatar-initials" }, this.initials)), index.h("slot", { key: '237d0ebb5a80a8a467316ac782eeb56b9ab17e60' })));
    }
};

exports.at_avatar = AtAvatar;
