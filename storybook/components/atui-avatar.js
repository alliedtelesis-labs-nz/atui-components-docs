import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

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
        const getClasses = classlist('flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium select-none', avatarVariantsConfig);
        const classes = getClasses({
            size: this.size,
            variant: this.variant,
        });
        return (h(Host, { key: '3123c8b28836f56e0414fc3767b2f0cae720d8b2', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: '2440ce069658b510452f55198a26f4846ea03da9', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: 'c07521f14ccd46369c038f538b029e5d81b532cd', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '8af4b7591c2eb83e2db096e2095c160f2c681c44' })));
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