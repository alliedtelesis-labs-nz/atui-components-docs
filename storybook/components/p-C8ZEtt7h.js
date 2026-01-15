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
        return (h(Host, { key: 'e9ff5d80181f6ce76be063e3b3293f3c670da8aa', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '88eb90c3c343267e6742be5aa544c26e28e7e122', class: "flex justify-between" }, h("div", { key: '0273eb4dacd03550417b121f5b0f26acf12abe3e', class: "flex" }, h("slot", { key: 'b6d584f202c0cbdf9cc1cf7b6c58bc322a101d21', name: "search" })), h("div", { key: '8f311bed5a7c0185a30beeb032dad22c608c67f2', class: "flex" }, h("slot", { key: 'b3d3e9ac6f882cd96a088372cc0533c02107753e', name: "export-menu" }), h("slot", { key: '2462e7a4154cad392ef4c5e689f72125a296df6e', name: "column-manager" }), h("slot", { key: 'f59d19f103ac75277528f33e3ff9c8ceb2a12cf0', name: "actions" }))), h("slot", { key: '77eda585cdc2064ed4306b8cc2d2bab04149a9b0', name: "filters" })));
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
//# sourceMappingURL=p-C8ZEtt7h.js.map

//# sourceMappingURL=p-C8ZEtt7h.js.map