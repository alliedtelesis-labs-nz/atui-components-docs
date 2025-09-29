'use strict';

var index = require('./index-LVEefvKk.js');

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
        return (index.h(index.Host, { key: '1de0f0a6cdbf1a984b87be2da1fa4a8ce7d0757b', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '9c49d3e6b4d42f6537817fc6be4e6827febec4af' }, "Page Size: "), index.h("at-select", { key: '53656d41063c2ec0d533ff1db7127e1d4ebbe7a9', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'd3a391f61a5d1384e0d189775fd66b26755dcf76', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: '89d012ae7c600b6a1c3f7d811e06371166332856', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: 'fd1f841f3bdae7b3c7158c0688f9ab67888dc02a' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: 'e6b8c515e1db0430b3e6c479e3b54346b6358968', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: 'bff240d67a17719e7c2c262eae037ab48c902215', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
