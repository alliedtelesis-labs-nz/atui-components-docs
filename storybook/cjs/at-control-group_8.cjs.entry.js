'use strict';

var index = require('./index-V7Urjg2R.js');
var translation = require('./translation-NP6A4XKu.js');
var index$1 = require('./index-BwjM_pke.js');
var filterTree_util = require('./filter-tree.util-DfYwq3Yg.js');

const atControlGroupCss = () => `at-control-group{display:inline-flex;justify-content:center}at-control-group.at-control-group--horizontal{flex-direction:row;align-items:stretch}at-control-group.at-control-group--horizontal>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:last-child){border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:first-child){border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:last-child)>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:last-child)>div{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:last-child)>div>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:last-child)>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>*:not(:first-child){margin-left:-1px}at-control-group.at-control-group--vertical{flex-direction:column}at-control-group.at-control-group--vertical>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:last-child){border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:first-child){border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:last-child)>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:last-child)>div{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:last-child)>div>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:last-child)>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>*:not(:first-child){margin-top:-1px}`;

const AtControlGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Layout direction of the grouped elements.
     */
    direction = 'horizontal';
    render() {
        return (index.h(index.Host, { key: '982d17c6c3f923d99373561fb9c54c09d1cbd818', class: `at-control-group at-control-group--${this.direction}` }, index.h("slot", { key: 'fc7c503cac1cdb587d00baa2429588b7d2d6b4e9' })));
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
    return (index.h("svg", { "aria-hidden": "true", viewBox: "0 0 400 173", preserveAspectRatio: "none", class: "absolute inset-0 block h-full w-full" }, index.h("defs", null, index.h("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1" }, index.h("stop", { offset: "0%", "stop-color": LINE_COLOR, "stop-opacity": "0.1" }), index.h("stop", { offset: "100%", "stop-color": LINE_COLOR, "stop-opacity": "0" }))), index.h("path", { d: CHART_AREA_PATH, fill: `url(#${gradientId})`, stroke: "none" }), index.h("path", { d: CHART_LINE_PATH, fill: "none", stroke: LINE_COLOR, "stroke-opacity": "0.6", "stroke-width": "1", "vector-effect": "non-scaling-stroke" })));
}
const IMAGE_SIZE_CLASSES = {
    xs: 'w-32',
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
};
function renderNoDataImage(size) {
    return (index.h("svg", { "aria-hidden": "true", viewBox: "0 0 149 192", fill: "none", class: `h-auto ${IMAGE_SIZE_CLASSES[size]}` }, index.h("path", { d: NO_DATA_PATH_1, fill: LINE_COLOR, opacity: "0.24" }), index.h("path", { d: NO_DATA_PATH_2, fill: TOP_FACE_COLOR }), index.h("path", { d: NO_DATA_PATH_3, fill: LINE_COLOR }), index.h("path", { d: NO_DATA_PATH_4, fill: LINE_COLOR }), index.h("path", { d: NO_DATA_PATH_5, fill: LINE_COLOR, opacity: ".24" })));
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
    return (index.h("svg", { "aria-hidden": "true", viewBox: "0 0 32 32", fill: "none", class: `h-auto ${IMAGE_SIZE_CLASSES[size]}` }, NO_RESULTS_LINE_PATHS.map((path) => (index.h("path", { d: path, fill: LINE_COLOR }))), NO_RESULTS_DOTS.map((dot) => (index.h("circle", { cx: dot.cx, cy: dot.cy, r: "1", fill: LINE_COLOR }))), index.h("path", { d: NO_RESULTS_GLASS_PATH, fill: LINE_COLOR })));
}
const NO_ACCESS_PATH = 'M23,23v3h-14.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5h.5v-2h-.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h14.5v3h8v-8h-8ZM29,29h-4v-4h4v4ZM23.5,4h-14.5V1H1v8h8v-3h14.5c2.5,0,4.5,2,4.5,4.5s-2,4.5-4.5,4.5h-.5v2h.5c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5ZM7,7H3V3h4v4ZM20,15h-1v-2c0-1.7-1.3-3-3-3s-3,1.3-3,3v2h-1c-.6,0-1,.4-1,1v5c0,.6.4,1,1,1h8c.6,0,1-.4,1-1v-5c0-.6-.4-1-1-1ZM15,13c0-.6.4-1,1-1s1,.4,1,1v2h-2v-2ZM19,20h-6v-3h6v3Z';
function renderNoAccessImage(size) {
    return (index.h("svg", { "aria-hidden": "true", viewBox: "0 0 32 32", fill: "none", class: `h-auto ${IMAGE_SIZE_CLASSES[size]}` }, index.h("path", { d: NO_ACCESS_PATH, fill: LINE_COLOR })));
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
        index.registerInstance(this, hostRef);
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
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '7a2ca1f2f275ce0c07afd27c55aacb2ae7940b94', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder relative flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '6225a87883740f103196558537463e64afee4897', class: "relative z-10 text-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '6768cc22b8744e58000306bc4a46fdbc30378759', name: "icon" })), this.type !== 'none' && (index.h("span", { key: '256c1a8ddd84d1dff32682ecf8f2ef42acaca3cf', class: `z-0 flex justify-center fill-[var(--token-border-muted)] ${this.type === 'chart-no-data' ? 'absolute inset-0' : ''}`, "data-name": "placeholder-image" }, this.renderImage())), index.h("div", { key: 'c1e3f3c96b9e9ca0279373a8ae279370baddb8f5', class: `border-radius-sm relative z-10 flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'ce4f103a423a4b2e05ce954a68f4fed97503fee6', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '5129f68ce7cb41989d1abe1923da2a608829064b', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '72facf43d62fa37d8cdf74bd9502a68772521176', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '1762c66931df7acd7f3a8cd47368ca70339861fd', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'ad2a1ae174d2c7d131129e6f1a0c19bbcb99c3bb' }))));
    }
};

const AtReloadButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiReload = index.createEvent(this, "atuiReload", 7);
    }
    get el() { return index.getElement(this); }
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
        this.translations = await translation.fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (index.h("at-tooltip", { key: '37f2a3b202b93211a6267f6d97381ef570412349', position: "top" }, index.h("div", { key: '0b84dc1025289bede457859403e6902e93f79699', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (index.h("span", { key: 'fa8cd0270812798659578fa94c33791953e9243e', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), index.h("at-button", { key: '0462b649d9c9cab3837d6c1497695a4277b7ae9a', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, index.h("at-icon", { key: '82a29e3de988a4502f99a9d74b7de9fb5d8f0cb6', slot: "icon", name: "retry" }))), index.h("span", { key: '352ca1d3880bb8cc3548a1020b66d06b8e5d93f0' }, this.has_updates
            ? this.translations.ATUI.TABLE.RELOAD_UPDATES_AVAILABLE
            : this.translations.ATUI.TABLE.RELOAD)));
    }
};

const AtSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atChange", 7);
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
        return (index.h(index.Host, { key: 'f3fc47b9e1d013a5efbcb7ad903c8c07e7b8f659' }, this.label && (index.h("at-form-label", { key: '0b795faa4baf582f48f3c0b5a247d13b7e4cfc9d', label: this.label, for: this.inputId })), index.h("div", { key: '937214c907e43b3e30f7335818d4d90c451437f1', class: "border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus-within:z-10 focus-within:ring" }, index.h("at-icon", { key: '98fc53fd95dd68f78d4667b0b64ae7308b73b310', class: "fill-foreground px-8", name: "search" }), index.h("input", { key: '81c5aa1341e2f233f1f31c418bbb2129c0d52798', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '0c692a0fcf884a318b91a4ee780f2f8ab20c8fa0', class: `mt-2 transition-[opacity] duration-150 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '9ad93c8aad3a689198084f716c213ca7af68cfcb', size: "sm", type: "secondaryText", "aria-label": "Clear search", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: '46ec6e6b8305e5a4aad3207cd373eb374e8bcef5', slot: "icon", name: "cancel" }))), this.info_text && (index.h("div", { key: 'ee8e6d1d0048eb90b32379d549195b8053bd9df5', class: "flex items-center pr-8", "data-name": "search-info" }, index.h("at-tooltip", { key: 'd6a36cc55d9ac00ca06820a0b76307864a349b93', position: "top" }, index.h("at-icon", { key: '40d37df7a510ba429bec7047bfbd5cd740d81e0d', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '1e9d7f16742939dfb3efe2d484657b966f375bc3' }, this.info_text))))), this.hint_text && (index.h("span", { key: '849c6e09572b56947dd8837122937c6e173c4514', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv = true;
    /**
     * Offers the PDF export option in the export menu. On by default.
     */
    show_pdf = true;
    get el() { return index.getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        if (!this.show_csv && !this.show_pdf) {
            return null;
        }
        return (index.h("at-menu", { width: "fit-content", position: "left", align: "end" }, index.h("at-tooltip", { slot: "menu-trigger", position: "top" }, index.h("at-button", { slot: "tooltip-trigger", type: "secondaryText" }, index.h("at-icon", { slot: "icon", name: "download" })), index.h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", null, this.show_csv && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), this.show_pdf && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
    }
};

const INTERACTION_ONLY_CELL_RENDERERS = [
    index$1.AvailableCells.CHECKBOX_CELL,
    index$1.AvailableCells.MENU_CELL,
    index$1.AvailableCells.MULTI_BTN_CELL,
];
const AtTableFilterMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
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
    get el() { return index.getElement(this); }
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
        this.translations = await translation.fetchTranslations(this.el);
    }
    handleSearch = async (event) => {
        this.atChange.emit(event.detail);
        await this.menuEl?.closeMenu();
    };
    handleCancel = async () => {
        await this.menuEl?.closeMenu();
    };
    render() {
        return (index.h(index.Host, { key: 'a5a39e5a106d5b48373910580cd850adb3c4d758' }, index.h("at-menu", { key: '7baf509069c335f8bead147077d616ddf3ba9cb4', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("div", { key: 'e374f033a2d876ee2a31f878c4fdddeaefde4fd8', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            filterTree_util.countFilterConditions(this.filters) > 0 && (index.h("at-badge", { key: '08dde07f852b1c2142ec8030ac9096e28c0aa647', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: filterTree_util.countFilterConditions(this.filters).toString() })), index.h("at-button", { key: 'd3f5991c5d9f35228b2ca769e15489fb433ef5df', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, index.h("at-icon", { key: 'c2bf6890b2a6bc328e4ac6649e64eec32eb1af61', slot: "icon", name: "edit_filters" }))), index.h("at-tooltip", { key: 'ce2f11db058cdd2f653ba4525220c3cbafe95a98', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), index.h("at-filter-form", { key: '509548efb3c942e6a615688ebefe9f7dccd740be', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
    }
};

const AtTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atFilterClick = index.createEvent(this, "atFilterClick", 7);
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
        return filterTree_util.isFilterGroup(node)
            ? node.children.some((child) => this.hasValidCondition(child))
            : !!(node.id && node.value);
    }
    removeCondition(condition) {
        const filters = this.filters;
        filterTree_util.removeFilterCondition(filters, condition);
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    }
    clearAll = () => {
        const filters = this.filters;
        filterTree_util.flattenFilterConditions(filters)
            .filter((condition) => condition.id && condition.value)
            .forEach((condition) => filterTree_util.removeFilterCondition(filters, condition));
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    };
    renderConditionChip(filter) {
        const label = this.chipLabel(filter);
        return (index.h("at-badge", { class: "border-active-accent flex cursor-pointer items-center gap-4 text-center", rounded: true, "data-name": "filter-chip", label: label, role: "button", tabindex: "0", "aria-label": `Edit ${label}`, onClick: () => this.atFilterClick.emit(filter), onKeyDown: (event) => {
                if (event.target !== event.currentTarget)
                    return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.atFilterClick.emit(filter);
                }
            } }, index.h("button", { type: "button", class: "text-foreground/40 hover:text-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out", "data-name": "filter-chip-remove", "aria-label": `Remove ${label}`, onClick: (event) => {
                event.stopPropagation();
                this.removeCondition(filter);
            } }, index.h("at-icon", { name: "cancel" }))));
    }
    renderGroupChips(group, depth = 0) {
        const children = group.children.filter((child) => this.hasValidCondition(child));
        const bgClass = this.groupBackground(depth);
        return children.flatMap((child, index$1) => {
            const items = [];
            if (index$1 > 0) {
                items.push(index.h("span", { class: "text-muted text-xs font-semibold", "data-name": "filter-chip-operator" }, group.logical_operator));
            }
            items.push(filterTree_util.isFilterGroup(child) ? (index.h("span", { class: `flex items-center gap-4 rounded-full p-2 ${bgClass}`, "data-name": "filter-chip-group" }, this.renderGroupChips(child, depth + 1))) : (this.renderConditionChip(child)));
            return items;
        });
    }
    render() {
        if (!this.filters || !this.hasValidCondition(this.filters)) {
            return index.h(index.Host, null);
        }
        const conditionCount = filterTree_util.flattenFilterConditions(this.filters).filter((condition) => condition.id && condition.value).length;
        return (index.h(index.Host, { class: "flex items-start gap-8" }, index.h("div", { class: "flex h-full flex-wrap items-center gap-4", "data-name": "filter-chip-list" }, this.renderGroupChips(this.filters), conditionCount > 1 && (index.h("at-button", { size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => this.clearAll() }, index.h("at-icon", { slot: "icon", name: "backspace" }))))));
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
        return (index.h(index.Host, { key: 'f4ff5fbea51b8c38b15fa0bbe62651127a161f63', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'fc5fb22cb1e46085c6fb21a394a1f0a9e0b80f41' }, "Page Size: "), index.h("at-select", { key: '87f36b83ed88545cdd2cfc0caae3abc50d99a39f', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '59719bf2dbfc91d9775c368a76a83a8a6d095f3f', "data-name": "pagination-first", "aria-label": "First page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: '5bf0542b7b743873dd8cb8b10c920288e08b3be5', slot: "icon", name: "first_page" })), index.h("at-button", { key: '55e9d4d915b0bd50edab81afbe4901a399437c6e', "data-name": "pagination-previous", "aria-label": "Previous page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: '191933fa44322cb617bbf54401398642f426c170', slot: "icon", name: "chevron_left" })), index.h("span", { key: '3983948e90ed39eb31fd1c0899105770ee964839' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '3c1d62257143b73de6be259a488a511a59f71fcf', "data-name": "pagination-next", "aria-label": "Next page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: '054c69865541cca7ca1a684cad4d881c8e7033bb', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: '314e24dffd93e12adc0fc3ec5de1a8a5e40334d9', "data-name": "pagination-last", "aria-label": "Last page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: '9f999ccf93baab7683b3c19d313aea663851a58d', slot: "icon", name: "last_page" }))));
    }
};

exports.at_control_group = AtControlGroup;
exports.at_placeholder = AtPlaceholderComponent;
exports.at_reload_button = AtReloadButton;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
