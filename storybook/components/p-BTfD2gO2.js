import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-B9UDFE-Z.js';

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
        return (h(Host, { key: '0530d8066c2b38943640ef4d4a9359d9c35ade69', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '0701e8589eb1b388e9fcc316db87260772db44a2', class: "flex justify-between" }, h("div", { key: '15a4c700b335640ba72b7c31dfd19b8974b6c72d', class: "flex" }, h("slot", { key: 'd0f2764e5b3609e4a72b5b2b9176ef63afd953fb', name: "search" })), h("div", { key: '76a8b93dfd5939f98a8212100194a3eb26c2534d', class: "flex" }, h("slot", { key: '528a5e6d10bdf210efff369bfb92ebaaa29ed05e', name: "export-menu" }), h("slot", { key: '5ab53108201466459543bb9cc1c1231c47390d26', name: "column-manager" }), h("slot", { key: '3f6841468a8129a8978d0730be0ddf7edfcca0a3', name: "actions" }))), h("slot", { key: 'ec22eecbbf934e8282216f08503dba41fbcc9c66', name: "filters" })));
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
//# sourceMappingURL=p-BTfD2gO2.js.map

//# sourceMappingURL=p-BTfD2gO2.js.map