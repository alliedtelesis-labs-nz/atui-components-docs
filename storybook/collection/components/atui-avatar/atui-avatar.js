import { Host, h } from "@stencil/core";
import { cva } from "class-variance-authority";
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
/**
 * @category Decoration
 * @description Purely decorative avatar component that displays user profile images or initials. Accessibility attributes should be added to the parent element if needed.
 */
export class AtuiAvatar {
    constructor() {
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
    static get is() { return "atui-avatar"; }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "attribute": "src",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "URL for the avatar image\n\nRecommended cropped image sizes for optimal display:\n- sm:24x24px\n- md:32x32px\n- lg:40x40px\n\nHigher resolution images (2x display size) are recommended for crisp display on high-DPI screens."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "alt": {
                "type": "string",
                "attribute": "alt",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Alt text for the avatar image"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "initials": {
                "type": "string",
                "attribute": "initials",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Initials text to display when no image is provided"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "AvatarSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-avatar/atui-avatar.tsx",
                            "id": "src/components/atui-avatar/atui-avatar.tsx::AvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the avatar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'md'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "AvatarVariant",
                    "resolved": "\"muted\" | \"primary\" | \"secondary\"",
                    "references": {
                        "AvatarVariant": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-avatar/atui-avatar.tsx",
                            "id": "src/components/atui-avatar/atui-avatar.tsx::AvatarVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual variant of the avatar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'secondary'"
            }
        };
    }
}
//# sourceMappingURL=atui-avatar.js.map
