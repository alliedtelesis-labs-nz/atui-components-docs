const a=t=>`
${t.template==="master-detail"?`
<atui-layout template="${t.template}">
    <div
        slot="master"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Master</h1>
    </div>
    <div
        slot="detail"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Detail</h1>
    </div>
</atui-layout>
`:t.template==="tabset"?`
<atui-layout template="${t.template}">
    <div
        slot="tabset-navigation"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Navigation</h1>
    </div>
    <div
        slot="tabset-content"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Content</h1>
    </div>
</atui-layout>`:`
<atui-layout template="${t.template}">
    <div
      style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
      <h1>Content</h1>
    </div>
</atui-layout>     
          `}`,l={title:"Components/Layout",argTypes:{template:{options:["master-detail","content-container","tabset"],control:{type:"radio"}}}},e=a.bind({});e.args={template:"master-detail"};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
\${args.template === 'master-detail' ? \`
<atui-layout template="\${args.template}">
    <div
        slot="master"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Master</h1>
    </div>
    <div
        slot="detail"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Detail</h1>
    </div>
</atui-layout>
\` : args.template === 'tabset' ? \`
<atui-layout template="\${args.template}">
    <div
        slot="tabset-navigation"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Navigation</h1>
    </div>
    <div
        slot="tabset-content"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Content</h1>
    </div>
</atui-layout>\` : \`
<atui-layout template="\${args.template}">
    <div
      style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
      <h1>Content</h1>
    </div>
</atui-layout>     
          \`}\``,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,l as default};
