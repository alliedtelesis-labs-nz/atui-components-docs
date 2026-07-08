import { Host, h } from "@stencil/core";
const badgeVariants = {
    base: 'inline-block rounded-badge cursor-default font-normal whitespace-nowrap leading-[0.9286rem] gap-2 inline-flex items-center',
    rounded: 'rounded-full',
    contrast: {
        low: {
            default: 'text-feedback-foreground fill-feedback-foreground bg-feedback-background border text-feedback-foreground',
            success: 'text-feedback-success-foreground fill-feedback-success-foreground bg-feedback-success-background border border-feedback-success-foreground/30',
            warning: 'text-feedback-warning-foreground fill-feedback-warning-foreground bg-feedback-warning-background border border-feedback-warning-foreground/30',
            error: 'text-feedback-error-foreground fill-feedback-error-foreground bg-feedback-error-background border border-feedback-error-foreground/30',
            info: 'text-feedback-info-foreground fill-feedback-info-foreground bg-feedback-info-background border border-feedback-info-foreground/30',
            disabled: 'text-disabled-foreground fill-disabled-foreground bg-disabled-background border border-disabled-foreground/30',
        },
        high: {
            default: 'text-feedback-foreground-inv fill-feedback-foreground-inv bg-feedback-background-inv border text-feedback-foreground',
            success: 'text-feedback-success-foreground-inv fill-feedback-success-foreground-inv bg-feedback-success-background-inv',
            warning: 'text-feedback-warning-foreground-inv fill-feedback-warning-foreground-inv bg-feedback-warning-background-inv',
            error: 'text-feedback-error-foreground-inv fill-feedback-error-foreground-inv bg-feedback-error-background-inv',
            info: 'text-feedback-info-foreground-inv fill-feedback-info-foreground-inv bg-feedback-info-background-inv',
            disabled: 'text-disabled-foreground-inv fill-disabled-foreground-inv bg-disabled-background-inv',
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
 * @slot icon - Carbon icon placed before the label
 * @slot - Content placed after the label
 */
export class AtBadgeComponent {
    /**
     * Title shown on the badge.
     */
    label;
    /**
     * Type of the badge. Determines colour theming.
     */
    type = 'default';
    /**
     * Size of the badge. Determines padding and font-size. For use in input chip lists.
     */
    size = 'lg';
    /**
     * Impact of the badge, changes the colours.
     */
    impact = 'low';
    /**
     * Boolean value to round the edges of the badge.
     */
    rounded = false;
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
        return (h(Host, { key: 'c097ee6ff37d4930bab2caf9d2c7f6eb6f4e1a6b', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, h("slot", { key: 'fac158a3756780f661d8e01a96aec0bef28d2652', name: "icon" }), h("span", { key: 'eaa87a8c3a3dc435b16be5e43df66934154cd2d6', "data-name": "badge-label" }, this.label), h("slot", { key: '853507f31a37da3ea2844c2cb872a34082b76b19' })));
    }
    static get is() { return "at-badge"; }
    static get properties() {
        return {
            "label": {
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
                    "text": "Title shown on the badge."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtBadgeType",
                    "resolved": "\"default\" | \"disabled\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "AtBadgeType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-badge/at-badge.tsx",
                            "id": "src/components/at-badge/at-badge.tsx::AtBadgeType"
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
                "attribute": "type",
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtBadgeSize",
                    "resolved": "\"lg\" | \"sm\"",
                    "references": {
                        "AtBadgeSize": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-badge/at-badge.tsx",
                            "id": "src/components/at-badge/at-badge.tsx::AtBadgeSize"
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
                "attribute": "size",
                "defaultValue": "'lg'"
            },
            "impact": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtBadgeContrast",
                    "resolved": "\"high\" | \"low\"",
                    "references": {
                        "AtBadgeContrast": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-badge/at-badge.tsx",
                            "id": "src/components/at-badge/at-badge.tsx::AtBadgeContrast"
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
                "attribute": "impact",
                "defaultValue": "'low'"
            },
            "rounded": {
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
                    "text": "Boolean value to round the edges of the badge."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rounded",
                "defaultValue": "false"
            }
        };
    }
}
