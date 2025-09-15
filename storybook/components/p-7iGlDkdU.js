import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';

const AtTableActionsComponent = /*@__PURE__*/ proxyCustomElement(class AtTableActionsComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '3dc7ffcba5d31cbde49fce8daafebf17cfc3db38', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'd1ffa7fdec2ff3ed04c5d79ed43a450d4e49d0c5', class: "flex justify-between" }, h("div", { key: '1c4c9c8ef94d70dbe44ba794be69da52aef09abd', class: "flex" }, h("slot", { key: '387bc729f636ba9b8e31a424bb469ebfffae6e97', name: "search" })), h("div", { key: 'ad8c8d7a4e06e29eac2ff0ab2ddd26e072bf1ad6', class: "flex" }, h("slot", { key: 'b588ef013d6d4f15c3b248d9fcde3db02236566c', name: "export-menu" }), h("slot", { key: '34d75a1a980c67d42bf89418e8290240ca09c06e', name: "column-manager" }), h("slot", { key: 'a9d76952ca502c67cc67cf3ab5f7e53fd1a6a4d7', name: "actions" }))), h("slot", { key: 'e93ffb8d21685bfd008746c61ba4668edbaa0d94', name: "filters" })));
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
//# sourceMappingURL=p-7iGlDkdU.js.map

//# sourceMappingURL=p-7iGlDkdU.js.map