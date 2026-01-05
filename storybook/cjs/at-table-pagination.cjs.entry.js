'use strict';

var index = require('./index-COiLLAKF.js');

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
        return (index.h(index.Host, { key: '64977a0d6a1471eab6f017a7a9d0b2affbb207f4', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '8b692a35663b533a76b2d237efaae495951bdf9d' }, "Page Size: "), index.h("at-select", { key: 'fba4d88bbe2fbe5c8414ecf19386b8b431174203', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'c90daa21be8d79b86634490959f55bd9930d7696', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: 'fe2406d66a191deb4904fbcd0105ca4160e08f72', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: '4dc8b12e63113b9b0d6ba17371b2a41d08161f14' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '0c14dd3ec47f3d54b22656b109b5b2799ba309d1', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: 'cd14675a7a307a8be17bc490952ae147be6afd92', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
