const i=e=>`
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
    `,T={title:"Components/Select"},a=i.bind({});a.args={options:[{key:"one",value:"one",disabled:!1},{key:"two",value:"two",disabled:!1},{key:"three",value:"three",disabled:!1},{key:"four",value:"four",disabled:!1}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",group_by:"",grouped:!1,invalid:!1,required:!0,clearable_search:!1,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};const r=i.bind({});r.args={option_groups:[{title:"group 1",subgroup:[{key:"one",value:"one"},{key:"two",value:"two"}]},{title:"group 2",subgroup:[{key:"three",value:"three"},{key:"four",value:"four"}]}],label:"Input Label",hint_text:"Hint Text",info_text:"Info Text",error_text:"Error text",placeholder:"Placeholder",value:"",invalid:!1,required:!0,clearable:!0,disabled:!1,readonly:!1,typeahead:!0};const t=i.bind({});t.storyName="No Typeahead";t.args={...a.args,label:"Input Label (no typeahead)",hint_text:"Enter, Space or Down Arrow opens the list",typeahead:!1};const l=i.bind({});l.storyName="Grouped, No Typeahead";l.args={...r.args,label:"Input Label (grouped, no typeahead)",hint_text:"Grouped options without a search field",typeahead:!1};const I=()=>`
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
`,o=I.bind({});o.storyName="Shared Column Header";o.parameters={docs:{description:{story:"In a filter row or table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead."}}};const E=()=>`
<at-select
    id="combobox-story"
    label="Company"
    info_text="Pick a company or type a hex ID, e.g. 0x0499"
    placeholder="Search a company or type a hex ID"
    typeahead
    clearable
    allow_custom
></at-select>
<script>
document.getElementById('combobox-story').options = [
    { value: '0x004C', label: 'Apple (0x004C)' },
    { value: '0x0059', label: 'Nordic Semiconductor (0x0059)' },
    { value: '0x0087', label: 'Fitbit (0x0087)' },
    { value: '0x02D0', label: 'Kontakt.io (0x02D0)' },
    { value: '0x02E5', label: 'Espressif (0x02E5)' },
];
<\/script>
`,s=E.bind({});s.storyName="Combobox";s.parameters={docs:{description:{story:"With `allow_custom` the dropdown offers the search text as an entry when no option carries it, and the input then shows that value verbatim. Use it where the option list is a convenience rather than the full set of legal values."}}};const L=()=>`
<at-select
    id="large-list-story"
    label="Company"
    placeholder="Search a company or type a hex ID"
    typeahead
    clearable
    allow_custom
></at-select>
<script>
document.getElementById('large-list-story').options = Array.from(
    { length: 2000 },
    (_, i) => {
        const hex = '0x' + i.toString(16).toUpperCase().padStart(4, '0');
        return { value: hex, label: 'Company ' + i + ' (' + hex + ')' };
    },
);
document.getElementById('large-list-story').max_rendered_options = 50;
document.getElementById('large-list-story').search_debounce_ms = 150;
<\/script>
`,n=L.bind({});n.storyName="Large List";n.parameters={docs:{description:{story:"Two thousand options with `max_rendered_options` at 50 and `search_debounce_ms` at 150. Only the capped matches are rendered; the remainder is summarised in a trailing row so the count is never hidden. Listen for `atuiSearchChange` to replace `options` from a lazily loaded or server-backed source."}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
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
    \``,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,y,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
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
    \``,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var m,b,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
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
    \``,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,_,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
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
    \``,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var f,v,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => \`
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
\``,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var q,N,C;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`
<at-select
    id="combobox-story"
    label="Company"
    info_text="Pick a company or type a hex ID, e.g. 0x0499"
    placeholder="Search a company or type a hex ID"
    typeahead
    clearable
    allow_custom
></at-select>
<script>
document.getElementById('combobox-story').options = [
    { value: '0x004C', label: 'Apple (0x004C)' },
    { value: '0x0059', label: 'Nordic Semiconductor (0x0059)' },
    { value: '0x0087', label: 'Fitbit (0x0087)' },
    { value: '0x02D0', label: 'Kontakt.io (0x02D0)' },
    { value: '0x02E5', label: 'Espressif (0x02E5)' },
];
<\/script>
\``,...(C=(N=s.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var k,w,A;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`
<at-select
    id="large-list-story"
    label="Company"
    placeholder="Search a company or type a hex ID"
    typeahead
    clearable
    allow_custom
></at-select>
<script>
document.getElementById('large-list-story').options = Array.from(
    { length: 2000 },
    (_, i) => {
        const hex = '0x' + i.toString(16).toUpperCase().padStart(4, '0');
        return { value: hex, label: 'Company ' + i + ' (' + hex + ')' };
    },
);
document.getElementById('large-list-story').max_rendered_options = 50;
document.getElementById('large-list-story').search_debounce_ms = 150;
<\/script>
\``,...(A=(w=n.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const O=["Primary","Grouped","NoTypeahead","GroupedNoTypeahead","SharedColumnHeader","Combobox","LargeList"];export{s as Combobox,r as Grouped,l as GroupedNoTypeahead,n as LargeList,t as NoTypeahead,a as Primary,o as SharedColumnHeader,O as __namedExportsOrder,T as default};
