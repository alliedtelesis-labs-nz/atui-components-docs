const Template = (args) => `
<at-list-item
    item_prefix="${args.item_prefix ?? ''}"
    item_title="${args.item_title ?? ''}"
    subtitle="${args.subtitle ?? ''}"
    content="${args.content ?? ''}"
    size="${args.size ?? 'sm'}"
    ${args.selectable ? 'selectable' : ''}
></at-list-item>
`;
const ListTemplate = (args) => `
<div role="list" style="max-width: 480px;">
    ${(args.items ?? [])
    .map((item) => `
    <at-list-item
        item_title="${item.item_title}"
        subtitle="${item.subtitle ?? ''}"
        content="${item.content ?? ''}"
        size="${args.size ?? 'sm'}"
        ${args.selectable ? 'selectable' : ''}
    ></at-list-item>`)
    .join('')}
</div>
`;
const SlottedTemplate = () => `
<div role="list" style="max-width: 480px;">
    <at-list-item item_title="Wireless" subtitle="4 access points">
        <at-icon slot="icon" name="success"></at-icon>
        <at-badge label="Healthy" type="success"></at-badge>
    </at-list-item>
    <at-list-item item_title="Switching" subtitle="12 ports in use">
        <at-icon slot="icon" name="warning"></at-icon>
        <at-badge label="2 warnings" type="warning"></at-badge>
    </at-list-item>
    <at-list-item item_prefix="VLAN" item_title="100" subtitle="Guest network">
        <at-button type="secondaryText" size="sm" label="Edit"></at-button>
    </at-list-item>
</div>
`;
export default {
    title: 'Components/List Item',
};
export const Default = Template.bind({});
Default.args = {
    item_prefix: '',
    item_title: 'Item title',
    subtitle: 'Subtitle',
    content: 'Content',
    size: 'sm',
    selectable: false,
};
export const Sizes = () => `
<div role="list" style="max-width: 480px;">
    ${['xs', 'sm', 'md', 'lg']
    .map((size) => `
    <at-list-item
        item_title="Size ${size}"
        subtitle="Subtitle"
        content="Content"
        size="${size}"
    ></at-list-item>`)
    .join('')}
</div>
`;
Sizes.args = {};
export const Selectable = ListTemplate.bind({});
Selectable.args = {
    size: 'sm',
    selectable: true,
    items: [
        { item_title: 'First item', subtitle: 'Subtitle', content: 'Content' },
        { item_title: 'Second item', subtitle: 'Subtitle', content: 'Content' },
        { item_title: 'Third item', subtitle: 'Subtitle', content: 'Content' },
    ],
};
Selectable.parameters = {
    docs: {
        description: {
            story: 'With `selectable` the item takes focus and shows a hover state. The click handling belongs to the consumer - the item reports nothing on its own.',
        },
    },
};
export const WithSlottedContent = SlottedTemplate.bind({});
WithSlottedContent.storyName = 'With Slotted Content';
WithSlottedContent.parameters = {
    docs: {
        description: {
            story: 'The `icon` slot sits before the title and the default slot fills the trailing edge, so status and actions travel with the row instead of being baked into props.',
        },
    },
};
