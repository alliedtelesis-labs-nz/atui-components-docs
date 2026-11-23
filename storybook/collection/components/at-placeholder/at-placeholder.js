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
        return (h(Host, { key: '9b4224884313af176bdc1d882b738a8d100964e5', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder relative flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '5bcc24cb37f196801ad01c8e088a003b6dbeed76', class: "relative z-10 text-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '5f7d2e5d0bc1314fc0216710df6f783cf7942f56', name: "icon" })), this.type !== 'none' && (h("span", { key: '266c351667156da0f3390ff8ce13c3991cc214ed', class: `z-0 flex justify-center fill-[var(--token-border-muted)] ${this.type === 'chart-no-data' ? 'absolute inset-0' : ''}`, "data-name": "placeholder-image" }, this.renderImage())), h("div", { key: 'c3490b4033dae3533f07a7e0bec3abb17ae25dd9', class: `border-radius-sm relative z-10 flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'bab71ada79654988508f972014177982d404e845', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'e549e4c1cc7894e88d7f870be83b608f67f6baee', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '25691f69bc14469017cf94974c35dd5948248ed3', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '9057b64bf8c39eaef53aa2bf1509b6ab3ecb8c39', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '3ecef0172318c1d600701e69bd99a21ca1c7e0e4' }))));
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
