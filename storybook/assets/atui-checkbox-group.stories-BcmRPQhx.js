const u=e=>`
<atui-checkbox-group 
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
document.querySelector('atui-checkbox-group').options = ${JSON.stringify(e.options,null,4)};
<\/script>`:""}
`,s=e=>`
<atui-checkbox-group 
    label="${e.label}"
    info_text="${e.info_text}"
    error_text="${e.error_text}"
    hint_text="${e.hint_text}"
    layout="${e.layout}"
    ${e.invalid?"invalid":""}
    ${e.required?"required":""}
>
    <li>
        <atui-checkbox label="One" subtitle="Subtitle" checked />
    </li>
    </li>
        <atui-checkbox label="Two" subtitle="Subtitle" />
    </li>
</atui-checkbox-group>
`,x={title:"Components/Checkbox Group"},t=u.bind({});t.args={label:"Title",checkbox_id:"checkbox",options:[{id:"one",label:"One",subtitle:"Subtitle",checked:!0},{id:"two",label:"Two",subtitle:"Subtitle",checked:!1}],info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",required:!1,invalid:!1,disabled:!1};const i=s.bind({});i.args={label:"Title",checkbox_id:"checkbox",info_text:"info text",hint_text:"hint text",error_text:"error text",layout:"vertical",invalid:!1,disabled:!1};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<atui-checkbox-group 
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
document.querySelector('atui-checkbox-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var n,a,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<atui-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text}"
    error_text="\${args.error_text}"
    hint_text="\${args.hint_text}"
    layout="\${args.layout}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <li>
        <atui-checkbox label="One" subtitle="Subtitle" checked />
    </li>
    </li>
        <atui-checkbox label="Two" subtitle="Subtitle" />
    </li>
</atui-checkbox-group>
\``,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const b=["Primary","Slot"];export{t as Primary,i as Slot,b as __namedExportsOrder,x as default};
