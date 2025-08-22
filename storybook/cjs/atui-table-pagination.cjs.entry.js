'use strict';

var index = require('./index-s6Ut5Yq6.js');

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
        return (index.h(index.Host, { key: '71b73ce7cae55b81329d9012e23ec65a66c6f031', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '4b24cbbc0c5d6ac2bb3b28412723f1a95ff36bff' }, "Page Size: "), index.h("atui-select", { key: '822069ee6f259dcadefc6b81944b457d0b0c5dc5', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiPageSizeChange.emit(parseInt(event.detail)) }), index.h("atui-button", { key: '2d1da5f458b08447d6a513112e7a8ebbb42e82ed', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), index.h("atui-button", { key: 'afad51d77f47c18d356c26a8b904de09ddc5daef', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), index.h("span", { key: '65f1b976c201e992ce8aea6e040a74abbb5c248b' }, "Page ", this.current_page, " of ", this.num_pages), index.h("atui-button", { key: '00f6fe1aaebf3af0d8b31b75d8afb69fc1e07b79', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), index.h("atui-button", { key: 'bb052b57d1564dc6f1fcad9b6679b8b1a5b7c3b5', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

exports.atui_table_pagination = AtuiTablePagination;
//# sourceMappingURL=atui-table-pagination.entry.cjs.js.map

//# sourceMappingURL=atui-table-pagination.cjs.entry.js.map