const d=e=>`
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
`,c={title:"Components/Multi Select"},t=d.bind({});t.args={options:[{value:"one"},{value:"two"},{value:"three"}],label:"Multi select",hint_text:"Hint text",info_text:"Info text",error_text:"Error text",placeholder:"Placeholder",typeahead:!0,disabled:!1,readonly:!1,clearable:!0,required:!0,invalid:!1};const l=d.bind({});l.args={...t.args,id:"multi-select-count",selection_display:"count",value:["one","three"],label:"Site",placeholder:"Site",hint_text:"",info_text:"",error_text:"",required:!1};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
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
\``,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,s,o;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
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
\``,...(o=(s=l.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const p=["Default","CountTrigger"];export{l as CountTrigger,t as Default,p as __namedExportsOrder,c as default};
