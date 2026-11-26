import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DTCxn2cp.js';
import { c as classlist } from './classlist-COG8_R0C.js';
import { s as slottedLabelId } from './slotted-label-id-yAuyDwgx.js';
import { f as fetchTranslations } from './translation-BTrmt4Pb.js';

const variantsConfig = {
    variants: {
        active: {
            true: 'bg-active-background text-active-foreground',
            false: 'text-foreground',
        },
        disabled: {
            true: 'text-disabled hover:text-disabled pointer-events-none',
            false: null,
        },
    },
};
const getButtonClasses = classlist('focus-visible:border-active-accent focus-visible:ring-active-glow relative flex h-[30px] items-center gap-4 rounded-input border border-solid border-transparent px-12 py-8 leading-none font-normal transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-offset-0', variantsConfig);
const AtButtonSwitchComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label displayed alongside the toggle.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text;
    /**
     * Short description or validation hint if required.
     */
    hint_text;
    /**
     * Disable interaction with the toggle.
     */
    disabled;
    /**
     * Set the toggles state.
     */
    value = false;
    get el() { return getElement(this); }
    translations;
    toggleId = `toggle-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.toggleId}-label`;
    slottedLabelId;
    componentWillRender() {
        this.slottedLabelId = slottedLabelId(this.el, `${this.toggleId}-slotted-label`);
    }
    /**
     * Emits an event when toggled with `event.detail` being true if the switch is enabled
     */
    atuiChange;
    componentWillLoad() {
        fetchTranslations(this.el).then((translations) => {
            this.translations = translations;
        });
    }
    onToggle(change) {
        this.value = change;
        this.atuiChange.emit(change);
    }
    render() {
        const onButtonClasses = getButtonClasses({
            active: this.value === true,
            disabled: this.disabled,
        });
        const offButtonClasses = getButtonClasses({
            active: this.value === false,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'e069cbd28bb789a5616c0a3a003d400cb91054d4', id: `${this.toggleId}-host`, role: "radiogroup", "aria-labelledby": this.label ? this.labelId : this.slottedLabelId }, h("div", { key: '6e8388321817001ee036dfd6a55ba9330a2273a4', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '013295c098648941add1e4ed366d47293f7b53dd', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '613a7847e1ec79b2a11632d10fbd02919fbc3e59', id: this.labelId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'b78da122afd8fb07a0183b3d1ae3438e4ffce44c', class: "text-muted inline-block text-xs leading-tight", "data-name": "button-switch-hint" }, this.hint_text))), h("div", { key: '61a562e37632fde6589b348d5d0173ddb2d367a0', class: "border-input bg-input-background relative w-fit rounded-lg border inset-shadow-xs" }, h("div", { key: 'a02c176f963b4f1cfe483ebe5b2a956f9e5bb48e', class: "relative z-20 m-[2px] flex flex-row", "data-name": "switch-options" }, h("button", { key: '13d397ef29f66e530fcd0f61845b273fdb084783', class: offButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === false, disabled: this.disabled, onClick: () => this.onToggle(false), "data-name": "switch-off-button", "data-value": "false", type: "button" }, this.translations?.ATUI?.OFF || 'Off'), h("button", { key: '25ddbbc129acecc50f3fd42084c6f5584272aeb7', class: onButtonClasses, role: "radio", tabindex: 0, "aria-checked": this.value === true, disabled: this.disabled, onClick: () => this.onToggle(true), "data-name": "switch-on-button", "data-value": "true", type: "button" }, this.translations?.ATUI?.ON || 'On')))));
    }
};

export { AtButtonSwitchComponent as at_button_switch };
