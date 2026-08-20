const b=e=>`
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
    ${e.clearable_search?"clearable_search":""}
    ${e.clearable?"clearable":""}
    ${e.typeahead?"typeahead":""}

/>
<script>
document.querySelector('at-select').options = ${JSON.stringify(e.options??[],null,4)};
document.querySelector('at-select').option_groups = ${JSON.stringify(e.option_groups??[],null,4)};
<\/script>
    `,g={title:"Components/Select"},r=b.bind({});r.args={options:[{key:"one",value:"one",disabled:!1},{key:"two",value:"two",disabled:!1},{key:"three",value:"three",disabled:!1},{key:"four",value:"four",disabled:!1}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",group_by:"",grouped:!1,invalid:!1,required:!0,clearable_search:!1,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};const t=b.bind({});t.args={option_groups:[{title:"group 1",subgroup:[{key:"one",value:"one"},{key:"two",value:"two"}]},{title:"group 2",subgroup:[{key:"three",value:"three"},{key:"four",value:"four"}]}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",invalid:!1,required:!0,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};const y=()=>`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
    <at-form-label label="Licence tier"></at-form-label>
    <at-form-label label="Action"></at-form-label>
    <at-select aria_label="Licence tier" placeholder="Any tier"></at-select>
    <at-select aria_label="Action" placeholder="Any action"></at-select>
</div>
<script>
const tiers = [
    { key: 'Standard', value: 'standard' },
    { key: 'Advanced', value: 'advanced' },
];
const actions = [
    { key: 'Allocated', value: 'allocated' },
    { key: 'Released', value: 'released' },
];
document.querySelectorAll('at-select')[0].options = tiers;
document.querySelectorAll('at-select')[1].options = actions;
<\/script>
`,a=y.bind({});a.storyName="Shared Column Header";a.parameters={docs:{description:{story:"In a filter row or table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead."}}};var l,o,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
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
    \${args.clearable_search ? 'clearable_search' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.typeahead ? 'typeahead' : ''}

/>
<script>
document.querySelector('at-select').options = \${JSON.stringify(args.options ?? [], null, 4)};
document.querySelector('at-select').option_groups = \${JSON.stringify(args.option_groups ?? [], null, 4)};
<\/script>
    \``,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
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
    \${args.clearable_search ? 'clearable_search' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.typeahead ? 'typeahead' : ''}

/>
<script>
document.querySelector('at-select').options = \${JSON.stringify(args.options ?? [], null, 4)};
document.querySelector('at-select').option_groups = \${JSON.stringify(args.option_groups ?? [], null, 4)};
<\/script>
    \``,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
    <at-form-label label="Licence tier"></at-form-label>
    <at-form-label label="Action"></at-form-label>
    <at-select aria_label="Licence tier" placeholder="Any tier"></at-select>
    <at-select aria_label="Action" placeholder="Any action"></at-select>
</div>
<script>
const tiers = [
    { key: 'Standard', value: 'standard' },
    { key: 'Advanced', value: 'advanced' },
];
const actions = [
    { key: 'Allocated', value: 'allocated' },
    { key: 'Released', value: 'released' },
];
document.querySelectorAll('at-select')[0].options = tiers;
document.querySelectorAll('at-select')[1].options = actions;
<\/script>
\``,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const h=["Primary","Grouped","SharedColumnHeader"];export{t as Grouped,r as Primary,a as SharedColumnHeader,h as __namedExportsOrder,g as default};
