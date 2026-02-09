var d=Object.defineProperty;var b=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var n=(t,e,o)=>b(t,typeof e!="symbol"?e+"":e,o);const g={position:"bottom-right",timeout:5e3,dismissible:!0,closeButton:!1};class a{static async show(e,o,i={}){const p=this.id++,r={...g,...i},m={id:p,type:e,message:o,...r};this.getToaster(r.position).addToast(m)}static getToaster(e){if(this.containers.has(e))return this.containers.get(e);const o=document.createElement("at-toaster");o.setAttribute("position",e),document.body.appendChild(o);const i=o;return this.containers.set(e,i),i}}n(a,"id",0),n(a,"containers",new Map);typeof window<"u"&&(window.ToasterService=a);const $={title:"Components/Toaster",argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:{type:"select"}},type:{options:["success","error","info","warning","default"],control:{type:"select"}},message:{control:"text"},title:{control:"text"},timeout:{control:"number"},dismissible:{control:"boolean"},closeButton:{control:"boolean"}}},y=t=>`
  <at-toaster position="${t.position}">
    <at-button label="Show Toast" type="primaryOutline">
    </at-button>
  </at-toaster>
  <script>
    document.querySelector("at-button").onclick = () => {
      ToasterService.show("${t.type}", "${t.message}", {
        title: "${t.title}",
        position: "${t.position}",
        timeout: ${t.timeout},
        dismissible: ${t.dismissible},
      closeButton: ${t.closeButton},
    });
  };
  <\/script>
`,s=y.bind({});s.args={position:"bottom-right",type:"success",title:"Success!",message:"Operation completed successfully",timeout:5e3,dismissible:!0,closeButton:!1};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
  <at-toaster position="\${args.position}">
    <at-button label="Show Toast" type="primaryOutline">
    </at-button>
  </at-toaster>
  <script>
    document.querySelector("at-button").onclick = () => {
      ToasterService.show("\${args.type}", "\${args.message}", {
        title: "\${args.title}",
        position: "\${args.position}",
        timeout: \${args.timeout},
        dismissible: \${args.dismissible},
      closeButton: \${args.closeButton},
    });
  };
  <\/script>
\``,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,$ as default};
