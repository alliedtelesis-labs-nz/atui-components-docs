const Template = (args) => {
    var _a, _b, _c;
    return `
<atui-dialog dialog_id="${(_a = args.dialog_id) !== null && _a !== void 0 ? _a : ''}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="Dialog Title" icon="preview"></atui-header>
        <atui-button label="Close dialog" onclick={document.querySelector("#${(_b = args.dialog_id) !== null && _b !== void 0 ? _b : ''}").close()} />
    </div>
</atui-dialog>
<atui-button label="Open Dialog" onclick={document.querySelector("#${(_c = args.dialog_id) !== null && _c !== void 0 ? _c : ''}").showModal()} />
`;
};
export default {
    title: 'Components/Dialog',
};
export const Default = Template.bind({});
Default.args = {
    dialog_id: 'dialog',
};
//# sourceMappingURL=atui-dialog.stories.js.map
