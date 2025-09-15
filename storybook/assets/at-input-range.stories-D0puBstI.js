const i=e=>`
<at-input-range
    label="${e.label??""}"
    error_text="${e.error_text??""}"
    info_text="${e.info_text??""}"
    hint_text="${e.hint_text??""}"
    warning_text="${e.warning_text??""}"
    suffix="${e.suffix??""}"
    value=${e.value??""}
    max_display_value=${e.max_display_value??100}
    max_selectable_value=${e.max_selectable_value??100}
    min_selectable_value=${e.min_selectable_value??0}
    tick_interval=${e.tick_interval??0}
    ${e.required?"required":""}
    ${e.readonly?"readonly":""}
    ${e.invalid?"invalid":""}
    ${e.disabled?"disabled":""}
/>
`,r={title:"Components/Range Input"},a=i.bind({});a.args={label:"Label",info_text:"Info text",error_text:"Error text",hint_text:"Hint text",warning_text:"Warning text",suffix:"%",value:50,max_display_value:100,max_selectable_value:100,min_selectable_value:0,tick_interval:0,required:!0,readonly:!1,disabled:!1,invalid:!1};var t,l,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<at-input-range
    label="\${args.label ?? ''}"
    error_text="\${args.error_text ?? ''}"
    info_text="\${args.info_text ?? ''}"
    hint_text="\${args.hint_text ?? ''}"
    warning_text="\${args.warning_text ?? ''}"
    suffix="\${args.suffix ?? ''}"
    value=\${args.value ?? ''}
    max_display_value=\${args.max_display_value ?? 100}
    max_selectable_value=\${args.max_selectable_value ?? 100}
    min_selectable_value=\${args.min_selectable_value ?? 0}
    tick_interval=\${args.tick_interval ?? 0}
    \${args.required ? 'required' : ''}
    \${args.readonly ? 'readonly' : ''}
    \${args.invalid ? 'invalid' : ''}
    \${args.disabled ? 'disabled' : ''}
/>
\``,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,r as default};
