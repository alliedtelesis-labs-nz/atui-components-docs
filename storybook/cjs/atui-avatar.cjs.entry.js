'use strict';

var index = require('./index-DGivrgtr.js');
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
        return (index.h(index.Host, { key: '1b4da07dcd6298d6f1b5c9ce2e8f88e84752ea5c', class: classes, "data-name": "avatar-container" }, this.src && (index.h("img", { key: '59873d7fb0fa4a51b44f3a00df6eae699e0b4c38', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (index.h("span", { key: '4bf1fa53f803011e32f986dee10597348edf9a88', "data-name": "avatar-initials" }, this.initials)), index.h("slot", { key: '3fb8abca71333a039337f64bd626f1c95d491fae' })));
    }
};

exports.atui_avatar = AtuiAvatar;
//# sourceMappingURL=atui-avatar.entry.cjs.js.map

//# sourceMappingURL=atui-avatar.cjs.entry.js.map