const Template = (args) => `
<atui-checkbox-group 
    label="${args.label}"
    info_text="${args.info_text}"
    error_text="${args.error_text}"
    hint_text="${args.hint_text}"
    layout="${args.layout}"
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.required ? 'required' : ''}
/>
${args.options
    ? `
<script>
document.querySelector('atui-checkbox-group').options = ${JSON.stringify(args.options, null, 4)};
</script>`
    : ''}
`;
const SlotTemplate = (args) => `
<atui-checkbox-group 
    label="${args.label}"
    info_text="${args.info_text}"
    error_text="${args.error_text}"
    hint_text="${args.hint_text}"
    layout="${args.layout}"
    ${args.invalid ? 'invalid' : ''}
    ${args.required ? 'required' : ''}
>
    <li>
        <atui-checkbox label="One" subtitle="Subtitle" checked />
    </li>
    </li>
        <atui-checkbox label="Two" subtitle="Subtitle" />
    </li>
</atui-checkbox-group>
`;
export default {
    title: 'Components/Checkbox Group',
};
export const Primary = Template.bind({});
Primary.args = {
    label: 'Title',
    checkbox_id: 'checkbox',
    options: [
        { id: 'one', label: 'One', subtitle: 'Subtitle', checked: true },
        { id: 'two', label: 'Two', subtitle: 'Subtitle', checked: false },
    ],
    info_text: 'info text',
    hint_text: 'hint text',
    error_text: 'error text',
    layout: 'vertical',
    required: false,
    invalid: false,
    disabled: false,
};
export const Slot = SlotTemplate.bind({});
Slot.args = {
    label: 'Title',
    checkbox_id: 'checkbox',
    info_text: 'info text',
    hint_text: 'hint text',
    error_text: 'error text',
    layout: 'vertical',
    invalid: false,
    disabled: false,
};
//# sourceMappingURL=atui-checkbox-group.stories.js.map
