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
        return (h(Host, { key: '59ab5dd997f90e4d0f7fb842267fe1abced1cc09', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: '5d24a8a8e47fd67c75ef0640028f668d96ea0d4c', class: "flex justify-between" }, h("div", { key: '4b64a614f63ef195ab1c974ee38ea4aa09c4afa5', class: "flex" }, h("slot", { key: 'e347a3b0094da9a278857f3c16cd09a8e0969cc2', name: "search" })), h("div", { key: '40307867f73ba2d676fddd0fad5ecc4408714233', class: "flex" }, h("slot", { key: 'e7a0ec99b0a5eb8a368d620dc14a0fbe5491de30', name: "export-menu" }), h("slot", { key: '446cd2ec816154e5e88cf6da76ff003e3808d4f8', name: "column-manager" }), h("slot", { key: 'e62702d5026bab3ee61a42337ad95da436fe54ac', name: "actions" }))), h("slot", { key: '4bb6587efe3f2f20b13c5349988b7153d790c781', name: "filters" })));
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
//# sourceMappingURL=p-ZmctHVye.js.map

//# sourceMappingURL=p-ZmctHVye.js.map