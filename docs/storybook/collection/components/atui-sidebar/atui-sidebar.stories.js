const Template = (args) => `
<atui-sidebar 
    width=${args.width} 
    default_open=${args.default_open}
    side=${args.side}
    collapsible=${args.collapsible}
      >

      <atui-sidebar-trigger slot="sidebar-header"></atui-sidebar-trigger>


        <atui-sidebar-menu
          slot="sidebar-content"
        >
          <atui-sidebar-menuitem
            label="menuitem"
            icon="settings"
            badge="99+"
          >
          </atui-sidebar-menuitem>
          
          <atui-sidebar-menu-sub>
            <atui-sidebar-menuitem
              label="menuitem in sub menu"
              icon="settings"
              badge="87"
            >
            </atui-sidebar-menuitem>
          </atui-sidebar-menu-sub>

        </atui-sidebar-menu>
        <div slot="page-content" class="h-[400px] w-full bg-warning">
          Sample page content
        </div>
      </atui-sidebar>
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
//# sourceMappingURL=atui-sidebar.stories.js.map
