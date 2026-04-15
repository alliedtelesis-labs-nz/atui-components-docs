import { h, Host, } from "@stencil/core";
import { fetchTranslations } from "../../../utils/translation";
export class AtTableFilters {
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected columns and filter values
     */
    selected = [];
    translations;
    el;
    /**
     * Emits id of column and filter value on change.
     */
    atChange;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    filterChangeHandler(event, columnId) {
        event.stopPropagation();
        this.selected = this.selected.map((column) => {
            if (column.id === columnId)
                return { id: column.id, value: event.detail };
            return column;
        });
        this.atChange.emit(this.selected);
    }
    clearFilters = () => {
        this.selected = [];
        this.atChange.emit([]);
    };
    clearSingleFilter = (columnId) => {
        this.selected = this.selected.filter((column) => column.id !== columnId);
        this.atChange.emit(this.selected.length ? this.selected : []);
    };
    render() {
        return (this.col_defs && (h(Host, { key: 'cc62d7c295a1dd5e41b37c75794cd0dca9710714', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '7e484eabc623746153ec74480da9698b552af515', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, h("at-icon", { slot: "icon", name: "cancel" }))))))), h("at-button", { key: 'f7d6a3ec0bbc18c0e5d5ec6965372370a29f8798', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    static get is() { return "at-table-filters"; }
    static get properties() {
        return {
            "col_defs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ColDef[]",
                    "resolved": "ColDef<any, any>[]",
                    "references": {
                        "ColDef": {
                            "location": "import",
                            "path": "ag-grid-community",
                            "id": "../node_modules/ag-grid-community/dist/types/main.d.ts::ColDef",
                            "referenceLocation": "ColDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions used in your at-table"
                },
                "getter": false,
                "setter": false
            },
            "selected": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{ id: string; value: string }[]",
                    "resolved": "{ id: string; value: string; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected columns and filter values"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "translations": {}
        };
    }
    static get events() {
        return [{
                "method": "atChange",
                "name": "atChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits id of column and filter value on change."
                },
                "complexType": {
                    "original": "AtIFilterEvent[]",
                    "resolved": "AtIFilterEvent[]",
                    "references": {
                        "AtIFilterEvent": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/table-components/at-table-filters/at-table-filters.tsx",
                            "id": "src/components/table-components/at-table-filters/at-table-filters.tsx::AtIFilterEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
