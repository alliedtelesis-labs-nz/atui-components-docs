const l=e=>`
<at-sidebar 
    width=${e.width} 
    default_open=${e.default_open}
    side=${e.side}
    collapsible=${e.collapsible}
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
`,m={title:"Components/Sidebar/Sidebar"},a=l.bind({});a.args={width:"menu",side:"left",default_open:!0,collapsible:"icon"};const o=e=>`
<at-sidebar
    width=${e.width}
    default_open=${e.default_open}
    side=${e.side}
    collapsible=${e.collapsible}
    resizable=${e.resizable}
    min_width="${e.min_width}"
    max_width="${e.max_width}"
    storage_key="${e.storage_key}"
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
`,t=o.bind({});t.args={width:"menu",side:"left",default_open:!0,collapsible:"icon",resizable:!0,min_width:"var(--token-width-sidebar-collapsed)",max_width:"var(--token-width-panel-xl)",storage_key:"storybook-resizable-sidebar"};var n,i,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
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
\``,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var r,d,b;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-sidebar
    width=\${args.width}
    default_open=\${args.default_open}
    side=\${args.side}
    collapsible=\${args.collapsible}
    resizable=\${args.resizable}
    min_width="\${args.min_width}"
    max_width="\${args.max_width}"
    storage_key="\${args.storage_key}"
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
\``,...(b=(d=t.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const u=["Default","ResizableSidebar"];export{a as Default,t as ResizableSidebar,u as __namedExportsOrder,m as default};
