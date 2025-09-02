import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';

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
        return (h(Host, { key: 'f6b6e42193d50b462edce94a446a3012d9b10e8e', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '23040583cc676fa637ef6df32ff5e576e5d96bf7', class: "flex justify-between" }, h("div", { key: 'fb60878fb06177a80355f68a0ac060fde2e3d9cf', class: "flex" }, h("slot", { key: 'f68bc075e493d7325f1ff96f6a783f335d7bb2c1', name: "search" })), h("div", { key: 'c52b557fa7654bb8f2df56cffe45a7341cc6572e', class: "flex" }, h("slot", { key: '5d7d6f85df72398f908f4409837646a4511a3488', name: "export-menu" }), h("slot", { key: '7d435fc35bf1940cded7f5b0994345fe3cbc32fc', name: "column-manager" }), h("slot", { key: 'f1d41e4d8e9b33671b08fbdbd5a4bac4efc4bc0e', name: "actions" }))), h("slot", { key: '50b35a70984913d83d94a1d3c31e7e2d50d9223d', name: "filters" })));
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
//# sourceMappingURL=p-B63odi3N.js.map

//# sourceMappingURL=p-B63odi3N.js.map