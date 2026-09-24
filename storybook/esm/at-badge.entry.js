import { r as registerInstance, h, H as Host } from './index-CIMU6MgJ.js';

const badgeVariants = {
    base: 'inline-flex rounded-badge cursor-default font-normal whitespace-nowrap leading-[0.9286rem] gap-2 items-center',
    rounded: 'rounded-full',
    contrast: {
        low: {
            default: 'text-feedback-foreground bg-feedback-background border text-feedback-foreground',
            success: 'text-feedback-success-foreground bg-feedback-success-background border border-feedback-success-foreground/30',
            warning: 'text-feedback-warning-foreground bg-feedback-warning-background border border-feedback-warning-foreground/30',
            error: 'text-feedback-error-foreground bg-feedback-error-background border border-feedback-error-foreground/30',
            info: 'text-feedback-info-foreground bg-feedback-info-background border border-feedback-info-foreground/30',
            disabled: 'text-disabled-foreground bg-disabled-background border border-disabled-foreground/30',
        },
        high: {
            default: 'text-feedback-foreground-inv bg-feedback-background-inv border text-feedback-foreground',
            success: 'text-feedback-success-foreground-inv bg-feedback-success-background-inv',
            warning: 'text-feedback-warning-foreground-inv bg-feedback-warning-background-inv',
            error: 'text-feedback-error-foreground-inv bg-feedback-error-background-inv',
            info: 'text-feedback-info-foreground-inv bg-feedback-info-background-inv',
            disabled: 'text-disabled-foreground-inv bg-disabled-background-inv',
        },
    },
    size: {
        lg: 'py-4 px-[6px] text-sm',
        sm: 'py-2 px-4 text-xs',
    },
};
const AtBadgeComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h(Host, { key: '6f38fdbc018369304863bf759c3835a2b0701d55', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, h("slot", { key: '2f7175ffe3ed0a4c4512dfe1e3c58fd6433fb0ea', name: "icon" }), h("span", { key: 'cc7012242976e24457ae123bc06ef7123fa85a52', "data-name": "badge-label" }, this.label), h("slot", { key: 'a8a9a2c4c7a6ffd6d58f01977d56810e0667c247' })));
    }
};

export { AtBadgeComponent as at_badge };
