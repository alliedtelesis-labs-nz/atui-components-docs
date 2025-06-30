const o=e=>`
<atui-breadcrumb 
    prefix_delimiter="${e.prefix_delimiter??""}"
/>
<script>
document.querySelector('atui-breadcrumb').values = ${JSON.stringify(e.values,null,4)};
${e.get_prefix?`document.querySelector('atui-breadcrumb').get_prefix = ${""+e.get_prefix};`:""}
<\/script>
`,d={title:"Components/Breadcrumb"},r=o.bind({});r.args={values:["one","two","three","four"]};const t=o.bind({});t.args={values:["one","two","three","four"],get_prefix:e=>`id: ${e+1}`,prefix_delimiter:" - "};var i,a,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<atui-breadcrumb 
    prefix_delimiter="\${args.prefix_delimiter ?? ''}"
/>
<script>
document.querySelector('atui-breadcrumb').values = \${JSON.stringify(args.values, null, 4)};
\${args.get_prefix ? \`document.querySelector('atui-breadcrumb').get_prefix = \${'' + args.get_prefix};\` : ''}
<\/script>
\``,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,c,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
<atui-breadcrumb 
    prefix_delimiter="\${args.prefix_delimiter ?? ''}"
/>
<script>
document.querySelector('atui-breadcrumb').values = \${JSON.stringify(args.values, null, 4)};
\${args.get_prefix ? \`document.querySelector('atui-breadcrumb').get_prefix = \${'' + args.get_prefix};\` : ''}
<\/script>
\``,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const m=["Default","Prefix"];export{r as Default,t as Prefix,m as __namedExportsOrder,d as default};
