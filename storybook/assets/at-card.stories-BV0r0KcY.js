const i=t=>`
<at-card
    card_title="${t.card_title??""}"
    title_size="${t.title_size??"h4"}"
    subtitle="${t.subtitle??""}"
    content="${t.content??""}"
    shadow="${t.shadow??"sm"}"
    padding=${t.padding?"true":"false"}
    overflow=${t.overflow?"true":"false"}
    ${t.border?"border":""}
>
    <at-button slot="card-header-actions" type="secondaryText">
        <at-icon slot="icon" name="${t.icon??""}" />
    </at-button>
    <div
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Card Child</h1>
    </div>
</at-card>
`,s={title:"Components/Card",argTypes:{shadow:{options:["none","sm","lg"],control:{type:"radio"}},title_size:{options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}}}},e=i.bind({});e.args={card_title:"Title",title_size:"h4",icon:"overflow_menu",subtitle:"Subtitle",content:"Content",shadow:"lg",overflow:!0,padding:!0,border:!1};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<at-card
    card_title="\${args.card_title ?? ''}"
    title_size="\${args.title_size ?? 'h4'}"
    subtitle="\${args.subtitle ?? ''}"
    content="\${args.content ?? ''}"
    shadow="\${args.shadow ?? 'sm'}"
    padding=\${args.padding ? 'true' : 'false'}
    overflow=\${args.overflow ? 'true' : 'false'}
    \${args.border ? 'border' : ''}
>
    <at-button slot="card-header-actions" type="secondaryText">
        <at-icon slot="icon" name="\${args.icon ?? ''}" />
    </at-button>
    <div
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Card Child</h1>
    </div>
</at-card>
\``,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,s as default};
