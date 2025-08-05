import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { T as TimeDatePresentationUtil } from './p-rzsGt5mL.js';
import { a as DateFormat } from './p-BP6gV1HR.js';

const AtuiTitleSubtitleDateCell = /*@__PURE__*/ proxyCustomElement(class AtuiTitleSubtitleDateCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        const { value } = params;
        this.params = params;
        if (typeof value === 'string') {
            this.value = new Date(value);
        }
        else {
            this.value = value;
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.value = newValue;
    }
    get hourMinuteSecond() {
        return TimeDatePresentationUtil.getFormattedDate(this.value, DateFormat.HOURS_MINUTES_SECONDS);
    }
    get yearMonthDay() {
        return TimeDatePresentationUtil.getFormattedDate(this.value, DateFormat.YEAR_MONTH_DAY);
    }
    render() {
        return (h(Host, { key: 'b1ba682af47b1337fdbb54721576247312fb024f' }, h("div", { key: '087f9100165096c76e137432c5fac213119115cd', class: "flex h-full flex-col justify-center" }, h("div", { key: '65bdcb972209643a18c5f3eac3f7c806f7689477', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '88028e7ab99a785bef45fb5108acf3858a0d80a7', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return this; }
}, [0, "atui-title-subtitle-date-cell", {
        "value": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-title-subtitle-date-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-title-subtitle-date-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTitleSubtitleDateCell);
            }
            break;
    } });
}

export { AtuiTitleSubtitleDateCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CHUwPUhS.js.map

//# sourceMappingURL=p-CHUwPUhS.js.map