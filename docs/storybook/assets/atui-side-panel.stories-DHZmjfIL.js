const s=e=>`
<atui-side-panel 
    panel_id="${e.panel_id??""}"
    panel_subtitle="${e.panel_subtitle??""}"
    panel_title="${e.panel_title??""}"
    origin="${e.origin??""}"
    size="${e.size??""}"
    show_close_button=${!!e.show_close_button}
    ${e.click_out_to_close?"click_out_to_close":""}
    ${e.hide_scrollbar?"hide_scrollbar":""}
>
    <atui-message message_title="Sidepanel content" icon="preview" slot="content"></atui-message>
</atui-side-panel>
<atui-button label="Open Sidepanel" onclick={document.querySelector("#${e.panel_id??""}").showModal()} />
`,a={title:"Components/Side Panel",argTypes:{size:{options:["xs","sm","md","lg","xl"],control:{type:"radio"}},origin:{options:["left","right"],control:{type:"radio"}}}},t=s.bind({});t.args={panel_id:"panel",panel_title:"Panel title",panel_subtitle:"Panel subtitle",origin:"right",size:"xs",hide_scrollbar:!1,click_out_to_close:!1,show_close_button:!0};var l,i,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
<atui-side-panel 
    panel_id="\${args.panel_id ?? ''}"
    panel_subtitle="\${args.panel_subtitle ?? ''}"
    panel_title="\${args.panel_title ?? ''}"
    origin="\${args.origin ?? ''}"
    size="\${args.size ?? ''}"
    show_close_button=\${args.show_close_button ? true : false}
    \${args.click_out_to_close ? 'click_out_to_close' : ''}
    \${args.hide_scrollbar ? 'hide_scrollbar' : ''}
>
    <atui-message message_title="Sidepanel content" icon="preview" slot="content"></atui-message>
</atui-side-panel>
<atui-button label="Open Sidepanel" onclick={document.querySelector("#\${args.panel_id ?? ''}").showModal()} />
\``,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const n=["Default"];export{t as Default,n as __namedExportsOrder,a as default};
