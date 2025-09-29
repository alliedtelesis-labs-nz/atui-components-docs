import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';
import { T as TimeDatePresentationUtil } from './p-C75v68Jh.js';
import { D as DateFormat } from './p-DJyIoUiL.js';

const AtTitleSubtitleDateCell = /*@__PURE__*/ proxyCustomElement(class AtTitleSubtitleDateCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
        return (h(Host, { key: '2fe9eb7cae29b465cb302134bf97c0cb581d772d' }, h("div", { key: '2aec7b4752f5da6ce7eec5b48a8cddcfcab302b0', class: "flex h-full flex-col justify-center" }, h("div", { key: '77ce434c0f5ba5c492e599ae9b4a1c6010106231', class: "truncate text-sm leading-[100%]" }, this.hourMinuteSecond), h("div", { key: '6e678757c29f8874ea233dc764fb6f02a7f3db5e', class: "text-med truncate text-xs leading-[100%] font-normal" }, this.yearMonthDay))));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-BnTLdg0X.js.map

//# sourceMappingURL=p-BnTLdg0X.js.map