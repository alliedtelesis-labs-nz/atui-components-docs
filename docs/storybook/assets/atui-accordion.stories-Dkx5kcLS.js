const s=e=>`
<atui-accordion default_open=${e.default_open} />
<script>
document.querySelector('atui-accordion').items = ${JSON.stringify(e.items,null,4)}
<\/script>
`,m=e=>`
<atui-accordion default_open=${e.default_open}>
${e.items.map(n=>`
    <atui-accordion-item item_id="${n.item_id}">
        <atui-accordion-trigger slot="trigger" label="${n.label}"></atui-accordion-trigger>
        <div slot="content">${n.content}</div>
    </atui-accordion-item>`).join(`
`)}
</atui-accordion>
`,p={title:"Components/Accordion"},t={args:{default_open:!1,items:[{item_id:"one",label:"one-label",content:"one-content"},{item_id:"two",label:"two-label",content:"two-content"}]},render:s},o={args:{default_open:!1,items:[{item_id:"one",label:"one",content:'<div style="margin: 8px 24px">Accordion content 1</div>'},{item_id:"two",label:"two",content:'<div style="margin: 8px 24px">Accordion content 2</div>'}]},render:m};var i,a,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    default_open: false,
    items: [{
      item_id: 'one',
      label: 'one-label',
      content: 'one-content'
    }, {
      item_id: 'two',
      label: 'two-label',
      content: 'two-content'
    }]
  },
  render: Template
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var r,l,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    default_open: false,
    items: [{
      item_id: 'one',
      label: 'one',
      content: '<div style="margin: 8px 24px">Accordion content 1</div>'
    }, {
      item_id: 'two',
      label: 'two',
      content: '<div style="margin: 8px 24px">Accordion content 2</div>'
    }]
  },
  render: TemplateSlot
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const u=["Default","Slot"];export{t as Default,o as Slot,u as __namedExportsOrder,p as default};
