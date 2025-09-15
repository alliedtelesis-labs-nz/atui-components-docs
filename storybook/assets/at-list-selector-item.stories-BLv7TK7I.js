const r=e=>`
<at-list-selector-item
    item_id="${e.item_id??""}"
    item_title="${e.item_title??""}"
    item_prefix="${e.item_prefix??""}"
    subtitle="${e.subtitle??""}"
    icon="${e.icon??""}"
    tooltip="${e.tooltip??""}"
    has_border=${!!e.has_border}
    ${e.is_selected?"is_selected":""}
/>`,l={title:"Components/List Selector Item"},t=r.bind({});t.args={item_id:"id",item_title:"title",subtitle:"subtitle",item_prefix:"prefix",icon:"home",tooltip:"tooltip",has_border:!0,is_selected:!1};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-list-selector-item
    item_id="\${args.item_id ?? ''}"
    item_title="\${args.item_title ?? ''}"
    item_prefix="\${args.item_prefix ?? ''}"
    subtitle="\${args.subtitle ?? ''}"
    icon="\${args.icon ?? ''}"
    tooltip="\${args.tooltip ?? ''}"
    has_border=\${args.has_border ? true : false}
    \${args.is_selected ? 'is_selected' : ''}
/>\``,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const a=["Default"];export{t as Default,a as __namedExportsOrder,l as default};
