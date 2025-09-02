const c=e=>`
<atui-dialog dialog_id="${e.dialog_id??""}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="Dialog Title" icon="preview"></atui-header>
        <atui-button label="Close dialog" onclick={document.querySelector("#${e.dialog_id??""}").close()} />
    </div>
</atui-dialog>
<atui-button label="Open Dialog" onclick={document.querySelector("#${e.dialog_id??""}").showModal()} />
`,m=e=>`
<atui-button data-id="${e.trigger_id}" label="${e.trigger_label||"Open Dialog"}" type="primary"></atui-button>
<atui-dialog dialog_id="${e.dialog_id}" trigger_id="${e.trigger_id}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="External Trigger Dialog" icon="preview"></atui-header>
        <p>This dialog was opened using an external trigger element!</p>
    </div>
</atui-dialog>
`,b=()=>`
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">User</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <atui-button data-id="user-action-1" label="View Details" type="primary" size="sm"></atui-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <atui-button data-id="user-action-2" label="View Details" type="primary" size="sm"></atui-button>
            </td>
        </tr>
    </tbody>
</table>

<atui-dialog dialog_id="dialog-1" trigger_id="user-action-1">
    <div style="padding: 2rem;">
        <h3>John Doe Details</h3>
        <p>User ID: user-1</p>
        <p>Email: john.doe@example.com</p>
    </div>
</atui-dialog>

<atui-dialog dialog_id="dialog-2" trigger_id="user-action-2">
    <div style="padding: 2rem;">
        <h3>Jane Smith Details</h3>
        <p>User ID: user-2</p>
        <p>Email: jane.smith@example.com</p>
    </div>
</atui-dialog>
`,h={title:"Components/Dialog"},t=c.bind({});t.args={dialog_id:"dialog"};const d=m.bind({});d.args={dialog_id:"external-dialog",trigger_id:"external-trigger",trigger_label:"Open Dialog"};const i=b.bind({});i.storyName="Table Row Example";i.parameters={docs:{description:{story:"Example showing how to use external triggers in table rows with unique IDs to avoid collisions."}}};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-dialog dialog_id="\${args.dialog_id ?? ''}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="Dialog Title" icon="preview"></atui-header>
        <atui-button label="Close dialog" onclick={document.querySelector("#\${args.dialog_id ?? ''}").close()} />
    </div>
</atui-dialog>
<atui-button label="Open Dialog" onclick={document.querySelector("#\${args.dialog_id ?? ''}").showModal()} />
\``,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,n,s;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-button data-id="\${args.trigger_id}" label="\${args.trigger_label || 'Open Dialog'}" type="primary"></atui-button>
<atui-dialog dialog_id="\${args.dialog_id}" trigger_id="\${args.trigger_id}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="External Trigger Dialog" icon="preview"></atui-header>
        <p>This dialog was opened using an external trigger element!</p>
    </div>
</atui-dialog>
\``,...(s=(n=d.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var g,p,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">User</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <atui-button data-id="user-action-1" label="View Details" type="primary" size="sm"></atui-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <atui-button data-id="user-action-2" label="View Details" type="primary" size="sm"></atui-button>
            </td>
        </tr>
    </tbody>
</table>

<atui-dialog dialog_id="dialog-1" trigger_id="user-action-1">
    <div style="padding: 2rem;">
        <h3>John Doe Details</h3>
        <p>User ID: user-1</p>
        <p>Email: john.doe@example.com</p>
    </div>
</atui-dialog>

<atui-dialog dialog_id="dialog-2" trigger_id="user-action-2">
    <div style="padding: 2rem;">
        <h3>Jane Smith Details</h3>
        <p>User ID: user-2</p>
        <p>Email: jane.smith@example.com</p>
    </div>
</atui-dialog>
\``,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const x=["Default","ExternalTrigger","TableRowExample"];export{t as Default,d as ExternalTrigger,i as TableRowExample,x as __namedExportsOrder,h as default};
