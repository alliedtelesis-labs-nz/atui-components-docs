import { h, Host } from "@stencil/core";
import { classlist } from "../../utils/classlist";
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
/**
 * @category Decoration
 * @description Purely decorative avatar component that displays user profile images or initials. Accessibility attributes should be added to the parent element if needed.
 * @slot - Content place after the image and initials.
 */
export class AtAvatar {
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
        return (h(Host, { key: 'c22efad4d2b48a40238700966a61eb1b69a303a9', class: classes, "data-name": "avatar-container" }, this.src && (h("img", { key: 'c6c480c8de16a1793631c9d30adcf5349599cf84', src: this.src, alt: this.alt || 'Avatar', class: "h-full w-full object-cover", "data-name": "avatar-image" })), !this.src && this.initials && (h("span", { key: '26e0c69f0ae0806947e3a0027762934b989bf1e0', "data-name": "avatar-initials" }, this.initials)), h("slot", { key: '0cebd5c3ccd2495850b14b8a62630c74c72d4408' })));
    }
    static get is() { return "at-avatar"; }
    static get properties() {
        return {
            "src": {
                "type": "string",
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
                "reflect": false,
                "attribute": "src"
            },
            "alt": {
                "type": "string",
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
                "reflect": false,
                "attribute": "alt"
            },
            "initials": {
                "type": "string",
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
                "reflect": false,
                "attribute": "initials"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "AvatarSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-avatar/at-avatar.tsx",
                            "id": "src/components/at-avatar/at-avatar.tsx::AvatarSize"
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
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarVariant",
                    "resolved": "\"muted\" | \"primary\" | \"secondary\"",
                    "references": {
                        "AvatarVariant": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-avatar/at-avatar.tsx",
                            "id": "src/components/at-avatar/at-avatar.tsx::AvatarVariant"
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
                "attribute": "variant",
                "defaultValue": "'secondary'"
            }
        };
    }
}
