import { Host, h } from "@stencil/core";
const badgeVariants = {
    base: 'inline-block rounded-[4px] font-normal whitespace-nowrap leading-[0.9286rem]',
    rounded: 'rounded-full',
    contrast: {
        low: {
            default: 'text-light bg-surface-2',
            success: 'text-success-foreground bg-success',
            warning: 'text-warning-foreground bg-warning',
            error: 'text-destructive-foreground bg-destructive',
            info: 'text-info-foreground bg-info',
            disabled: 'text-disabled bg-disabled',
        },
        high: {
            default: 'text-impact bg-gray-600',
            success: 'text-impact bg-success-foreground',
            warning: 'text-impact bg-warning-foreground',
            error: 'text-impact bg-destructive-foreground',
            info: 'text-impact bg-info-foreground',
            disabled: 'text-disabled bg-disabled',
        },
    },
    size: {
        lg: 'py-4 px-[6px] text-sm',
        sm: 'py-2 px-4 text-xs',
    },
};
/**
 * @category Feedback
 * @description A badge component for displaying status indicators, counts, or labels with various styling variants. Supports different sizes, colors, and can be used for notifications or categorization.
 *
 * @slot - Content placed after the label
 */
export class AtuiBadgeComponent {
    constructor() {
        /**
         * Type of the badge. Determines colour theming.
         */
        this.type = 'default';
        /**
         * Size of the badge. Determines padding and font-size. For use in input chip lists.
         */
        this.size = 'lg';
        /**
         * Impact of the badge, changes the colours.
         */
        this.impact = 'low';
        /**
         * Boolean value to round the edges of the badge.
         */
        this.rounded = false;
    }
    get baseClasses() {
        return `${badgeVariants.base} ${this.rounded ? badgeVariants.rounded : ''}`;
    }
    get variantClasses() {
        return badgeVariants.contrast[this.impact][this.type];
    }
    get sizeClasses() {
        return badgeVariants.size[this.size];
    }
    render() {
        return (h(Host, { key: '576b1653a777091fd0eb93d73b738bb8ff927b50', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (h("i", { key: 'c3885da4672c2fd65cf3fb9e9e8093526334e9e8', class: "material-icons icon-sm relative my-2 h-[14px] w-[14px] text-sm", "data-name": "badge-icon" }, this.icon)), h("span", { key: '5451cd84fcbd4059d3b4fcf8c6f2edcf7864442f', "data-name": "badge-label" }, this.label), h("slot", { key: '22f9a3fbf478332fafdf2ff01068406e3e710fbe' })));
    }
    static get is() { return "atui-badge"; }
    static get properties() {
        return {
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
                    "text": "Icon appearing to the left of the badge title. MUST use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Title shown on the badge."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "BadgeType",
                    "resolved": "\"default\" | \"disabled\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "BadgeType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-badge/atui-badge.tsx",
                            "id": "src/components/atui-badge/atui-badge.tsx::BadgeType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of the badge. Determines colour theming."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "BadgeSize",
                    "resolved": "\"lg\" | \"sm\"",
                    "references": {
                        "BadgeSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-badge/atui-badge.tsx",
                            "id": "src/components/atui-badge/atui-badge.tsx::BadgeSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the badge. Determines padding and font-size. For use in input chip lists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'lg'"
            },
            "impact": {
                "type": "string",
                "attribute": "impact",
                "mutable": false,
                "complexType": {
                    "original": "BadgeContrast",
                    "resolved": "\"high\" | \"low\"",
                    "references": {
                        "BadgeContrast": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-badge/atui-badge.tsx",
                            "id": "src/components/atui-badge/atui-badge.tsx::BadgeContrast"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Impact of the badge, changes the colours."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'low'"
            },
            "rounded": {
                "type": "boolean",
                "attribute": "rounded",
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
                    "text": "Boolean value to round the edges of the badge."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=atui-badge.js.map
