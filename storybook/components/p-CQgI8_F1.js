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
        return (h(Host, { key: '033e1f4d9be9dcc2018c89d0b9147090a9495750', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '0b0161241afdde2bdccfb232551180cb0975e4d1', class: "flex justify-between" }, h("div", { key: '3314daa2b3c8f0d3f3e1af1cfc591057ed5509f5', class: "flex" }, h("slot", { key: '607d0f05f0d705ad48976e9280af83f41d618562', name: "search" })), h("div", { key: '3ba60d931265769bf4f411670b9b5637a8f905ff', class: "flex" }, h("slot", { key: 'ebb239bc293ae775177a6d92e345d9f3b9ff88d4', name: "export-menu" }), h("slot", { key: 'db0e08248be6c08a42489e01a9efaf9531aaf48a', name: "column-manager" }), h("slot", { key: '996f13773d6507308d824de79bc2a26af16e5df4', name: "actions" }))), h("slot", { key: 'c2deb3408aa9c45c56b326a5711576429c79c2b8', name: "filters" })));
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
//# sourceMappingURL=p-CQgI8_F1.js.map

//# sourceMappingURL=p-CQgI8_F1.js.map