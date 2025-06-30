import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';

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
        return (h(Host, { key: '83751196794e345ebcc83997137130419a96c20d', class: "relative z-menu flex flex-col gap-8 pb-8 pt-8" }, h("div", { key: '20edcd52d35a1dd4eb607a03c7285591dc662143', class: "flex justify-between" }, h("div", { key: '2c9ac7b22c4b9ede1820b3cba6c04c585251f977', class: "flex" }, h("slot", { key: 'e43ce67dd5f11a688d0bc7eabc03b0e54f6d4ca6', name: "search" })), h("div", { key: '55b4b3f476970e591435817599f643d820b02dad', class: "flex" }, h("slot", { key: 'dfd8af3f0081051bacee5c23b1be588f4a020151', name: "export-menu" }), h("slot", { key: '0c903187dcf4ec207341053bbbd2e8ee5bd4ed28', name: "column-manager" }), h("slot", { key: '8f650769e186956205c565cec02057e2c35fbda0', name: "actions" }))), h("slot", { key: '39fb695c19994e9234876fc0794b9eba9027b6b3', name: "filters" })));
    }
}, [4, "atui-table-actions", {
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
//# sourceMappingURL=p-DiLhUBj3.js.map

//# sourceMappingURL=p-DiLhUBj3.js.map