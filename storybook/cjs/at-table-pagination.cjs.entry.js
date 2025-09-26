'use strict';

var index = require('./index-i7hIKTeN.js');

const AtTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atPageSizeChange = index.createEvent(this, "atPageSizeChange", 7);
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
        return (index.h(index.Host, { key: '1a6997cb528a325b5eaaafe38935bd55c6f913ff', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '47332e26b06a97a8f41b2a9e459de8920ca8f1d5' }, "Page Size: "), index.h("at-select", { key: 'a4fe57aba41a2df7f75a989f3b38d18f087554f3', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'c37d7989bf8b6dcce5a939e0bf7d7afa786b5a89', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: '8e0bdbc5e4fb5aa3b63ec5177c03ae355ad60e5f', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: '1e5897f75009af31e52d4df647872ea20540309a' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '4fe7122039cb08d50dbaa07881b21591066eb7f7', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '707588cf6d5c95a3a7197de71ed2178ad2f81c1b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map

//# sourceMappingURL=at-table-pagination.cjs.entry.js.map