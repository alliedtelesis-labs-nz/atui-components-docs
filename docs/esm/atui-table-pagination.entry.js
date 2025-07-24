import { r as registerInstance, c as createEvent, h, H as Host } from './index-Cd7WF2gX.js';

const AtuiTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        this.atuiPageSizeChange = createEvent(this, "atuiPageSizeChange", 7);
        /**
         * Current page number
         */
        this.current_page = 1;
        /**
         * Total number of pages
         */
        this.num_pages = 1;
        /**
         * Options provided in dropdown for page sizes.
         */
        this.page_size_options = [
            { value: '5' },
            { value: '10' },
            { value: '20' },
            { value: '50' },
            { value: '100' },
        ];
    }
    render() {
        return (h(Host, { key: '6cd2945d2db36dfd327ca0c1b94e82c2ca71a00b', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'aaa40a101b3f58b1d99c482865f159c3ef6f6fd0' }, "Page Size: "), h("atui-select", { key: 'fd3875edf079c04a2f631a4d22f16af90c0dc504', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), h("atui-button", { key: '796a1cb76fbe61b3780d0f7bab94dced95add05b', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), h("atui-button", { key: '2c3303ab3f67f193f5338d219c00db82a1d2d503', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), h("span", { key: '0a0363ff992ca768004dbe37fc6ee98a6aa6c789' }, "Page ", this.current_page, " of ", this.num_pages), h("atui-button", { key: '8f0f8b5576defb27a52d78705a6021c1cf0a913a', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), h("atui-button", { key: '88b62983065f1cd3d1215a66a38cb95b81dceb5c', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

export { AtuiTablePagination as atui_table_pagination };
//# sourceMappingURL=atui-table-pagination.entry.js.map

//# sourceMappingURL=atui-table-pagination.entry.js.map