'use strict';

var index = require('./index-CA9vC8ae.js');

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
        return (index.h(index.Host, { key: 'c9ef4792f8b44740e8a6e98f7316ebb1a97a1d6d', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'bcaa2e90775baf33f4750dae3e6dd215acf8f8c2' }, "Page Size: "), index.h("at-select", { key: 'f1963d2ab5d2b91e619a2bf9c08c4b3b89fe5d51', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '687549c24c5535712536aaa32dfd8a317876aa89', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: '39f1a47c66c31c1f3a7196659f2317755e66a78e', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: 'e9bdd30b153153d2506de39fdf45be338bc2c2d3' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: 'f5374812428dacb4cbff67cb116cc9a4e68f86c1', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '1da27e60638d9179e4ab7da218bfe93b7da855e0', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_table_pagination = AtTablePagination;
//# sourceMappingURL=at-table-pagination.entry.cjs.js.map
