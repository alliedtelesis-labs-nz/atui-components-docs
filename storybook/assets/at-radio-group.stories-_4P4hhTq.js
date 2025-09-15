const c=t=>`
<at-radio-group 
    label="${t.label}"
    info_text="${t.info_text}"
    error_text="${t.error_text}"
    hint_text="${t.hint_text}"
    direction="${t.layout}"
    ${t.invalid?"invalid":""}
    ${t.disabled?"disabled":""}
    ${t.required?"required":""}
/>
${t.options?`
<script>
document.querySelector('at-radio-group').options = ${JSON.stringify(t.options,null,4)};
<\/script>`:""}
`,p=t=>`
<at-radio-group 
    label="${t.label}"
    info_text="${t.info_text}"
    error_text="${t.error_text}"
    hint_text="${t.hint_text}"
    direction="${t.layout}"
    ${t.invalid?"invalid":""}
    ${t.required?"required":""}
>
    <li>
        <at-radio label="One" subtitle="Subtitle" />
    </li>
    </li>
        <at-radio label="Two" subtitle="Subtitle" />
    </li>
</at-radio-group>
`,$={title:"Components/Radio Group"},e=c.bind({});e.args={label:"Title",options:[{id:"one",label:"One",subtitle:"Subtitle"},{id:"two",label:"Two",subtitle:"Subtitle"}],info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",required:!1,invalid:!1,disabled:!1};const r=c.bind({});r.args={label:"Title",options:[{id:"one",label:"One",subtitle:"Subtitle"},{id:"two",label:"Two",subtitle:"Subtitle"}],info_text:"info text",hint_text:"hint text",error_text:"error text",direction:"horizontal",required:!1,invalid:!1,disabled:!1};const i=p.bind({});i.args={label:"Title",checkbox_id:"checkbox",info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",invalid:!1};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    direction="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,s,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    direction="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,x,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    direction="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <li>
        <at-radio label="One" subtitle="Subtitle" />
    </li>
    </li>
        <at-radio label="Two" subtitle="Subtitle" />
    </li>
</at-radio-group>
\``,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const _=["Primary","Horizontal","Slot"];export{r as Horizontal,e as Primary,i as Slot,_ as __namedExportsOrder,$ as default};
