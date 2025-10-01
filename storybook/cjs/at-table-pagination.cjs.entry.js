'use strict';

var index = require('./index-d67_TXqR.js');

const AtTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atPageSizeChange = index.createEvent(this, "atPageSizeChange", 7);
    }
    /**
     * Current page number
     */
    current_page = 1;
    /**
     * Total number of pages
     */
    num_pages = 1;
    /**
     * Options provided in dropdown for page sizes.
     */
    page_size_options = [
        { value: '5' },
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
    ];
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (index.h(index.Host, { key: '7493b744af3bae2557cd8b239c1103efa5a85de6', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'e5cacc7e033142710b4002ea6428de756a764286' }, "Page Size: "), index.h("at-select", { key: '83b835cc0958daf728ec6b15fa4297ace41d0b2c', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '41c7f4456f12c147285291f918b1f96d113b6d94', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: 'd78f89c7f2013fbb0af63a6cf89f13447f2bdaa8', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: 'c30eaefd23094b430567ff5a5753a5a2f7a64f2a' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '2968df6ccd4bee0d71707128c41f0733030e71f0', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: 'c479c9869c803acf792433ea54d52306920f5782', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
