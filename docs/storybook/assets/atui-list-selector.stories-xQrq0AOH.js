const l=e=>`
<atui-list-selector 
    selected_item_id="${e.selected_item_id}"
/>
<script>
document.querySelector('atui-list-selector').options = ${JSON.stringify(e.options,null,4)};
<\/script>`,r={title:"Components/List Selector"},t=l.bind({});t.args={options:[{id:"one",title:"one",subtitle:"subtitle",icon:"home",tooltip:"tooltip",prefix:"1",badgeText:"badge",badgeTooltip:"badge tooltip",hasInfoButton:!0},{id:"two",title:"two",subtitle:"subtitle",icon:"home",tooltip:"tooltip",prefix:"2",badgeText:"badge",badgeTooltip:"badge tooltip",hasInfoButton:!1}],selected_item_id:"two"};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<atui-list-selector 
    selected_item_id="\${args.selected_item_id}"
/>
<script>
document.querySelector('atui-list-selector').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\``,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const a=["Default"];export{t as Default,a as __namedExportsOrder,r as default};
