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
        return (h("div", { key: '1814e838258f57fc93742db77cb59737961cdf03', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '18f2c1fc3b8057120fde6c2b6adff4cf508255a3', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'a4f096839c19b36eb416316e6073650846e05314', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'a7fe8277a37426d3183c6a44c6a790ffb11954aa', class: "flex items-center" }, this.show_loading_spinner && (h("atui-loading", { key: '6002be19957139ded3dfc9b0f3aa5f4c672e1f59', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '10fa032b6d860cce5fac5cc3418d6091a77e4bfa', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '3444c90413f5f7eda93a93d955dde6a2040b4ee6', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'cb154766a21594526ecd6c02725bce7f03ef6435' }))));
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
