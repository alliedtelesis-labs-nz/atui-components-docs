'use strict';

var index = require('./index-DGivrgtr.js');

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
        return (index.h(index.Host, { key: 'b6ec69de608324f24a0f7722c8c7acb2141cdfcd', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '4a12ba6a37522786e9c0bbc4a61ecb38eca0b26d' }, "Page Size: "), index.h("atui-select", { key: '4ee16bce4123e571654f9845089a0c7d9c84dfed', options: this.page_size_options, value: `${this.page_size_options[0]}`, clearable: false, onAtuiChange: (event) => this.atuiChangeSize.emit(parseInt(event.detail)) }), index.h("atui-button", { key: '24c488d9def2b7fac737baeb420a659726fa7dd6', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atuiChange.emit(1) }), index.h("atui-button", { key: '40e84e6dab961c88d71f9d9990b21ab9c7c03e06', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atuiChange.emit(this.current_page - 1) }), index.h("span", { key: '713ac607859f6008342417718468327637a608ba' }, "Page ", this.current_page, " of ", this.num_pages), index.h("atui-button", { key: '7005a6763d7e02a0ab293574a2d979ed033ad02b', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atuiChange.emit(this.current_page + 1) }), index.h("atui-button", { key: '86e94a23ac3093c89fc76b7e8e37c968119cd88e', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atuiChange.emit(this.num_pages) })));
    }
};

exports.atui_table_pagination = AtuiTablePagination;
//# sourceMappingURL=atui-table-pagination.entry.cjs.js.map

//# sourceMappingURL=atui-table-pagination.cjs.entry.js.map