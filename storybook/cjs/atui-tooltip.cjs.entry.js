'use strict';

var index = require('./index-DGivrgtr.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('z-50box-border pointer-events-none absolute z-modal flex scale-75 whitespace-nowrap rounded bg-disabled-dark px-4 py-2 text-sm text-white opacity-0 transition-[transform,opacity] peer-hover:scale-100 peer-hover:opacity-100', {
    variants: {
        open: {
            true: null,
            false: 'hidden',
        },
    },
});
const AtuiTooltipComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Position of the tooltip content relative to the atui-tooltip
         */
        this.position = 'bottom';
        /**
         * If false, forces the tooltip to hide.
         * If true, tooltip will show when trigger is hovered
         */
        this.is_visible = true;
        /**
         * String representing the 'max-width' style of the tooltip element (e.g., 'auto', '200px', '50%')
         */
        this.width = 'auto';
        /**
         * Offset in pixels from the edge of the trigger element
         */
        this.offset = 8;
        this.updateTooltipWidth = () => {
            if (!this.tooltipEl)
                return;
            requestAnimationFrame(() => {
                if (this.width !== 'auto') {
                    this.tooltipEl.style.maxWidth = `${this.width}px`;
                }
            });
        };
    }
    componentDidLoad() {
        window.addEventListener('resize', this.updateTooltipWidth);
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.updateTooltipWidth);
    }
    get positionStyle() {
        var _a, _b;
        const offset = (_a = this.offset) !== null && _a !== void 0 ? _a : 8;
        const width = ((_b = this.width) === null || _b === void 0 ? void 0 : _b.trim()) || 'auto';
        const baseStyles = {
            width: width,
        };
        const positionStyles = {
            top: Object.assign(Object.assign({}, baseStyles), { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: `${offset}px` }),
            bottom: Object.assign(Object.assign({}, baseStyles), { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: `${offset}px` }),
            left: Object.assign(Object.assign({}, baseStyles), { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: `${offset}px` }),
            right: Object.assign(Object.assign({}, baseStyles), { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: `${offset}px` }),
        };
        return positionStyles[this.position] || {};
    }
    render() {
        const classname = variants({
            open: this.is_visible,
        });
        return (index.h(index.Host, { key: '57088d350cfe39e0b1e6ae805fbb68cd1b19eb51', class: "relative inline-block" }, index.h("div", { key: '96069692bd30e0484c900d80d3d7cc7cf6c2435b', class: "peer contents", ref: (el) => (this.triggerEl = el) }, index.h("slot", { key: 'edee4e63d113c6096b46499db04e6f6fb677dd79', name: "tooltip-trigger" })), index.h("div", { key: 'fd1cd12e1a4557ce2d0ecf6a81f9919e5a12d6bf', ref: (el) => (this.tooltipEl = el), style: this.positionStyle, class: classname }, index.h("slot", { key: '51383871c7a57171dccfbfd8454f3780c000861f', name: "tooltip-content" }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_tooltip = AtuiTooltipComponent;
//# sourceMappingURL=atui-tooltip.entry.cjs.js.map

//# sourceMappingURL=atui-tooltip.cjs.entry.js.map