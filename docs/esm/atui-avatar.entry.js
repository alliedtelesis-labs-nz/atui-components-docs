import { r as registerInstance, h, H as Host } from './index-Cd7WF2gX.js';
import { c as cva } from './index-CVoOBWGd.js';

const avatarVariants = cva('flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full font-medium', {
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
        const classes = avatarVariants({
            size: this.size,
            variant: this.variant,
        });
        return (h(Host, { key: '1b4da07dcd6298d6f1b5c9ce2e8f88e84752ea5c', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: '59873d7fb0fa4a51b44f3a00df6eae699e0b4c38', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: '4bf1fa53f803011e32f986dee10597348edf9a88', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '3fb8abca71333a039337f64bd626f1c95d491fae' })));
    }
};

export { AtuiAvatar as atui_avatar };
//# sourceMappingURL=atui-avatar.entry.js.map

//# sourceMappingURL=atui-avatar.entry.js.map