const Template = (args) => {
    var _a, _b;
    return `
<at-avatar
    ${args.src ? `src="${args.src}"` : ''}
    ${args.alt ? `alt="${args.alt}"` : ''}
    ${args.initials ? `initials="${args.initials}"` : ''}
    ${args.ariaLabel ? `aria-label="${args.ariaLabel}"` : ''}
    ${args.decorative ? 'decorative' : ''}
    size="${(_a = args.size) !== null && _a !== void 0 ? _a : 'md'}"
    variant="${(_b = args.variant) !== null && _b !== void 0 ? _b : 'primary'}"
/>`;
};
export default {
    title: 'Components/Avatar',
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['primary', 'secondary', 'muted'],
            control: { type: 'select' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    initials: 'JD',
    size: 'md',
    variant: 'primary',
};
export const WithImage = Template.bind({});
WithImage.args = {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    alt: 'Profile picture',
    size: 'md',
    variant: 'primary',
};
export const Primary = Template.bind({});
Primary.args = {
    initials: 'PU',
    size: 'lg',
    variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
    initials: 'SU',
    size: 'lg',
    variant: 'secondary',
};
export const Muted = Template.bind({});
Muted.args = {
    initials: 'MU',
    size: 'lg',
    variant: 'muted',
};
export const Large = Template.bind({});
Large.args = {
    initials: 'LA',
    size: 'xl',
    variant: 'primary',
};
export const Small = Template.bind({});
Small.args = {
    initials: 'SM',
    size: 'sm',
    variant: 'primary',
};
export const CustomInitials = Template.bind({});
CustomInitials.args = {
    initials: 'AB',
    size: 'lg',
    variant: 'primary',
};
export const WithAccessibleLabel = Template.bind({});
WithAccessibleLabel.args = {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    ariaLabel: "John Doe's profile picture",
    size: 'md',
    variant: 'primary',
};
export const DecorativeAvatar = Template.bind({});
DecorativeAvatar.args = {
    initials: 'DC',
    decorative: true,
    size: 'md',
    variant: 'secondary',
};
export const UserProfileExample = Template.bind({});
UserProfileExample.args = {
    initials: 'JS',
    ariaLabel: 'Jane Smith, Senior Developer',
    size: 'lg',
    variant: 'primary',
};
//# sourceMappingURL=at-avatar.stories.js.map
