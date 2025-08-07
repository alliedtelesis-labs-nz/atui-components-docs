import { p as proxyCustomElement, H, h, c as Host } from './p-CHjIMSAP.js';
import { T as TimeDatePresentationUtil } from './p-CKQAHFp4.js';
import { a as DateFormat } from './p-wxnR6VRT.js';

const AtuiTitleSubtitleDateCell = /*@__PURE__*/ proxyCustomElement(class AtuiTitleSubtitleDateCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        if (typeof params.value === 'string') {
            this.value = new Date(params.value);
        }
        else {
            this.value = params.value;
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
        return (h(Host, { key: 'c5f23fb43427665d31076bd80452ea9ec21b7fe0' }, h("div", { key: '2c601332a3cc8c2958f54f208051be2e6201b07c', class: "flex h-full flex-col justify-center" }, h("div", { key: '16c41d9fb006a006cfe39c5178fd78143b9baf56', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'e56a5202c82cabc01f9dd46f17a2707b7354c611', class: "truncate text-xs font-normal leading-[100%] text-med" }, this.yearMonthDay))));
    }
    get el() { return this; }
}, [256, "atui-title-subtitle-date-cell", {
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
//# sourceMappingURL=p-FUqM_6QA.js.map

//# sourceMappingURL=p-FUqM_6QA.js.map