import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';

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
        return (h(Host, { key: '07d08316a168e0ef7f5f66eb5760a4a1068dea8f', class: "relative flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: 'f8f031e1525cdf1626622f292c09dc6130a99b7d', class: "flex justify-between" }, h("div", { key: '6a1292aeb1e95cd0fda95f52970e6f3d7c49b027', class: "flex" }, h("slot", { key: 'e0f7cf1642ceba1a379b40c7f56931432984920b', name: "search" })), h("div", { key: 'b98ddc6ab9936b13deba8f87d4c3d240d6ee2c8d', class: "flex" }, h("slot", { key: '600ba7de699f42305b38a756b2d69ee7da76fb1d', name: "export-menu" }), h("slot", { key: '7dc0ac70d67ef8d56f2a8f9a80b44767899dd5aa', name: "column-manager" }), h("slot", { key: '4794742d12186b47296082b8f39c6e9a10b0eb01', name: "actions" }))), h("slot", { key: '0984b9c324caf29af74a52c7badc5dd8ebd4aebd', name: "filters" })));
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
//# sourceMappingURL=p-DobQ3AYN.js.map

//# sourceMappingURL=p-DobQ3AYN.js.map