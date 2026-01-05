import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';

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
    /**
     * AG Grid Api (provided by at-table createGrid method)
     */
    ag_grid;
    /**
     * Emits an event when 'Export CSV' is pressed on provided at-table-export-menu
     */
    atExportCsv;
    /**
     * Emits an event when 'Export PDF' is pressed on provided at-table-export-menu
     */
    atExportPdf;
    /**
     * Emits an event when filters change
     */
    atChange;
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
                field: userProvidedColDef?.field || '',
                displayName: this.ag_grid.getDisplayNameForColumn(column, 'header'),
            };
        });
    }
    render() {
        return (h(Host, { key: '8c499c5dbeb5c8223bc70c84f34653907eaa19b8', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '70b2b34e27c02c09acc9fbbe6f2892ee6ad8948e', class: "flex justify-between" }, h("div", { key: 'ec6f534dbac311c498ca1841afe5306821786fb7', class: "flex" }, h("slot", { key: '752ab3e6aad4f3e5c5b771d30a604ecc2e1abae9', name: "search" })), h("div", { key: 'cff5680982e0945f6f512e88a74421f67b71536c', class: "flex" }, h("slot", { key: '299c9b1b7a9e5a3fe91af82e4ea98d6bb15f1419', name: "export-menu" }), h("slot", { key: 'b1f4ab102fa3acd59e357ed3c0db18c08eec0336', name: "column-manager" }), h("slot", { key: '047d4f3f6206b88760532f095c3c4d7173c2799a', name: "actions" }))), h("slot", { key: '1d103bc9e91ec555f1b6dcbea50f3b4b76550d7d', name: "filters" })));
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
//# sourceMappingURL=p-BEJag_Jh.js.map

//# sourceMappingURL=p-BEJag_Jh.js.map