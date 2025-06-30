import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('z-50box-border pointer-events-none absolute z-modal flex scale-75 whitespace-nowrap rounded bg-disabled-dark px-4 py-2 text-sm text-white opacity-0 transition-[transform,opacity] peer-hover:scale-100 peer-hover:opacity-100', {
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
        return (h(Host, { key: 'a598519e833f935d74894bfdd04d79d537d829c4', class: "relative inline-block" }, h("div", { key: '4c45eda8ea4f63c71b48da5314d92ee61e0c2f5b', class: "peer contents", ref: (el) => (this.triggerEl = el) }, h("slot", { key: '8ac880835bbb9cbb1c2bd4a2590003c534923715', name: "tooltip-trigger" })), h("div", { key: '2c2dabee0b7eb8e3ce5e03bd688a57fd2e96581b', ref: (el) => (this.tooltipEl = el), style: this.positionStyle, class: classname }, h("slot", { key: 'a821d59f054ebd52fecffbcb8405bcb96f7d9244', name: "tooltip-content" }))));
    }
    get el() { return this; }
}, [4, "atui-tooltip", {
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
//# sourceMappingURL=p-BIS2bAMQ.js.map

//# sourceMappingURL=p-BIS2bAMQ.js.map