// Panels/handles are built with document.createElement + appendChild after the
// (empty) at-resizable-group tag has already been parsed, rather than nested
// directly in the template's markup. Nesting them at HTML-parse time deadlocks
// Stencil's lazy loader bundle — the panel's componentWillLoad awaits an
// @Method() call on the group, whose own upgrade is in turn waiting on its
// children — the same class of issue documented on at-resizable-group.e2e.html
// and at-sidebar-dual.e2e.html. Storybook serves the same lazy loader bundle
// the dev e2e server does, so it isn't just a test-harness concern here.
const buildPanels = (groupId, panels) => `
    <script>
    (function () {
        var group = document.getElementById('${groupId}');
        var specs = ${JSON.stringify(panels)};

        function build() {
            specs.forEach(function (spec) {
                var el = document.createElement(spec.tag);
                Object.keys(spec).forEach(function (key) {
                    if (key === 'tag' || key === 'text') return;
                    el.setAttribute(key, spec[key]);
                });
                if (spec.text) el.textContent = spec.text;
                group.appendChild(el);
            });
        }

        // customElements.whenDefined only confirms the tags' classes are registered, not
        // that this specific group instance has finished its own Stencil load cycle —
        // appending panels before that races the group's own bootstrap and can wedge it.
        // componentOnReady() waits for the actual instance.
        Promise.all(
            ['at-resizable-panel', 'at-resizable-handle'].map(function (tag) {
                return customElements.whenDefined(tag);
            }),
        )
            .then(function () {
                return group.componentOnReady ? group.componentOnReady() : null;
            })
            .then(build);
    })();
    </script>
`;
const HorizontalTemplate = () => `
    <at-resizable-group id="resizable-demo-horizontal" direction="horizontal" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    ${buildPanels('resizable-demo-horizontal', [
    {
        tag: 'at-resizable-panel',
        default_size: '20',
        min_size: '10',
        max_size: '40',
        collapsible: 'true',
        collapsed_size: '0',
        style: 'padding: 16px;',
        text: 'Sidebar (collapsible — drag past its min width, or press Enter on the handle)',
    },
    { tag: 'at-resizable-handle', has_grip: 'true' },
    {
        tag: 'at-resizable-panel',
        style: 'padding: 16px;',
        text: "Main content (no default_size — hugs whatever space its sized siblings don't claim)",
    },
    { tag: 'at-resizable-handle', has_grip: 'true' },
    {
        tag: 'at-resizable-panel',
        default_size: '25',
        min_size: '15',
        max_size: '50',
        style: 'padding: 16px;',
        text: 'Details panel',
    },
])}
`;
const VerticalTemplate = () => `
    <at-resizable-group id="resizable-demo-vertical" direction="vertical" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    ${buildPanels('resizable-demo-vertical', [
    {
        tag: 'at-resizable-panel',
        default_size: '60',
        min_size: '20',
        style: 'padding: 16px;',
        text: 'Top panel',
    },
    { tag: 'at-resizable-handle' },
    {
        tag: 'at-resizable-panel',
        default_size: '40',
        min_size: '20',
        style: 'padding: 16px;',
        text: 'Bottom panel',
    },
])}
`;
const PersistedTemplate = () => `
    <at-resizable-group id="resizable-demo-persisted" direction="horizontal" storage_key="storybook-resizable-demo" style="height: 320px; border: 1px solid var(--token-border-muted); display: block;"></at-resizable-group>
    ${buildPanels('resizable-demo-persisted', [
    {
        tag: 'at-resizable-panel',
        default_size: '30',
        min_size: '15',
        max_size: '60',
        style: 'padding: 16px;',
        text: 'Resize me, then reload the page — the width persists via storage_key.',
    },
    { tag: 'at-resizable-handle', has_grip: 'true' },
    {
        tag: 'at-resizable-panel',
        style: 'padding: 16px;',
        text: 'Main content',
    },
])}
`;
export default {
    title: 'Components/Resizable',
};
export const Horizontal = HorizontalTemplate.bind({});
export const Vertical = VerticalTemplate.bind({});
export const PersistedSizes = PersistedTemplate.bind({});
