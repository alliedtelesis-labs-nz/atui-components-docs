const w=t=>`
<at-auto-open-menu
    offset_x=${t.offset_x}
    offset_y=${t.offset_y}
    origin_x="${t.origin_x}"
    origin_y="${t.origin_y}"
    width="${t.width}"
>
    <div slot="menu-title">
        <div
            style="height:90px; width:100%; background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Bar</h1>
        </div>
    </div>
    <div>
        <div
            style="height:200px;width:100%;background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Dropdown</h1>
        </div>
    </div>
</at-auto-open-menu>`,$=t=>`
<at-menu
    position="${t.position}"
    width="${t.width}"
>
    <at-button slot="menu-trigger" label="${t.triggerLabel}" type="secondary"></at-button>
    <div>
        <at-menu-item label="View details"></at-menu-item>
        <at-menu-item label="Edit Item"></at-menu-item>
        <at-menu-item label="Archive"></at-menu-item>
        <at-menu-item label="Delete" disabled></at-menu-item>
    </div>
</at-menu>`,_=t=>`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <at-menu
        position="${t.position}"
        width="${t.width}"
        autoclose="false"
        is_persistent="true"
    >
        <at-button slot="menu-trigger" label="${t.triggerLabel}" type="secondary"></at-button>
        <div>
            <at-menu-item label="Online"></at-menu-item>
            <at-menu-item label="Offline"></at-menu-item>
            <at-menu-item label="Warning"></at-menu-item>
        </div>
    </at-menu>
    <at-input placeholder="Click here: the menu stays open"></at-input>
</div>`,I=t=>`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <at-button data-menu="${t.triggerId}" label="${t.triggerLabel}" type="secondary"></at-button>
        <at-button data-menu="${t.triggerId}" label="${t.triggerLabel} (Duplicate)" type="secondary"></at-button>
        <at-icon name="overflow_menu" data-menu="${t.triggerId}"></at-icon>
    </div>
    <at-menu
        trigger_id="${t.triggerId}"
        position="${t.position}"
        width="${t.width}"
    >
        <div>
            <at-menu-item label="View details"></at-menu-item>
            <at-menu-item label="Edit Item"></at-menu-item>
            <at-menu-item label="Archive"></at-menu-item>
            <at-menu-item label="Delete" disabled></at-menu-item>
        </div>
    </at-menu>
</div>`,T=()=>`
<div style="padding: 16px;">
    <h3 style="margin-bottom: 16px;">Table Row Example - Use data-menu for multiple triggers</h3>
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Status</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 1</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Active</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-menu="action-menu" type="secondary" size="sm">
                        <at-icon name="overflow_menu"></at-icon>
                    </at-button>
                    <at-menu trigger_id="action-menu" position="bottom" width="140px">
                        <div>
                            <at-menu-item label="View Item 1"></at-menu-item>
                            <at-menu-item label="Edit Item 1"></at-menu-item>
                            <at-menu-item label="Delete Item 1"></at-menu-item>
                        </div>
                    </at-menu>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 2</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Pending</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-menu="action-menu" type="secondary" size="sm">
                        <at-icon name="overflow_menu"></at-icon>
                    </at-button>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 3</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Inactive</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    <div style="display: flex; justify-content: center;">
                        <at-icon name="overflow_menu" data-menu="action-menu"></at-icon>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,E={title:"Components/Menu",argTypes:{position:{options:["bottom","left","top","right"],control:{type:"radio"}},width:{control:{type:"text"}},triggerLabel:{control:{type:"text"}},triggerId:{control:{type:"text"}}}},e=w.bind({});e.args={offset_x:0,offset_y:0,origin_x:"start",origin_y:"top",width:"280px"};const n=$.bind({});n.args={position:"bottom",width:"fit-content",triggerLabel:"Open Menu"};const i=I.bind({});i.args={position:"bottom",width:"fit-content",triggerLabel:"External Trigger",triggerId:"external-menu-trigger"};const a=T.bind({});a.args={};const d=_.bind({});d.args={position:"bottom",width:"fit-content",triggerLabel:"Legend"};var o,r,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-auto-open-menu
    offset_x=\${args.offset_x}
    offset_y=\${args.offset_y}
    origin_x="\${args.origin_x}"
    origin_y="\${args.origin_y}"
    width="\${args.width}"
>
    <div slot="menu-title">
        <div
            style="height:90px; width:100%; background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Bar</h1>
        </div>
    </div>
    <div>
        <div
            style="height:200px;width:100%;background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Dropdown</h1>
        </div>
    </div>
</at-auto-open-menu>\``,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var s,m,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<at-menu
    position="\${args.position}"
    width="\${args.width}"
