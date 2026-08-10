'use strict';

var index = require('./index-DK-3iCCu.js');
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
        return (index.h(index.Host, { key: '9444d89e21e7c5218eefeb9544fa0931be0e22c9', class: classes, "data-name": "avatar-container" }, this.src && (index.h("img", { key: 'd42bee638a219b488cb83af9a217c151213f0230', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (index.h("span", { key: '64245798d8d03ae4f7cd197183fd1e88d07dd454', "data-name": "avatar-initials" }, this.initials)), index.h("slot", { key: '0d6d3854259490669817222ee90228d7d37d8ea8' })));
    }
};

exports.at_avatar = AtAvatar;
