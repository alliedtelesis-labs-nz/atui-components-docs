import { r as registerInstance, h } from './index-8kq1vl9Q.js';

const AtuiFormLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (h("div", { key: 'f2931ce1c6939387d1c1dde786b21f191d60e838', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '0d919490d1c34495e019e4e2b7c1fc6491406d05', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '3c8c5beeb9a7c13c9d478c7d802ed747e4b5ea61', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: '30e7514c9b084e4b9dce622fee5d4b577627ec7c', position: "right" }, h("span", { key: '87c2ed894427103e1d804af810a7212809bc154b', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: 'b7572c69e49d6a4b0d0d7ae050eb9febc10438c7', slot: "tooltip-content" }, this.info_text))),
        ]));
    }
};

export { AtuiFormLabelComponent as atui_form_label };
//# sourceMappingURL=atui-form-label.entry.js.map

//# sourceMappingURL=atui-form-label.entry.js.map