>
    <at-button slot="menu-trigger" label="\${args.triggerLabel}" type="secondary"></at-button>
    <div>
        <at-menu-item label="View details"></at-menu-item>
        <at-menu-item label="Edit Item"></at-menu-item>
        <at-menu-item label="Archive"></at-menu-item>
        <at-menu-item label="Delete" disabled></at-menu-item>
    </div>
</at-menu>\``,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <div style="display: flex; gap: 16px; align-items: center;">
        <at-button data-menu="\${args.triggerId}" label="\${args.triggerLabel}" type="secondary"></at-button>
        <at-button data-menu="\${args.triggerId}" label="\${args.triggerLabel} (Duplicate)" type="secondary"></at-button>
        <at-icon name="overflow_menu" data-menu="\${args.triggerId}"></at-icon>
    </div>
    <at-menu
        trigger_id="\${args.triggerId}"
        position="\${args.position}"
        width="\${args.width}"
    >
        <div>
            <at-menu-item label="View details"></at-menu-item>
            <at-menu-item label="Edit Item"></at-menu-item>
            <at-menu-item label="Archive"></at-menu-item>
            <at-menu-item label="Delete" disabled></at-menu-item>
        </div>
    </at-menu>
</div>\``,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var b,x,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`
<div style="padding: 16px;">
    <h3 style="margin-bottom: 16px;">Table Row Example - Use data-menu for multiple triggers</h3>
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Status</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 1</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Active</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-menu="action-menu" type="secondary" size="sm">
                        <at-icon name="overflow_menu"></at-icon>
                    </at-button>
                    <at-menu trigger_id="action-menu" position="bottom" width="140px">
                        <div>
                            <at-menu-item label="View Item 1"></at-menu-item>
                            <at-menu-item label="Edit Item 1"></at-menu-item>
                            <at-menu-item label="Delete Item 1"></at-menu-item>
                        </div>
                    </at-menu>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 2</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Pending</td>
                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                    <at-button data-menu="action-menu" type="secondary" size="sm">
                        <at-icon name="overflow_menu"></at-icon>
                    </at-button>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Item 3</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Inactive</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    <div style="display: flex; justify-content: center;">
                        <at-icon name="overflow_menu" data-menu="action-menu"></at-icon>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>\``,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,f,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
    <at-menu
        position="\${args.position}"
        width="\${args.width}"
        autoclose="false"
        is_persistent="true"
    >
        <at-button slot="menu-trigger" label="\${args.triggerLabel}" type="secondary"></at-button>
        <div>
            <at-menu-item label="Online"></at-menu-item>
            <at-menu-item label="Offline"></at-menu-item>
            <at-menu-item label="Warning"></at-menu-item>
        </div>
    </at-menu>
    <at-input placeholder="Click here: the menu stays open"></at-input>
</div>\``,...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const L=["AutoOpenMenu","SlotTrigger","ExternalTrigger","TableRowExample","Persistent"];export{e as AutoOpenMenu,i as ExternalTrigger,d as Persistent,n as SlotTrigger,a as TableRowExample,L as __namedExportsOrder,E as default};
