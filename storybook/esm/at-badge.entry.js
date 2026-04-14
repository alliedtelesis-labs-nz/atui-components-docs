import { r as registerInstance, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: '1f61405b88a08cd90e8301c7738d3bd8bb1ae5b5', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (h("i", { key: 'dfdd1a4bdbf6d69717438dac917ab5cd4ea918dd', class: "material-icons icon-sm relative h-[12px] w-[12px] text-[12px]", "data-name": "badge-icon" }, this.icon)), h("span", { key: '5e98850a7da250437097388a8cf92d4f5eb43ef9', "data-name": "badge-label" }, this.label), h("slot", { key: 'eec5131e5d17caf3bf5b9ae78ce11134f5f1835a' })));
    }
};

export { AtBadgeComponent as at_badge };
