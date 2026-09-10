const i=n=>`
<at-sidebar 
    width=${n.width} 
    default_open=${n.default_open}
    side=${n.side}
    collapsible=${n.collapsible}
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
`,r={title:"Components/Sidebar/Sidebar"},e=i.bind({});e.args={width:"menu",side:"left",default_open:!0,collapsible:"icon"};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-sidebar 
    width=\${args.width} 
    default_open=\${args.default_open}
    side=\${args.side}
    collapsible=\${args.collapsible}
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
\``,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,r as default};
