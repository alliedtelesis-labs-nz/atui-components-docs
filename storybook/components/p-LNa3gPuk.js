import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { T as TimeDatePresentationUtil } from './p-DNVc4J1B.js';
import { D as DateFormat } from './p-DJyIoUiL.js';

const AtTitleSubtitleDateCell = /*@__PURE__*/ proxyCustomElement(class AtTitleSubtitleDateCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    value;
    params;
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
        return (h(Host, { key: '564b16bd93937abdf2c46b714e619893a2e6d3b8' }, h("div", { key: 'ff9c9eba0540e6bd34dd36ffede9d89d1eb4cb55', class: "flex h-full flex-col justify-center" }, h("div", { key: '4105c6da64e89c183364c02f5371158867305815', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: 'f89608533c167b7b525481f3b9e7ea8af4f4e5d5', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
}, [256, "at-title-subtitle-date-cell", {
        "value": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-title-subtitle-date-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "at-title-subtitle-date-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTitleSubtitleDateCell);
            }
            break;
    } });
}

export { AtTitleSubtitleDateCell as A, defineCustomElement as d };
//# sourceMappingURL=p-LNa3gPuk.js.map

//# sourceMappingURL=p-LNa3gPuk.js.map