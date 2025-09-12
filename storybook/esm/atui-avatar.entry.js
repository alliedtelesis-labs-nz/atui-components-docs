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
        const getClasses = classlist('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', avatarVariantsConfig);
        const classes = getClasses({
            size: this.size,
            variant: this.variant,
        });
        return (h(Host, { key: '3123c8b28836f56e0414fc3767b2f0cae720d8b2', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: '2440ce069658b510452f55198a26f4846ea03da9', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: 'c07521f14ccd46369c038f538b029e5d81b532cd', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '8af4b7591c2eb83e2db096e2095c160f2c681c44' })));
    }
};

export { AtuiAvatar as atui_avatar };
//# sourceMappingURL=atui-avatar.entry.js.map

//# sourceMappingURL=atui-avatar.entry.js.map