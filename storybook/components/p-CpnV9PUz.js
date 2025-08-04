import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('absolute z-50 z-modal box-border flex scale-75 whitespace-nowrap rounded bg-disabled-dark px-4 py-2 text-sm text-white opacity-0 transition-[transform,opacity] peer-hover:scale-100 peer-hover:opacity-100', {
    variants: {
        open: {
            true: null,
            false: 'hidden',
        },
    },
});
const AtuiTooltipComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTooltipComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '44fb43e8d3a4008ddcd72dbd87a828af92e85c06', class: "relative inline-block" }, h("div", { key: '3496c94ba8468a2776c1dde9a05657b4f23760ab', class: "peer pointer-events-auto contents", ref: (el) => (this.triggerEl = el) }, h("slot", { key: 'bbef6af02e615f14d715d85583a08581a248cbea', name: "tooltip-trigger" })), h("div", { key: '86bdbd368d6c433bbd5aadfbe4edc0ae138d9a28', ref: (el) => (this.tooltipEl = el), style: this.positionStyle, class: classname }, h("slot", { key: 'f823f73745c222ccbd23b1e79dffaf40733c24d4', name: "tooltip-content" }))));
    }
    get el() { return this; }
}, [260, "atui-tooltip", {
        "position": [1],
        "is_visible": [4],
        "width": [1],
        "offset": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTooltipComponent);
            }
            break;
    } });
}

export { AtuiTooltipComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CpnV9PUz.js.map

//# sourceMappingURL=p-CpnV9PUz.js.map