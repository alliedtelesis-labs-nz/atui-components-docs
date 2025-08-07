import { p as proxyCustomElement, H, h, c as Host } from './p-CHjIMSAP.js';

const badgeVariants = {
    base: 'inline-block rounded-[4px] font-normal whitespace-nowrap leading-[0.9286rem]',
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
const AtuiBadgeComponent = /*@__PURE__*/ proxyCustomElement(class AtuiBadgeComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Type of the badge. Determines colour theming.
         */
        this.type = 'default';
        /**
         * Size of the badge. Determines padding and font-size. For use in input chip lists.
         */
        this.size = 'lg';
        /**
         * Impact of the badge, changes the colours.
         */
        this.impact = 'low';
        /**
         * Boolean value to round the edges of the badge.
         */
        this.rounded = false;
    }
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
        return (h(Host, { key: '95bdebe48395f509d02cdc9c8642574a3d3a1913', class: `${this.baseClasses} ${this.variantClasses} ${this.sizeClasses}` }, this.icon && (h("i", { key: '511ec34cf7b93edf95b336e45793f14a4739d255', class: "material-icons icon-sm relative my-2 h-[14px] w-[14px] text-sm", "data-name": "badge-icon" }, this.icon)), h("span", { key: '0fb90eb33f2942dd6a631fc60f2197d1d4053ecf', "data-name": "badge-label" }, this.label), h("slot", { key: '5733f2cdd82d6113d92e115af20b722e91a2a71f' })));
    }
}, [260, "atui-badge", {
        "icon": [1],
        "label": [1],
        "type": [1],
        "size": [1],
        "impact": [1],
        "rounded": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiBadgeComponent);
            }
            break;
    } });
}

export { AtuiBadgeComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-Bq2RTHNk.js.map

//# sourceMappingURL=p-Bq2RTHNk.js.map