const l=i=>`
<atui-dialog dialog_id="${i.dialog_id??""}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="Dialog Title" icon="preview"></atui-header>
        <atui-button label="Close dialog" onclick={document.querySelector("#${i.dialog_id??""}").close()} />
    </div>
</atui-dialog>
<atui-button label="Open Dialog" onclick={document.querySelector("#${i.dialog_id??""}").showModal()} />
`,d={title:"Components/Dialog"},e=l.bind({});e.args={dialog_id:"dialog"};var o,a,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<atui-dialog dialog_id="\${args.dialog_id ?? ''}">
    <div style="display: flex; flex-direction: column; justify-content: center; padding: 3rem;">
        <atui-header header_title="Dialog Title" icon="preview"></atui-header>
        <atui-button label="Close dialog" onclick={document.querySelector("#\${args.dialog_id ?? ''}").close()} />
    </div>
</atui-dialog>
<atui-button label="Open Dialog" onclick={document.querySelector("#\${args.dialog_id ?? ''}").showModal()} />
\``,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,d as default};
