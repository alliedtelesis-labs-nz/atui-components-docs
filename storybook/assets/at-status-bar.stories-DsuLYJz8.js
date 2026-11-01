const r=a=>`
<at-status-bar
    size="${a.size??"sm"}"
    segment_gap="${a.segment_gap??0}"
    show_tooltip="${a.show_tooltip??!0}"
    show_internal_value="${a.show_internal_value??!1}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = ${JSON.stringify(a.status_bar,null,4)}
<\/script>
`,m={title:"Components/Status Bar",argTypes:{status_bar:{control:"object"},size:{options:["sm","lg"],control:{type:"radio"}},segment_gap:{control:{type:"number",min:0,step:1}},show_tooltip:{control:"boolean"},show_internal_value:{control:"boolean"}}},o={size:"sm",segment_gap:0,show_tooltip:!0,show_internal_value:!1},t=r.bind({});t.args={...o,status_bar:[{label:"one",percentage:50,backgroundColor:"green"},{label:"two",percentage:30,backgroundColor:"blue"},{label:"three",percentage:20,backgroundColor:"red"}]};const e=r.bind({});e.args={...o,size:"lg",status_bar:[{label:"upgraded",percentage:35,backgroundColor:"green"},{label:"failed",percentage:15,backgroundColor:"red"}]};const s=r.bind({});s.args={...o,show_internal_value:!0,status_bar:[{label:"Network 1",percentage:60,backgroundColor:"var(--chart-sequential-9)"},{label:"Network 2",percentage:30,backgroundColor:"var(--chart-sequential-6)"},{label:"Network 3",percentage:10,backgroundColor:"var(--chart-sequential-2)"}]};var n,l,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,g,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(c=(g=e.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var p,_,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const d=["Default","PartialBreakdown","InternalValue"];export{t as Default,s as InternalValue,e as PartialBreakdown,d as __namedExportsOrder,m as default};
