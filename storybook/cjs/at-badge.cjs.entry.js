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
        return (index.h(index.Host, { key: '3f7fe562fcb6badf1c40c901c1429c7c491f72ce', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (index.h("i", { key: 'b4edcc725754e77f8a59d27c2ab5fc6a8d7e7066', class: "material-icons icon-sm relative h-[12px] w-[12px] text-[12px]", "data-name": "badge-icon" }, this.icon)), index.h("span", { key: '39554eeabe86ea585f254db2539313cfd6ba74cb', "data-name": "badge-label" }, this.label), index.h("slot", { key: 'ee7c81470d2037e59138073d1c15d5478cf25567' })));
    }
};

exports.at_badge = AtBadgeComponent;
