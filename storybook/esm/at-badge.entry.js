import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const badgeVariants = {
    base: 'inline-block rounded-badge cursor-default font-normal whitespace-nowrap leading-[0.9286rem] gap-2 inline-flex items-center',
    rounded: 'rounded-full',
    contrast: {
        low: {
            default: 'text-feedback-foreground bg-feedback-background border text-feedback-foreground',
            success: 'text-feedback-success-foreground bg-feedback-success-background border border-feedback-success-foreground/30',
            warning: 'text-feedback-warning-foreground bg-feedback-warning-background border border-feedback-warning-foreground/30',
            error: 'text-feedback-error-foreground bg-feedback-error-background border border-feedback-error-foreground/30',
            info: 'text-feedback-info-foreground bg-feedback-info-background border border-feedback-info-foreground/30',
            disabled: 'text-disabled-foreground bg-disabled-background',
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
        return (h(Host, { key: '83437258321e56364fe4f394331bac1ef49b4980', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (h("i", { key: '353e86c676f90964dddb0f6accf735a5bad85873', class: "material-icons icon-sm relative h-[12px] w-[12px] text-[12px]", "data-name": "badge-icon" }, this.icon)), h("span", { key: 'ea8bdaa0be7706c288633b08d274d0707369e27d', "data-name": "badge-label" }, this.label), h("slot", { key: '3fb5f65ecc2b56fe0167d040104a9c47f2863e83' })));
    }
};

export { AtBadgeComponent as at_badge };
