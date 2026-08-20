const s=e=>`
<at-input-numeric
    label="${e.label??""}"
    hint_text="${e.hint_text??""}"
    info_text="${e.info_text??""}"
    error_text="${e.error_text??""}"
    placeholder="${e.placeholder??""}"
    value="${e.value??0}"
    min="${e.min??0}"
    max="${e.max??100}"
    step="${e.step??1}"
    ${e.show_buttons?"show_buttons":""}
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
    aria_label="${e.aria_label??""}"
/>
`,H=()=>`
<div style="display: grid; grid-template-columns: minmax(0, 1fr) 12ch; gap: 8px;">
    <at-form-label label="Licence tier"></at-form-label>
    <at-form-label label="Devices" required="true"></at-form-label>
    <at-input label="" aria_label="Licence tier" value="Standard" readonly></at-input>
    <at-input-numeric aria_label="Devices to allocate, Standard tier" value="0" min="0" max="50"></at-input-numeric>
    <at-input label="" aria_label="Licence tier" value="Advanced" readonly></at-input>
    <at-input-numeric aria_label="Devices to allocate, Advanced tier" value="0" min="0" max="10"></at-input-numeric>
</div>
`,A={title:"Components/Input Numeric"},a=s.bind({});a.args={label:"Label",hint_text:"Hint text",info_text:"Info text",error_text:"Error text",placeholder:"Placeholder",value:5,min:0,max:100,step:1,show_buttons:!0,required:!0,readonly:!1,invalid:!1,disabled:!1};const r=s.bind({});r.storyName="Without Steppers";r.args={...a.args,show_buttons:!1,hint_text:"Type a value; the field still clamps to min and max"};r.parameters={docs:{description:{story:"With `show_buttons` off the field is typed into directly. Clamping is unchanged - it applies on a user change, never to a value set programmatically."}}};const l=s.bind({});l.args={...a.args,label:"Port number",hint_text:"Between 1 and 48",value:24,min:1,max:48,step:1};const i=s.bind({});i.args={...a.args,invalid:!0,error_text:"Enter a value between 0 and 100"};const n=s.bind({});n.args={...a.args,readonly:!0,hint_text:""};const o=s.bind({});o.args={...a.args,disabled:!0,hint_text:""};const t=H.bind({});t.storyName="Shared Column Header";t.parameters={docs:{description:{story:"In a table-style row the visible label lives in a shared column header, so `label` is left unset and `aria_label` supplies the accessible name instead. Each row needs its own name, hence the tier in the text."}}};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
<at-input-numeric
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? 0}"
    min="\${args.min ?? 0}"
    max="\${args.max ?? 100}"
    step="\${args.step ?? 1}"
    \${args.show_buttons ? 'show_buttons' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-input-numeric
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? 0}"
    min="\${args.min ?? 0}"
    max="\${args.max ?? 100}"
    step="\${args.step ?? 1}"
    \${args.show_buttons ? 'show_buttons' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,$,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`
<at-input-numeric
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? 0}"
    min="\${args.min ?? 0}"
    max="\${args.max ?? 100}"
    step="\${args.step ?? 1}"
    \${args.show_buttons ? 'show_buttons' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(_=($=l.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var x,h,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<at-input-numeric
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? 0}"
    min="\${args.min ?? 0}"
    max="\${args.max ?? 100}"
    step="\${args.step ?? 1}"
    \${args.show_buttons ? 'show_buttons' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => \`
<at-input-numeric
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? 0}"
    min="\${args.min ?? 0}"
    max="\${args.max ?? 100}"
    step="\${args.step ?? 1}"
    \${args.show_buttons ? 'show_buttons' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var q,S,D;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`args => \`
<at-input-numeric
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    placeholder="\${args.placeholder ?? ''}"
    value="\${args.value ?? 0}"
    min="\${args.min ?? 0}"
    max="\${args.max ?? 100}"
    step="\${args.step ?? 1}"
    \${args.show_buttons ? 'show_buttons' : ''}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    aria_label="\${args.aria_label ?? ''}"
/>
\``,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,C,I;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`
<div style="display: grid; grid-template-columns: minmax(0, 1fr) 12ch; gap: 8px;">
    <at-form-label label="Licence tier"></at-form-label>
    <at-form-label label="Devices" required="true"></at-form-label>
    <at-input label="" aria_label="Licence tier" value="Standard" readonly></at-input>
    <at-input-numeric aria_label="Devices to allocate, Standard tier" value="0" min="0" max="50"></at-input-numeric>
    <at-input label="" aria_label="Licence tier" value="Advanced" readonly></at-input>
    <at-input-numeric aria_label="Devices to allocate, Advanced tier" value="0" min="0" max="10"></at-input-numeric>
</div>
\``,...(I=(C=t.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const E=["Default","WithoutSteppers","Bounded","Invalid","Readonly","Disabled","SharedColumnHeader"];export{l as Bounded,a as Default,o as Disabled,i as Invalid,n as Readonly,t as SharedColumnHeader,r as WithoutSteppers,E as __namedExportsOrder,A as default};
