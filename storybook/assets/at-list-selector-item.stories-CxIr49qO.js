const r=t=>`
<at-list-selector-item
    item_id="${t.item_id??""}"
    item_title="${t.item_title??""}"
    item_prefix="${t.item_prefix??""}"
    subtitle="${t.subtitle??""}"
    tooltip="${t.tooltip??""}"
    has_border=${!!t.has_border}
    ${t.is_selected?"is_selected":""}
>
    <at-icon slot="icon" name="${t.icon??""}" />
</at-list-selector-item>`,l={title:"Components/List Selector Item"},e=r.bind({});e.args={item_id:"id",item_title:"title",subtitle:"subtitle",item_prefix:"prefix",icon:"home",tooltip:"tooltip",has_border:!0,is_selected:!1};var i,s,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-list-selector-item
    item_id="\${args.item_id ?? ''}"
    item_title="\${args.item_title ?? ''}"
    item_prefix="\${args.item_prefix ?? ''}"
    subtitle="\${args.subtitle ?? ''}"
    tooltip="\${args.tooltip ?? ''}"
    has_border=\${args.has_border ? true : false}
    \${args.is_selected ? 'is_selected' : ''}
>
    <at-icon slot="icon" name="\${args.icon ?? ''}" />
</at-list-selector-item>\``,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const a=["Default"];export{e as Default,a as __namedExportsOrder,l as default};
