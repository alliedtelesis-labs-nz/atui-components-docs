const o=t=>`
<at-status-bar
    size="${t.size??"sm"}"
    segment_gap="${t.segment_gap??0}"
    show_tooltip="${t.show_tooltip??!0}"
    show_internal_value="${t.show_internal_value??!1}"
    tooltip_mode="${t.tooltip_mode??"segment"}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = ${JSON.stringify(t.status_bar,null,4)}
<\/script>
`,$={title:"Components/Status Bar",argTypes:{status_bar:{control:"object"},size:{options:["sm","lg"],control:{type:"radio"}},segment_gap:{control:{type:"number",min:0,step:1}},show_tooltip:{control:"boolean"},show_internal_value:{control:"boolean"},tooltip_mode:{options:["segment","summary"],control:{type:"radio"}}}},n={size:"sm",segment_gap:0,show_tooltip:!0,show_internal_value:!1,tooltip_mode:"segment"},e=o.bind({});e.args={...n,status_bar:[{label:"one",percentage:50,backgroundColor:"green"},{label:"two",percentage:30,backgroundColor:"blue"},{label:"three",percentage:20,backgroundColor:"red"}]};const a=o.bind({});a.args={...n,size:"lg",status_bar:[{label:"upgraded",percentage:35,backgroundColor:"green"},{label:"failed",percentage:15,backgroundColor:"red"}]};const s=o.bind({});s.args={...n,show_internal_value:!0,status_bar:[{label:"Network 1",percentage:60,backgroundColor:"var(--chart-sequential-9)"},{label:"Network 2",percentage:30,backgroundColor:"var(--chart-sequential-6)"},{label:"Network 3",percentage:10,backgroundColor:"var(--chart-sequential-2)"}]};const r=o.bind({});r.args={...n,tooltip_mode:"summary",status_bar:[{label:"On release",percentage:85,backgroundColor:"var(--chart-device-status-1)",value:"17 devices"},{label:"Behind",percentage:10,backgroundColor:"var(--chart-device-status-2)",value:"2 devices"},{label:"Not reporting",percentage:5,backgroundColor:"var(--chart-device-status-4)",value:"1 device"}]};var l,u,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
    tooltip_mode="\${args.tooltip_mode ?? 'segment'}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,c,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
    tooltip_mode="\${args.tooltip_mode ?? 'segment'}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var _,m,d;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
    tooltip_mode="\${args.tooltip_mode ?? 'segment'}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,h,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    segment_gap="\${args.segment_gap ?? 0}"
    show_tooltip="\${args.show_tooltip ?? true}"
    show_internal_value="\${args.show_internal_value ?? false}"
    tooltip_mode="\${args.tooltip_mode ?? 'segment'}"
></at-status-bar>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const v=["Default","PartialBreakdown","InternalValue","SummaryTooltip"];export{e as Default,s as InternalValue,a as PartialBreakdown,r as SummaryTooltip,v as __namedExportsOrder,$ as default};
