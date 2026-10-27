'use strict';

var index = require('./index-CwnFn_Q4.js');

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
            default: 'text-foreground-inv bg-surface-inv',
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
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '6b2866045d81ab5ed146568dd1c7c6b03fbca964', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, index.h("slot", { key: '99277b9f78d7ba1e0fd3c7dc7dd75d6b40e6de49', name: "icon" }), index.h("span", { key: '5ab7b6d50cdefdf34b3280899f53da7189de9a80', "data-name": "badge-label" }, this.label), index.h("slot", { key: '630faf41b2dbec55c8fb5f789e209d5956f85caa' })));
    }
};

exports.at_badge = AtBadgeComponent;
