const s=e=>`
<at-checkbox-group 
    label="${e.label}"
    info_text="${e.info_text}"
    error_text="${e.error_text}"
    hint_text="${e.hint_text}"
    layout="${e.layout}"
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
    ${e.required?"required":""}
/>
${e.options?`
<script>
document.querySelector('at-checkbox-group').options = ${JSON.stringify(e.options,null,4)};
<\/script>`:""}
`,x=e=>`
<at-checkbox-group 
    label="${e.label}"
    info_text="${e.info_text}"
    error_text="${e.error_text}"
    hint_text="${e.hint_text}"
    layout="${e.layout}"
    ${e.invalid?"invalid":""}
    ${e.required?"required":""}
>
    <li>
        <at-checkbox label="One" subtitle="Subtitle" checked />
    </li>
    <li>
        <at-checkbox label="Two" subtitle="Subtitle" />
    </li>
</at-checkbox-group>
`,u={title:"Components/Checkbox Group"},t=s.bind({});t.args={label:"Title",checkbox_id:"checkbox",options:[{id:"one",label:"One",subtitle:"Subtitle",checked:!0},{id:"two",label:"Two",subtitle:"Subtitle",checked:!1}],info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",required:!1,invalid:!1,disabled:!1};const r=x.bind({});r.args={label:"Title",checkbox_id:"checkbox",info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",invalid:!1,disabled:!1};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    layout="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-checkbox-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,a,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    layout="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <li>
        <at-checkbox label="One" subtitle="Subtitle" checked />
    </li>
    <li>
        <at-checkbox label="Two" subtitle="Subtitle" />
    </li>
</at-checkbox-group>
\``,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const b=["Primary","Slot"];export{t as Primary,r as Slot,b as __namedExportsOrder,u as default};
