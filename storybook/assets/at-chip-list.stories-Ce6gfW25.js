const r=e=>`
<at-chip-list
    show_clear_all=${e.show_clear_all?"true":"false"}
    ${e.disabled?"disabled":""}
/>
${e.chips?`
<script>
document.querySelector('at-chip-list').chips = ${JSON.stringify(e.chips,null,4)}
<\/script>`:""}
`,i={title:"Components/Chip List"},s=r.bind({});s.args={chips:["one","two","three"],show_clear_all:!0,disabled:!1};var t,a,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
<at-chip-list
    show_clear_all=\${args.show_clear_all ? 'true' : 'false'}
    \${args.disabled ? 'disabled' : ''}
/>
\${args.chips ? \`
<script>
document.querySelector('at-chip-list').chips = \${JSON.stringify(args.chips, null, 4)}
<\/script>\` : ''}
\``,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const c=["Default"];export{s as Default,c as __namedExportsOrder,i as default};
