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
        return (h(Host, { key: 'c86f10bbafd855fc62c6c32d78840c8da4c10c0e', class: "relative flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: '1901cc29f3551938c6be4132168944c10cb4a395', class: "flex justify-between" }, h("div", { key: '306b3ecf3dcd09bf30eb34f5d2e5e6a627e8f7e3', class: "flex" }, h("slot", { key: 'b147e8f9c0a3f860c9aac06b8c5abe7191ded164', name: "search" })), h("div", { key: '0574a018e556c00b679f97982b63b1fda3862b19', class: "flex" }, h("slot", { key: 'e318ced667454701f81f5400c989eea4ec64bd65', name: "export-menu" }), h("slot", { key: '1fe0007d6d448df74a9930d2a7cc0bccd8450236', name: "column-manager" }), h("slot", { key: '150fb41a15ecf67f6f1e6b7bfcb40d352ac6847c', name: "actions" }))), h("slot", { key: '03e1ae44a8ecfaf56e22b06d930aff6e102a620e', name: "filters" })));
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
//# sourceMappingURL=p-B4GQwf9G.js.map

//# sourceMappingURL=p-B4GQwf9G.js.map