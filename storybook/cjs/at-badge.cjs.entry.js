'use strict';

var index = require('./index-CzDB71Wy.js');

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
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'a2c58da60ba433f545ffcf37ef20b2317cce0ec3', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (index.h("i", { key: 'a70fb88f9272b2f1dd0341a6314940c808446a39', class: "material-icons icon-sm relative h-[12px] w-[12px] text-[12px]", "data-name": "badge-icon" }, this.icon)), index.h("span", { key: 'c0801e6eeac6ada1b208715563b674ab9d5dda7a', "data-name": "badge-label" }, this.label), index.h("slot", { key: '9f9731447b5f5c6d5a267e2bc8efa7c676500f1d' })));
    }
};

exports.at_badge = AtBadgeComponent;
