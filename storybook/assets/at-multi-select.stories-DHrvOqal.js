const r=e=>`
<at-multi-select
    id="${e.id??"multi-select"}"
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    placeholder="${e.placeholder??""}"
    ${e.disabled?"disabled":""}
    ${e.clearable?"clearable":""}
    ${e.invalid?"invalid":""}
    ${e.readonly?"readonly":""}
    ${e.required?"required":""}
    ${e.typeahead?"typeahead":""}
    ${e.allow_custom?"allow_custom":""}
    selection_display="${e.selection_display??"chips"}"
/>
${e.options?`
<script>
(() => {
    const el = document.getElementById('${e.id??"multi-select"}');
    el.options = ${JSON.stringify(e.options,null,4)};
    el.value = ${JSON.stringify(e.value??[])};
})();
<\/script>`:""}
`,g={title:"Components/Multi Select"},t=r.bind({});t.args={options:[{value:"one"},{value:"two"},{value:"three"}],label:"Multi select",hint_text:"Hint text",info_text:"Info text",error_text:"Error text",placeholder:"Placeholder",typeahead:!0,disabled:!1,readonly:!1,clearable:!0,required:!0,invalid:!1};const l=r.bind({});l.args={...t.args,id:"multi-select-count",selection_display:"count",value:["one","three"],label:"Site",placeholder:"Site",hint_text:"",info_text:"",error_text:"",required:!1};const a=r.bind({});a.args={...t.args,id:"multi-select-allow-custom",options:[{value:"0x004C",label:"Apple (0x004C)"},{value:"0x0059",label:"Nordic Semiconductor (0x0059)"},{value:"0x0087",label:"Fitbit (0x0087)"}],value:["0x004C","0x0499"],label:"Companies",placeholder:"Search a company or type a hex ID",hint_text:"",info_text:"Pick companies or type a hex ID, e.g. 0x0499",error_text:"",required:!1,allow_custom:!0};a.parameters={docs:{description:{story:"With `allow_custom` the dropdown offers the search text as an entry when no option carries it, and the selection then shows that value verbatim. Requires `typeahead`. Use it where the option list is a convenience rather than the full set of legal values."}}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-multi-select
    id="\${args.id ?? 'multi-select'}"
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.typeahead ? 'typeahead' : ''}
    \${args.allow_custom ? 'allow_custom' : ''}
    selection_display="\${args.selection_display ?? 'chips'}"
/>
\${args.options ? \`
<script>
(() => {
    const el = document.getElementById('\${args.id ?? 'multi-select'}');
    el.options = \${JSON.stringify(args.options, null, 4)};
    el.value = \${JSON.stringify(args.value ?? [])};
})();
<\/script>\` : ''}
\``,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,d,c;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-multi-select
    id="\${args.id ?? 'multi-select'}"
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.typeahead ? 'typeahead' : ''}
    \${args.allow_custom ? 'allow_custom' : ''}
    selection_display="\${args.selection_display ?? 'chips'}"
/>
\${args.options ? \`
<script>
(() => {
    const el = document.getElementById('\${args.id ?? 'multi-select'}');
    el.options = \${JSON.stringify(args.options, null, 4)};
    el.value = \${JSON.stringify(args.value ?? [])};
})();
<\/script>\` : ''}
\``,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,$;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-multi-select
    id="\${args.id ?? 'multi-select'}"
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.required ? 'required' : ''}
    \${args.typeahead ? 'typeahead' : ''}
    \${args.allow_custom ? 'allow_custom' : ''}
    selection_display="\${args.selection_display ?? 'chips'}"
/>
\${args.options ? \`
<script>
(() => {
    const el = document.getElementById('\${args.id ?? 'multi-select'}');
    el.options = \${JSON.stringify(args.options, null, 4)};
    el.value = \${JSON.stringify(args.value ?? [])};
})();
<\/script>\` : ''}
\``,...($=(p=a.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};const h=["Default","CountTrigger","AllowCustom"];export{a as AllowCustom,l as CountTrigger,t as Default,h as __namedExportsOrder,g as default};
