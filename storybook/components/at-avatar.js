import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

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
const AtAvatar$1 = /*@__PURE__*/ proxyCustomElement(class AtAvatar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        const getClasses = classlist('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', avatarVariantsConfig);
        const classes = getClasses({
            size: this.size,
            variant: this.variant,
        });
        return (h(Host, { key: 'dfa3363a0b5fcb1fda3efa94b3b1a13b0675782e', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: '93a28ae989d5ed649dccd74071a8a58ad0c6d0db', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: 'a7a53b15035e6f79824b68ceff9bc2591b60b9ea', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '3d84db753b264542f947e2c637d6aefc2748afb8' })));
    }
}, [260, "at-avatar", {
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
    const components = ["at-avatar"];
    components.forEach(tagName => { switch (tagName) {
        case "at-avatar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtAvatar$1);
            }
            break;
    } });
}

const AtAvatar = AtAvatar$1;
const defineCustomElement = defineCustomElement$1;

export { AtAvatar, defineCustomElement };
//# sourceMappingURL=at-avatar.js.map

//# sourceMappingURL=at-avatar.js.map