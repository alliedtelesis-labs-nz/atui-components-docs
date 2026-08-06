import { h, Host } from "@stencil/core";
const placeholderVariants = {
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
 * @slot icon - Carbon icon placed in the center of the placeholder
 * @slot - Placed below the content
 */
export class AtPlaceholderComponent {
    /**
     * Size of the placeholder
     */
    size = 'md';
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
    el;
    componentDidLoad() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    render() {
        return (h(Host, { key: 'dc988efeb83ecfe21115a5c7c40eb4693daec1a6', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '366188f75eb99de358de8e95d9a357ac8e5365b7', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '9436cf36b035145cb6dec9f356b0b3f57dc21f2b', name: "icon" })), h("div", { key: '4c0f8b50272d4bd2279513616624cae2d6c1e86c', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'ece4d465af90239fd1e0f1661993f002668b9d8c', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '95b5715c0386980a10263fb6f4425ebb30f1bbe5', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'e04bfb607df433774077776a2d867166a110862c', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'b70db5cbf8afe14ed83aeda21ab8a60f4ff30345', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'd81719b35129a37e1c36be8d5dc65f0f0f124904' }))));
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
    static get elementRef() { return "el"; }
}
