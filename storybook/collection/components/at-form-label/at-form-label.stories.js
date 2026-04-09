const Template = (args) => `
<at-form-label 
    for="${args.for ?? ''}"
    label="${args.label ?? ''}"
    info_text="${args.info_text ?? ''}"
    ${args.required ? 'required' : ''}
/>
`;
export default {
    title: 'Components/Form Label',
};
export const Default = Template.bind({});
Default.args = {
    for: '',
    label: 'Label',
    info_text: 'Info text',
    required: true,
};
