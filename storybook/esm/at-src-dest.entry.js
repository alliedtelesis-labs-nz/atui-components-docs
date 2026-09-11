import { r as registerInstance, h, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: 'dee428ae602635c584474a674cebd2caaeeadb52', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (h("h4", { key: 'eaea8b450333e4023fc480aba8bf2ca69b7cfb29', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (h("div", { key: '71d06d7118f081ac855c94be118dd8758c7444d4' }, this.src_text && (h("p", { key: '6dba762cd86292961b8b461824a43f83d26e7fb0', class: "text-foreground font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (h("p", { key: 'cbcfd75458bf0717db2686dfdfa059201f370581', class: "text-secondary", "data-name": "src-subtitle" }, this.src_subtitle)))), h("div", { key: '37897168e584ee0c1e5e065cc7af9a9b4e3d2b7e', class: "fill-muted flex flex-row items-center gap-4" }, h("at-icon", { key: 'a3df83945621d070bbc1d74726d8a03c37bb8214', name: "arrow_left", size: "1.2857rem" }), h("at-icon", { key: '3c6d23186c999f96fa3a35617dfa1520b11195d2', name: "arrow_right", size: "1.2857rem" })), (this.dest_text || this.dest_subtitle) && (h("div", { key: '4467b6ea0436787bed4b5ed682c4877b9c45486f', class: "text-right" }, this.dest_text && (h("p", { key: 'fedaad443840708394fe172491812d8bc15dd822', class: "text-foreground font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (h("p", { key: 'e82e08b16573219dc4d971638edfc0fec7e94cbf', class: "text-secondary", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (h("h4", { key: '09c09f1e804c1cff47ca5afa19491899ba75d901', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

export { AtSrcDestComponent as at_src_dest };
