import { r as registerInstance, h, H as Host } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

const avatarVariantsConfig = {
    variants: {
        size: {
            sm: 'h-24 w-24 text-xs',
            md: 'h-32 w-32 text-sm',
            lg: 'h-40 w-40 text-base',
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
};
const AtAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const getClasses = classlist('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', avatarVariantsConfig);
        const classes = getClasses({
            size: this.size,
            variant: this.variant,
        });
        return (h(Host, { key: 'e7a1be2d60e1f7b2ea6c9d6f4fc6c2a222d7866e', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: 'f9660584c6cdd043d06add4fc330d72d5ff6fb9b', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: '6b488220828172b9f7571c24428d58b3452830a5', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '2052d8989b1d6d4f1c4a71d1ece4cef83bc5276c' })));
    }
};

export { AtAvatar as at_avatar };
//# sourceMappingURL=at-avatar.entry.js.map

//# sourceMappingURL=at-avatar.entry.js.map