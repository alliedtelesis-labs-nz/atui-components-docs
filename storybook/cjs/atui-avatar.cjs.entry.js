'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const avatarVariants = index$1.cva('flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full font-medium', {
    variants: {
        size: {
            sm: 'h-24 w-24 text-xs',
            md: 'h-32 w-32 text-sm',
            lg: 'text-base h-40 w-40',
        },
        variant: {
            primary: 'bg-primary text-primary-foreground',
            secondary: 'bg-secondary text-secondary-foreground',
            muted: 'bg-muted text-muted-foreground',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'primary',
    },
});
const AtuiAvatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Size of the avatar
         */
        this.size = 'md';
        /**
         * Visual variant of the avatar
         */
        this.variant = 'secondary';
    }
    render() {
        const classes = avatarVariants({
            size: this.size,
            variant: this.variant,
        });
        return (index.h(index.Host, { key: '7743792adc60538960ca01ae78999d2c4842119e', class: classes, "data-name": "avatar-container" }, this.src && (index.h("img", { key: 'e5aa4598f11dd1351312f923dc9a299dab0ff808', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (index.h("span", { key: '282478ac1baa4d43bc1ecdca465f6d9831974ea9', "data-name": "avatar-initials" }, this.initials)), index.h("slot", { key: 'e5b31580049d77f0fe408e09cc852b16fbe636dc' })));
    }
};

exports.atui_avatar = AtuiAvatar;
//# sourceMappingURL=atui-avatar.entry.cjs.js.map

//# sourceMappingURL=atui-avatar.cjs.entry.js.map