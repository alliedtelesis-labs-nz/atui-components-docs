var d=Object.defineProperty;var b=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e,o)=>b(t,typeof e!="symbol"?e+"":e,o);const y={position:"bottom-right",timeout:5e3,dismissible:!0,closeButton:!1};class r{static async show(e,o,i={}){const a=this.id++,s={...y,...i},m={id:a,type:e,message:o,...s};(await this.getToaster(s.position)).addToast(m)}static async getToaster(e){if(this.containers.has(e)){const s=this.containers.get(e);if(s&&document.body.contains(s))return s;this.containers.delete(e)}const o=document.createElement("at-toaster");o.setAttribute("position",e),document.body.appendChild(o),await customElements.whenDefined("at-toaster");const i=o;typeof i.componentOnReady=="function"&&await i.componentOnReady();const a=o;return this.containers.set(e,a),a}}c(r,"id",0),c(r,"containers",new Map);typeof window<"u"&&(window.ToasterService=r);const $={title:"Components/Toaster",argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:{type:"select"}},type:{options:["success","error","info","warning","default"],control:{type:"select"}},message:{control:"text"},title:{control:"text"},timeout:{control:"number"},dismissible:{control:"boolean"},closeButton:{control:"boolean"}}},f=t=>`
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
`,n=f.bind({});n.args={position:"bottom-right",type:"success",title:"Success!",message:"Operation completed successfully",timeout:5e3,dismissible:!0,closeButton:!1};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
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
\``,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,$ as default};
