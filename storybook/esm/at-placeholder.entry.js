import { h, r as registerInstance, a as getElement, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: '420ab37b7e4f061a99f88887a0691745ff7ccec0', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder relative flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '2f9525f3feacaeca111a14c9026c4731f4551c98', class: "relative z-10 fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'f3f3d7e0783286e062aee34e396779c9dfe4ac18', name: "icon" })), this.type !== 'none' && (h("span", { key: '6c010eba038a3c9e27747a5a0c674f8af6d8339d', class: `z-0 flex justify-center fill-[var(--token-border-muted)] ${this.type === 'chart-no-data' ? 'absolute inset-0' : ''}`, "data-name": "placeholder-image" }, this.renderImage())), h("div", { key: 'aec9eeb7157d2caaaea5e18f6f1c1483e7b5606b', class: `border-radius-sm relative z-10 flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '4e732bd9d725b4c3da5451a39f2e89d98afde978', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '040ba7a3234937b21d14f4bba42458e5ebb0114d', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '68dc5290cd7dc7a5f03fef8a1f3806c7a3dada8c', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '81d1e62fa715973b9c5a18140e87a96b623c4a00', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'c4a17e36059552fc69f1f2c9dd008281152b8146' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
