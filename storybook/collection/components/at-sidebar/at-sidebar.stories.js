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
