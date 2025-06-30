import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';
import { c as cva } from './index-CVoOBWGd.js';

const AtuiFormLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (h("div", { key: 'bdf4ff18a98c5008722bfea3962cad3fd7eda26c', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '9e41dfcb632810723ca9e9ec6bedf17ec2710d42', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '9ec2daeb611fee10bd28f9c8cbff69adf63309de', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: 'd133a6a0ce90b18430c7dbe146de4260fe7a8b8d', position: "right" }, h("span", { key: '01cc5cb5d254444536b4663bedf07bac50ca970c', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: '3109c5d73e5de37d8abc503d51bf4093576325e3', slot: "tooltip-content" }, this.info_text))),
        ]));
    }
};

const variants = cva('z-50box-border pointer-events-none absolute z-modal flex scale-75 whitespace-nowrap rounded bg-disabled-dark px-4 py-2 text-sm text-white opacity-0 transition-[transform,opacity] peer-hover:scale-100 peer-hover:opacity-100', {
    variants: {
        open: {
            true: null,
            false: 'hidden',
        },
    },
});
const AtuiTooltipComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};

export { AtuiFormLabelComponent as atui_form_label, AtuiTooltipComponent as atui_tooltip };
//# sourceMappingURL=atui-form-label.atui-tooltip.entry.js.map

//# sourceMappingURL=atui-form-label_2.entry.js.map