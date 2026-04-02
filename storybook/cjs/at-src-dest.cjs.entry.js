'use strict';

var index = require('./index-i7hIKTeN.js');

const AtSrcDestComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Aligns the content to the left or center of the container
         */
        this.align = 'left';
    }
    render() {
        return (index.h(index.Host, { key: '44e3826ad8c500290624dda3fd38eeaee58dc870', class: `flex flex-wrap items-center gap-16 ${this.align === 'center' ? 'justify-center' : 'justify-start'}` }, this.src_title && (index.h("h4", { key: '7213bd2b6420c02dbe19edb48b7fc1394b02ed5b', class: "h4", "data-name": "src-title" }, this.src_title)), (this.src_text || this.src_subtitle) && (index.h("div", { key: 'fe114493eebcdc2313237d746a88193b284e8a3a' }, this.src_text && (index.h("p", { key: '3e00391229a5983af63edddedb55c1d58caa632f', class: "text-dark font-medium", "data-name": "src-text" }, this.src_text)), this.src_subtitle && (index.h("p", { key: '1eff099d89d2d841ed717db094ff62bea4ade2f1', class: "text-med", "data-name": "src-subtitle" }, this.src_subtitle)))), index.h("div", { key: '81786a067fd5b3e706e61d5f4c2c2fe2076504a1', class: "icon-lg text-light flex-row items-center gap-4" }, index.h("span", { key: '199c529b33115784e8a5d643017012a70316e984', class: "material-icons" }, "arrow_back"), index.h("span", { key: '0e920e3a545bd444656d066b357623f48f9bfb66', class: "material-icons" }, "arrow_forward")), (this.dest_text || this.dest_subtitle) && (index.h("div", { key: 'c8b03b2d508c849a201154fd2950c21c4c44ff21', class: "text-right" }, this.dest_text && (index.h("p", { key: '65ec62a1d7bdd040496cb4c0464cae12296cd10d', class: "text-dark font-medium", "data-name": "dest-text" }, this.dest_text)), this.dest_subtitle && (index.h("p", { key: 'cf8ef4f7ae8999c91c582298f2024caa5b49882a', class: "text-med", "data-name": "dest-subtitle" }, this.dest_subtitle)))), this.dest_title && (index.h("h4", { key: 'bd35efdacf78941b708fc701ce0bad94e79c06c9', class: "h4", "data-name": "dest-title" }, this.dest_title))));
    }
};

exports.at_src_dest = AtSrcDestComponent;
//# sourceMappingURL=at-src-dest.entry.cjs.js.map

//# sourceMappingURL=at-src-dest.cjs.entry.js.map