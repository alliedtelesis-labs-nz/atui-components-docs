import { h, Host } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('absolute z-50 z-modal box-border flex scale-75 whitespace-nowrap rounded bg-disabled-dark px-4 py-2 text-sm text-white opacity-0 transition-[transform,opacity] peer-hover:scale-100 peer-hover:opacity-100', {
    variants: {
        open: {
            true: null,
            false: 'hidden',
        },
    },
});
/**
 * @category Overlays
 * @description A tooltip component that displays contextual information when hovering over or focusing on an element. Provides accessible hover/focus behavior with customizable positioning and content.
 *
 * @slot tooltip-trigger - Shows the tooltip when hovered
 * @slot tooltip-content - Content to go inside of the tooltip
 */
export class AtuiTooltipComponent {
    constructor() {
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
        return (h(Host, { key: '144fc9c131ffa461ee469d69ee5ff9eed86bf93d', class: "relative inline-block" }, h("div", { key: '52a44a45449f2a575d7474bfa16f42147c0e87a7', class: "peer pointer-events-auto contents", ref: (el) => (this.triggerEl = el) }, h("slot", { key: '6cc0b456b2b4de3d696f9607b629f73fe13a6fd0', name: "tooltip-trigger" })), h("div", { key: '45194021ca57a0f1a52344d591f33aa76af35771', ref: (el) => (this.tooltipEl = el), style: this.positionStyle, class: classname }, h("slot", { key: '8239e7f31c42da33a8890573b64f8837a94f20bf', name: "tooltip-content" }))));
    }
    static get is() { return "atui-tooltip"; }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "TooltipPosition",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "TooltipPosition": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-tooltip/atui-tooltip.tsx",
                            "id": "src/components/atui-tooltip/atui-tooltip.tsx::TooltipPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the tooltip content relative to the atui-tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom'"
            },
            "is_visible": {
                "type": "boolean",
                "attribute": "is_visible",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If false, forces the tooltip to hide.\nIf true, tooltip will show when trigger is hovered"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "width": {
                "type": "string",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "String representing the 'max-width' style of the tooltip element (e.g., 'auto', '200px', '50%')"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "offset": {
                "type": "number",
                "attribute": "offset",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Offset in pixels from the edge of the trigger element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "8"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-tooltip.js.map
