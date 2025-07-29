'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const AtuiFormLabelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (index.h("div", { key: 'bcc4dfe305f44384713dc1594862c39392d98a9e', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '3a6bbb492697dd4c313d0d3768721c5446273389', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '889253bed723ed0ca6fd16f9941e9fce8e82ce22', class: "text-error" }, "*"))),
            this.info_text && (index.h("atui-tooltip", { key: '31eeeb645d00c497a1fd5482217cc3a30c1c2646', position: "right" }, index.h("span", { key: '888f9b50a50e822471f1689507f2ad7314ee9d58', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), index.h("span", { key: 'd697f497964404119454cf9526f99a5e648b12f2', slot: "tooltip-content" }, this.info_text))),
        ]));
    }
};

const variants = index$1.cva('absolute z-50 z-modal box-border flex scale-75 whitespace-nowrap rounded bg-disabled-dark px-4 py-2 text-sm text-white opacity-0 transition-[transform,opacity] peer-hover:scale-100 peer-hover:opacity-100', {
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
        return (index.h(index.Host, { key: '44fb43e8d3a4008ddcd72dbd87a828af92e85c06', class: "relative inline-block" }, index.h("div", { key: '3496c94ba8468a2776c1dde9a05657b4f23760ab', class: "peer pointer-events-auto contents", ref: (el) => (this.triggerEl = el) }, index.h("slot", { key: 'bbef6af02e615f14d715d85583a08581a248cbea', name: "tooltip-trigger" })), index.h("div", { key: '86bdbd368d6c433bbd5aadfbe4edc0ae138d9a28', ref: (el) => (this.tooltipEl = el), style: this.positionStyle, class: classname }, index.h("slot", { key: 'f823f73745c222ccbd23b1e79dffaf40733c24d4', name: "tooltip-content" }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_form_label = AtuiFormLabelComponent;
exports.atui_tooltip = AtuiTooltipComponent;
//# sourceMappingURL=atui-form-label.atui-tooltip.entry.cjs.js.map

//# sourceMappingURL=atui-form-label_2.cjs.entry.js.map