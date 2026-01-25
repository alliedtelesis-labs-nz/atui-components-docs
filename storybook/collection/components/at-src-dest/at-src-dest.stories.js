const Template = (args) => `
<at-src-dest
    src_title="${args.src_title ?? ''}"
    src_subtitle="${args.src_subtitle ?? ''}"
    src_text="${args.src_text ?? ''}"
    dest_title="${args.dest_title ?? ''}"
    dest_subtitle="${args.dest_subtitle ?? ''}"
    dest_text="${args.dest_text ?? ''}"
    align="${args.align ?? 'left'}"
/>
`;
export default {
    title: 'Components/Src Dest',
    argTypes: {
        align: {
            options: ['center', 'left'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    src_title: 'Source Title',
    src_subtitle: 'Source Subtitle',
    src_text: 'Source Text',
    dest_title: 'Destination Title',
    dest_subtitle: 'Destination Title',
    dest_text: 'Destination Title',
    align: 'left',
};
