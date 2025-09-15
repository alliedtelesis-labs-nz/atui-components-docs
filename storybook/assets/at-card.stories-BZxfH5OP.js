const d=e=>`
<at-card
    card_title="${e.card_title??""}"
    subtitle="${e.subtitle??""}"
    icon="${e.icon??""}"
    content="${e.content??""}"
    shadow="${e.shadow??"sm"}"
    padding=${e.padding?"true":"false"}
    overflow=${e.overflow?"true":"false"}
    ${e.border?"border":""}
>
    <div
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Card Child</h1>
    </div>
</at-card>
`,s={title:"Components/Card",argTypes:{shadow:{options:["none","sm","lg"],control:{type:"radio"}}}},t=d.bind({});t.args={card_title:"Title",icon:"home",subtitle:"Subtitle",content:"Content",shadow:"lg",overflow:!0,padding:!0,border:!1};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
<at-card
    card_title="\${args.card_title ?? ''}"
    subtitle="\${args.subtitle ?? ''}"
    icon="\${args.icon ?? ''}"
    content="\${args.content ?? ''}"
    shadow="\${args.shadow ?? 'sm'}"
    padding=\${args.padding ? 'true' : 'false'}
    overflow=\${args.overflow ? 'true' : 'false'}
    \${args.border ? 'border' : ''}
>
    <div
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Card Child</h1>
    </div>
</at-card>
\``,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,s as default};
