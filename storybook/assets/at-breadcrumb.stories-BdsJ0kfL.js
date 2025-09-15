const o=e=>`
<at-breadcrumb 
    prefix_delimiter="${e.prefix_delimiter??""}"
/>
<script>
document.querySelector('at-breadcrumb').values = ${JSON.stringify(e.values,null,4)};
${e.get_prefix?`document.querySelector('at-breadcrumb').get_prefix = ${""+e.get_prefix};`:""}
<\/script>
`,d={title:"Components/Breadcrumb"},r=o.bind({});r.args={values:["one","two","three","four"]};const t=o.bind({});t.args={values:["one","two","three","four"],get_prefix:e=>`id: ${e+1}`,prefix_delimiter:" - "};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-breadcrumb 
    prefix_delimiter="\${args.prefix_delimiter ?? ''}"
/>
<script>
document.querySelector('at-breadcrumb').values = \${JSON.stringify(args.values, null, 4)};
\${args.get_prefix ? \`document.querySelector('at-breadcrumb').get_prefix = \${'' + args.get_prefix};\` : ''}
<\/script>
\``,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,u,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<at-breadcrumb 
    prefix_delimiter="\${args.prefix_delimiter ?? ''}"
/>
<script>
document.querySelector('at-breadcrumb').values = \${JSON.stringify(args.values, null, 4)};
\${args.get_prefix ? \`document.querySelector('at-breadcrumb').get_prefix = \${'' + args.get_prefix};\` : ''}
<\/script>
\``,...(n=(u=t.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};const m=["Default","Prefix"];export{r as Default,t as Prefix,m as __namedExportsOrder,d as default};
