import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';

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
        return (h(Host, { key: '503ae9daccc93d45a7642938a766b266bd11c30a', class: "relative flex flex-col gap-8 pt-8 pb-8" }, h("div", { key: 'c232f528d8b9603f31b54d16323f549e375cf289', class: "flex justify-between" }, h("div", { key: '9ef031289575a142bb5ea4df055de6bd18d8bf92', class: "flex" }, h("slot", { key: 'b50845d262902b6a0884efa27a7c1ef7b904791e', name: "search" })), h("div", { key: '8e156dafa6ac91fbfe021eee95514aa1eae22251', class: "flex" }, h("slot", { key: 'b29a2565de91c380ab31355ca1ffb1e62dca966b', name: "export-menu" }), h("slot", { key: '460417da5d3f188325e3e181e765c019dacecdf1', name: "column-manager" }), h("slot", { key: '67ab227895b6c44448a95814700d42f953cede6a', name: "actions" }))), h("slot", { key: 'cbbd5347b0f6a91e30f8353ac9ceb79c77c027db', name: "filters" })));
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
//# sourceMappingURL=p-DNiv7J1P.js.map

//# sourceMappingURL=p-DNiv7J1P.js.map