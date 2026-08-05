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
     * Size of the badge. Determines padding and font-size. `sm` is the default and suits
     * dense product UI — page/entity headers, summary and list rows, table status cells.
     * Use `lg` for input chip lists, where the badge is an interactive control rather than
     * a status marker.
     */
    size = 'sm';
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
        return (h(Host, { key: 'c4190b9518dda2fa620ed604ae13ba8da406d990', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, h("slot", { key: 'b7ccb76c23ae0f1c09b60fc422e2bf6d485bf6ec', name: "icon" }), h("span", { key: 'd0a4100cac3b5eb75da8c2caa4b7611b62d7d82a', "data-name": "badge-label" }, this.label), h("slot", { key: 'c5f77abdfc7eb84a9f70f24e9bf6d93979082d25' })));
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
                    "text": "Size of the badge. Determines padding and font-size. `sm` is the default and suits\ndense product UI \u2014 page/entity headers, summary and list rows, table status cells.\nUse `lg` for input chip lists, where the badge is an interactive control rather than\na status marker."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
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
