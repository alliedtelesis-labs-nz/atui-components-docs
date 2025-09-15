const a=i=>`
<at-tree/>
<script>
document.querySelector('at-tree').item_list = ${JSON.stringify(i.item_list,null,4)}
<\/script>
`,o={title:"Components/Tree"},e=a.bind({});e.args={item_list:[{id:"one",displayName:"one",children:[{id:"one.1",displayName:"one.1"},{id:"one.2",displayName:"one.2"}],tooltip:"hello world"},{id:"two",displayName:"two"},{id:"three",displayName:"three"}]};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<at-tree/>
<script>
document.querySelector('at-tree').item_list = \${JSON.stringify(args.item_list, null, 4)}
<\/script>
\``,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,o as default};
