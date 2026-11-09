const u=t=>`
<at-button-group
    label="${t.label??""}"
    hint_text="${t.hint_text??""}"
    error_text="${t.error_text??""}"
    info_text="${t.info_text??""}"
    ${t.invalid?"invalid":""}
    ${t.disabled?"disabled":""}
    ${t.multiple?"multiple":""}
/>
${t.options?`
<script>
document.querySelector('at-button-group').options = ${JSON.stringify(t.options,null,4)}
<\/script>`:""}
`,p={title:"Components/Button Group"},e=u.bind({});e.args={options:[{option_id:"IP",label:"IP"},{option_id:"ICMP",label:"ICMP"},{option_id:"TCP",label:"TCP"},{option_id:"UDP",label:"UDP"}],label:"Button",hint_text:"Hint",info_text:"Info",error_text:"Error",disabled:!1,invalid:!1};const n=u.bind({});n.args={options:[{value:"mon",label:"Mon"},{value:"tue",label:"Tue"},{value:"wed",label:"Wed"},{value:"thu",label:"Thu"},{value:"fri",label:"Fri"},{value:"sat",label:"Sat"},{value:"sun",label:"Sun"}],label:"Days",hint_text:"Pick every day the window runs",multiple:!0};var o,l,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-button-group
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.multiple ? 'multiple' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-button-group').options = \${JSON.stringify(args.options, null, 4)}
<\/script>\` : ''}
\``,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var a,i,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
<at-button-group
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
    \${args.multiple ? 'multiple' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('at-button-group').options = \${JSON.stringify(args.options, null, 4)}
<\/script>\` : ''}
\``,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const d=["Default","Multiple"];export{e as Default,n as Multiple,d as __namedExportsOrder,p as default};
