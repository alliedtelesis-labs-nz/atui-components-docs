const v=e=>`
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
`,S=e=>`
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
`,$=()=>`
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
`,C={title:"Components/Side Panel",argTypes:{size:{options:["xs","sm","md","lg","xl"],control:{type:"radio"}},origin:{options:["left","right"],control:{type:"radio"}}}},w=e=>`
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
`,z=e=>`
<at-button data-sidepanel="flush-panel" label="Open Sidepanel" type="primary"></at-button>
<at-side-panel
    trigger_id="flush-panel"
    panel_title="${e.panel_title??""}"
    size="${e.size??"lg"}"
    padding="false"
>
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px;">
        <h3 style="margin: 0;">Site summary</h3>
        <at-message message_title="This page component owns its own spacing" icon="info"></at-message>
    </div>
</at-side-panel>
`,i=v.bind({});i.args={panel_id:"panel",panel_title:"Panel title",panel_subtitle:"Panel subtitle",origin:"right",size:"xs",hide_scrollbar:!1,click_out_to_close:!1,show_close_button:!0};const l=S.bind({});l.args={panel_id:"external-panel",trigger_id:"external-panel-trigger",trigger_label:"Open Side Panel",panel_title:"External Trigger Panel",panel_subtitle:"Opened via external trigger",origin:"right",size:"md"};const n=$.bind({});n.storyName="Table Row Example";n.parameters={docs:{description:{story:"Example showing how to use external triggers in table rows with unique IDs to avoid collisions."}}};const t=w.bind({});t.storyName="Footer Slot";t.args={panel_title:"Edit item",panel_subtitle:"Actions live in the footer slot",size:"md"};t.parameters={docs:{description:{story:"The footer slot carries the header's surface treatment. It sits directly beneath short content and sticks to the bottom edge only once the panel scrolls."}}};const a=z.bind({});a.storyName="Flush Content";a.args={panel_title:"Site summary",size:"lg"};a.parameters={docs:{description:{story:'The content area is padded by default. Set `padding="false"` when the slotted content pads itself -- a peek view rendering a page summary usually spaces at the page component, and would otherwise be indented twice.'}}};var s,d,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
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
\``,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var o,p,g;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
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
\``,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var c,u,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
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
\``,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,_,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
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
\``,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<at-button data-sidepanel="flush-panel" label="Open Sidepanel" type="primary"></at-button>
<at-side-panel
    trigger_id="flush-panel"
    panel_title="\${args.panel_title ?? ''}"
    size="\${args.size ?? 'lg'}"
    padding="false"
>
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px;">
        <h3 style="margin: 0;">Site summary</h3>
        <at-message message_title="This page component owns its own spacing" icon="info"></at-message>
    </div>
</at-side-panel>
\``,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const T=["Default","ExternalTrigger","TableRowExample","FooterSlot","FlushContent"];export{i as Default,l as ExternalTrigger,a as FlushContent,t as FooterSlot,n as TableRowExample,T as __namedExportsOrder,C as default};
