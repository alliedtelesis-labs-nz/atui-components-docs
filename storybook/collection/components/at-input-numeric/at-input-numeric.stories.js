const Template = (args) => `
<at-input-numeric
    label="${args.label ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    placeholder="${args.placeholder ?? ''}"
    value="${args.value ?? 0}"
    min="${args.min ?? 0}"
    max="${args.max ?? 100}"
    step="${args.step ?? 1}"
    ${args.show_buttons ? 'show_buttons' : ''}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    aria_label="${args.aria_label ?? ''}"
/>
`;
const ColumnHeaderTemplate = () => `
<div style="display: grid; grid-template-columns: minmax(0, 1fr) 12ch; gap: 8px;">
    <at-form-label label="Licence tier"></at-form-label>
    <at-form-label label="Devices" required="true"></at-form-label>
    <at-input label="" aria_label="Licence tier" value="Standard" readonly></at-input>
    <at-input-numeric aria_label="Devices to allocate, Standard tier" value="0" min="0" max="50"></at-input-numeric>
    <at-input label="" aria_label="Licence tier" value="Advanced" readonly></at-input>
    <at-input-numeric aria_label="Devices to allocate, Advanced tier" value="0" min="0" max="10"></at-input-numeric>
</div>
`;
export default {
    title: 'Components/Input Numeric',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    hint_text: 'Hint text',
    info_text: 'Info text',
    error_text: 'Error text',
    placeholder: 'Placeholder',
    value: 5,
    min: 0,
    max: 100,
    step: 1,
    show_buttons: true,
    required: true,
    readonly: false,
    invalid: false,
    disabled: false,
};
export const WithoutSteppers = Template.bind({});
WithoutSteppers.storyName = 'Without Steppers';
WithoutSteppers.args = {
    ...Default.args,
    show_buttons: false,
    hint_text: 'Type a value; the field still clamps to min and max',
};
WithoutSteppers.parameters = {
    docs: {
        description: {
            story: 'With `show_buttons` off the field is typed into directly. Clamping is unchanged - it applies on a user change, never to a value set programmatically.',
        },
    },
};
export const Bounded = Template.bind({});
Bounded.args = {
    ...Default.args,
    label: 'Port number',
    hint_text: 'Between 1 and 48',
    value: 24,
    min: 1,
    max: 48,
    step: 1,
};
export const Invalid = Template.bind({});
Invalid.args = {
    ...Default.args,
    invalid: true,
    error_text: 'Enter a value between 0 and 100',
};
export const Readonly = Template.bind({});
Readonly.args = {
    ...Default.args,
    readonly: true,
    hint_text: '',
};
export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
    hint_text: '',
};
export const SharedColumnHeader = ColumnHeaderTemplate.bind({});
SharedColumnHeader.storyName = 'Shared Column Header';
SharedColumnHeader.parameters = {
    docs: {
        description: {
            story: 'In a table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead. Each row needs its own name, hence the tier in the text.',
        },
    },
};
