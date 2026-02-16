const s=t=>`
<at-radio-group 
    label="${t.label}"
    info_text="${t.info_text??""}"
    error_text="${t.error_text??""}"
    hint_text="${t.hint_text??""}"
    layout="${t.layout??"column"}"
    ${t.invalid?"invalid":""}
    ${t.disabled?"disabled":""}
    ${t.required?"required":""}
/>
${t.options?`
<script>
document.querySelector('at-radio-group').options = ${JSON.stringify(t.options,null,4)};
<\/script>`:""}
`,d=t=>`
<at-radio-group 
    label="${t.label}"
    info_text="${t.info_text??""}"
    error_text="${t.error_text??""}"
    hint_text="${t.hint_text??""}"
    layout="${t.layout??"column"}"
    ${t.invalid?"invalid":""}
    ${t.required?"required":""}
>
    <at-radio value="one" label="One label" hint_text="First option"></at-radio>
    <at-radio value="two" label="Two label" hint_text="Second option"></at-radio>
    <at-radio value="three" label="Three label"></at-radio>
</at-radio-group>
`,R={title:"Components/Radio Group"},e=s.bind({});e.args={label:"Prop Options Example",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],info_text:"Select one option",hint_text:"hint text",layout:"column"};const o=s.bind({});o.args={label:"Prop Options Column",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],layout:"column"};const r=s.bind({});r.args={label:"Prop Options Row",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],layout:"row"};const a=s.bind({});a.args={label:"Prop Options Grid",options:[{value:"one",label:"One label",hint_text:"First option"},{value:"two",label:"Two label",hint_text:"Second option"},{value:"three",label:"Three label"}],layout:"grid"};const i=d.bind({});i.args={label:"Slotted Options Column",layout:"column"};const l=d.bind({});l.args={label:"Slotted Options Row",layout:"row"};const n=d.bind({});n.args={label:"Slotted Options Grid",layout:"grid"};var u,p,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-radio-group 
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
document.querySelector('at-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,b,$;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-radio-group 
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
document.querySelector('at-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...($=(b=o.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var x,_,m;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<at-radio-group 
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
document.querySelector('at-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(m=(_=r.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};var h,v,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
<at-radio-group 
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
document.querySelector('at-radio-group').options = \${JSON.stringify(args.options, null, 4)};
<\/script>\` : ''}
\``,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var y,O,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
<at-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <at-radio value="one" label="One label" hint_text="First option"></at-radio>
    <at-radio value="two" label="Two label" hint_text="Second option"></at-radio>
    <at-radio value="three" label="Three label"></at-radio>
</at-radio-group>
\``,...(f=(O=i.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var w,q,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => \`
<at-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <at-radio value="one" label="One label" hint_text="First option"></at-radio>
    <at-radio value="two" label="Two label" hint_text="Second option"></at-radio>
    <at-radio value="three" label="Three label"></at-radio>
</at-radio-group>
\``,...(T=(q=l.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var P,F,G;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`args => \`
<at-radio-group 
    label="\${args.label}"
    info_text="\${args.info_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    layout="\${args.layout ?? 'column'}"
    \${args.invalid ? 'invalid' : ''}
    \${args.required ? 'required' : ''}
>
    <at-radio value="one" label="One label" hint_text="First option"></at-radio>
    <at-radio value="two" label="Two label" hint_text="Second option"></at-radio>
    <at-radio value="three" label="Three label"></at-radio>
</at-radio-group>
\``,...(G=(F=n.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const C=["PropOptions","PropOptionsColumn","PropOptionsRow","PropOptionsGrid","SlottedOptionsColumn","SlottedOptionsRow","SlottedOptionsGrid"];export{e as PropOptions,o as PropOptionsColumn,a as PropOptionsGrid,r as PropOptionsRow,i as SlottedOptionsColumn,n as SlottedOptionsGrid,l as SlottedOptionsRow,C as __namedExportsOrder,R as default};
