const Template = (args) => {
    var _a, _b, _c, _d, _e, _f;
    return `
<atui-side-panel 
    panel_id="${(_a = args.panel_id) !== null && _a !== void 0 ? _a : ''}"
    panel_subtitle="${(_b = args.panel_subtitle) !== null && _b !== void 0 ? _b : ''}"
    panel_title="${(_c = args.panel_title) !== null && _c !== void 0 ? _c : ''}"
    origin="${(_d = args.origin) !== null && _d !== void 0 ? _d : ''}"
    size="${(_e = args.size) !== null && _e !== void 0 ? _e : ''}"
    show_close_button=${args.show_close_button ? true : false}
    ${args.click_out_to_close ? 'click_out_to_close' : ''}
    ${args.hide_scrollbar ? 'hide_scrollbar' : ''}
>
    <atui-message message_title="Sidepanel content" icon="preview" slot="content"></atui-message>
</atui-side-panel>
<atui-button label="Open Sidepanel" onclick={document.querySelector("#${(_f = args.panel_id) !== null && _f !== void 0 ? _f : ''}").showModal()} />
`;
};
export default {
    title: 'Components/Side Panel',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'radio' },
        },
        origin: {
            options: ['left', 'right'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    panel_id: 'panel',
    panel_title: 'Panel title',
    panel_subtitle: 'Panel subtitle',
    origin: 'right',
    size: 'xs',
    hide_scrollbar: false,
    click_out_to_close: false,
    show_close_button: true,
};
//# sourceMappingURL=atui-side-panel.stories.js.map
