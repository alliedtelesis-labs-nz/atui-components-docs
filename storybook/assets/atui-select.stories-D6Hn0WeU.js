const d=e=>`
<atui-select
    label="${e.label??""}"
    hint_text="${e.hint_text??""}"
    info_text="${e.info_text??""}"
    error_text="${e.error_text??""}"
    placeholder="${e.placeholder??""}"
    value="${e.value??""}"
    group_by="${e.group_by??""}"
    ${e.grouped?"grouped":""}
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
    ${e.clearable?"clearable":""}
    ${e.typeahead?"typeahead":""}
/>
<script>
document.querySelector('atui-select').options = ${JSON.stringify(e.options,null,4)};
<\/script>
    `,u={title:"Components/Select"},r=d.bind({});r.args={options:["one","two","three","four"],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",group_by:"",grouped:!1,invalid:!1,required:!0,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};const t=d.bind({});t.args={options:[{title:"group 1",subgroup:["one","two"]},{title:"group 2",subgroup:["three","four"]}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",group_by:"subgroup",grouped:!0,invalid:!1,required:!0,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};var a,l,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<atui-select
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    group_by="\${args.group_by ?? ''}"
    \${args.grouped ? 'grouped' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.typeahead ? 'typeahead' : ''}
/>
<script>
document.querySelector('atui-select').options = \${JSON.stringify(args.options, null, 4)};
<\/script>
    \``,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<atui-select
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    group_by="\${args.group_by ?? ''}"
    \${args.grouped ? 'grouped' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.typeahead ? 'typeahead' : ''}
/>
<script>
document.querySelector('atui-select').options = \${JSON.stringify(args.options, null, 4)};
<\/script>
    \``,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const p=["Primary","Grouped"];export{t as Grouped,r as Primary,p as __namedExportsOrder,u as default};
