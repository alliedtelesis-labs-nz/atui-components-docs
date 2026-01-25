const Template = (args) => `
<at-input-range
    label="${args.label ?? ''}"
    error_text="${args.error_text ?? ''}"
    info_text="${args.info_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    warning_text="${args.warning_text ?? ''}"
    suffix="${args.suffix ?? ''}"
    value=${args.value ?? ''}
    max_display_value=${args.max_display_value ?? 100}
    max_selectable_value=${args.max_selectable_value ?? 100}
    min_selectable_value=${args.min_selectable_value ?? 0}
    tick_interval=${args.tick_interval ?? 0}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
/>
`;
export default {
    title: 'Components/Range Input',
};
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    info_text: 'Info text',
    error_text: 'Error text',
    hint_text: 'Hint text',
    warning_text: 'Warning text',
    suffix: '%',
    value: 50,
    max_display_value: 100,
    max_selectable_value: 100,
    min_selectable_value: 0,
    tick_interval: 0,
    required: true,
    readonly: false,
    disabled: false,
    invalid: false,
};
