'use strict';

var index = require('./index--r5sCsiV.js');

const AtSrcDestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Title displayed on the left
     */
    src_title;
    /**
     * Text displayed on the left
     */
    src_text;
    /**
     * Subtitle displayed on the left
     */
    src_subtitle;
    /**
     * Title displayed on the right
     */
    dest_title;
    /**
     * Text displayed on the right
     */
    dest_text;
    /**
     * Subtitle displayed on the right
     */
    dest_subtitle;
    /**
     * Aligns the content to the left or center of the container
     */
    align = 'left';
    render() {
        return (index.h(index.Host, { key: 'd10fbb0d72608ba858b0847cccf916a110467509', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '4e5d9ccde01df952a3c48596253ddac769672e15', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: '8020b75f458aad1304adda5215ef98b9b2080790' }, this.src_text && (index.h("p", { key: 'ad752f99385be42c9b55e6c81a224fb04f363b28', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '71b101d67692102819a5bb7d4eaccc200a9141cf', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: 'e2f4dd86a74935c246695f8fda048ee8d6b53350', class: "fill-muted flex flex-row items-center gap-4" }, index.h("at-icon", { key: 'a6a5b18e188f1c339a4e1580bdc09d6353a6e83d', name: "arrow_left", size: "1.2857rem" }), index.h("at-icon", { key: '4768fa4d848a4246116992f86744c2daee3ddeee', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: '88ff02c9ac958541b5c121f646dd19dba09f7dff', class: "text-right" }, this.dest_text && (index.h("p", { key: 'aa905fa267e2a0776d37064e466c9eab4e548053', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: '7a3c55ecb514c73e58df98c57245e8d20e5e2c61', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: '826c96594ccdd4f8fa2486b99463e14b7d6353aa', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
