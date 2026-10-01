import { r as registerInstance, h, H as Host, a as getElement, c as createEvent } from './index-j2eM3-GV.js';
import { f as fetchTranslations } from './translation-TgeIMQBw.js';
import { A as AvailableCells } from './index-Cr5pwqxy.js';
import { c as countFilterConditions, i as isFilterGroup, d as removeFilterCondition, b as flattenFilterConditions } from './filter-tree.util-CYRBwQ7z.js';

const atControlGroupCss = () => `at-control-group{display:inline-flex;justify-content:center}at-control-group.at-control-group--horizontal{flex-direction:row;align-items:stretch}at-control-group.at-control-group--horizontal>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:last-child){border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:first-child){border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:last-child)>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:last-child)>div{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:last-child)>div>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:last-child)>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>*:not(:first-child){margin-left:-1px}at-control-group.at-control-group--vertical{flex-direction:column}at-control-group.at-control-group--vertical>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:last-child){border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:first-child){border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:last-child)>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:last-child)>div{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:last-child)>div>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:last-child)>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>*:not(:first-child){margin-top:-1px}`;

const AtControlGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Layout direction of the grouped elements.
     */
    direction = 'horizontal';
    render() {
        return (h(Host, { key: '12f725c932a9a29ad92253e649b0bbf5c8f7e842', class: `at-control-group at-control-group--${this.direction}` }, h("slot", { key: 'd5d16cf37fb5727808c518da77e132c037ac63dc' })));
    }
};
AtControlGroup.style = atControlGroupCss();

