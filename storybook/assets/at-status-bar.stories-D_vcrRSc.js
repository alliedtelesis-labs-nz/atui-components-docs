const u=s=>`
<at-status-bar
    size="${s.size??"sm"}"
    ${s.disable_tooltip?"disable_tooltip":""}
/>
<script>
document.querySelector('at-status-bar').status_bar = ${JSON.stringify(s.status_bar,null,4)}
<\/script>
`,c={title:"Components/Status Bar",argTypes:{size:{options:["sm","lg"],control:{type:"radio"}}}},t=u.bind({});t.args={status_bar:[{tooltip:"one",percentage:50,backgroundColor:"green"},{tooltip:"two",percentage:30,backgroundColor:"blue"},{tooltip:"three",percentage:20,backgroundColor:"red"}],size:"sm",disable_tooltip:!1};const a=u.bind({});a.args={status_bar:[{tooltip:"upgraded",percentage:35,backgroundColor:"green"},{tooltip:"failed",percentage:15,backgroundColor:"red"}],size:"lg",disable_tooltip:!1};var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    \${args.disable_tooltip ? 'disable_tooltip' : ''}
/>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    \${args.disable_tooltip ? 'disable_tooltip' : ''}
/>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const p=["Default","PartialBreakdown"];export{t as Default,a as PartialBreakdown,p as __namedExportsOrder,c as default};
