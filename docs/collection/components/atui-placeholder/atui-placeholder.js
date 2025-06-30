import { h } from "@stencil/core";
const placeholderVariants = {
    iconSizes: {
        xs: 'text-[24px] w-24 h-24',
        sm: 'text-[48px] w-48 h-48',
        md: 'text-[64px] w-64 h-64',
        lg: 'text-[72px] w-72 h-72',
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
export class AtuiPlaceholderComponent {
    constructor() {
        /**
         * Size of the placeholder
         */
        this.size = 'md';
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: '41c51b4f7fa2c47853c2d1ab24feff128567e42f', class: `${this.placeholderSizeClass} flex w-full items-center gap-16 rounded-sm bg-surface-0 text-center text-med`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '67fb20f32a3644c468860e3d22a94a9d913e5ada', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'e3701cb95c2c439734c653d1ff0dcc4f8224ea30', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'afafc42d4600d081cf89c6c7a5586c68b15383b3', class: "flex items-center" }, this.show_loading_spinner && (h("atui-loading", { key: '43f12c20ef24b5d28c5ce661c54aca5f4f51a580', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '4c5f0a018016998bde1beeb47fa5efc0b9807341', class: "text-sm font-medium text-med", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'ff89008a239819fa23d5796716c88c428291a931', class: "text-sm text-med", "data-name": "placeholder-content" }, this.content), h("slot", { key: '3adf1e18fbe931dfae428bb2c023ccac285dcee5' }))));
    }
    static get is() { return "atui-placeholder"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "PlaceholderSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "PlaceholderSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-placeholder/atui-placeholder.tsx",
                            "id": "src/components/atui-placeholder/atui-placeholder.tsx::PlaceholderSize"
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
                "defaultValue": "'md'"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "reflect": false
            },
            "placeholder_title": {
                "type": "string",
                "attribute": "placeholder_title",
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
                "reflect": false
            },
            "content": {
                "type": "string",
                "attribute": "content",
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
                "reflect": false
            },
            "show_loading_spinner": {
                "type": "boolean",
                "attribute": "show_loading_spinner",
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-placeholder.js.map
