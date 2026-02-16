const Template = (args) => `
<at-checkbox-group 
    label="${args.label}"
    info_text="${args.info_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    layout="${args.layout ?? 'column'}"
    ${args.invalid ? 'invalid' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.required ? 'required' : ''}
/>
${args.options
    ? `
<script>
document.querySelector('at-checkbox-group').options = ${JSON.stringify(args.options, null, 4)};
</script>`
    : ''}
`;
const SlotTemplate = (args) => `
<at-checkbox-group 
    label="${args.label}"
    info_text="${args.info_text ?? ''}"
    error_text="${args.error_text ?? ''}"
    hint_text="${args.hint_text ?? ''}"
    layout="${args.layout ?? 'column'}"
    ${args.invalid ? 'invalid' : ''}
    ${args.required ? 'required' : ''}
>
    <at-checkbox value="one" label="One label" hint_text="First option"></at-checkbox>
    <at-checkbox value="two" label="Two label" hint_text="Second option"></at-checkbox>
    <at-checkbox value="three" label="Three label"></at-checkbox>
</at-checkbox-group>
`;
export default {
    title: 'Components/Checkbox Group',
};
export const PropOptions = Template.bind({});
PropOptions.args = {
    label: 'Prop Options Example',
    options: [
        {
            value: 'one',
            label: 'One label',
            hint_text: 'First option',
            checked: true,
        },
        { value: 'two', label: 'Two label', hint_text: 'Second option' },
        { value: 'three', label: 'Three label' },
    ],
    info_text: 'Select multiple options',
    hint_text: 'hint text',
    layout: 'column',
};
export const PropOptionsColumn = Template.bind({});
PropOptionsColumn.args = {
    label: 'Prop Options Column',
    options: [
        { value: 'one', label: 'One label', hint_text: 'First option' },
        { value: 'two', label: 'Two label', hint_text: 'Second option' },
        { value: 'three', label: 'Three label' },
    ],
    layout: 'column',
};
export const PropOptionsRow = Template.bind({});
PropOptionsRow.args = {
    label: 'Prop Options Row',
    options: [
        { value: 'one', label: 'One label', hint_text: 'First option' },
        { value: 'two', label: 'Two label', hint_text: 'Second option' },
        { value: 'three', label: 'Three label' },
    ],
    layout: 'row',
};
export const PropOptionsGrid = Template.bind({});
PropOptionsGrid.args = {
    label: 'Prop Options Grid',
    options: [
        { value: 'one', label: 'One label', hint_text: 'First option' },
        { value: 'two', label: 'Two label', hint_text: 'Second option' },
        { value: 'three', label: 'Three label' },
    ],
    layout: 'grid',
};
export const SlottedOptionsColumn = SlotTemplate.bind({});
SlottedOptionsColumn.args = {
    label: 'Slotted Options Column',
    layout: 'column',
};
export const SlottedOptionsRow = SlotTemplate.bind({});
SlottedOptionsRow.args = {
    label: 'Slotted Options Row',
    layout: 'row',
};
export const SlottedOptionsGrid = SlotTemplate.bind({});
SlottedOptionsGrid.args = {
    label: 'Slotted Options Grid',
    layout: 'grid',
};
