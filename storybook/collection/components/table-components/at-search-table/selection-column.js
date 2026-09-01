/**
 * The checkbox column is built from plain DOM rather than the registered
 * `AtCheckboxCell`/`checkboxHeader` components: those are reached by name through
 * `at-table`'s component map, and a column the table adds to the host's own `col_defs`
 * has no way to add to that map. Passing the class straight to ag-grid keeps the column
 * self-contained, and keeps the selection out of the row data - the registered checkbox
 * cell reports a checked state and writes it back to a field, which is the wrong shape
 * for a selection the table owns and keeps across pages.
 */
function createCheckbox(label) {
    const checkbox = document.createElement('at-checkbox');
    if (label) {
        checkbox.setAttribute('aria-label', label);
    }
    return checkbox;
}
export class AtSelectionCell {
    el;
    checkbox;
    params;
    onChange = (event) => {
        this.params.setSelected(this.params.data, !!event.detail);
    };
    init(params) {
        this.params = params;
        this.el = document.createElement('div');
        this.el.className = 'flex h-full w-full items-center justify-center';
        this.el.setAttribute('data-name', 'selection-cell');
        this.checkbox = createCheckbox(params.label);
        this.checkbox.addEventListener('atuiChange', this.onChange);
        this.el.appendChild(this.checkbox);
        this.applyState();
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        this.applyState();
        return true;
    }
    destroy() {
        this.checkbox?.removeEventListener('atuiChange', this.onChange);
    }
    applyState() {
        const row = this.params.data;
        this.checkbox.checked = this.params.isSelected(row);
        this.checkbox.disabled = !this.params.isSelectable(row);
    }
}
export class AtSelectionHeader {
    el;
    checkbox;
    params;
    onChange = (event) => {
        this.params.setSelected(!!event.detail);
        this.applyState();
    };
    init(params) {
        this.params = params;
        this.el = document.createElement('div');
        this.el.className = 'flex h-full w-full items-center justify-center';
        this.el.setAttribute('data-name', 'selection-header');
        this.checkbox = createCheckbox(params.label);
        this.checkbox.addEventListener('atuiChange', this.onChange);
        this.el.appendChild(this.checkbox);
        this.applyState();
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        this.applyState();
        return true;
    }
    destroy() {
        this.checkbox?.removeEventListener('atuiChange', this.onChange);
    }
    /**
     * Called by the table after it changes the selection, since ag-grid refreshes a
     * header only when the columns change.
     */
    applyState() {
        const state = this.params.getState();
        this.checkbox.checked = state === true;
        this.checkbox.indeterminate = state === 'indeterminate';
    }
}
