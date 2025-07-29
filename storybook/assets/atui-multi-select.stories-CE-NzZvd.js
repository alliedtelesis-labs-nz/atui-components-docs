const i=e=>`
<atui-multi-select
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    placeholder="${e.placeholder??""}"
    ${e.disabled?"disabled":""}
    ${e.clearable?"clearable":""}
    ${e.chip_list?"chip_list":""}
    ${e.invalid?"invalid":""}
    ${e.readonly?"readonly":""}
    ${e.required?"required":""}
    ${e.typeahead?"typeahead":""}
/>
${e.options?`
<script>
document.querySelector('atui-multi-select').options = ${JSON.stringify(e.options,null,4)}
<\/script>`:""}
`,n={title:"Components/Multi Select"},t=i.bind({});t.args={options:[{value:"one"},{value:"two"},{value:"three"}],label:"Multi select",hint_text:"Hint text",info_text:"Info text",error_text:"Error text",placeholder:"Placeholder",typeahead:!0,disabled:!1,readonly:!1,clearable:!0,chip_list:!1,required:!0,invalid:!1};var l,r,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-multi-select
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.chip_list ? 'chip_list' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.typeahead ? 'typeahead' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('atui-multi-select').options = \${JSON.stringify(args.options, null, 4)}
<\/script>\` : ''}
\``,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const o=["Default"];export{t as Default,o as __namedExportsOrder,n as default};
