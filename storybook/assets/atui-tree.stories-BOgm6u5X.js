const a=s=>`
<atui-tree/>
<script>
document.querySelector('atui-tree').item_list = ${JSON.stringify(s.item_list,null,4)}
<\/script>
`,o={title:"Components/Tree"},e=a.bind({});e.args={item_list:[{id:"one",displayName:"one",children:[{id:"one.1",displayName:"one.1"},{id:"one.2",displayName:"one.2"}],tooltip:"hello world"},{id:"two",displayName:"two"},{id:"three",displayName:"three"}]};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<atui-tree/>
<script>
document.querySelector('atui-tree').item_list = \${JSON.stringify(args.item_list, null, 4)}
<\/script>
\``,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,o as default};
