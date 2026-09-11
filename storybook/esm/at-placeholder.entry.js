import { h, r as registerInstance, a as getElement, H as Host } from './index-BQ4XN8sR.js';

const LINE_COLOR = 'var(--token-border-muted, currentColor)';
const TOP_FACE_COLOR = 'var(--token-surface-foreground, transparent)';
const CHART_AREA_PATH = 'M0.00,54.82C1.11,54.58 4.45,53.31 6.67,53.35C8.89,53.39 11.11,54.30 13.33,55.07C15.55,55.84 17.78,57.12 20.00,57.95C22.22,58.78 24.45,59.63 26.67,60.06C28.89,60.49 31.11,60.56 33.33,60.51C35.55,60.46 37.78,59.99 40.00,59.77C42.22,59.55 44.45,59.14 46.67,59.19C48.89,59.24 51.11,59.46 53.33,60.07C55.55,60.68 57.78,61.73 60.00,62.86C62.22,63.99 64.45,65.56 66.67,66.84C68.89,68.12 71.11,69.57 73.33,70.51C75.55,71.45 77.78,72.19 80.00,72.48C82.22,72.77 84.45,72.57 86.67,72.25C88.89,71.93 91.11,71.10 93.33,70.57C95.55,70.04 97.78,69.29 100.00,69.07C102.22,68.85 104.45,68.83 106.67,69.27C108.89,69.71 111.11,70.69 113.33,71.71C115.55,72.73 117.78,74.33 120.00,75.41C122.22,76.49 124.45,77.81 126.67,78.20C128.89,78.59 131.11,78.66 133.33,77.76C135.55,76.86 137.78,75.11 140.00,72.80C142.22,70.49 144.45,67.13 146.67,63.93C148.89,60.73 151.11,56.72 153.33,53.59C155.55,50.46 157.78,47.16 160.00,45.16C162.22,43.16 164.45,41.77 166.67,41.60C168.89,41.43 171.11,42.44 173.33,44.14C175.55,45.84 177.78,48.86 180.00,51.81C182.22,54.76 184.45,58.66 186.67,61.85C188.89,65.04 191.11,68.50 193.33,70.97C195.55,73.44 197.78,75.47 200.00,76.66C202.22,77.85 204.45,78.17 206.67,78.13C208.89,78.09 211.11,77.18 213.33,76.41C215.55,75.64 217.78,74.36 220.00,73.53C222.22,72.70 224.45,71.85 226.67,71.42C228.89,70.99 231.11,70.92 233.33,70.97C235.55,71.02 237.78,71.49 240.00,71.71C242.22,71.93 244.45,72.34 246.67,72.29C248.89,72.24 251.11,72.02 253.33,71.41C255.55,70.80 257.78,69.75 260.00,68.62C262.22,67.49 264.45,65.92 266.67,64.64C268.89,63.37 271.11,61.91 273.33,60.97C275.55,60.03 277.78,59.29 280.00,59.00C282.22,58.71 284.45,58.91 286.67,59.23C288.89,59.55 291.11,60.38 293.33,60.91C295.55,61.44 297.78,62.19 300.00,62.41C302.22,62.63 304.45,62.65 306.67,62.21C308.89,61.77 311.11,60.79 313.33,59.77C315.55,58.75 317.78,57.15 320.00,56.07C322.22,54.99 324.45,53.67 326.67,53.28C328.89,52.89 331.11,52.82 333.33,53.72C335.55,54.62 337.78,56.38 340.00,58.68C342.22,60.98 344.45,64.35 346.67,67.55C348.89,70.75 351.11,74.76 353.33,77.89C355.55,81.02 357.78,84.32 360.00,86.32C362.22,88.32 364.45,89.71 366.67,89.88C368.89,90.05 371.11,89.04 373.33,87.34C375.55,85.64 377.78,82.62 380.00,79.67C382.22,76.72 384.45,72.82 386.67,69.63C388.89,66.44 391.11,62.98 393.33,60.51C395.55,58.04 398.89,55.77 400.00,54.82 L400,173 L0,173 Z';
const CHART_LINE_PATH = 'M0.00,54.82C1.11,54.58 4.45,53.31 6.67,53.35C8.89,53.39 11.11,54.30 13.33,55.07C15.55,55.84 17.78,57.12 20.00,57.95C22.22,58.78 24.45,59.63 26.67,60.06C28.89,60.49 31.11,60.56 33.33,60.51C35.55,60.46 37.78,59.99 40.00,59.77C42.22,59.55 44.45,59.14 46.67,59.19C48.89,59.24 51.11,59.46 53.33,60.07C55.55,60.68 57.78,61.73 60.00,62.86C62.22,63.99 64.45,65.56 66.67,66.84C68.89,68.12 71.11,69.57 73.33,70.51C75.55,71.45 77.78,72.19 80.00,72.48C82.22,72.77 84.45,72.57 86.67,72.25C88.89,71.93 91.11,71.10 93.33,70.57C95.55,70.04 97.78,69.29 100.00,69.07C102.22,68.85 104.45,68.83 106.67,69.27C108.89,69.71 111.11,70.69 113.33,71.71C115.55,72.73 117.78,74.33 120.00,75.41C122.22,76.49 124.45,77.81 126.67,78.20C128.89,78.59 131.11,78.66 133.33,77.76C135.55,76.86 137.78,75.11 140.00,72.80C142.22,70.49 144.45,67.13 146.67,63.93C148.89,60.73 151.11,56.72 153.33,53.59C155.55,50.46 157.78,47.16 160.00,45.16C162.22,43.16 164.45,41.77 166.67,41.60C168.89,41.43 171.11,42.44 173.33,44.14C175.55,45.84 177.78,48.86 180.00,51.81C182.22,54.76 184.45,58.66 186.67,61.85C188.89,65.04 191.11,68.50 193.33,70.97C195.55,73.44 197.78,75.47 200.00,76.66C202.22,77.85 204.45,78.17 206.67,78.13C208.89,78.09 211.11,77.18 213.33,76.41C215.55,75.64 217.78,74.36 220.00,73.53C222.22,72.70 224.45,71.85 226.67,71.42C228.89,70.99 231.11,70.92 233.33,70.97C235.55,71.02 237.78,71.49 240.00,71.71C242.22,71.93 244.45,72.34 246.67,72.29C248.89,72.24 251.11,72.02 253.33,71.41C255.55,70.80 257.78,69.75 260.00,68.62C262.22,67.49 264.45,65.92 266.67,64.64C268.89,63.37 271.11,61.91 273.33,60.97C275.55,60.03 277.78,59.29 280.00,59.00C282.22,58.71 284.45,58.91 286.67,59.23C288.89,59.55 291.11,60.38 293.33,60.91C295.55,61.44 297.78,62.19 300.00,62.41C302.22,62.63 304.45,62.65 306.67,62.21C308.89,61.77 311.11,60.79 313.33,59.77C315.55,58.75 317.78,57.15 320.00,56.07C322.22,54.99 324.45,53.67 326.67,53.28C328.89,52.89 331.11,52.82 333.33,53.72C335.55,54.62 337.78,56.38 340.00,58.68C342.22,60.98 344.45,64.35 346.67,67.55C348.89,70.75 351.11,74.76 353.33,77.89C355.55,81.02 357.78,84.32 360.00,86.32C362.22,88.32 364.45,89.71 366.67,89.88C368.89,90.05 371.11,89.04 373.33,87.34C375.55,85.64 377.78,82.62 380.00,79.67C382.22,76.72 384.45,72.82 386.67,69.63C388.89,66.44 391.11,62.98 393.33,60.51C395.55,58.04 398.89,55.77 400.00,54.82';
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
