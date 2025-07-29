const l=e=>`
<atui-chip-list
    show_clear_all=${e.show_clear_all?"true":"false"}
    ${e.disabled?"disabled":""}
/>
${e.chips?`
<script>
document.querySelector('atui-chip-list').chips = ${JSON.stringify(e.chips,null,4)}
<\/script>`:""}
`,r={title:"Components/Chip List"},s=l.bind({});s.args={chips:["one","two","three"],show_clear_all:!0,disabled:!1};var t,i,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<atui-chip-list
    show_clear_all=\${args.show_clear_all ? 'true' : 'false'}
    \${args.disabled ? 'disabled' : ''}
/>
\${args.chips ? \`
<script>
document.querySelector('atui-chip-list').chips = \${JSON.stringify(args.chips, null, 4)}
<\/script>\` : ''}
\``,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["Default"];export{s as Default,c as __namedExportsOrder,r as default};
