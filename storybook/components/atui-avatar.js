import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { c as cva } from './p-CVoOBWGd.js';

const avatarVariants = cva('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', {
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
});
const AtuiAvatar$1 = /*@__PURE__*/ proxyCustomElement(class AtuiAvatar extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '7743792adc60538960ca01ae78999d2c4842119e', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: 'e5aa4598f11dd1351312f923dc9a299dab0ff808', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: '282478ac1baa4d43bc1ecdca465f6d9831974ea9', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: 'e5b31580049d77f0fe408e09cc852b16fbe636dc' })));
    }
}, [260, "atui-avatar", {
        "src": [1],
        "alt": [1],
        "initials": [1],
        "size": [1],
        "variant": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-avatar"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiAvatar$1);
            }
            break;
    } });
}

const AtuiAvatar = AtuiAvatar$1;
const defineCustomElement = defineCustomElement$1;

export { AtuiAvatar, defineCustomElement };
//# sourceMappingURL=atui-avatar.js.map

//# sourceMappingURL=atui-avatar.js.map