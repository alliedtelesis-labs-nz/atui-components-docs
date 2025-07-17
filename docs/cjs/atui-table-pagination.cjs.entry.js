'use strict';

var index = require('./index-BJDFmEHZ.js');

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
        return (index.h(index.Host, { key: '69362ed8725ac2bced80e9feb1248db5589b5cfb', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '3f7bd3d44cba53907fe056f82079ae61f3333fd7' }, "Page Size: "), index.h("atui-select", { key: '9ef2f97eacab70d7eef2af05ffd4dd34eb0ab569', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), index.h("atui-button", { key: '823de38b61d846e959dca4446fd3f52318a4a6fe', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), index.h("atui-button", { key: '9283c5cfb970a062dc197a616ddfabfcf4809522', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), index.h("span", { key: '479784163f6ebf677e61047c69f57f7e8cd8b4d8' }, "Page ", this.current_page, " of ", this.num_pages), index.h("atui-button", { key: 'db80eb40e10973b24eb32116c3d7de22d85c65c8', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), index.h("atui-button", { key: '69d0e5b0ecbb9e8f7fd48437d5646f402b2a9d53', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

exports.atui_table_pagination = AtuiTablePagination;
//# sourceMappingURL=atui-table-pagination.entry.cjs.js.map

//# sourceMappingURL=atui-table-pagination.cjs.entry.js.map