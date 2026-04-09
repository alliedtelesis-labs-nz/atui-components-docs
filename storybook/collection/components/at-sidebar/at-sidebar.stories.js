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
          
          <at-sidebar-menu-sub>
            <at-sidebar-menuitem
              label="menuitem in sub menu"
              icon="settings"
              badge="87"
            >
            </at-sidebar-menuitem>
          </at-sidebar-menu-sub>

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
