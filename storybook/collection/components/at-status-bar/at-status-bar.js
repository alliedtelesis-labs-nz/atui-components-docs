import { h, Host } from "@stencil/core";
import { contrastTextColor } from "../../utils/contrast-text";
const MIN_HEIGHT = 'min-h-[16px]';
/**
 * @category Data Visualization
 * @description A status bar component for displaying progress, completion, or state information with customizable colors and labels.
 */
export class AtStatusBar {
    /**
     * List of segments that make up the status bar. Each segment implements the AtIStatusBarSegment interface.
     */
    status_bar = [];
    /**
     * Height of the status bar
     */
    size = 'sm';
    /**
     * Shows a tooltip with the segment's label and percentage on hover
     */
    show_tooltip = true;
    /**
     * Shows each segment's label and percentage inside the bar. The bar grows with
     * its text, never shorter than the `lg` size, and ignores `size`. Text colour is
     * derived from each segment's background.
     */
    show_internal_value;
    /**
     * Space in pixels between adjacent segments. Segments share the remaining
     * width in proportion to their percentages.
     */
    segment_gap = 0;
    el;
    themeObserver;
    componentDidLoad() {
        this.themeObserver = new MutationObserver(() => this.applyContrast());
        this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'data-theme'],
        });
    }
    componentDidRender() {
        this.applyContrast();
    }
    disconnectedCallback() {
        this.themeObserver?.disconnect();
    }
    applyContrast() {
        if (!this.show_internal_value) {
            return;
        }
        this.el
            .querySelectorAll('[data-name="status-bar-segment"]')
            .forEach((segment) => {
            segment.style.color = contrastTextColor(getComputedStyle(segment).backgroundColor);
        });
    }
    get statusBarClass() {
        if (this.show_internal_value) {
            return `${MIN_HEIGHT} flex items-stretch rounded-lg overflow-hidden`;
        }
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-full overflow-hidden`;
    }
    segmentSummary(segment) {
        return segment.label
            ? `${segment.label}: ${segment.percentage}%`
            : `${segment.percentage}%`;
    }
    get coveredPercentage() {
        return this.status_bar.reduce((total, segment) => total + segment.percentage, 0);
    }
    get hasRemainder() {
        return this.coveredPercentage < 99.999;
    }
    get flexItemCount() {
        return this.status_bar.length + (this.hasRemainder ? 1 : 0);
    }
    renderRemainder() {
        return (h("div", { class: "bg-surface-0 min-w-0 flex-1", "data-name": "status-bar-remainder", "aria-hidden": "true" }));
    }
    segmentBasis(percentage) {
        if (!this.segment_gap) {
            return `${percentage}%`;
        }
        const totalGap = this.segment_gap * (this.flexItemCount - 1);
        return `calc((100% - ${totalGap}px) * ${percentage / 100})`;
    }
    get segments() {
        return this.status_bar.map((segment) => (h("at-tooltip", { position: "top", class: `flex items-stretch justify-center ${this.show_internal_value
                ? '[&>[data-name=tooltip-trigger]]:w-full'
                : ''}`, disabled: !this.show_tooltip, style: {
                flex: `0 0 ${this.segmentBasis(segment.percentage)}`,
            } }, h("div", { class: `h-full w-full ${this.show_internal_value
                ? 'relative'
                : 'absolute inset-0'}`, slot: "tooltip-trigger", role: "img", "data-name": "status-bar-segment", "aria-label": this.segmentSummary(segment), style: {
                background: segment.backgroundColor,
            } }, this.show_internal_value && (h("div", { class: "flex h-full flex-col justify-center overflow-hidden px-8 py-4 text-left", "data-name": "status-bar-segment-value" }, h("span", { class: "truncate text-xs" }, segment.label), h("span", { class: "truncate text-sm font-bold" }, segment.percentage, "%")))), h("span", null, this.segmentSummary(segment)))));
    }
    render() {
        return (h(Host, { key: '04b52eae30339639322a3fd46787a50968bd276e', class: this.statusBarClass }, h("div", { key: '6d7401c7548f912b338f10d9f32f0c98507de921', class: "flex flex-1 items-stretch justify-start overflow-visible", style: { gap: `${this.segment_gap}px` } }, this.segments, this.hasRemainder && this.renderRemainder())));
    }
    static get is() { return "at-status-bar"; }
    static get properties() {
        return {
            "status_bar": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtIStatusBarSegment[]",
                    "resolved": "AtIStatusBarSegment[]",
                    "references": {
                        "AtIStatusBarSegment": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-status-bar/at-status-bar.tsx",
                            "id": "src/components/at-status-bar/at-status-bar.tsx::AtIStatusBarSegment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of segments that make up the status bar. Each segment implements the AtIStatusBarSegment interface."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "\"lg\" | \"sm\"",
                    "references": {
                        "Size": {
                            "location": "global",
                            "id": "global::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the status bar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
            },
            "show_tooltip": {
                "type": "boolean",
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
                    "text": "Shows a tooltip with the segment's label and percentage on hover"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_tooltip",
                "defaultValue": "true"
            },
            "show_internal_value": {
                "type": "boolean",
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
                    "text": "Shows each segment's label and percentage inside the bar. The bar grows with\nits text, never shorter than the `lg` size, and ignores `size`. Text colour is\nderived from each segment's background."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_internal_value"
            },
            "segment_gap": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Space in pixels between adjacent segments. Segments share the remaining\nwidth in proportion to their percentages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "segment_gap",
                "defaultValue": "0"
            }
        };
    }
    static get elementRef() { return "el"; }
}
