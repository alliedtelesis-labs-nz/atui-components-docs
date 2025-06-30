const r=t=>`
<atui-button-group
    label="${t.label??""}"
    hint_text="${t.hint_text??""}"
    error_text="${t.error_text??""}"
    info_text="${t.info_text??""}"
    ${t.invalid?"invalid":""}
    ${t.disabled?"disabled":""}
/>
${t.options?`
<script>
document.querySelector('atui-button-group').options = ${JSON.stringify(t.options,null,4)}
<\/script>`:""}
`,a={title:"Components/Button Group"},o=r.bind({});o.args={options:[{option_id:"IP",label:"IP"},{option_id:"ICMP",label:"ICMP"},{option_id:"TCP",label:"TCO"},{option_id:"UDP",label:"UDP"}],label:"Button",hint_text:"Hint",info_text:"Info",error_text:"Error",disabled:!1,invalid:!1};var e,n,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => \`
<atui-button-group
    label="\${args.label ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\${args.options ? \`
<script>
document.querySelector('atui-button-group').options = \${JSON.stringify(args.options, null, 4)}
<\/script>\` : ''}
\``,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const l=["Default"];export{o as Default,l as __namedExportsOrder,a as default};
