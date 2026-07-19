import { h, Host } from "@stencil/core";
import { AtChartColorPalette } from "../../types/chart-color";
/**
 * @category Data Visualization
 * @description A single-metric trend tile: a large current value, an up/down delta indicator over the period, and a compact `at-chart-sparkline` of the recent series. Composes `at-chart-sparkline` for the line so the sparkline itself stays a pure, reusable primitive. Suited to dashboard stat widgets summarising one metric (CPU, memory, response time, throughput, etc.).
 */
export class AtChartTrend {
    /**
     * The numeric series plotted as the underlying sparkline. For multi-series,
     * labelled or time-based data use `at-chart-bar-line` instead.
     */
    data = [];
    /**
     * Large current value shown above the line. Displayed as-is, so pre-format
     * it upstream (rounding, thousands separators, unit suffix if desired).
     */
    value;
    /**
     * Unit appended to the delta label (e.g. `%`, `ms`). Not appended to
     * `value` — include any unit in `value` directly if required.
     */
    unit;
    /**
     * Net change over the displayed period, shown as a signed delta with an
     * up/down trend arrow. When omitted, it is derived from the series as
     * `last − first`. A delta of 0 hides the indicator.
     */
    delta;
    /**
     * How the delta indicator is coloured relative to its sign. Defaults to
     * `up-is-bad` (an increase reads as a regression).
     */
    delta_direction = 'up-is-bad';
    /**
     * Sparkline display treatment forwarded to `at-chart-sparkline`: a glowing
     * `line`, or an `area` with a gradient fill.
     */
    mode = 'line';
    /**
     * Optional device-status colour mode forwarded to the sparkline. When set,
     * the line colour comes from the device-status palette and takes precedence
     * over `color_palette`.
     */
    status;
    /**
     * Colour palette forwarded to the sparkline when `status` is not set.
     */
    color_palette = AtChartColorPalette.CATEGORICAL;
    /**
     * Height of the tile. `auto` fills the host (the value/delta header sits on
     * top and the sparkline flexes to fill the remaining space).
     */
    height = 'auto';
    /**
     * Pass the active theme value here to trigger a redraw of the underlying
     * sparkline when the theme changes. Forwarded to `at-chart-sparkline`.
     */
    refresh_theme;
    /**
     * Net change over the period. Uses the explicit `delta` prop when provided,
     * otherwise derives `last − first` from the series (0 for < 2 points).
     */
    resolveDelta() {
        if (this.delta !== undefined) {
            return this.delta;
        }
        return this.data.length >= 2
            ? this.data[this.data.length - 1] - this.data[0]
            : 0;
    }
    /**
     * Signed, unit-suffixed delta label (e.g. `+3%`, `-1.2ms`).
     */
    deltaLabel(delta) {
        const sign = delta > 0 ? '+' : '';
        return `${sign}${delta}${this.unit ?? ''}`;
    }
    /**
     * Whether the delta reads as a regression given `delta_direction`. Drives
     * the error (regression) vs success (improvement) colouring.
     */
    isRegression(delta) {
        return delta > 0 === (this.delta_direction === 'up-is-bad');
    }
    renderDelta(delta) {
        const regression = this.isRegression(delta);
        const textClass = regression ? 'text-error' : 'text-success';
        const fillClass = regression
            ? 'fill-feedback-error-accent'
            : 'fill-feedback-success-accent';
        return (h("span", { class: `text-h4 flex items-center gap-2 font-bold tabular-nums ${textClass}`, "data-name": "delta" }, h("at-icon", { name: delta > 0 ? 'trend_up' : 'trend_down', size: "16", class: fillClass }), this.deltaLabel(delta)));
    }
    render() {
        const delta = this.resolveDelta();
        return (h(Host, { key: '2544c30a79b5cebced7ec9d3cee331db3c8a40ac', style: { display: 'block', height: '100%', width: '100%' } }, h("div", { key: '13dad86272f5de21c86ad318d2c9fb13da1df357', class: "flex h-full flex-col justify-between gap-4" }, h("div", { key: '787cccf243d3be2c1861b835a88ee139b2fe8832', class: "flex items-baseline justify-between gap-8" }, h("span", { key: '960a0038c1d27db585b612d8921b432889c9cf83', style: {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1.1',
            }, "data-name": "value" }, this.value, h("span", { key: 'abc8327f1d1aae7680a26824c0ee2bfb7068a188', style: {
                fontSize: '0.65em',
                fontWeight: '500',
            } }, this.unit ?? ''))), h("div", { key: 'efa34410f9811b1e59a50511a011ccd6b2ea2980', class: "relative min-h-0 flex-1", "data-name": "sparkline" }, h("at-chart-sparkline", { key: '5ead1c0776ac74888ce7bbb1a4d948f034b786ab', class: "absolute inset-0 block h-full w-full", data: this.data, mode: this.mode, status: this.status, color_palette: this.color_palette, height: this.height, refresh_theme: this.refresh_theme })), delta !== 0 ? this.renderDelta(delta) : null)));
    }
    static get is() { return "at-chart-trend"; }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The numeric series plotted as the underlying sparkline. For multi-series,\nlabelled or time-based data use `at-chart-bar-line` instead."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Large current value shown above the line. Displayed as-is, so pre-format\nit upstream (rounding, thousands separators, unit suffix if desired)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
            "unit": {
                "type": "string",
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
                    "text": "Unit appended to the delta label (e.g. `%`, `ms`). Not appended to\n`value` \u2014 include any unit in `value` directly if required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "unit"
            },
            "delta": {
                "type": "number",
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
                    "text": "Net change over the displayed period, shown as a signed delta with an\nup/down trend arrow. When omitted, it is derived from the series as\n`last \u2212 first`. A delta of 0 hides the indicator."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "delta"
            },
            "delta_direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartTrendDeltaDirection",
                    "resolved": "\"up-is-bad\" | \"up-is-good\"",
                    "references": {
                        "AtChartTrendDeltaDirection": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-chart-trend/at-chart-trend.tsx",
                            "id": "src/components/at-chart-trend/at-chart-trend.tsx::AtChartTrendDeltaDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How the delta indicator is coloured relative to its sign. Defaults to\n`up-is-bad` (an increase reads as a regression)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "delta_direction",
                "defaultValue": "'up-is-bad'"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartSparklineMode",
                    "resolved": "\"area\" | \"line\"",
                    "references": {
                        "AtChartSparklineMode": {
                            "location": "import",
                            "path": "../at-chart-sparkline/at-chart-sparkline",
                            "id": "src/components/at-chart-sparkline/at-chart-sparkline.tsx::AtChartSparklineMode",
                            "referenceLocation": "AtChartSparklineMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sparkline display treatment forwarded to `at-chart-sparkline`: a glowing\n`line`, or an `area` with a gradient fill."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'line'"
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartSparklineStatus",
                    "resolved": "\"bad\" | \"good\" | \"unreachable\" | \"warning\"",
                    "references": {
                        "AtChartSparklineStatus": {
                            "location": "import",
                            "path": "../at-chart-sparkline/at-chart-sparkline",
                            "id": "src/components/at-chart-sparkline/at-chart-sparkline.tsx::AtChartSparklineStatus",
                            "referenceLocation": "AtChartSparklineStatus"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional device-status colour mode forwarded to the sparkline. When set,\nthe line colour comes from the device-status palette and takes precedence\nover `color_palette`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "status"
            },
            "color_palette": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartColorPalette",
                    "resolved": "AtChartColorPalette.ALERT | AtChartColorPalette.CATEGORICAL | AtChartColorPalette.CUSTOM | AtChartColorPalette.DEVICE_STATUS | AtChartColorPalette.ONBOARDING_STATUS | AtChartColorPalette.SEQUENTIAL",
                    "references": {
                        "AtChartColorPalette": {
                            "location": "import",
                            "path": "../../types/chart-color",
                            "id": "src/types/chart-color.ts::AtChartColorPalette",
                            "referenceLocation": "AtChartColorPalette"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Colour palette forwarded to the sparkline when `status` is not set."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color_palette",
                "defaultValue": "AtChartColorPalette.CATEGORICAL"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtChartHeight",
                    "resolved": "\"auto\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "AtChartHeight": {
                            "location": "import",
                            "path": "../../types/chart",
                            "id": "src/types/chart.ts::AtChartHeight",
                            "referenceLocation": "AtChartHeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the tile. `auto` fills the host (the value/delta header sits on\ntop and the sparkline flexes to fill the remaining space)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'auto'"
            },
            "refresh_theme": {
                "type": "string",
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
                    "text": "Pass the active theme value here to trigger a redraw of the underlying\nsparkline when the theme changes. Forwarded to `at-chart-sparkline`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "refresh_theme"
            }
        };
    }
}
