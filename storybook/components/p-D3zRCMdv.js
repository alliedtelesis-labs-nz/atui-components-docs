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
        return (h(Host, { key: '1f3a4f8ec237a26d2a18fc8283fdc458782e7c7f', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'c19fc6bba72a7640bd9b8521cd4359c6604f86ae', class: "flex justify-between" }, h("div", { key: 'dba67ac481e04ce36470d32ef280527dcc548c46', class: "flex" }, h("slot", { key: '8261ac12c0e8509da643e516d0bcb9c84e6809c9', name: "search" })), h("div", { key: 'aee4e845f125a89faa67d349ffde16be056bae19', class: "flex" }, h("slot", { key: 'f0060ffdb87ceb8cf3fa13a44476e0ea4c3749d1', name: "export-menu" }), h("slot", { key: '1f812f632d00a9c5d6db6fc1c4af004868b900ae', name: "column-manager" }), h("slot", { key: 'dcd3e5d729f9114794f4f00d31ea714477814076', name: "actions" }))), h("slot", { key: '9fc7f369003e4dcca2bca58154b44ee535935603', name: "filters" })));
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
//# sourceMappingURL=p-D3zRCMdv.js.map

//# sourceMappingURL=p-D3zRCMdv.js.map