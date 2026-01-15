import { h, } from "@stencil/core";
import { GridStack, } from "gridstack";
import gridstackCss from "gridstack/dist/gridstack.min.css";
export class AtDashboard {
    el;
    widget_templates = [];
    // @Event() changedDashboard: EventEmitter<CustomGridStackItem[]>;
    changedItem;
    removedItem;
    resizeEvent;
    // @State() dashboard: CustomGridStackItem[] = [];
    widgetTemplatesChanged() {
        // this.updateDashboard();
        this.needsLayout = true;
    }
    grid;
    gridContainerRef;
    needsLayout = false;
    componentWillLoad() {
        this.injectStyle();
        // this.updateDashboard();
    }
    componentDidLoad() {
        if (!this.gridContainerRef)
            return;
        this.grid = GridStack.init({
            margin: 4,
            minRow: 1,
            maxRow: 100,
            float: true,
            columnOpts: {
                columnMax: 16,
                breakpoints: [
                    {
                        w: 768,
                        c: 1,
                    },
                ],
            },
        }, this.gridContainerRef);
        this.grid.on('change', (_event, items) => {
            items?.forEach((item) => {
                const dashboardItem = this.widget_templates.find((d) => d.id === item.id);
                if (dashboardItem) {
                    Object.assign(dashboardItem, {
                        x: item.x,
                        y: item.y,
                        w: item.w,
                        h: item.h,
                    });
                    this.changedItem.emit(dashboardItem);
                }
            });
        });
        this.grid.on('resizestop', (_event, el) => {
            const node = el.gridstackNode;
            this.resizeEvent.emit(node);
        });
    }
    componentDidRender() {
        if (!this.grid || !this.needsLayout)
            return;
        this.grid.removeAll(false);
        this.layoutWidgets();
        this.needsLayout = false;
    }
    disconnectedCallback() {
        this.grid?.destroy(false);
    }
    // private updateDashboard() {
    //     if (this.widget_templates?.length) {
    //         this.dashboard = this.widget_templates.map((template) => ({
    //             ...template,
    //         }));
    //         this.changedDashboard.emit(this.dashboard);
    //     }
    // }
    layoutWidgets() {
        if (!this.grid)
            return;
        this.widget_templates.forEach((widget) => this.makeWidget(widget));
    }
    makeWidget(widget) {
        const elSelector = `#${widget.id}`;
        const options = {
            id: widget.id,
            x: widget.x,
            y: widget.y,
            w: widget.w,
            h: widget.h,
        };
        this.grid.makeWidget(elSelector, options);
    }
    removeWidget(widget) {
        this.removedItem.emit(widget);
    }
    injectStyle() {
        const style = document.createElement('style');
        style.textContent = gridstackCss;
        this.el.appendChild(style);
    }
    render() {
        return (h("div", { key: '2d9b8af743ee0fba8932dba5525322002303c23b', class: "grid-stack", ref: (el) => (this.gridContainerRef = el) }, this.widget_templates.map((widget) => (h("div", { class: "grid-stack-item", id: widget.id }, h("div", { class: "grid-stack-item-content" }, h("div", { class: "absolute top-0 right-0" }, h("at-menu", null, h("at-button", { slot: "menu-trigger", icon: "more_vert", type: "secondaryText" }), h("at-button", { label: "Delete", type: "secondaryText", onAtuiClick: () => {
                this.removeWidget(widget);
            } }))), h("slot", { name: widget.id })))))));
    }
    static get is() { return "at-dashboard"; }
    static get properties() {
        return {
            "widget_templates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CustomGridStackItem[]",
                    "resolved": "CustomGridStackItem[]",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "changedItem",
                "name": "changedItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomGridStackItem",
                    "resolved": "CustomGridStackItem",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                }
            }, {
                "method": "removedItem",
                "name": "removedItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CustomGridStackItem",
                    "resolved": "CustomGridStackItem",
                    "references": {
                        "CustomGridStackItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-dashboard/at-dashboard.tsx",
                            "id": "src/components/at-dashboard/at-dashboard.tsx::CustomGridStackItem"
                        }
                    }
                }
            }, {
                "method": "resizeEvent",
                "name": "resizeEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GridStackNode",
                    "resolved": "GridStackNode",
                    "references": {
                        "GridStackNode": {
                            "location": "import",
                            "path": "gridstack",
                            "id": "../node_modules/gridstack/dist/gridstack.d.ts::GridStackNode"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "widget_templates",
                "methodName": "widgetTemplatesChanged"
            }];
    }
}
//# sourceMappingURL=at-dashboard.js.map
