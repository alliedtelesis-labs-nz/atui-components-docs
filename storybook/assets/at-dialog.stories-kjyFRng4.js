const x=e=>`
<at-dialog dialog_id="${e.dialog_id??""}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <at-header header_title="Dialog Title">
            <at-icon slot="icon" name="home" />
        </at-header>
        <at-button label="Close dialog" onclick={document.querySelector("#${e.dialog_id??""}").close()} />
    </div>
</at-dialog>
<at-button label="Open Dialog" onclick={document.querySelector("#${e.dialog_id??""}").showModal()} />
`,_=e=>`
<at-button data-dialog="${e.trigger_id}" label="${e.trigger_label||"Open Dialog"}" type="primary"></at-button>
<at-dialog dialog_id="${e.dialog_id}" trigger_id="${e.trigger_id}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <at-header header_title="External Trigger Dialog">
            <at-icon slot="icon" name="home" />
        </at-header>
        <p>This dialog was opened using an external trigger element!</p>
    </div>
</at-dialog>
`,D=()=>`
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
                <at-button data-dialog="user-action-1" label="View Details" type="primary" size="sm"></at-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button data-dialog="user-action-2" label="View Details" type="primary" size="sm"></at-button>
            </td>
        </tr>
    </tbody>
</table>

<at-dialog dialog_id="dialog-1" trigger_id="user-action-1">
    <div style="padding: 2rem;">
        <h3>John Doe Details</h3>
        <p>User ID: user-1</p>
        <p>Email: john.doe@example.com</p>
    </div>
</at-dialog>

<at-dialog dialog_id="dialog-2" trigger_id="user-action-2">
    <div style="padding: 2rem;">
        <h3>Jane Smith Details</h3>
        <p>User ID: user-2</p>
        <p>Email: jane.smith@example.com</p>
    </div>
</at-dialog>
`,f=e=>`
<at-button label="Open Dialog" type="primary" onclick="document.querySelector('at-dialog[dialog_id=&quot;${e.dialog_id}&quot;]').openDialog()"></at-button>
<at-dialog dialog_id="${e.dialog_id}">
    <at-card card_title="Edit network profile" subtitle="The card is capped to the dialog, and its content scrolls" class="w-[480px]">
        <div class="flex flex-col gap-16">
            ${Array.from({length:e.field_count},(v,i)=>`<at-input label="Field ${i+1}" placeholder="Value ${i+1}"></at-input>`).join("")}
        </div>
        <div slot="card-footer" class="flex justify-end gap-8">
            <at-button label="Cancel" type="secondary" onclick="document.querySelector('at-dialog[dialog_id=&quot;${e.dialog_id}&quot;]').closeDialog()"></at-button>
            <at-button label="Save" type="primary" onclick="document.querySelector('at-dialog[dialog_id=&quot;${e.dialog_id}&quot;]').closeDialog()"></at-button>
        </div>
    </at-card>
</at-dialog>
`,$={title:"Components/Dialog"},o=x.bind({});o.args={dialog_id:"dialog"};const d=_.bind({});d.args={dialog_id:"external-dialog",trigger_id:"external-trigger",trigger_label:"Open Dialog"};const a=D.bind({});a.storyName="Table Row Example";a.parameters={docs:{description:{story:"Example showing how to use external triggers in table rows with unique IDs to avoid collisions."}}};const t=f.bind({});t.storyName="Dialog with long content";t.args={dialog_id:"long-content-dialog",field_count:20};t.parameters={docs:{description:{story:"A slotted at-card is capped to the dialog less a 16px gutter on each side. Its content area scrolls while the header and footer stay in view. The card needs no max-h-* or overflow-y-auto classes."}}};var l,r,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-dialog dialog_id="\${args.dialog_id ?? ''}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <at-header header_title="Dialog Title">
            <at-icon slot="icon" name="home" />
        </at-header>
        <at-button label="Close dialog" onclick={document.querySelector("#\${args.dialog_id ?? ''}").close()} />
    </div>
</at-dialog>
<at-button label="Open Dialog" onclick={document.querySelector("#\${args.dialog_id ?? ''}").showModal()} />
\``,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var s,g,c;d.parameters={...d.parameters,docs:{...(s=d.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<at-button data-dialog="\${args.trigger_id}" label="\${args.trigger_label || 'Open Dialog'}" type="primary"></at-button>
<at-dialog dialog_id="\${args.dialog_id}" trigger_id="\${args.trigger_id}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <at-header header_title="External Trigger Dialog">
            <at-icon slot="icon" name="home" />
        </at-header>
        <p>This dialog was opened using an external trigger element!</p>
    </div>
</at-dialog>
\``,...(c=(g=d.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
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
                <at-button data-dialog="user-action-1" label="View Details" type="primary" size="sm"></at-button>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <at-button data-dialog="user-action-2" label="View Details" type="primary" size="sm"></at-button>
            </td>
        </tr>
    </tbody>
</table>

<at-dialog dialog_id="dialog-1" trigger_id="user-action-1">
    <div style="padding: 2rem;">
        <h3>John Doe Details</h3>
        <p>User ID: user-1</p>
        <p>Email: john.doe@example.com</p>
    </div>
</at-dialog>

<at-dialog dialog_id="dialog-2" trigger_id="user-action-2">
    <div style="padding: 2rem;">
        <h3>Jane Smith Details</h3>
        <p>User ID: user-2</p>
        <p>Email: jane.smith@example.com</p>
    </div>
</at-dialog>
\``,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,y,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`
<at-button label="Open Dialog" type="primary" onclick="document.querySelector('at-dialog[dialog_id=&quot;\${args.dialog_id}&quot;]').openDialog()"></at-button>
<at-dialog dialog_id="\${args.dialog_id}">
    <at-card card_title="Edit network profile" subtitle="The card is capped to the dialog, and its content scrolls" class="w-[480px]">
        <div class="flex flex-col gap-16">
            \${Array.from({
  length: args.field_count
}, (_, i) => \`<at-input label="Field \${i + 1}" placeholder="Value \${i + 1}"></at-input>\`).join('')}
        </div>
        <div slot="card-footer" class="flex justify-end gap-8">
            <at-button label="Cancel" type="secondary" onclick="document.querySelector('at-dialog[dialog_id=&quot;\${args.dialog_id}&quot;]').closeDialog()"></at-button>
            <at-button label="Save" type="primary" onclick="document.querySelector('at-dialog[dialog_id=&quot;\${args.dialog_id}&quot;]').closeDialog()"></at-button>
        </div>
    </at-card>
</at-dialog>
\``,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const w=["Default","ExternalTrigger","TableRowExample","LongContent"];export{o as Default,d as ExternalTrigger,t as LongContent,a as TableRowExample,w as __namedExportsOrder,$ as default};
