const Template = (args) => `
<at-input 
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    type="${args.type ?? ''}"
    value="${args.value ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.clearable ? 'clearable' : ''}
    ${args.disabled ? 'disabled' : ''}
    aria_label="${args.aria_label ?? ''}"
/>
`;
const ColumnHeaderTemplate = () => `
<div style="display: grid; grid-template-columns: 16ch minmax(0, 1fr); gap: 8px;">
    <at-form-label label="ID (hex)" required="true"></at-form-label>
    <at-form-label label="Payload (hex)" required="true"></at-form-label>
    <at-input aria_label="ID (hex)" placeholder="0x0499"></at-input>
    <at-input aria_label="Payload (hex)" placeholder="AA BB CC"></at-input>
</div>
`;
export default {
    title: 'Components/Input',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    type: 'text',
    value: '',
    placeholder: 'Placeholder',
    required: true,
    readonly: false,
    disabled: false,
    clearable: true,
    invalid: false,
};
export const SharedColumnHeader = ColumnHeaderTemplate.bind({});
SharedColumnHeader.storyName = 'Shared Column Header';
SharedColumnHeader.parameters = {
    docs: {
        description: {
            story: 'In a table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead.',
        },
    },
};