const LINE_COLOR = 'var(--token-border-muted, currentColor)';
const TOP_FACE_COLOR = 'var(--token-surface-foreground, transparent)';
const CHART_LINE_PATH = 'M0,54.8C1.1,54.6 4.5,53.3 6.7,53.4C8.9,53.4 11.1,54.3 13.3,55.1C15.6,55.8 17.8,57.1 20,58C22.2,58.8 24.4,59.6 26.7,60.1C28.9,60.5 31.1,60.6 33.3,60.5C35.5,60.5 37.8,60 40,59.8C42.2,59.5 44.5,59.1 46.7,59.2C48.9,59.2 51.1,59.5 53.3,60.1C55.5,60.7 57.8,61.7 60,62.9C62.2,64 64.5,65.6 66.7,66.8C68.9,68.1 71.1,69.6 73.3,70.5C75.5,71.5 77.8,72.2 80,72.5C82.2,72.8 84.5,72.6 86.7,72.2C88.9,71.9 91.1,71.1 93.3,70.6C95.5,70 97.8,69.3 100,69.1C102.2,68.8 104.5,68.8 106.7,69.3C108.9,69.7 111.1,70.7 113.3,71.7C115.5,72.7 117.8,74.3 120,75.4C122.2,76.5 124.5,77.8 126.7,78.2C128.9,78.6 131.1,78.7 133.3,77.8C135.6,76.9 137.8,75.1 140,72.8C142.2,70.5 144.4,67.1 146.7,63.9C148.9,60.7 151.1,56.7 153.3,53.6C155.6,50.5 157.8,47.2 160,45.2C162.2,43.2 164.4,41.8 166.7,41.6C168.9,41.4 171.1,42.4 173.3,44.1C175.6,45.8 177.8,48.9 180,51.8C182.2,54.8 184.4,58.7 186.7,61.9C188.9,65 191.1,68.5 193.3,71C195.6,73.4 197.8,75.5 200,76.7C202.2,77.8 204.4,78.2 206.7,78.1C208.9,78.1 211.1,77.2 213.3,76.4C215.6,75.6 217.8,74.4 220,73.5C222.2,72.7 224.4,71.8 226.7,71.4C228.9,71 231.1,70.9 233.3,71C235.6,71 237.8,71.5 240,71.7C242.2,71.9 244.4,72.3 246.7,72.3C248.9,72.2 251.1,72 253.3,71.4C255.6,70.8 257.8,69.8 260,68.6C262.2,67.5 264.4,65.9 266.7,64.6C268.9,63.4 271.1,61.9 273.3,61C275.6,60 277.8,59.3 280,59C282.2,58.7 284.4,58.9 286.7,59.2C288.9,59.5 291.1,60.4 293.3,60.9C295.6,61.4 297.8,62.2 300,62.4C302.2,62.6 304.4,62.6 306.7,62.2C308.9,61.8 311.1,60.8 313.3,59.8C315.6,58.8 317.8,57.1 320,56.1C322.2,55 324.4,53.7 326.7,53.3C328.9,52.9 331.1,52.8 333.3,53.7C335.6,54.6 337.8,56.4 340,58.7C342.2,61 344.4,64.3 346.7,67.5C348.9,70.8 351.1,74.8 353.3,77.9C355.6,81 357.8,84.3 360,86.3C362.2,88.3 364.4,89.7 366.7,89.9C368.9,90 371.1,89 373.3,87.3C375.6,85.6 377.8,82.6 380,79.7C382.2,76.7 384.4,72.8 386.7,69.6C388.9,66.4 391.1,63 393.3,60.5C395.6,58 398.9,55.8 400,54.8';
const CHART_AREA_PATH = `${CHART_LINE_PATH} L400,173 L0,173 Z`;
const NO_DATA_PATH_1 = 'M5.25 153.732c-3.827-2.209-3.827-5.791 0-8L68.004 109.5c3.827-2.209 10.03-2.209 13.857 0l62.755 36.232c3.827 2.209 3.827 5.791 0 8l-62.755 36.232c-3.827 2.209-10.03 2.209-13.857 0z';
const NO_DATA_PATH_2 = 'M10.795 131.5c-4.305-2.485-4.305-6.515 0-9l56.344-32.53c4.305-2.486 11.284-2.486 15.589 0l56.344 32.53c4.305 2.485 4.305 6.515 0 9l-56.344 32.531c-4.305 2.485-11.284 2.485-15.589 0z';
const NO_DATA_PATH_3 = 'M77.704 86.687v75.131L143 124.328V49.035zM149 126.066a3 3 0 0 1-1.505 2.601l-71.297 40.935A3 3 0 0 1 71.704 167V84.954c0-1.072.573-2.064 1.502-2.6l66.773-38.504L74.703 6.457 4.494 46.714a3 3 0 1 1-2.985-5.205L73.211.398a3 3 0 0 1 2.984-.001l71.297 40.842A3 3 0 0 1 149 43.842z';
const NO_DATA_PATH_4 = 'M76.356 82.595a3 3 0 1 1-2.984 5.205L6 49.178v75.736l69.974 39.473a3 3 0 0 1-2.947 5.226l-71.5-40.334L0 126.667V44l4.493-2.602z';
const NO_DATA_PATH_5 = 'M10.516 118.662a3.001 3.001 0 0 1 3.016 5.188l-9.024 5.244-3.015-5.188zm124.039.387a3 3 0 0 1 4.102-1.086l8.851 5.145-3.015 5.187-8.852-5.145a3 3 0 0 1-1.086-4.101M46.61 97.684a3 3 0 0 1 3.015 5.187L31.58 113.36a3 3 0 0 1-3.016-5.187zm52.539.786a3 3 0 0 1 4.101-1.086l17.703 10.289a3 3 0 1 1-3.015 5.187l-17.703-10.289a3 3 0 0 1-1.086-4.101M72.188 74.288a3 3 0 1 1 6 0v8.53l7.36 4.277a3 3 0 0 1-3.016 5.187l-7.345-4.27-7.515 4.37a3 3 0 0 1-3.015-5.188l7.53-4.377zm0-20.51V33.266a3 3 0 1 1 6 0v20.51a3 3 0 0 1-6 0m0-41.022V2.5h6v10.256a3 3 0 0 1-6 0';
function renderChartNoDataImage(gradientId) {
    return (h("svg", { "aria-hidden": "true", viewBox: "0 0 400 173", preserveAspectRatio: "none", class: "absolute inset-0 block h-full w-full" }, h("defs", null, h("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1" }, h("stop", { offset: "0%", "stop-color": LINE_COLOR, "stop-opacity": "0.1" }), h("stop", { offset: "100%", "stop-color": LINE_COLOR, "stop-opacity": "0" }))), h("path", { d: CHART_AREA_PATH, fill: `url(#${gradientId})`, stroke: "none" }), h("path", { d: CHART_LINE_PATH, fill: "none", stroke: LINE_COLOR, "stroke-opacity": "0.6", "stroke-width": "1", "vector-effect": "non-scaling-stroke" })));
}
const IMAGE_SIZE_CLASSES = {
    xs: 'w-32',
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
};
function renderNoDataImage(size) {
    return (h("svg", { "aria-hidden": "true", viewBox: "0 0 149 192", fill: "none", class: `h-auto ${IMAGE_SIZE_CLASSES[size]}` }, h("path", { d: NO_DATA_PATH_1, fill: LINE_COLOR, opacity: "0.24" }), h("path", { d: NO_DATA_PATH_2, fill: TOP_FACE_COLOR }), h("path", { d: NO_DATA_PATH_3, fill: LINE_COLOR }), h("path", { d: NO_DATA_PATH_4, fill: LINE_COLOR }), h("path", { d: NO_DATA_PATH_5, fill: LINE_COLOR, opacity: ".24" })));
}
const NO_RESULTS_LINE_PATHS = [
    'M6 17H14V19H6z',
    'M2 13H10V15H2z',
    'M6 9H14V11H6z',
];
const NO_RESULTS_DOTS = [
    { cx: '3', cy: '18' },
    { cx: '13', cy: '14' },
    { cx: '3', cy: '10' },
];
const NO_RESULTS_GLASS_PATH = 'M30,28.6l-7.4-7.4c1.5-2,2.4-4.5,2.4-7.2c0-6.6-5.4-12-12-12C9.7,2,6.6,3.3,4.3,5.8l1.5,1.4C7.6,5.1,10.2,4,13,4\tc5.5,0,10,4.5,10,10s-4.5,10-10,10c-3,0-5.8-1.3-7.7-3.6l-1.5,1.3C6,24.4,9.4,26,13,26c3.2,0,6.1-1.3,8.3-3.3l7.3,7.3L30,28.6z';
function renderNoResultsImage(size) {
    return (h("svg", { "aria-hidden": "true", viewBox: "0 0 32 32", fill: "none", class: `h-auto ${IMAGE_SIZE_CLASSES[size]}` }, NO_RESULTS_LINE_PATHS.map((path) => (h("path", { d: path, fill: LINE_COLOR }))), NO_RESULTS_DOTS.map((dot) => (h("circle", { cx: dot.cx, cy: dot.cy, r: "1", fill: LINE_COLOR }))), h("path", { d: NO_RESULTS_GLASS_PATH, fill: LINE_COLOR })));
}
const NO_ACCESS_PATH = 'M23,23v3h-14.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5h.5v-2h-.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h14.5v3h8v-8h-8ZM29,29h-4v-4h4v4ZM23.5,4h-14.5V1H1v8h8v-3h14.5c2.5,0,4.5,2,4.5,4.5s-2,4.5-4.5,4.5h-.5v2h.5c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5ZM7,7H3V3h4v4ZM20,15h-1v-2c0-1.7-1.3-3-3-3s-3,1.3-3,3v2h-1c-.6,0-1,.4-1,1v5c0,.6.4,1,1,1h8c.6,0,1-.4,1-1v-5c0-.6-.4-1-1-1ZM15,13c0-.6.4-1,1-1s1,.4,1,1v2h-2v-2ZM19,20h-6v-3h6v3Z';
function renderNoAccessImage(size) {
    return (h("svg", { "aria-hidden": "true", viewBox: "0 0 32 32", fill: "none", class: `h-auto ${IMAGE_SIZE_CLASSES[size]}` }, h("path", { d: NO_ACCESS_PATH, fill: LINE_COLOR })));
}

