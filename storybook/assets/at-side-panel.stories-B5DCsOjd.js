const y=e=>`
<at-side-panel 
    panel_id="${e.panel_id??""}"
    panel_subtitle="${e.panel_subtitle??""}"
    panel_title="${e.panel_title??""}"
    origin="${e.origin??""}"
    size="${e.size??""}"
    show_close_button=${!!e.show_close_button}
    ${e.click_out_to_close?"click_out_to_close":""}
    ${e.hide_scrollbar?"hide_scrollbar":""}
>
    <at-message message_title="Sidepanel content" icon="preview" slot="content"></at-message>
</at-side-panel>
<at-button label="Open Sidepanel" onclick={document.querySelector("#${e.panel_id??""}").showModal()} />
`,x=e=>`
<at-button id="${e.trigger_id}" label="${e.trigger_label||"Open Side Panel"}" type="primary"></at-button>
<at-side-panel 
    panel_id="${e.panel_id}" 
    trigger_id="${e.trigger_id}"
    panel_title="${e.panel_title}"
    panel_subtitle="${e.panel_subtitle}"
    origin="${e.origin}"
    size="${e.size}"
>
    <div slot="content" style="padding: 2rem;">
        <h3>External Trigger Panel</h3>
        <p>This side panel was opened using an external trigger element!</p>
        <at-message message_title="Panel Content" icon="info" />
    </div>
</at-side-panel>
`,h=()=>`
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Service</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Database Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Running</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button id="service-config-1" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></at-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Web Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Stopped</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button id="service-config-2" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></at-button>
            </td>
        </tr>
    </tbody>
</table>

<at-side-panel panel_id="panel-1" trigger_id="service-config-1" panel_title="Database Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Database Configuration</h3>
        <p>Service ID: db-service-1</p>
        <p>Port: 5432</p>
        <p>Status: Running</p>
        <at-message message_title="Configuration saved successfully" icon="check" />
    </div>
</at-side-panel>

<at-side-panel panel_id="panel-2" trigger_id="service-config-2" panel_title="Web Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Web Service Configuration</h3>
        <p>Service ID: web-service-1</p>
        <p>Port: 8080</p>
        <p>Status: Stopped</p>
        <at-message message_title="Service configuration panel" icon="settings" />
    </div>
</at-side-panel>
`,f={title:"Components/Side Panel",argTypes:{size:{options:["xs","sm","md","lg","xl"],control:{type:"radio"}},origin:{options:["left","right"],control:{type:"radio"}}}},v=e=>`
<at-button data-sidepanel="footer-panel" label="Open Sidepanel" type="primary"></at-button>
<at-side-panel
    trigger_id="footer-panel"
    panel_title="${e.panel_title??""}"
    panel_subtitle="${e.panel_subtitle??""}"
    size="${e.size??"md"}"
>
    <at-input label="Name"></at-input>
    <at-input label="Description"></at-input>
    <div slot="footer" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
        <at-button label="Delete" type="destructiveOutline"></at-button>
        <div style="display: flex; gap: 8px;">
            <at-button label="Cancel" type="secondaryOutline"></at-button>
            <at-button label="Save" type="primary"></at-button>
        </div>
    </div>
</at-side-panel>
`,a=y.bind({});a.args={panel_id:"panel",panel_title:"Panel title",panel_subtitle:"Panel subtitle",origin:"right",size:"xs",hide_scrollbar:!1,click_out_to_close:!1,show_close_button:!0};const n=x.bind({});n.args={panel_id:"external-panel",trigger_id:"external-panel-trigger",trigger_label:"Open Side Panel",panel_title:"External Trigger Panel",panel_subtitle:"Opened via external trigger",origin:"right",size:"md"};const i=h.bind({});i.storyName="Table Row Example";i.parameters={docs:{description:{story:"Example showing how to use external triggers in table rows with unique IDs to avoid collisions."}}};const t=v.bind({});t.storyName="Footer Slot";t.args={panel_title:"Edit item",panel_subtitle:"Actions live in the footer slot",size:"md"};t.parameters={docs:{description:{story:"The footer slot carries the header's surface treatment. It sits directly beneath short content and sticks to the bottom edge only once the panel scrolls."}}};var l,s,r;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-side-panel 
    panel_id="\${args.panel_id ?? ''}"
    panel_subtitle="\${args.panel_subtitle ?? ''}"
    panel_title="\${args.panel_title ?? ''}"
    origin="\${args.origin ?? ''}"
    size="\${args.size ?? ''}"
    show_close_button=\${args.show_close_button ? true : false}
    \${args.click_out_to_close ? 'click_out_to_close' : ''}
    \${args.hide_scrollbar ? 'hide_scrollbar' : ''}
>
    <at-message message_title="Sidepanel content" icon="preview" slot="content"></at-message>
</at-side-panel>
<at-button label="Open Sidepanel" onclick={document.querySelector("#\${args.panel_id ?? ''}").showModal()} />
\``,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var d,o,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-button id="\${args.trigger_id}" label="\${args.trigger_label || 'Open Side Panel'}" type="primary"></at-button>
<at-side-panel 
    panel_id="\${args.panel_id}" 
    trigger_id="\${args.trigger_id}"
    panel_title="\${args.panel_title}"
    panel_subtitle="\${args.panel_subtitle}"
    origin="\${args.origin}"
    size="\${args.size}"
>
    <div slot="content" style="padding: 2rem;">
        <h3>External Trigger Panel</h3>
        <p>This side panel was opened using an external trigger element!</p>
        <at-message message_title="Panel Content" icon="info" />
    </div>
</at-side-panel>
\``,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var g,c,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Service</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Database Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Running</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button id="service-config-1" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></at-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Web Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Stopped</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button id="service-config-2" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></at-button>
            </td>
        </tr>
    </tbody>
</table>

<at-side-panel panel_id="panel-1" trigger_id="service-config-1" panel_title="Database Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Database Configuration</h3>
        <p>Service ID: db-service-1</p>
        <p>Port: 5432</p>
        <p>Status: Running</p>
        <at-message message_title="Configuration saved successfully" icon="check" />
    </div>
</at-side-panel>

<at-side-panel panel_id="panel-2" trigger_id="service-config-2" panel_title="Web Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Web Service Configuration</h3>
        <p>Service ID: web-service-1</p>
        <p>Port: 8080</p>
        <p>Status: Stopped</p>
        <at-message message_title="Service configuration panel" icon="settings" />
    </div>
</at-side-panel>
\``,...(b=(c=i.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,_,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-button data-sidepanel="footer-panel" label="Open Sidepanel" type="primary"></at-button>
<at-side-panel
    trigger_id="footer-panel"
    panel_title="\${args.panel_title ?? ''}"
    panel_subtitle="\${args.panel_subtitle ?? ''}"
    size="\${args.size ?? 'md'}"
>
    <at-input label="Name"></at-input>
    <at-input label="Description"></at-input>
    <div slot="footer" style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
        <at-button label="Delete" type="destructiveOutline"></at-button>
        <div style="display: flex; gap: 8px;">
            <at-button label="Cancel" type="secondaryOutline"></at-button>
            <at-button label="Save" type="primary"></at-button>
        </div>
    </div>
</at-side-panel>
\``,...(m=(_=t.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const S=["Default","ExternalTrigger","TableRowExample","FooterSlot"];export{a as Default,n as ExternalTrigger,t as FooterSlot,i as TableRowExample,S as __namedExportsOrder,f as default};
