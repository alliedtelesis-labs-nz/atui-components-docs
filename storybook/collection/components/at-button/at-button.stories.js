const Template = (args) => `
<at-button
    label="${args.label ?? ''}"
    size="${args.size ?? 'lg'}"
    type="${args.type ?? 'primary'}"
    spinner_delay_ms=${args.spinner_delay_ms ?? 1000}
    ${args.submit ? 'submit' : ''}
    ${args.border ? 'border' : ''}
    ${args.rounded ? 'rounded' : ''}
    ${args.disabled ? 'disabled' : ''}
    ${args.in_progress ? 'in_progress' : ''}
>
    <at-icon slot="icon" name="${args.icon ?? ''}" />
    <at-icon slot="icon_after" name="${args.icon_after ?? ''}" />
</at-button>
`;
export default {
    title: 'Components/Button',
    argTypes: {
        size: {
            options: ['lg', 'md', 'sm'],
            control: { type: 'radio' },
        },
        type: {
            options: [
                'primary',
                'primaryOutline',
                'primaryText',
                'secondary',
                'secondaryOutline',
                'secondaryText',
                'destructive',
                'destructiveOutline',
                'destructiveText',
            ],
            control: { type: 'select' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    label: 'Button',
    icon: 'home',
    disabled: false,
    icon_after: '',
    in_progress: false,
    size: 'lg',
    spinner_delay_ms: 1000,
    submit: false,
    type: 'primary',
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Button',
    icon: 'home',
    disabled: true,
    icon_after: '',
    in_progress: false,
    size: 'lg',
    spinner_delay_ms: 1000,
    submit: false,
    type: 'primary',
};
export const Spinner = Template.bind({});
Spinner.args = {
    label: 'Button',
    icon: 'home',
    disabled: false,
    icon_after: '',
    in_progress: true,
    size: 'lg',
    spinner_delay_ms: 1000,
    submit: false,
    type: 'primary',
};
const InProgressAfterLoadTemplate = (args) => `
<at-button
    id="in-progress-after-load"
    label="${args.label}"
    spinner_delay_ms=${args.spinner_delay_ms}
></at-button>
<script>
{
    const button = document.querySelector('#in-progress-after-load');
    button.addEventListener('atuiClick', () => {
        button.in_progress = true;
        setTimeout(() => {
            button.in_progress = false;
        }, ${args.work_duration_ms});
    });
}
</script>
`;
export const InProgressAfterLoad = InProgressAfterLoadTemplate.bind({});
InProgressAfterLoad.args = {
    label: 'Save',
    spinner_delay_ms: 1000,
    work_duration_ms: 3000,
};
