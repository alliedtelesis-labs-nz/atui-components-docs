import { h, Host } from "@stencil/core";
import { renderChartNoDataImage, renderNoAccessImage, renderNoDataImage, renderNoResultsImage, } from "./placeholder-images";
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
    /**
     * Built-in illustration and empty-state situation. Prefer this over
     * slotting your own icon so empty states stay consistent across apps.
     * `no-data` for a collection that is genuinely empty (pair with a create
     * action), `no-results` when a search or filter matched nothing,
     * `no-access` when the emptiness is permission or scope caused,
     * `chart-no-data` for an empty chart surface. A failed load is not a
     * placeholder — use `at-message` with a retry action.
     */
    type = 'none';
    el;
    gradientId = `placeholder-${Math.random().toString(36).substring(2, 11)}`;
    componentDidRender() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    renderImage() {
        switch (this.type) {
            case 'chart-no-data':
                return renderChartNoDataImage(this.gradientId);
            case 'no-data':
                return renderNoDataImage(this.size);
            case 'no-results':
                return renderNoResultsImage(this.size);
            case 'no-access':
                return renderNoAccessImage(this.size);
            default:
                return null;
        }
    }
    render() {
        return (h(Host, { key: '420ab37b7e4f061a99f88887a0691745ff7ccec0', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder relative flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '2f9525f3feacaeca111a14c9026c4731f4551c98', class: "relative z-10 fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'f3f3d7e0783286e062aee34e396779c9dfe4ac18', name: "icon" })), this.type !== 'none' && (h("span", { key: '6c010eba038a3c9e27747a5a0c674f8af6d8339d', class: `z-0 flex justify-center fill-[var(--token-border-muted)] ${this.type === 'chart-no-data' ? 'absolute inset-0' : ''}`, "data-name": "placeholder-image" }, this.renderImage())), h("div", { key: 'aec9eeb7157d2caaaea5e18f6f1c1483e7b5606b', class: `border-radius-sm relative z-10 flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '4e732bd9d725b4c3da5451a39f2e89d98afde978', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '040ba7a3234937b21d14f4bba42458e5ebb0114d', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '68dc5290cd7dc7a5f03fef8a1f3806c7a3dada8c', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '81d1e62fa715973b9c5a18140e87a96b623c4a00', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'c4a17e36059552fc69f1f2c9dd008281152b8146' }))));
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
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtPlaceholderType",
                    "resolved": "\"chart-no-data\" | \"no-access\" | \"no-data\" | \"no-results\" | \"none\"",
                    "references": {
                        "AtPlaceholderType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-placeholder/at-placeholder.tsx",
                            "id": "src/components/at-placeholder/at-placeholder.tsx::AtPlaceholderType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Built-in illustration and empty-state situation. Prefer this over\nslotting your own icon so empty states stay consistent across apps.\n`no-data` for a collection that is genuinely empty (pair with a create\naction), `no-results` when a search or filter matched nothing,\n`no-access` when the emptiness is permission or scope caused,\n`chart-no-data` for an empty chart surface. A failed load is not a\nplaceholder \u2014 use `at-message` with a retry action."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'none'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
