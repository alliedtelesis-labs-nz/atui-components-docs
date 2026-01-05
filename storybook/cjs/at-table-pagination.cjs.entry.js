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
        return (index.h(index.Host, { key: 'e3a1067095110937de061c5bb73313f8ec66f99d', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '024f77bf44bac651cecdba6f16267f16a9396ffe' }, "Page Size: "), index.h("at-select", { key: '0cfef32cb0e80c89473bd0099419ae7ff5685dc5', options: this.page_size_options, value: `${this.page_size_options[0].value}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'fee7a39c78409457069c2c7ba1f3cd56a7c7c2e4', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: 'a5a2dbf758b82ffbcab60eb94063801a25fecb05', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: 'c257f7828a26279b4723827f3e7fe31084db6e24' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '8211dd8fcf9f440af79c34e40ae78a1401016eed', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '0a2fb249aaa989c305089f9dd18c29a23bc0534e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
