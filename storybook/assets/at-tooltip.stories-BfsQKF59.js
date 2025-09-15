const b=t=>`
<at-tooltip
    position="${t.position??"right"}"
    layout="${t.layout}"
>
    <at-badge slot="tooltip-trigger" label="Hover over me"></at-badge>
    <span>Tooltip text</span>
</at-tooltip>
`,c=t=>`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start; padding: 20px;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <at-button data-id="${t.triggerId}" label="${t.triggerLabel}" type="secondary"></at-button>
        <at-button data-id="${t.triggerId}" label="${t.triggerLabel} (Duplicate)" type="secondary"></at-button>
        <i class="material-icons" data-id="${t.triggerId}">info</i>
    </div>
    <at-tooltip
        trigger_id="${t.triggerId}"
        position="${t.position}"
        width="${t.width}"
    >
        <span>${t.tooltipContent}</span>
    </at-tooltip>
</div>`,y=()=>`
<div style="padding: 16px;">
    <h3 style="margin-bottom: 16px;">Table Row Tooltip Example - Use data-id for multiple triggers</h3>
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">User</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Email</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Info</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
                <td style="border: 1px solid #ddd; padding: 8px;">john.doe@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-id="user-info" icon="info" type="secondary" size="sm"></at-button>
                    <at-tooltip trigger_id="user-info" position="top" width="200px">
                        <span>John is a senior developer with 5+ years experience</span>
                    </at-tooltip>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
                <td style="border: 1px solid #ddd; padding: 8px;">jane.smith@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-id="user-info" icon="info" type="secondary" size="sm"></at-button>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Bob Johnson</td>
                <td style="border: 1px solid #ddd; padding: 8px;">bob.johnson@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <i class="material-icons" data-id="user-info">info</i>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,m={title:"Components/Tooltip",argTypes:{position:{options:["bottom","left","top","right"],control:{type:"radio"}},layout:{options:["fixed","absolute"],control:{type:"radio"}},triggerLabel:{control:{type:"text"}},triggerId:{control:{type:"text"}},tooltipContent:{control:{type:"text"}},width:{control:{type:"text"}}}},e=b.bind({});e.args={position:"right",layout:"fixed"};const d=c.bind({});d.args={position:"top",triggerLabel:"Hover for tooltip",triggerId:"external-tooltip-trigger",tooltipContent:"This tooltip uses an external trigger element!",width:"200px"};const o=y.bind({});o.args={};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-tooltip
    position="\${args.position ?? 'right'}"
    layout="\${args.layout}"
>
    <at-badge slot="tooltip-trigger" label="Hover over me"></at-badge>
    <span>Tooltip text</span>
</at-tooltip>
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var r,l,p;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start; padding: 20px;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <at-button data-id="\${args.triggerId}" label="\${args.triggerLabel}" type="secondary"></at-button>
        <at-button data-id="\${args.triggerId}" label="\${args.triggerLabel} (Duplicate)" type="secondary"></at-button>
        <i class="material-icons" data-id="\${args.triggerId}">info</i>
    </div>
    <at-tooltip
        trigger_id="\${args.triggerId}"
        position="\${args.position}"
        width="\${args.width}"
    >
        <span>\${args.tooltipContent}</span>
    </at-tooltip>
</div>\``,...(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var s,g,x;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`
<div style="padding: 16px;">
    <h3 style="margin-bottom: 16px;">Table Row Tooltip Example - Use data-id for multiple triggers</h3>
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">User</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Email</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Info</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
                <td style="border: 1px solid #ddd; padding: 8px;">john.doe@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-id="user-info" icon="info" type="secondary" size="sm"></at-button>
                    <at-tooltip trigger_id="user-info" position="top" width="200px">
                        <span>John is a senior developer with 5+ years experience</span>
                    </at-tooltip>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
                <td style="border: 1px solid #ddd; padding: 8px;">jane.smith@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-id="user-info" icon="info" type="secondary" size="sm"></at-button>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Bob Johnson</td>
                <td style="border: 1px solid #ddd; padding: 8px;">bob.johnson@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <i class="material-icons" data-id="user-info">info</i>
                </td>
            </tr>
        </tbody>
    </table>
</div>\``,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const h=["Default","ExternalTrigger","TableRowExample"];export{e as Default,d as ExternalTrigger,o as TableRowExample,h as __namedExportsOrder,m as default};
