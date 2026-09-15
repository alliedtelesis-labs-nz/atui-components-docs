const Template = (args) => `
<at-sidebar 
    width=${args.width} 
    default_open=${args.default_open}
    side=${args.side}
    collapsible=${args.collapsible}
      >

      <at-sidebar-trigger slot="sidebar-header"></at-sidebar-trigger>


        <at-sidebar-menu
          slot="sidebar-content"
        >
          <at-sidebar-menuitem
            label="menuitem"
            icon="settings"
            badge="99+"
          >
          </at-sidebar-menuitem>
          
          <at-sidebar-submenu label="submenu">
            <at-sidebar-menuitem
              slot="submenu-content"
              label="menuitem in sub menu"
              icon="settings"
              badge="87"
            >
            </at-sidebar-menuitem>
          </at-sidebar-submenu>

        </at-sidebar-menu>
        <div slot="page-content" class="h-[400px] w-full bg-warning">
          Sample page content
        </div>
      </at-sidebar>
`;
export default {
    title: 'Components/Sidebar/Sidebar',
};
export const Default = Template.bind({});
Default.args = {
    width: 'menu',
    side: 'left',
    default_open: true,
    collapsible: 'icon',
};
const ResizableTemplate = (args) => `
<at-sidebar
    width=${args.width}
    default_open=${args.default_open}
    side=${args.side}
    collapsible=${args.collapsible}
    resizable=${args.resizable}
    min_width="${args.min_width}"
    max_width="${args.max_width}"
    storage_key="${args.storage_key}"
      >

      <at-sidebar-trigger slot="sidebar-header"></at-sidebar-trigger>

        <at-sidebar-menu
          slot="sidebar-content"
        >
          <at-sidebar-menuitem
            label="menuitem"
            icon="settings"
            badge="99+"
          >
          </at-sidebar-menuitem>

          <at-sidebar-submenu label="submenu">
            <at-sidebar-menuitem
              slot="submenu-content"
              label="menuitem in sub menu"
              icon="settings"
              badge="87"
            >
            </at-sidebar-menuitem>
          </at-sidebar-submenu>

        </at-sidebar-menu>
        <div slot="page-content" class="h-[400px] w-full bg-warning">
          Drag the sidebar's edge to resize it. Shrinking it past min_width
          snaps it closed; the width persists across reloads via storage_key.
        </div>
      </at-sidebar>
`;
export const ResizableSidebar = ResizableTemplate.bind({});
ResizableSidebar.args = {
    width: 'menu',
    side: 'left',
    default_open: true,
    collapsible: 'icon',
    resizable: true,
    min_width: 'var(--token-width-sidebar-collapsed)',
    max_width: 'var(--token-width-panel-xl)',
    storage_key: 'storybook-resizable-sidebar',
};
/**
 * The multi-panel app shell: one at-sidebar-provider holding a left nav, the page content in
 * at-sidebar-inset, and a right rail for an assistant. Both rails push the content rather than
 * float over it, and each carries its own open state.
 *
 * The panels are appended after the custom elements are defined rather than written as nested
 * markup: under Storybook's lazy loader a provider parsed with at-sidebar children deadlocks,
 * because the child's componentWillLoad awaits an @Method() on the provider while the
 * provider's own upgrade waits on its children. Consuming apps building from
 * dist-custom-elements are unaffected, so this is a story-authoring constraint, not the shape
 * real applications write.
 */
const AppShellTemplate = () => `
<at-sidebar-provider class="h-[420px] w-full"></at-sidebar-provider>
<script>
  (async () => {
    await Promise.all(
      ['at-sidebar', 'at-sidebar-inset', 'at-sidebar-provider'].map((tag) =>
        customElements.whenDefined(tag),
      ),
    );

    const provider = document.querySelector('at-sidebar-provider');

    const nav = document.createElement('at-sidebar');
    nav.setAttribute('side', 'left');
    nav.setAttribute('trigger_id', 'shell-nav');
    nav.setAttribute('width', 'menu');
    nav.setAttribute('collapsible', 'icon');
    nav.setAttribute('default_open', 'true');
    nav.innerHTML =
      '<at-sidebar-menu slot="sidebar-content">' +
      '<at-sidebar-menuitem label="Dashboard" icon="dashboard"></at-sidebar-menuitem>' +
      '<at-sidebar-menuitem label="Devices" icon="settings"></at-sidebar-menuitem>' +
      '</at-sidebar-menu>' +
      '<at-sidebar-trigger slot="sidebar-footer"></at-sidebar-trigger>';

    const inset = document.createElement('at-sidebar-inset');
    inset.innerHTML =
      '<div class="p-16 flex flex-col items-start gap-8">' +
      '<p>Page content. The inset is the scroll container and shrinks as either rail opens.</p>' +
      '<at-button data-sidebar="shell-chat" label="Toggle assistant"></at-button>' +
      '</div>';

    const chat = document.createElement('at-sidebar');
    chat.setAttribute('side', 'right');
    chat.setAttribute('trigger_id', 'shell-chat');
    chat.setAttribute('width', 'panel-sm');
    chat.setAttribute('collapsible', 'offcanvas');
    chat.innerHTML =
      '<div slot="sidebar-content" class="p-16">Assistant panel</div>';

    provider.append(nav, inset, chat);
  })();
</script>
`;
export const AppShell = AppShellTemplate.bind({});
AppShell.args = {};
