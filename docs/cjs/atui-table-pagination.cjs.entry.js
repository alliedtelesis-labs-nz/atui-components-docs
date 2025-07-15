'use strict';

var index = require('./index-BJDFmEHZ.js');

const AtuiTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        this.atuiChangeSize = index.createEvent(this, "atuiChangeSize", 7);
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
        return (index.h(index.Host, { key: '37d5c32aee4a239c57ef382800bc29014fdd4627', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'ef78bf41292095331d926c262d9c5e3d5fa283c4' }, "Page Size: "), index.h("atui-select", { key: '7facd6ff1fcba24699ad3ef15c232d670ea12b1b', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiChangeSize.emit(parseInt(event.detail)) }), index.h("atui-button", { key: '040f8aefa371b87c6b225a9026ec6aef2564fb40', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), index.h("atui-button", { key: 'e53bbacc85ff701b8b8e888132d91a5640ef47b2', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), index.h("span", { key: '1b77859daa2b8eac1477f0ee86ffb15b91744f27' }, "Page ", this.current_page, " of ", this.num_pages), index.h("atui-button", { key: 'c869f8d097f5752a5df134c8db7fbc00c4fd46f6', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), index.h("atui-button", { key: 'c379a823d2ff7c064bb4f85d6e3a916b34a828f8', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

exports.atui_table_pagination = AtuiTablePagination;
//# sourceMappingURL=atui-table-pagination.entry.cjs.js.map

//# sourceMappingURL=atui-table-pagination.cjs.entry.js.map