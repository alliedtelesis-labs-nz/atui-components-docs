'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiPageSizeChange = index.createEvent(this, "atuiPageSizeChange", 7);
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
        return (index.h(index.Host, { key: '6cd2945d2db36dfd327ca0c1b94e82c2ca71a00b', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'aaa40a101b3f58b1d99c482865f159c3ef6f6fd0' }, "Page Size: "), index.h("atui-select", { key: 'fd3875edf079c04a2f631a4d22f16af90c0dc504', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), index.h("atui-button", { key: '796a1cb76fbe61b3780d0f7bab94dced95add05b', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), index.h("atui-button", { key: '2c3303ab3f67f193f5338d219c00db82a1d2d503', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), index.h("span", { key: '0a0363ff992ca768004dbe37fc6ee98a6aa6c789' }, "Page ", this.current_page, " of ", this.num_pages), index.h("atui-button", { key: '8f0f8b5576defb27a52d78705a6021c1cf0a913a', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), index.h("atui-button", { key: '88b62983065f1cd3d1215a66a38cb95b81dceb5c', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

exports.atui_table_pagination = AtuiTablePagination;
//# sourceMappingURL=atui-table-pagination.entry.cjs.js.map

//# sourceMappingURL=atui-table-pagination.cjs.entry.js.map