const placeholderVariants = {
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
    /**
     * Title to be displayed below the icon
     */
    placeholder_title;
    /**
     * Content to be displayed below the title
     */
    content;
    /**
     * Will show a loading spinner when set
     */
    show_loading_spinner;
    /**
     * Built-in illustration and empty-state situation. Prefer this over
     * slotting your own icon so empty states stay consistent across apps.
     * `no-data` for a collection that is genuinely empty (pair with a create
     * action), `no-results` when a search or filter matched nothing,
     * `no-access` when the emptiness is permission or scope caused,
     * `chart-no-data` for an empty chart surface. A failed load is not a
     * placeholder — use `at-message` with a retry action.
     */
    type = 'none';
    get el() { return getElement(this); }
    gradientId = `placeholder-${Math.random().toString(36).substring(2, 11)}`;
    componentDidRender() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    renderImage() {
        switch (this.type) {
            case 'chart-no-data':
                return renderChartNoDataImage(this.gradientId);
            case 'no-data':
                return renderNoDataImage(this.size);
            case 'no-results':
                return renderNoResultsImage(this.size);
            case 'no-access':
                return renderNoAccessImage(this.size);
            default:
                return null;
        }
    }
    render() {
        return (h(Host, { key: '9dec9acbe9aed6119f960dfbddd37468c79fa089', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder relative flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '61b05eb7e73b71184e4d0f589c5ad8031502e783', class: "relative z-10 text-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '4a67058ee95bbfb646862e89253002b3a4d62720', name: "icon" })), this.type !== 'none' && (h("span", { key: '9d684073556f35757770f474ffefa0ebb7904d3b', class: `z-0 flex justify-center fill-[var(--token-border-muted)] ${this.type === 'chart-no-data' ? 'absolute inset-0' : ''}`, "data-name": "placeholder-image" }, this.renderImage())), h("div", { key: 'b4cc3b47008e1c64cbffc0a1c641ec3ddf5664c2', class: `border-radius-sm relative z-10 flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '9eece4ab2b90fc95dde52d786b0ff3c28b78fbdb', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '8b620cd58346b126c39862a7e777dce0dd757d5e', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'd4d97a5103e53b9f6004d7a44c327925c1c994c8', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '2f3d24e9ac45323903dc0b5f424c48ca817ba047', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'a99779bd5cf94836ce3c3af8ddc405f925c2d4d0' }))));
    }
};

const AtReloadButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiReload = createEvent(this, "atuiReload", 7);
    }
    get el() { return getElement(this); }
    translations;
    /**
     * Shows an indicator on the button when the underlying data has changed
     * since it was last loaded. This component does not detect changes
     * itself — the consumer sets this to true once it knows of an update
     * (e.g. from a websocket or poll) and back to false once the user
     * reloads.
     */
    has_updates = false;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (h("at-tooltip", { key: 'eca72807fb9f84c043f31b011948f72de6e524f8', position: "top" }, h("div", { key: '6557918c236765498710725c36f9066919ec14a4', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: 'fcd9498d5e3f766d076b69c15e2f130e47937426', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), h("at-button", { key: 'a0c1c6942e06a6cc8b5e6be9da9187c8229c5b97', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: '718e8b04f47e0c8a9f4b1825511a2ab2c1841335', slot: "icon", name: "retry" }))), h("span", { key: '9af77a6197097d8cefc62784023201340011022c' }, this.has_updates
            ? this.translations.ATUI.TABLE.RELOAD_UPDATES_AVAILABLE
            : this.translations.ATUI.TABLE.RELOAD)));
    }
};

const AtSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atChange", 7);
    }
    /**
     * Label text above the search bar.
     */
    label;
    /**
     * Hint text for the input, appears below the search bar.
     */
    hint_text;
    /**
     * Tooltip description, shown as an info icon at the right of the search box.
     */
    info_text;
    /**
     * Placeholder text inside the search component.
     */
    placeholder;
    /**
     * String content of the search.
     */
    model;
    searchEl;
    inputId = `search-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when the input is changed. Used by atui-table.
     */
    atuiChange;
    onChangeFn() {
        this.atuiChange.emit(this.searchEl.value);
        this.model = this.searchEl.value;
    }
    clearFn() {
        this.searchEl.value = '';
        this.atuiChange.emit(this.searchEl.value);
        this.model = '';
        this.searchEl.focus();
    }
    render() {
        return (h(Host, { key: '6f025b660866f357887cf1146c782038ae3aa1a5' }, this.label && (h("at-form-label", { key: '7de492a118d90b7f60a03528a22773938b2845e5', label: this.label, for: this.inputId })), h("div", { key: 'eb52fabf6eca405d5d0fdc7d29a736778e1a6400', class: "border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus-within:z-10 focus-within:ring" }, h("at-icon", { key: 'f5894251c8639c9eb1e8edd037a4e998d01d6d08', class: "fill-foreground px-8", name: "search" }), h("input", { key: '21333c7904e193c471269d4fb87776445d08b44e', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'c6795e3a6be05354a36453a5e240980ee218fdda', class: `mt-2 transition-[opacity] duration-150 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '8cff4d2c14a451bde1b86836dae0178e4ebb21ee', size: "sm", type: "secondaryText", "aria-label": "Clear search", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: '60841e73e7ae172b8c57e7da57c7db11ade2330d', slot: "icon", name: "cancel" }))), this.info_text && (h("div", { key: 'ec4dfde39da4443edf6294ed04b0051870ad3ff7', class: "flex items-center pr-8", "data-name": "search-info" }, h("at-tooltip", { key: '05b81a5b539f87af2412535fa8d178024d58e295', position: "top" }, h("at-icon", { key: '67086a070422213d884434383281ac1f90a2a1a1', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '8efd00ea480ac3508920ceabe62f6ef6de300ac8' }, this.info_text))))), this.hint_text && (h("span", { key: 'f7ba3fb2be420d912d640169b8020046f1e90c99', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv = true;
    /**
     * Offers the PDF export option in the export menu. On by default.
     */
    show_pdf = true;
    get el() { return getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        if (!this.show_csv && !this.show_pdf) {
            return null;
        }
        return (h("at-menu", { width: "fit-content", position: "left", align: "end" }, h("at-tooltip", { slot: "menu-trigger", position: "top" }, h("at-button", { slot: "tooltip-trigger", type: "secondaryText" }, h("at-icon", { slot: "icon", name: "download" })), h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", null, this.show_csv && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), this.show_pdf && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
    }
};

const INTERACTION_ONLY_CELL_RENDERERS = [
    AvailableCells.CHECKBOX_CELL,
    AvailableCells.MENU_CELL,
    AvailableCells.MULTI_BTN_CELL,
];
const AtTableFilterMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently active filters, used to seed the form when the menu is opened
     */
    filters;
    translations;
    get el() { return getElement(this); }
    menuEl;
    /**
     * Emits the active filters when the user applies a search
     */
    atChange;
    /**
     * Opens the filter menu, showing the filter form seeded with the active filters.
     */
    async openMenu() {
        await this.menuEl?.openMenu();
    }
    get filterConfig() {
        return (this.col_defs || [])
            .filter((colDef) => this.isFilterableColumn(colDef))
            .map((colDef) => {
            const filterOptions = this.convertDropdownKeysToSelectOptions(colDef);
            return {
                id: colDef.field ?? '',
                label: colDef.headerName ?? colDef.field ?? '',
                value: '',
                ...(filterOptions && { filter_options: filterOptions }),
            };
        });
    }
    isFilterableColumn(colDef) {
        return (!!colDef.field &&
            colDef.filterOptions?.exclude !== true &&
            !INTERACTION_ONLY_CELL_RENDERERS.includes(colDef.cellRenderer));
    }
    convertDropdownKeysToSelectOptions(column) {
        if (column?.filterOptions?.dropdownKeys) {
            return column.filterOptions.dropdownKeys.map((key) => ({
                value: key.content,
                label: key.translationKey,
            }));
        }
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    handleSearch = async (event) => {
        this.atChange.emit(event.detail);
        await this.menuEl?.closeMenu();
    };
    handleCancel = async () => {
        await this.menuEl?.closeMenu();
    };
    render() {
        return (h(Host, { key: '916bdd018899c8753bcb86ec6fbeae7088bcabb2' }, h("at-menu", { key: '3fdfe3e859261c29199ff6420fddfdd4fb9c527f', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("div", { key: 'c26ecb931d193efdaf9ef1d967078b71b0017271', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            countFilterConditions(this.filters) > 0 && (h("at-badge", { key: '2eca5db05ce3c86a106ce2d80602048fa65ce53a', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: countFilterConditions(this.filters).toString() })), h("at-button", { key: '6b8f299f4f996deadeb8e738511ec29ee8b7d714', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, h("at-icon", { key: '047a180987a6972b9e0f7d0cb0a1d2c7a87b7b13', slot: "icon", name: "edit_filters" }))), h("at-tooltip", { key: 'b7e33e6f8d54a36f8cea58bcea5e2a54af151885', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), h("at-filter-form", { key: 'a5baf52a2b32aab095a61d6ea6731f45df9c23d7', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
    }
};

const AtTableFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atFilterClick = createEvent(this, "atFilterClick", 7);
    }
    /**
     * The active filters to display as a removable chip list, grouped with And/Or operators and nested subgroups.
     */
    filters;
    /**
     * Emits the remaining filters whenever a chip is removed or all are cleared.
     */
    atChange;
    /**
     * Emits the clicked filter condition when a chip is clicked (excluding its remove button).
     */
    atFilterClick;
    chipLabel(filter) {
        return `${filter.label ?? filter.id} ${filter.operator ?? ''} ${filter.value}`
            .replace(/\s+/g, ' ')
            .trim();
    }
    groupBackground(depth) {
        return depth % 2 === 0 ? 'bg-surface-0' : 'bg-surface-1';
    }
    hasValidCondition(node) {
        return isFilterGroup(node)
            ? node.children.some((child) => this.hasValidCondition(child))
            : !!(node.id && node.value);
    }
    removeCondition(condition) {
        const filters = this.filters;
        removeFilterCondition(filters, condition);
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    }
    clearAll = () => {
        const filters = this.filters;
        flattenFilterConditions(filters)
            .filter((condition) => condition.id && condition.value)
            .forEach((condition) => removeFilterCondition(filters, condition));
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    };
    renderConditionChip(filter) {
        const label = this.chipLabel(filter);
        return (h("at-badge", { class: "border-active-accent flex cursor-pointer items-center gap-4 text-center", rounded: true, "data-name": "filter-chip", label: label, role: "button", tabindex: "0", "aria-label": `Edit ${label}`, onClick: () => this.atFilterClick.emit(filter), onKeyDown: (event) => {
                if (event.target !== event.currentTarget)
                    return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.atFilterClick.emit(filter);
                }
            } }, h("button", { type: "button", class: "text-foreground/40 hover:text-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out", "data-name": "filter-chip-remove", "aria-label": `Remove ${label}`, onClick: (event) => {
                event.stopPropagation();
                this.removeCondition(filter);
            } }, h("at-icon", { name: "cancel" }))));
    }
    renderGroupChips(group, depth = 0) {
        const children = group.children.filter((child) => this.hasValidCondition(child));
        const bgClass = this.groupBackground(depth);
        return children.flatMap((child, index) => {
            const items = [];
            if (index > 0) {
                items.push(h("span", { class: "text-muted text-xs font-semibold", "data-name": "filter-chip-operator" }, group.logical_operator));
            }
            items.push(isFilterGroup(child) ? (h("span", { class: `flex items-center gap-4 rounded-full p-2 ${bgClass}`, "data-name": "filter-chip-group" }, this.renderGroupChips(child, depth + 1))) : (this.renderConditionChip(child)));
            return items;
        });
    }
    render() {
        if (!this.filters || !this.hasValidCondition(this.filters)) {
            return h(Host, null);
        }
        const conditionCount = flattenFilterConditions(this.filters).filter((condition) => condition.id && condition.value).length;
        return (h(Host, { class: "flex items-start gap-8" }, h("div", { class: "flex h-full flex-wrap items-center gap-4", "data-name": "filter-chip-list" }, this.renderGroupChips(this.filters), conditionCount > 1 && (h("at-button", { size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => this.clearAll() }, h("at-icon", { slot: "icon", name: "backspace" }))))));
    }
};

const DEFAULT_PAGE_SIZE_OPTIONS = [
    { value: '5' },
    { value: '10' },
    { value: '20' },
    { value: '50' },
    { value: '100' },
];
const AtTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
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
     * Options provided in dropdown for page sizes. When omitted a standard set
     * is used.
     */
    page_size_options;
    /**
     * The number of table rows displayed per page
     */
    page_size = 20;
    /**
     * The options actually rendered in the selector: the provided (or default)
     * options, with the active `page_size` guaranteed to be present so the
     * selected value always matches the number of rows loaded — even when it
     * isn't one of the listed steps.
     */
    get resolvedPageSizeOptions() {
        const base = this.page_size_options && this.page_size_options.length > 0
            ? this.page_size_options
            : DEFAULT_PAGE_SIZE_OPTIONS;
        return base.some((option) => Number(option.value) === this.page_size)
            ? base
            : [...base, { value: String(this.page_size) }].sort((a, b) => Number(a.value) - Number(b.value));
    }
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '58d373505cb64d6aa4a3b6565bd06b043d22bb5b', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '1c027f2a4fb18f4116ec8b573dc7e30482d4bbdb' }, "Page Size: "), h("at-select", { key: 'e884d6b2fd27ad71c83cdf2c9884d6a77513de3c', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'eb8370ea37e2290f65af38b43fc97319f01e06f7', "data-name": "pagination-first", "aria-label": "First page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '8c49fad72cb49aa7d928e854cd3fa3efff0f4665', slot: "icon", name: "first_page" })), h("at-button", { key: '9c87e7195301133c89e0997f91c887b92efdee8e', "data-name": "pagination-previous", "aria-label": "Previous page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: '3c06f62396549ac567f07e4b9e3290e96665e10e', slot: "icon", name: "chevron_left" })), h("span", { key: 'd2db9bdac0c0864c16eb7e6bfd184c2a00a1f2df' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '1cc9667de041c6405b7ee3acdb6c5baf8350d49b', "data-name": "pagination-next", "aria-label": "Next page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '078e752780d9d982b9af061d86a1a2b5801ae311', slot: "icon", name: "chevron_right" })), h("at-button", { key: '7d233c73628401b0a7f2c16d4ff53c1d386b6d8f', "data-name": "pagination-last", "aria-label": "Last page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: '3e63d8ef6202ff30a588956c4c93007ae29afd9d', slot: "icon", name: "last_page" }))));
    }
};

export { AtControlGroup as at_control_group, AtPlaceholderComponent as at_placeholder, AtReloadButton as at_reload_button, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
