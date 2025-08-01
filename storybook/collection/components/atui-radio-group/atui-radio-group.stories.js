const Template = (args) => `
<atui-radio-group 
    label="${args.label}"
    info_text="${args.info_text}"
    error_text="${args.error_text}"
    hint_text="${args.hint_text}"
    direction="${args.layout}"
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.required ? 'required' : ''}
/>
${args.options
    ? `
<script>
document.querySelector('atui-radio-group').options = ${JSON.stringify(args.options, null, 4)};
</script>`
    : ''}
`;
const SlotTemplate = (args) => `
<atui-radio-group 
    label="${args.label}"
    info_text="${args.info_text}"
    error_text="${args.error_text}"
    hint_text="${args.hint_text}"
    direction="${args.layout}"
    ${args.invalid ? 'invalid' : ''}
    ${args.required ? 'required' : ''}
>
    <li>
        <atui-radio label="One" subtitle="Subtitle" />
    </li>
    </li>
        <atui-radio label="Two" subtitle="Subtitle" />
    </li>
</atui-radio-group>
`;
export default {
    title: 'Components/Radio Group',
};
export const Primary = Template.bind({});
Primary.args = {
    label: 'Title',
    options: [
        { id: 'one', label: 'One', subtitle: 'Subtitle' },
        { id: 'two', label: 'Two', subtitle: 'Subtitle' },
    ],
    info_text: 'info text',
    hint_text: 'hint text',
    error_text: 'error text',
    layout: 'vertical',
    required: false,
    invalid: false,
    disabled: false,
};
export const Horizontal = Template.bind({});
Horizontal.args = {
    label: 'Title',
    options: [
        { id: 'one', label: 'One', subtitle: 'Subtitle' },
        { id: 'two', label: 'Two', subtitle: 'Subtitle' },
    ],
    info_text: 'info text',
    hint_text: 'hint text',
    error_text: 'error text',
    direction: 'horizontal',
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
};
//# sourceMappingURL=atui-radio-group.stories.js.map
