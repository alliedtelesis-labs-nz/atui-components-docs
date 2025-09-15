const s=a=>`
<at-sidebar 
    width=${a.width} 
    default_open=${a.default_open}
    side=${a.side}
    collapsible=${a.collapsible}
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
`,r={title:"Components/Sidebar/Sidebar"},e=s.bind({});e.args={width:"menu",side:"left",default_open:!0,collapsible:"icon"};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
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
\``,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,r as default};
