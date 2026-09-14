import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A radio cell component for single row selection in data tables. Selecting a row reports through the cell renderer params and clears every other row in the column.
 */
export class AtRadioCellComponent {
    el;
    params;
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    /**
     * Every cell in the column is refreshed, not just this one: a radio that gains the
     * selection takes it from a row that may be rendered anywhere above or below, and
     * only a re-read of `checked` clears it.
     */
    setValue() {
        if (!this.params?.setValue) {
            return;
        }
        this.params.setValue(true);
        this.params.api.refreshCells({
            columns: [this.columnId()],
            force: true,
        });
        this.params.api.refreshHeader();
    }
    columnId() {
        return this.params.column?.getColId();
    }
    groupName() {
        return this.params.group ?? `at-radio-cell-${this.columnId()}`;
    }
    render() {
        const isChecked = this.params.checked
            ? this.params.checked(this.params.data)
            : false;
        const isDisabled = this.params.getDisabled
            ? this.params.getDisabled(this.params.data)
            : false;
        return (h(Host, { key: '93bd96e7ec914776f8653f3b1f613cf550772bbd', class: "flex h-full items-center" }, h("at-radio", { key: 'b8b6d91c2f677b395e98a0e63092e20ac3b4e6df', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, group: this.groupName(), value: String(this.params.node?.id ?? ''), onAtuiChange: () => this.setValue() })));
    }
    static get is() { return "at-radio-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
