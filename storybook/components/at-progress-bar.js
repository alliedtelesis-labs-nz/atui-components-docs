import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';

const progressBarVariants = {
    success: 'bg-success-base',
    warning: 'bg-warning-base',
    error: 'bg-destructive-foreground',
    info: 'bg-info-foreground',
};
const trackClass = 'bg-surface-2 rounded-[2px] overflow-hidden';
const AtProgressBar$1 = /*@__PURE__*/ proxyCustomElement(class AtProgressBar extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
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
    static get watchers() { return {
        "percentage": ["onPercentageChange"]
    }; }
}, [260, "at-progress-bar", {
        "percentage": [2],
        "mode": [1],
        "type": [1],
        "size": [1],
        "clamped": [32]
    }, undefined, {
        "percentage": ["onPercentageChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-progress-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "at-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtProgressBar$1);
            }
            break;
    } });
}

const AtProgressBar = AtProgressBar$1;
const defineCustomElement = defineCustomElement$1;

export { AtProgressBar, defineCustomElement };
//# sourceMappingURL=at-progress-bar.js.map

//# sourceMappingURL=at-progress-bar.js.map