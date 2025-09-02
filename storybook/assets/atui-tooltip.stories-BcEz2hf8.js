const b=t=>`
<atui-tooltip
    position="${t.position??"right"}"
    layout="${t.layout}"
>
    <atui-badge slot="tooltip-trigger" label="Hover over me"></atui-badge>
    <span>Tooltip text</span>
</atui-tooltip>
`,u=t=>`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start; padding: 20px;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <atui-button data-id="${t.triggerId}" label="${t.triggerLabel}" type="secondary"></atui-button>
        <atui-button data-id="${t.triggerId}" label="${t.triggerLabel} (Duplicate)" type="secondary"></atui-button>
        <i class="material-icons" data-id="${t.triggerId}">info</i>
    </div>
    <atui-tooltip
        trigger_id="${t.triggerId}"
        position="${t.position}"
        width="${t.width}"
    >
        <span>${t.tooltipContent}</span>
    </atui-tooltip>
</div>`,c=()=>`
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
                    <atui-button data-id="user-info" icon="info" type="secondary" size="sm"></atui-button>
                    <atui-tooltip trigger_id="user-info" position="top" width="200px">
                        <span>John is a senior developer with 5+ years experience</span>
                    </atui-tooltip>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
                <td style="border: 1px solid #ddd; padding: 8px;">jane.smith@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <atui-button data-id="user-info" icon="info" type="secondary" size="sm"></atui-button>
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
</div>`,y={title:"Components/Tooltip",argTypes:{position:{options:["bottom","left","top","right"],control:{type:"radio"}},layout:{options:["fixed","absolute"],control:{type:"radio"}},triggerLabel:{control:{type:"text"}},triggerId:{control:{type:"text"}},tooltipContent:{control:{type:"text"}},width:{control:{type:"text"}}}},e=b.bind({});e.args={position:"right",layout:"fixed"};const d=u.bind({});d.args={position:"top",triggerLabel:"Hover for tooltip",triggerId:"external-tooltip-trigger",tooltipContent:"This tooltip uses an external trigger element!",width:"200px"};const i=c.bind({});i.args={};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<atui-tooltip
    position="\${args.position ?? 'right'}"
    layout="\${args.layout}"
>
    <atui-badge slot="tooltip-trigger" label="Hover over me"></atui-badge>
    <span>Tooltip text</span>
</atui-tooltip>
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var r,l,p;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start; padding: 20px;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <atui-button data-id="\${args.triggerId}" label="\${args.triggerLabel}" type="secondary"></atui-button>
        <atui-button data-id="\${args.triggerId}" label="\${args.triggerLabel} (Duplicate)" type="secondary"></atui-button>
        <i class="material-icons" data-id="\${args.triggerId}">info</i>
    </div>
    <atui-tooltip
        trigger_id="\${args.triggerId}"
        position="\${args.position}"
        width="\${args.width}"
    >
        <span>\${args.tooltipContent}</span>
    </atui-tooltip>
</div>\``,...(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var s,g,x;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`
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
                    <atui-button data-id="user-info" icon="info" type="secondary" size="sm"></atui-button>
                    <atui-tooltip trigger_id="user-info" position="top" width="200px">
                        <span>John is a senior developer with 5+ years experience</span>
                    </atui-tooltip>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
                <td style="border: 1px solid #ddd; padding: 8px;">jane.smith@example.com</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <atui-button data-id="user-info" icon="info" type="secondary" size="sm"></atui-button>
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
</div>\``,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const m=["Default","ExternalTrigger","TableRowExample"];export{e as Default,d as ExternalTrigger,i as TableRowExample,m as __namedExportsOrder,y as default};
