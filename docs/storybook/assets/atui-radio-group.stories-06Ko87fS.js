const c=t=>`
<atui-radio-group 
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
document.querySelector('atui-radio-group').options = ${JSON.stringify(t.options,null,4)};
<\/script>`:""}
`,p=t=>`
<atui-radio-group 
    label="${t.label}"
    info_text="${t.info_text}"
    error_text="${t.error_text}"
    hint_text="${t.hint_text}"
    direction="${t.layout}"
    ${t.invalid?"invalid":""}
    ${t.required?"required":""}
>
    <li>
        <atui-radio label="One" subtitle="Subtitle" />
    </li>
    </li>
        <atui-radio label="Two" subtitle="Subtitle" />
    </li>
</atui-radio-group>
`,$={title:"Components/Radio Group"},e=c.bind({});e.args={label:"Title",options:[{id:"one",label:"One",subtitle:"Subtitle"},{id:"two",label:"Two",subtitle:"Subtitle"}],info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",required:!1,invalid:!1,disabled:!1};const i=c.bind({});i.args={label:"Title",options:[{id:"one",label:"One",subtitle:"Subtitle"},{id:"two",label:"Two",subtitle:"Subtitle"}],info_text:"info text",hint_text:"hint text",error_text:"error text",direction:"horizontal",required:!1,invalid:!1,disabled:!1};const r=p.bind({});r.args={label:"Title",checkbox_id:"checkbox",info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",invalid:!1};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<atui-radio-group 
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
document.querySelector('atui-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,s,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-radio-group 
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
document.querySelector('atui-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,x,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<atui-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    direction="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <li>
        <atui-radio label="One" subtitle="Subtitle" />
    </li>
    </li>
        <atui-radio label="Two" subtitle="Subtitle" />
    </li>
</atui-radio-group>
\``,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const _=["Primary","Horizontal","Slot"];export{i as Horizontal,e as Primary,r as Slot,_ as __namedExportsOrder,$ as default};
