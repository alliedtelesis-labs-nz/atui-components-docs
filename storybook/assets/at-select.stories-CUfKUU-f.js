const d=e=>`
<at-select
    label="${e.label??""}"
    hint_text="${e.hint_text??""}"
    info_text="${e.info_text??""}"
    error_text="${e.error_text??""}"
    placeholder="${e.placeholder??""}"
    value="${e.value??""}"
    ${e.grouped?"grouped":""}
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
    ${e.clearable?"clearable":""}
    ${e.typeahead?"typeahead":""}

/>
<script>
document.querySelector('at-select').options = ${JSON.stringify(e.options??[],null,4)};
document.querySelector('at-select').option_groups = ${JSON.stringify(e.option_groups??[],null,4)};
<\/script>
    `,u={title:"Components/Select"},r=d.bind({});r.args={options:[{key:"one",value:"one"},{key:"two",value:"two"},{key:"three",value:"three"},{key:"four",value:"four"}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",group_by:"",grouped:!1,invalid:!1,required:!0,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};const t=d.bind({});t.args={option_groups:[{title:"group 1",subgroup:[{key:"one",value:"one"},{key:"two",value:"two"}]},{title:"group 2",subgroup:[{key:"three",value:"three"},{key:"four",value:"four"}]}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",invalid:!1,required:!0,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};var a,l,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-select
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    \${args.grouped ? 'grouped' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.typeahead ? 'typeahead' : ''}

/>
<script>
document.querySelector('at-select').options = \${JSON.stringify(args.options ?? [], null, 4)};
document.querySelector('at-select').option_groups = \${JSON.stringify(args.option_groups ?? [], null, 4)};
<\/script>
    \``,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-select
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? ''}"
    \${args.grouped ? 'grouped' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.typeahead ? 'typeahead' : ''}

/>
<script>
document.querySelector('at-select').options = \${JSON.stringify(args.options ?? [], null, 4)};
document.querySelector('at-select').option_groups = \${JSON.stringify(args.option_groups ?? [], null, 4)};
<\/script>
    \``,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const p=["Primary","Grouped"];export{t as Grouped,r as Primary,p as __namedExportsOrder,u as default};
