const STEPS = [
    { label: 'Details' },
    { label: 'Policy' },
    { label: 'Schedule', optional: true },
    { label: 'Review' },
];
const Template = (args) => `
<div style="width: ${args.orientation === 'vertical' ? '280px' : '640px'}">
    <at-stepper
        id="story-stepper"
        current="${args.current ?? 0}"
        orientation="${args.orientation ?? 'horizontal'}"
        ${args.linear === false ? '' : 'linear'}
        ${args.show_navigation ? 'show_navigation' : ''}
    ></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('story-stepper');
        stepper.steps = ${JSON.stringify(STEPS)};
    })();
</script>`;
export default {
    title: 'Components/Stepper',
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
        },
    },
};
/** Mid-flow: earlier steps complete, the third current, the rest pending. */
export const Default = Template.bind({});
Default.args = {
    current: 2,
    orientation: 'horizontal',
    linear: true,
};
/** Vertical layout, for a narrow column or a side rail. */
export const Vertical = Template.bind({});
Vertical.args = {
    current: 2,
    orientation: 'vertical',
    linear: true,
};
/** With the built-in Back / Next control row. */
export const WithNavigation = Template.bind({});
WithNavigation.args = {
    current: 1,
    orientation: 'horizontal',
    linear: true,
    show_navigation: true,
};
const StateTemplate = () => `
<div style="width: 640px">
    <at-stepper id="state-stepper" current="2"></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('state-stepper');
        stepper.steps = ${JSON.stringify([
    { label: 'Completed' },
    { label: 'Skipped', state: 'skipped', optional: true },
    { label: 'Current' },
    { label: 'Error', state: 'error' },
    { label: 'Pending' },
])};
    })();
</script>`;
/** All five step states side by side. */
export const AllStates = StateTemplate.bind({});
AllStates.args = {};
