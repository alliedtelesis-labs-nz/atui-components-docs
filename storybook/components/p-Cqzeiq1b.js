import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CIJrXZgf.js';

const AtuiTableActionsComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTableActionsComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiExportCsv = createEvent(this, "atuiExportCsv", 7);
        this.atuiExportPdf = createEvent(this, "atuiExportPdf", 7);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    changeHandler(event) {
        const target = event.target;
        switch (target.slot) {
            case 'column-manager':
                this.ag_grid.setColumnsVisible([event.detail.id], event.detail.checked);
                break;
            case 'search':
                this.ag_grid.setGridOption('quickFilterText', event.detail);
                break;
            case 'export-menu':
                if (event.detail === 'CSV')
                    this.atuiExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atuiExportPdf.emit(this.getVisibleColumns());
                break;
            case 'dropdown-filters':
                this.atuiChange.emit(event.detail);
                break;
        }
    }
    getVisibleColumns() {
        return this.ag_grid.getAllDisplayedColumns().map((column) => {
            const userProvidedColDef = column.getUserProvidedColDef();
            return {
                actualWidth: column.getActualWidth(),
                field: (userProvidedColDef === null || userProvidedColDef === void 0 ? void 0 : userProvidedColDef.field) || '',
                displayName: this.ag_grid.getDisplayNameForColumn(column, 'header'),
            };
        });
    }
    render() {
        return (h(Host, { key: '572085f7c00e8e0548688445a200ce573c0735e4', class: "relative flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: 'c94ca496502f943afc39e967b8e7d695ed3bac49', class: "flex justify-between" }, h("div", { key: 'd7124334bf056b9b168469040abdc9e3be2742f4', class: "flex" }, h("slot", { key: '0d1be491684703c35a459dedc915c67a4b8dafd1', name: "search" })), h("div", { key: 'c58856ee47417ce2fa9c32e3bb8538529fcb0972', class: "flex" }, h("slot", { key: '858a3145a15050df0ef82917794b6ccfa6b6b545', name: "export-menu" }), h("slot", { key: '5f25b38edf75ca4713c2c7c6091474b4e7cc89a5', name: "column-manager" }), h("slot", { key: '6048ed1d0d28e980cd325263ce38fff7cde69b76', name: "actions" }))), h("slot", { key: 'c3ee18bbca86ca786bd33fda1c79f7b801857654', name: "filters" })));
    }
}, [260, "atui-table-actions", {
        "ag_grid": [16]
    }, [[0, "atuiChange", "changeHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTableActionsComponent);
            }
            break;
    } });
}

export { AtuiTableActionsComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-Cqzeiq1b.js.map

//# sourceMappingURL=p-Cqzeiq1b.js.map