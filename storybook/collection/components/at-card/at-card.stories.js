const Template = (args) => `
<at-card
    card_title="${args.card_title ?? ''}"
    subtitle="${args.subtitle ?? ''}"
    icon="${args.icon ?? ''}"
    content="${args.content ?? ''}"
    shadow="${args.shadow ?? 'sm'}"
    padding=${args.padding ? 'true' : 'false'}
    overflow=${args.overflow ? 'true' : 'false'}
    ${args.border ? 'border' : ''}
>
    <div
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Card Child</h1>
    </div>
</at-card>
`;
export default {
    title: 'Components/Card',
    argTypes: {
        shadow: {
            options: ['none', 'sm', 'lg'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    card_title: 'Title',
    icon: 'home',
    subtitle: 'Subtitle',
    content: 'Content',
    shadow: 'lg',
    overflow: true,
    padding: true,
    border: false,
};
//# sourceMappingURL=at-card.stories.js.map
