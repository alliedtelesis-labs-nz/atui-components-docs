import { r as registerInstance, h, H as Host } from './index-C56p-u4D.js';

const AtSrcDestComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'e73ebb00a602c3f36a584b1476121d4cce5438bb', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'a0fec808662fba3ee0ba956ddb21f4bc8e745c04', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '957a99cd676b093d03512b0cb76112e6da34a630' }, this.src_text && (h("p", { key: 'df942cb4671e5a8470b0139298cc590182eba2fa', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: '569471e129f5965331f2e94f8f5610f4ec164751', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '3dac1fcfd3d19d508c881c031f537ab9215ede25', class: "text-muted flex flex-row items-center gap-4" }, h("at-icon", { key: 'd92169b7988e6a8abe77f5488bfabdc022028c6b', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '5c63fe4004fa236e6fc5ffe6d2ead5c60fe67616', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: 'c27d96aeb9a6a94d5e6b954c88aac0b29e963cca', class: "text-right" }, this.dest_text && (h("p", { key: '073ffd8cde0e57848750350b8fc5a86fdd132477', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: '047e8c71580b72dd0e005784d319205ad607c587', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '2eaff1f6ae74d76d1d78ac9958a28fce8890c038', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
