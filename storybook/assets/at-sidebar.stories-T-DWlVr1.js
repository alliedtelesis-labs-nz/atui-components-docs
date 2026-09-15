const c=e=>`
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
`,h={title:"Components/Sidebar/Sidebar"},t=c.bind({});t.args={width:"menu",side:"left",default_open:!0,collapsible:"icon"};const p=e=>`
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
`,a=p.bind({});a.args={width:"menu",side:"left",default_open:!0,collapsible:"icon",resizable:!0,min_width:"var(--token-width-sidebar-collapsed)",max_width:"var(--token-width-panel-xl)",storage_key:"storybook-resizable-sidebar"};const g=()=>`
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
<\/script>
`,s=g.bind({});s.args={};var i,n,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
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
\``,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var d,l,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
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
\``,...(b=(l=a.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var o,m,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`
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
<\/script>
\``,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Default","ResizableSidebar","AppShell"];export{s as AppShell,t as Default,a as ResizableSidebar,v as __namedExportsOrder,h as default};
