const s=e=>`
<at-accordion default_open=${e.default_open} />
<script>
document.querySelector('at-accordion').items = ${JSON.stringify(e.items,null,4)}
<\/script>
`,m=e=>`
<at-accordion default_open=${e.default_open}>
${e.items.map(n=>`
    <at-accordion-item item_id="${n.item_id}">
        <at-accordion-trigger slot="accordion-trigger" label="${n.label}"></at-accordion-trigger>
        <div>${n.content}</div>
    </at-accordion-item>`).join(`
`)}
</at-accordion>
`,p={title:"Components/Accordion"},t={args:{default_open:!1,items:[{item_id:"one",label:"one-label",content:"one-content"},{item_id:"two",label:"two-label",content:"two-content"}]},render:s},o={args:{default_open:!1,items:[{item_id:"one",label:"one",content:'<div style="margin: 8px 24px">Accordion content 1</div>'},{item_id:"two",label:"two",content:'<div style="margin: 8px 24px">Accordion content 2</div>'}]},render:m};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var r,l,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const _=["Default","Slot"];export{t as Default,o as Slot,_ as __namedExportsOrder,p as default};
