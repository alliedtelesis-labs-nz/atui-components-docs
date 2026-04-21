import { h } from "@stencil/core";
const placeholderVariants = {
    iconSizes: {
        xs: '!text-[24px] w-24 h-24',
        sm: '!text-[48px] w-48 h-48',
        md: '!text-[64px] w-64 h-64',
        lg: '!text-[72px] w-72 h-72',
    },
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
/**
 * @category Feedback
 * @description A placeholder component for displaying empty states, skeleton loading, or temporary content. Useful for indicating missing data or content that is still loading.
 *
 * @slot - Placed below the content
 */
export class AtPlaceholderComponent {
    /**
     * Size of the placeholder
     */
    size = 'md';
    /**
     * Material icon to be displayed in the center of the placeholder
     */
    icon;
    /**
     * Title to be displayed below the icon
     */
    placeholder_title;
    /**
     * Content to be displayed below the title
     */
    content;
    /**
     * Will show a loading spinner when set
     */
    show_loading_spinner;
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: '1c68b47d2863fe516524e8599402e5623c881e7a', class: `${this.placeholderSizeClass} bg-surface-foreground text-subtle rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: 'd82c3e6fcc4f77aa864ef9ed92c91fc5fb6bb8fc', class: `material-icons text-subtle ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: '4446a8c2fe27ec4a250df3bdff0f6ee9476b61cb', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '98fe7c8c1f3cd363be0f551b85a45e558d2ce95d', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '28d2d7e92f2fd3acfaa3ad0e6534c4055ef35732', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '779e53692b3c7bd58628975cb33c5e8e3565c352', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '8b42d1da7ee0e3bfb555db5deef24b5ad43a37f7', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'd5c012d9d14c1014e321b48f6bf6b722be822e88' }))));
    }
    static get is() { return "at-placeholder"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtPlaceholderSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "AtPlaceholderSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-placeholder/at-placeholder.tsx",
                            "id": "src/components/at-placeholder/at-placeholder.tsx::AtPlaceholderSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the placeholder"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "icon": {
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
                    "text": "Material icon to be displayed in the center of the placeholder"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "placeholder_title": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Title to be displayed below the icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder_title"
            },
            "content": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Content to be displayed below the title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content"
            },
            "show_loading_spinner": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Will show a loading spinner when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_loading_spinner"
            }
        };
    }
}
