'use strict';

var index = require('./index-Bo1AxtqW.js');

const badgeVariants = {
    base: 'inline-flex rounded-badge cursor-default font-normal whitespace-nowrap leading-[0.9286rem] gap-2 items-center',
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
        return (index.h(index.Host, { key: '858c6fe5a5767d8b6a0dfce3234f40b94937a713', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, index.h("slot", { key: '6a014e6e4f57db74252d38745ca39f330d9890b7', name: "icon" }), index.h("span", { key: '61b81edd247378dcac154a1f32589a893a5bd54a', "data-name": "badge-label" }, this.label), index.h("slot", { key: '21e85e5b804e0c1a1f05c18d322bb7f71eacd14e' })));
    }
};

exports.at_badge = AtBadgeComponent;
