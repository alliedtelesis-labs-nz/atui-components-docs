const s=e=>`
<at-input 
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    type="${e.type??""}"
    value="${e.value??""}"
    placeholder="${e.placeholder??""}"
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.clearable?"clearable":""}
    ${e.disabled?"disabled":""}
    aria_label="${e.aria_label??""}"
/>
`,p=()=>`
<div style="display: grid; grid-template-columns: 16ch minmax(0, 1fr); gap: 8px;">
    <at-form-label label="ID (hex)" required="true"></at-form-label>
    <at-form-label label="Payload (hex)" required="true"></at-form-label>
    <at-input aria_label="ID (hex)" placeholder="0x0499"></at-input>
    <at-input aria_label="Payload (hex)" placeholder="AA BB CC"></at-input>
</div>
`,u={title:"Components/Input"},l=s.bind({});l.args={label:"Label",info_text:"Info text",error_text:"Error text",hint_text:"Hint text",type:"text",value:"",placeholder:"Placeholder",required:!0,readonly:!1,disabled:!1,clearable:!0,invalid:!1};const a=p.bind({});a.storyName="Shared Column Header";a.parameters={docs:{description:{story:"In a table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead."}}};var r,t,i;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-input 
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    type="\${args.type ?? ''}"
    value="\${args.value ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.clearable ? 'clearable' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(i=(t=l.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,o,n;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
<div style="display: grid; grid-template-columns: 16ch minmax(0, 1fr); gap: 8px;">
    <at-form-label label="ID (hex)" required="true"></at-form-label>
    <at-form-label label="Payload (hex)" required="true"></at-form-label>
    <at-input aria_label="ID (hex)" placeholder="0x0499"></at-input>
    <at-input aria_label="Payload (hex)" placeholder="AA BB CC"></at-input>
</div>
\``,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const b=["Default","SharedColumnHeader"];export{l as Default,a as SharedColumnHeader,b as __namedExportsOrder,u as default};
