const r=()=>`
    <at-sidebar-provider style="height: 500px; border: 1px solid var(--token-border-muted);">
        <at-sidebar side="left" trigger_id="nav" default_open="true" collapsible="icon" mode="push">
            <at-sidebar-trigger slot="sidebar-header"></at-sidebar-trigger>
            <at-sidebar-menu slot="sidebar-content">
                <at-sidebar-menuitem label="Dashboard" icon="settings"></at-sidebar-menuitem>
                <at-sidebar-menuitem label="Devices" icon="settings"></at-sidebar-menuitem>
            </at-sidebar-menu>
        </at-sidebar>

        <at-sidebar-inset>
            <div style="display:flex; align-items:center; gap: 8px; padding: 16px; border-bottom: 1px solid var(--token-border-muted);">
                <at-button data-sidebar="nav" label="Toggle nav"></at-button>
                <at-button data-sidebar="tools" label="Toggle tools"></at-button>
            </div>
            <div style="padding: 16px;">Shared page content — reserves no margin for either sidebar; both push it via ordinary flex layout.</div>
        </at-sidebar-inset>

        <at-sidebar side="right" trigger_id="tools" width="panel-sm" collapsible="offcanvas" mode="push">
            <div slot="sidebar-content" style="padding: 16px;">Tools panel content</div>
        </at-sidebar>
    </at-sidebar-provider>
`,d={title:"Components/Sidebar/Dual Sidebar"},e=r.bind({});var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`
    <at-sidebar-provider style="height: 500px; border: 1px solid var(--token-border-muted);">
        <at-sidebar side="left" trigger_id="nav" default_open="true" collapsible="icon" mode="push">
            <at-sidebar-trigger slot="sidebar-header"></at-sidebar-trigger>
            <at-sidebar-menu slot="sidebar-content">
                <at-sidebar-menuitem label="Dashboard" icon="settings"></at-sidebar-menuitem>
                <at-sidebar-menuitem label="Devices" icon="settings"></at-sidebar-menuitem>
            </at-sidebar-menu>
        </at-sidebar>

        <at-sidebar-inset>
            <div style="display:flex; align-items:center; gap: 8px; padding: 16px; border-bottom: 1px solid var(--token-border-muted);">
                <at-button data-sidebar="nav" label="Toggle nav"></at-button>
                <at-button data-sidebar="tools" label="Toggle tools"></at-button>
            </div>
            <div style="padding: 16px;">Shared page content — reserves no margin for either sidebar; both push it via ordinary flex layout.</div>
        </at-sidebar-inset>

        <at-sidebar side="right" trigger_id="tools" width="panel-sm" collapsible="offcanvas" mode="push">
            <div slot="sidebar-content" style="padding: 16px;">Tools panel content</div>
        </at-sidebar>
    </at-sidebar-provider>
\``,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const s=["DualSidebar"];export{e as DualSidebar,s as __namedExportsOrder,d as default};
