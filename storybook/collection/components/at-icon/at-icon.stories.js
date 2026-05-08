const Template = (args) => `
  <at-icon name="${args.name}" size="${args.size}"></at-icon>
`;
export default {
    title: 'Components/Icon',
    argTypes: {
        name: {
            control: 'text',
        },
        size: {
            control: 'text',
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    name: 'home',
    size: '16',
};
