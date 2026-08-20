const h=t=>`
<at-list-item
    item_prefix="${t.item_prefix??""}"
    item_title="${t.item_title??""}"
    subtitle="${t.subtitle??""}"
    content="${t.content??""}"
    size="${t.size??"sm"}"
    ${t.selectable?"selectable":""}
></at-list-item>
`,x=t=>`
<div role="list" style="max-width: 480px;">
    ${(t.items??[]).map(l=>`
    <at-list-item
        item_title="${l.item_title}"
        subtitle="${l.subtitle??""}"
        content="${l.content??""}"
        size="${t.size??"sm"}"
        ${t.selectable?"selectable":""}
    ></at-list-item>`).join("")}
</div>
`,S=()=>`
<div role="list" style="max-width: 480px;">
    <at-list-item item_title="Wireless" subtitle="4 access points">
        <at-icon slot="icon" name="success"></at-icon>
        <at-badge label="Healthy" type="success"></at-badge>
    </at-list-item>
    <at-list-item item_title="Switching" subtitle="12 ports in use">
        <at-icon slot="icon" name="warning"></at-icon>
        <at-badge label="2 warnings" type="warning"></at-badge>
    </at-list-item>
    <at-list-item item_prefix="VLAN" item_title="100" subtitle="Guest network">
        <at-button type="secondaryText" size="sm" label="Edit"></at-button>
    </at-list-item>
</div>
`,w={title:"Components/List Item"},s=h.bind({});s.args={item_prefix:"",item_title:"Item title",subtitle:"Subtitle",content:"Content",size:"sm",selectable:!1};const a=()=>`
<div role="list" style="max-width: 480px;">
    ${["xs","sm","md","lg"].map(t=>`
    <at-list-item
        item_title="Size ${t}"
        subtitle="Subtitle"
        content="Content"
        size="${t}"
    ></at-list-item>`).join("")}
</div>
`;a.args={};const e=x.bind({});e.args={size:"sm",selectable:!0,items:[{item_title:"First item",subtitle:"Subtitle",content:"Content"},{item_title:"Second item",subtitle:"Subtitle",content:"Content"},{item_title:"Third item",subtitle:"Subtitle",content:"Content"}]};e.parameters={docs:{description:{story:"With `selectable` the item takes focus and shows a hover state. The click handling belongs to the consumer - the item reports nothing on its own."}}};const i=S.bind({});i.storyName="With Slotted Content";i.parameters={docs:{description:{story:"The `icon` slot sits before the title and the default slot fills the trailing edge, so status and actions travel with the row instead of being baked into props."}}};var n,o,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-list-item
    item_prefix="\${args.item_prefix ?? ''}"
    item_title="\${args.item_title ?? ''}"
    subtitle="\${args.subtitle ?? ''}"
    content="\${args.content ?? ''}"
    size="\${args.size ?? 'sm'}"
    \${args.selectable ? 'selectable' : ''}
></at-list-item>
\``,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var r,c,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => \`
<div role="list" style="max-width: 480px;">
    \${['xs', 'sm', 'md', 'lg'].map(size => \`
    <at-list-item
        item_title="Size \${size}"
        subtitle="Subtitle"
        content="Content"
        size="\${size}"
    ></at-list-item>\`).join('')}
</div>
\``,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,u,p;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`
<div role="list" style="max-width: 480px;">
    \${(args.items ?? []).map(item => \`
    <at-list-item
        item_title="\${item.item_title}"
        subtitle="\${item.subtitle ?? ''}"
        content="\${item.content ?? ''}"
        size="\${args.size ?? 'sm'}"
        \${args.selectable ? 'selectable' : ''}
    ></at-list-item>\`).join('')}
</div>
\``,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,_,$;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`
<div role="list" style="max-width: 480px;">
    <at-list-item item_title="Wireless" subtitle="4 access points">
        <at-icon slot="icon" name="success"></at-icon>
        <at-badge label="Healthy" type="success"></at-badge>
    </at-list-item>
    <at-list-item item_title="Switching" subtitle="12 ports in use">
        <at-icon slot="icon" name="warning"></at-icon>
        <at-badge label="2 warnings" type="warning"></at-badge>
    </at-list-item>
    <at-list-item item_prefix="VLAN" item_title="100" subtitle="Guest network">
        <at-button type="secondaryText" size="sm" label="Edit"></at-button>
    </at-list-item>
</div>
\``,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const z=["Default","Sizes","Selectable","WithSlottedContent"];export{s as Default,e as Selectable,a as Sizes,i as WithSlottedContent,z as __namedExportsOrder,w as default};
