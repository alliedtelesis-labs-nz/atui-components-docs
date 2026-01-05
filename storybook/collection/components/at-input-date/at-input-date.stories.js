const Template = (args) => `
<at-input-date
    label="${args.label ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    value="${args.value ?? ''}"
    min_date="${args.min_date ?? ''}"
    max_date="${args.max_date ?? ''}"
    ${args.required ? 'required' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Date Input',
    argTypes: {
        value: { control: 'date' },
        min_date: { control: 'date' },
        max_date: { control: 'date' },
        required: { control: 'boolean' },
        invalid: { control: 'boolean' },
        readonly: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};
export const Default = Template.bind({});
Default.args = {
    label: 'Date',
    hint_text: 'Select a date',
    info_text: '',
    error_text: '',
    value: new Date(),
    min_date: new Date('2000-01-01'),
    max_date: new Date('2099-12-31'),
    required: false,
    invalid: false,
    readonly: false,
    disabled: false,
};
//# sourceMappingURL=at-input-date.stories.js.map
