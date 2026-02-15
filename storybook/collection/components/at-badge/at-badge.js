import { Host, h } from "@stencil/core";
const badgeVariants = {
    base: 'inline-block rounded-[4px] font-normal whitespace-nowrap leading-[0.9286rem] gap-2 inline-flex items-center',
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
export class AtBadgeComponent {
    /**
     * Icon appearing to the left of the badge title. MUST use mat-icon name.
     */
    icon;
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
        return (h(Host, { key: '3f7fe562fcb6badf1c40c901c1429c7c491f72ce', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (h("i", { key: 'b4edcc725754e77f8a59d27c2ab5fc6a8d7e7066', class: "material-icons icon-sm relative h-[12px] w-[12px] text-[12px]", "data-name": "badge-icon" }, this.icon)), h("span", { key: '39554eeabe86ea585f254db2539313cfd6ba74cb', "data-name": "badge-label" }, this.label), h("slot", { key: 'ee7c81470d2037e59138073d1c15d5478cf25567' })));
    }
    static get is() { return "at-badge"; }
    static get properties() {
        return {
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
                    "text": "Icon appearing to the left of the badge title. MUST use mat-icon name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
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
