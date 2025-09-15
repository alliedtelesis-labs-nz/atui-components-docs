const o=s=>`
<at-status-bar
    size="${s.size??"sm"}"
    ${s.disable_tooltip?"disable_tooltip":""}
/>
<script>
document.querySelector('at-status-bar').status_bar = ${JSON.stringify(s.status_bar,null,4)}
<\/script>
`,i={title:"Components/Status Bar",argTypes:{size:{options:["sm","lg"],control:{type:"radio"}}}},t=o.bind({});t.args={status_bar:[{tooltip:"one",percentage:50,backgroundColor:"green"},{tooltip:"two",percentage:30,backgroundColor:"blue"},{tooltip:"three",percentage:20,backgroundColor:"red"}],size:"sm",disable_tooltip:!1};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => \`
<at-status-bar
    size="\${args.size ?? 'sm'}"
    \${args.disable_tooltip ? 'disable_tooltip' : ''}
/>
<script>
document.querySelector('at-status-bar').status_bar = \${JSON.stringify(args.status_bar, null, 4)}
<\/script>
\``,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const n=["Default"];export{t as Default,n as __namedExportsOrder,i as default};
