const s=e=>`
<at-checkbox-group 
    label="${e.label}"
    info_text="${e.info_text??""}"
    error_text="${e.error_text??""}"
    hint_text="${e.hint_text??""}"
    layout="${e.layout??"column"}"
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
    ${e.required?"required":""}
/>
${e.options?`
<script>
document.querySelector('at-checkbox-group').options = ${JSON.stringify(e.options,null,4)};
<\/script>`:""}
`,c=e=>`
<at-checkbox-group 
    label="${e.label}"
    info_text="${e.info_text??""}"
    error_text="${e.error_text??""}"
    hint_text="${e.hint_text??""}"
    layout="${e.layout??"column"}"
    ${e.invalid?"invalid":""}
    ${e.required?"required":""}
>
    <at-checkbox value="one" label="One label" hint_text="First option"></at-checkbox>
    <at-checkbox value="two" label="Two label" hint_text="Second option"></at-checkbox>
    <at-checkbox value="three" label="Three label"></at-checkbox>
</at-checkbox-group>
`,F={title:"Components/Checkbox Group"},t=s.bind({});t.args={label:"Prop Options Example",options:[{value:"one",label:"One label",hint_text:"First option",checked:!0},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],info_text:"Select multiple options",hint_text:"hint text",layout:"column"};const o=s.bind({});o.args={label:"Prop Options Column",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],layout:"column"};const r=s.bind({});r.args={label:"Prop Options Row",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],layout:"row"};const a=s.bind({});a.args={label:"Prop Options Grid",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],layout:"grid"};const l=c.bind({});l.args={label:"Slotted Options Column",layout:"column"};const n=c.bind({});n.args={label:"Slotted Options Row",layout:"row"};const i=c.bind({});i.args={label:"Slotted Options Grid",layout:"grid"};var u,b,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-checkbox-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var x,d,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-checkbox-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,$,_;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-checkbox-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(_=($=r.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var m,k,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.required ? 'required' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-checkbox-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var S,y,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <at-checkbox value="one" label="One label" hint_text="First option"></at-checkbox>
    <at-checkbox value="two" label="Two label" hint_text="Second option"></at-checkbox>
    <at-checkbox value="three" label="Three label"></at-checkbox>
</at-checkbox-group>
\``,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var f,w,q;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <at-checkbox value="one" label="One label" hint_text="First option"></at-checkbox>
    <at-checkbox value="two" label="Two label" hint_text="Second option"></at-checkbox>
    <at-checkbox value="three" label="Three label"></at-checkbox>
</at-checkbox-group>
\``,...(q=(w=n.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var T,P,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => \`
<at-checkbox-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <at-checkbox value="one" label="One label" hint_text="First option"></at-checkbox>
    <at-checkbox value="two" label="Two label" hint_text="Second option"></at-checkbox>
    <at-checkbox value="three" label="Three label"></at-checkbox>
</at-checkbox-group>
\``,...(C=(P=i.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const G=["PropOptions","PropOptionsColumn","PropOptionsRow","PropOptionsGrid","SlottedOptionsColumn","SlottedOptionsRow","SlottedOptionsGrid"];export{t as PropOptions,o as PropOptionsColumn,a as PropOptionsGrid,r as PropOptionsRow,l as SlottedOptionsColumn,i as SlottedOptionsGrid,n as SlottedOptionsRow,G as __namedExportsOrder,F as default};
