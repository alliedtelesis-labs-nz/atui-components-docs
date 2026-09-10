import { h, Host } from "@stencil/core";
const loadingVariants = {
    type: {
        default: 'text-active',
        error: 'text-destructive-foreground',
        secondary: 'text-foreground',
    },
    size: {
        sm: 'text-sm',
        md: 'text-body',
        lg: 'text-xl',
    },
    spinnerSize: {
        sm: 'h-16 w-16 border',
        md: 'h-32 w-32 border-2',
        lg: 'h-64 w-64 border-4',
    },
};
/**
 * @category Feedback
 * @description A versatile loading component with multiple animation types including spinner, dots, typing, wave, and thinking indicators. Use for indicating ongoing processes or data fetching states across different contexts.
 * @slot - Label content rendered beside the animation
 */
export class AtLoadingComponent {
    /**
     * Type of loading animation to display
     */
    variant = 'spinner';
    /**
     * Visual type/color of the loading indicator
     */
    type = 'default';
    /**
     * Size of the loading indicator
     */
    size = 'md';
    get typeClasses() {
        return loadingVariants.type[this.type];
    }
    get sizeClasses() {
        return loadingVariants.size[this.size];
    }
    get spinnerSizeClasses() {
        return loadingVariants.spinnerSize[this.size];
    }
    renderSpinner() {
        const borderColor = this.type === 'default'
            ? 'border-active'
            : this.type === 'error'
                ? 'border-destructive-foreground'
                : 'border-foreground';
        return (h("span", { class: `${borderColor} ${this.spinnerSizeClasses} inline-block animate-spin rounded-full border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`, "data-name": "loading-spinner" }));
    }
    renderShapes(name, shapeClasses, delays) {
        return (h("span", { class: `${this.typeClasses} flex items-center gap-4`, "data-name": name }, delays.map((delay) => (h("span", { class: `${shapeClasses} inline-block rounded-full bg-current`, style: { animationDelay: `${delay}ms` }, "data-name": "loading-shape" })))));
    }
    renderIndicator() {
        switch (this.variant) {
            case 'typing':
                return this.renderShapes('loading-typing', 'h-4 w-4 animate-[typing_1s_infinite]', [0, 250, 500]);
            case 'dots':
                return this.renderShapes('loading-dots', 'h-4 w-4 animate-[bounce-dots_1s_infinite]', [0, 250, 500]);
            case 'wave':
                return this.renderShapes('loading-wave', 'h-16 w-4 animate-[wave_1s_infinite]', [0, 100, 200, 300, 400]);
            case 'spinner':
            default:
                return this.renderSpinner();
        }
    }
    render() {
        return (h(Host, { key: '2ded0068e2c33065dc79e23cf7ec0df698ffdc0c', class: `${this.sizeClasses} inline-flex items-center gap-8`, role: "status", "aria-label": this.variant === 'typing' ? 'Typing' : 'Loading' }, this.renderIndicator(), h("slot", { key: 'dc039ca5696e8d9089e8856f3ab1049f1415c422' })));
    }
    static get is() { return "at-loading"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-loading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-loading.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtLoadingVariant",
                    "resolved": "\"dots\" | \"spinner\" | \"typing\" | \"wave\"",
                    "references": {
                        "AtLoadingVariant": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-loading/at-loading.tsx",
                            "id": "src/components/at-loading/at-loading.tsx::AtLoadingVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of loading animation to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'spinner'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtLoadingType",
                    "resolved": "\"default\" | \"error\" | \"secondary\"",
                    "references": {
                        "AtLoadingType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-loading/at-loading.tsx",
                            "id": "src/components/at-loading/at-loading.tsx::AtLoadingType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Visual type/color of the loading indicator"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtLoadingSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "AtLoadingSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-loading/at-loading.tsx",
                            "id": "src/components/at-loading/at-loading.tsx::AtLoadingSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the loading indicator"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            }
        };
    }
}
