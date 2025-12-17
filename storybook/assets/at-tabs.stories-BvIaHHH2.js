const s=a=>`
<at-tabs
    active_tab="${a.active_tab??""}"
    layout="${a.layout??"horizontal"}"
/>
<script>
document.querySelector('at-tabs').tabs = ${JSON.stringify(a.tabs,null,4)}
<\/script>
`,n={title:"Components/Tabs",argTypes:{layout:{options:["vertical","horizontal"],control:{type:"radio"}}}},t=s.bind({});t.args={tabs:[{id:"one",title:"one"},{id:"two",title:"two"},{id:"three",title:"three"}],active_tab:"one",layout:"horizontal"};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => \`
<at-tabs
    active_tab="\${args.active_tab ?? ''}"
    layout="\${args.layout ?? 'horizontal'}"
/>
<script>
document.querySelector('at-tabs').tabs = \${JSON.stringify(args.tabs, null, 4)}
<\/script>
\``,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,n as default};
