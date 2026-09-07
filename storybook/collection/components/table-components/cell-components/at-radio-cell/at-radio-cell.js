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
        return (h(Host, { key: 'd17381c67bcc84329f105c5d89a72bab5f536d10', class: "flex h-full items-center" }, h("at-radio", { key: '504140f6669907379780bd02d3fe2e6bfd94e62d', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, group: this.groupName(), value: String(this.params.node?.id ?? ''), onAtuiChange: () => this.setValue() })));
    }
    static get is() { return "at-radio-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
