const u=e=>`
<atui-side-panel 
    panel_id="${e.panel_id??""}"
    panel_subtitle="${e.panel_subtitle??""}"
    panel_title="${e.panel_title??""}"
    origin="${e.origin??""}"
    size="${e.size??""}"
    show_close_button=${!!e.show_close_button}
    ${e.click_out_to_close?"click_out_to_close":""}
    ${e.hide_scrollbar?"hide_scrollbar":""}
>
    <atui-message message_title="Sidepanel content" icon="preview" slot="content"></atui-message>
</atui-side-panel>
<atui-button label="Open Sidepanel" onclick={document.querySelector("#${e.panel_id??""}").showModal()} />
`,b=e=>`
<atui-button id="${e.trigger_id}" label="${e.trigger_label||"Open Side Panel"}" type="primary"></atui-button>
<atui-side-panel 
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
        <atui-message message_title="Panel Content" icon="info" />
    </div>
</atui-side-panel>
`,_=()=>`
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
                <atui-button id="service-config-1" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></atui-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Web Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Stopped</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <atui-button id="service-config-2" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></atui-button>
            </td>
        </tr>
    </tbody>
</table>

<atui-side-panel panel_id="panel-1" trigger_id="service-config-1" panel_title="Database Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Database Configuration</h3>
        <p>Service ID: db-service-1</p>
        <p>Port: 5432</p>
        <p>Status: Running</p>
        <atui-message message_title="Configuration saved successfully" icon="check" />
    </div>
</atui-side-panel>

<atui-side-panel panel_id="panel-2" trigger_id="service-config-2" panel_title="Web Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Web Service Configuration</h3>
        <p>Service ID: web-service-1</p>
        <p>Port: 8080</p>
        <p>Status: Stopped</p>
        <atui-message message_title="Service configuration panel" icon="settings" />
    </div>
</atui-side-panel>
`,m={title:"Components/Side Panel",argTypes:{size:{options:["xs","sm","md","lg","xl"],control:{type:"radio"}},origin:{options:["left","right"],control:{type:"radio"}}}},i=u.bind({});i.args={panel_id:"panel",panel_title:"Panel title",panel_subtitle:"Panel subtitle",origin:"right",size:"xs",hide_scrollbar:!1,click_out_to_close:!1,show_close_button:!0};const n=b.bind({});n.args={panel_id:"external-panel",trigger_id:"external-panel-trigger",trigger_label:"Open Side Panel",panel_title:"External Trigger Panel",panel_subtitle:"Opened via external trigger",origin:"right",size:"md"};const t=_.bind({});t.storyName="Table Row Example";t.parameters={docs:{description:{story:"Example showing how to use external triggers in table rows with unique IDs to avoid collisions."}}};var a,d,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-side-panel 
    panel_id="\${args.panel_id ?? ''}"
    panel_subtitle="\${args.panel_subtitle ?? ''}"
    panel_title="\${args.panel_title ?? ''}"
    origin="\${args.origin ?? ''}"
    size="\${args.size ?? ''}"
    show_close_button=\${args.show_close_button ? true : false}
    \${args.click_out_to_close ? 'click_out_to_close' : ''}
    \${args.hide_scrollbar ? 'hide_scrollbar' : ''}
>
    <atui-message message_title="Sidepanel content" icon="preview" slot="content"></atui-message>
</atui-side-panel>
<atui-button label="Open Sidepanel" onclick={document.querySelector("#\${args.panel_id ?? ''}").showModal()} />
\``,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var s,r,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<atui-button id="\${args.trigger_id}" label="\${args.trigger_label || 'Open Side Panel'}" type="primary"></atui-button>
<atui-side-panel 
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
        <atui-message message_title="Panel Content" icon="info" />
    </div>
</atui-side-panel>
\``,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var p,g,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
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
                <atui-button id="service-config-1" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></atui-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Web Service</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Stopped</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <atui-button id="service-config-2" label="Configure" type="primary" size="sm" style="margin-right: 8px;"></atui-button>
            </td>
        </tr>
    </tbody>
</table>

<atui-side-panel panel_id="panel-1" trigger_id="service-config-1" panel_title="Database Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Database Configuration</h3>
        <p>Service ID: db-service-1</p>
        <p>Port: 5432</p>
        <p>Status: Running</p>
        <atui-message message_title="Configuration saved successfully" icon="check" />
    </div>
</atui-side-panel>

<atui-side-panel panel_id="panel-2" trigger_id="service-config-2" panel_title="Web Service Config" size="md">
    <div slot="content" style="padding: 2rem;">
        <h3>Web Service Configuration</h3>
        <p>Service ID: web-service-1</p>
        <p>Port: 8080</p>
        <p>Status: Stopped</p>
        <atui-message message_title="Service configuration panel" icon="settings" />
    </div>
</atui-side-panel>
\``,...(c=(g=t.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const x=["Default","ExternalTrigger","TableRowExample"];export{i as Default,n as ExternalTrigger,t as TableRowExample,x as __namedExportsOrder,m as default};
