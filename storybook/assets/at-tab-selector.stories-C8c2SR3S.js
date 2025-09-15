const s=e=>`
<at-tab-selector
    active_tab="${e.active_tab??""}"
    layout="${e.layout??"horizontal"}"
/>
<script>
document.querySelector('at-tab-selector').tabs = ${JSON.stringify(e.tabs,null,4)}
<\/script>
`,l={title:"Components/Tab Selector",argTypes:{layout:{options:["vertical","horizontal"],control:{type:"radio"}}}},t=s.bind({});t.args={tabs:[{id:"one",title:"one"},{id:"two",title:"two"},{id:"three",title:"three"}],active_tab:"one",layout:"horizontal"};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-tab-selector
    active_tab="\${args.active_tab ?? ''}"
    layout="\${args.layout ?? 'horizontal'}"
/>
<script>
document.querySelector('at-tab-selector').tabs = \${JSON.stringify(args.tabs, null, 4)}
<\/script>
\``,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const n=["Default"];export{t as Default,n as __namedExportsOrder,l as default};
