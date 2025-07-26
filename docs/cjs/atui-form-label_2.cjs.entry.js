'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const AtuiFormLabelComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (index.h("div", { key: '46bf72f4ce88c307619f11760a864709ca8613ab', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (index.h("label", { key: '5832b00f23be6a6d8ac1b6acadaac55dc2d9f9f3', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && index.h("span", { key: '4280f137a90d8b2684915c46a23eb9abfd3bcec3', class: "text-error" }, "*"))),
            this.info_text && (index.h("atui-tooltip", { key: '5f8912183a74a0facc7a5760589997db69ea8e77', position: "right" }, index.h("span", { key: 'c57cf79420b5fa8a8d354712d69bc632b4295b11', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), index.h("span", { key: '00d49070cd19d705b9a840ac7282b5800aaf3d8e', slot: "tooltip-content" }, this.info_text))),
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
        return (index.h(index.Host, { key: '144fc9c131ffa461ee469d69ee5ff9eed86bf93d', class: "relative inline-block" }, index.h("div", { key: '52a44a45449f2a575d7474bfa16f42147c0e87a7', class: "peer pointer-events-auto contents", ref: (el) => (this.triggerEl = el) }, index.h("slot", { key: '6cc0b456b2b4de3d696f9607b629f73fe13a6fd0', name: "tooltip-trigger" })), index.h("div", { key: '45194021ca57a0f1a52344d591f33aa76af35771', ref: (el) => (this.tooltipEl = el), style: this.positionStyle, class: classname }, index.h("slot", { key: '8239e7f31c42da33a8890573b64f8837a94f20bf', name: "tooltip-content" }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_form_label = AtuiFormLabelComponent;
exports.atui_tooltip = AtuiTooltipComponent;
//# sourceMappingURL=atui-form-label.atui-tooltip.entry.cjs.js.map

//# sourceMappingURL=atui-form-label_2.cjs.entry.js.map