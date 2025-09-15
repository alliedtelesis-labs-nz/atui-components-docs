const i=e=>`
<at-time-range
    custom_error_message="${e.custom_error_message??""}"
    range_limit=${e.range_limit??7}
    enable_range_limit=${!!e.enable_range_limit}
    enable_relative_time=${!!e.enable_relative_time}
    ${e.show_all_time?"show_all_time":""}
/>
<script>
${e.presets?`document.querySelector('at-time-range').presets = ${JSON.stringify(e.presets,null,4)}`:""}
${e.selected_time_range?`document.querySelector('at-time-range').selected_time_range = ${JSON.stringify(e.selected_time_range,null,4)}`:""}
<\/script>
`,l={title:"Components/Time Range"},t=i.bind({});t.args={presets:[{unit:"HOURS",value:1},{unit:"HOURS",value:12},{unit:"DAYS",value:7},{unit:"MONTHS",value:1},{unit:"YEARS",value:1},{unit:"YEARS",value:5}],enable_range_limit:!0,enable_relative_time:!0,range_limit:7,show_all_time:!0,selected_time_range:{selected:"all"}};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"args => `\n<at-time-range\n    custom_error_message=\"${args.custom_error_message ?? ''}\"\n    range_limit=${args.range_limit ?? 7}\n    enable_range_limit=${args.enable_range_limit ? true : false}\n    enable_relative_time=${args.enable_relative_time ? true : false}\n    ${args.show_all_time ? 'show_all_time' : ''}\n/>\n<script>\n${args.presets ? `document.querySelector('at-time-range').presets = ${JSON.stringify(args.presets, null, 4)}` : ''}\n${args.selected_time_range ? `document.querySelector('at-time-range').selected_time_range = ${JSON.stringify(args.selected_time_range, null, 4)}` : ''}\n<\/script>\n`",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const s=["Default"];export{t as Default,s as __namedExportsOrder,l as default};
