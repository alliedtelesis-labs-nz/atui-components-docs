import { h, Host } from "@stencil/core";
const progressBarVariants = {
    success: 'bg-success-base',
    warning: 'bg-warning-base',
    error: 'bg-destructive-foreground',
    info: 'bg-info-foreground',
};
const trackClass = 'bg-surface-2 rounded-[2px] overflow-hidden';
/**
 * @category Data Visualization
 * @description A progress bar component for displaying percentage values or progress loading, with customizable colors and sizes.
 * @slot label-before - Placed before the progress bar to add custom label content.
 * @slot label-after - Placed after the progress bar to add custom label content.
 */
export class AtProgressBar {
    /**
     * Percentage value of the progress bar.
     */
    percentage = 0;
    /**
     * Mode of the progress bar, either determinate or indeterminate (loading).
     */
    mode = 'determinate';
    /**
     * Type of the progress bar, which determines its color.
     */
    type = 'info';
    /**
     * Height of the progress bar
     */
    size = 'sm';
    clamped = 0;
    onPercentageChange() {
        this.clampPercentage();
    }
    componentWillLoad() {
        this.clampPercentage();
    }
    clampPercentage() {
        const n = Number(this.percentage);
        if (Number.isFinite(n)) {
            this.clamped = Math.min(100, Math.max(0, n));
            console.log('Clamped percentage:', this.clamped);
        }
        else {
            this.clamped = 0;
        }
    }
    get statusBarClass() {
        return `${this.size === 'lg' ? 'h-[16px]' : 'h-8'} flex items-stretch rounded-[2px] overflow-hidden`;
    }
    get segments() {
        return `flex flex-grow items-stretch justify-center transition-all duration-500`;
    }
    renderIndeterminate() {
        return (h(Host, { role: "progressbar", "aria-busy": "true", "aria-valuemin": "0", "aria-valuemax": "100", class: `${this.statusBarClass} overflow-hidden` }, h("slot", { name: "label-before" }), h("div", { class: `relative h-full w-full ${trackClass}` }, h("div", { class: `${progressBarVariants[this.type]} motion-safe:animate-progress-left absolute top-0 h-full`, style: {
                width: '30%',
                left: '-30%',
                willChange: 'left',
            }, "aria-hidden": "true" })), h("slot", { name: "label-after" })));
    }
    renderDeterminate() {
        const background = 100 - this.clamped;
        const fill = this.clamped;
        return (h(Host, { role: "progressbar", "aria-busy": "true", "aria-valuemin": "0", "aria-valuemax": "100", class: this.statusBarClass }, h("slot", { name: "label-before" }), h("div", { class: "flex w-full flex-1 items-stretch justify-start overflow-visible" }, h("div", { class: `${this.segments} ${progressBarVariants[this.type]}`, style: {
                flexBasis: fill.toString() + '%',
            }, "aria-hidden": "true" }), h("div", { class: ` ${this.segments} ${trackClass}`, style: {
                flexBasis: background.toString() + '%',
            }, "aria-hidden": "true" })), h("slot", { name: "label-after" })));
    }
    render() {
        return this.mode === 'indeterminate'
            ? this.renderIndeterminate()
            : this.renderDeterminate();
    }
    static get is() { return "at-progress-bar"; }
    static get properties() {
        return {
            "percentage": {
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
                    "text": "Percentage value of the progress bar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "percentage",
                "defaultValue": "0"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'determinate' | 'indeterminate'",
                    "resolved": "\"determinate\" | \"indeterminate\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Mode of the progress bar, either determinate or indeterminate (loading)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'determinate'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ProgressBarType",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "ProgressBarType": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-progress-bar/at-progress-bar.tsx",
                            "id": "src/components/at-progress-bar/at-progress-bar.tsx::ProgressBarType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Type of the progress bar, which determines its color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'info'"
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
                    "text": "Height of the progress bar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
            }
        };
    }
    static get states() {
        return {
            "clamped": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "percentage",
                "methodName": "onPercentageChange"
            }];
    }
}
