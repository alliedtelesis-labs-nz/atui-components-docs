const s=i=>`
<atui-sidebar 
    width=${i.width} 
    default_open=${i.default_open}
    side=${i.side}
    collapsible=${i.collapsible}
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
`,u={title:"Components/Sidebar/Sidebar"},e=s.bind({});e.args={width:"menu",side:"left",default_open:!0,collapsible:"icon"};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-sidebar 
    width=\${args.width} 
    default_open=\${args.default_open}
    side=\${args.side}
    collapsible=\${args.collapsible}
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
\``,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,u as default};
