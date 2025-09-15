const Template = (args) => `
<at-list-item
    item_title="${args.item_title ?? ''}"
    item_prefix="${args.item_prefix ?? ''}"
    subtitle="${args.subtitle ?? ''}"
    icon="${args.icon ?? ''}"
    content="${args.content ?? ''}"
    border=${args.border ? true : false}
    size=${args.size ?? 'sm'}
/>`;

export default {
    title: 'Components/List Item',
    argTypes: {
        size: {
            options: ['lg', 'md', 'sm', 'xs'],
            control: { type: 'select' },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    size: 'sm',
    item_id: 'id',
    item_title: 'title',
    subtitle: 'subtitle',
    item_prefix: 'prefix',
    icon: 'home',
    content: 'content',
    border: false,
};
