import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Bx9nFool.js';

const AtTableActionsComponent = /*@__PURE__*/ proxyCustomElement(class AtTableActionsComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atExportCsv = createEvent(this, "atExportCsv", 7);
        this.atExportPdf = createEvent(this, "atExportPdf", 7);
        this.atChange = createEvent(this, "atChange", 7);
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
                    this.atExportCsv.emit();
                if (event.detail === 'PDF')
                    this.atExportPdf.emit(this.getVisibleColumns());
                break;
            case 'dropdown-filters':
                this.atChange.emit(event.detail);
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
        return (h(Host, { key: '06e6c9e0c6be77f9f0598c4d2b6fc14adec8b8eb', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'f0e7c7e672b5217b175ccd2e3609ad7c0ad35ad0', class: "flex justify-between" }, h("div", { key: '4408630762f9342e2d0a9f008d36551c399e2bb9', class: "flex" }, h("slot", { key: '7b2933b40b1faa1d982ca1e763b88dec02dbfc9c', name: "search" })), h("div", { key: 'b5578e0982ab7ca28383b420ccbd021ede8c1e68', class: "flex" }, h("slot", { key: 'db517eef8f5ebf82a6364545f97ddf303555cea1', name: "export-menu" }), h("slot", { key: 'fa1dd10d808068b7ad107891f32308ad78e38997', name: "column-manager" }), h("slot", { key: 'c6142e1ad6d7c4c8823eaa30cb3d31f3758bfa5e', name: "actions" }))), h("slot", { key: '858e541e4d4ae5cb2ac102b3897adb81555f3829', name: "filters" })));
    }
}, [260, "at-table-actions", {
        "ag_grid": [16]
    }, [[0, "atuiChange", "changeHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-table-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTableActionsComponent);
            }
            break;
    } });
}

export { AtTableActionsComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-C977_r-m.js.map

//# sourceMappingURL=p-C977_r-m.js.map