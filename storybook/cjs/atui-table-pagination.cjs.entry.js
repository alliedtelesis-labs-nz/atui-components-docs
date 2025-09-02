'use strict';

var index = require('./index-43B6Ydvl.js');

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
        return (index.h(index.Host, { key: '54a7ee81a50f3aeda36fff297feaa06b0a7a8745', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '3f8403473a7f1b7ad0e9ca577224c14573c7c4a2' }, "Page Size: "), index.h("atui-select", { key: '321a8cb8e933374328ec699eec585d6ddede6613', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), index.h("atui-button", { key: '6b6d322784809269dc779b05b86a3a5a5f5b78ad', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), index.h("atui-button", { key: 'f6bc452a6e18a2e9ff7346be0621277af387e702', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), index.h("span", { key: '97a3e60b3e7f9d89f90df0b1e0242ccdeac00e54' }, "Page ", this.current_page, " of ", this.num_pages), index.h("atui-button", { key: 'ac2ef9e2327746f23ec37a86d3d50b007fceea8e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), index.h("atui-button", { key: '39c965362de829b63d601953f80bfc6c8027209b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

exports.atui_table_pagination = AtuiTablePagination;
//# sourceMappingURL=atui-table-pagination.entry.cjs.js.map

//# sourceMappingURL=atui-table-pagination.cjs.entry.js.map