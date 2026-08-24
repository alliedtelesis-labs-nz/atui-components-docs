var S=Object.defineProperty;var T=(t,e,o)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e,o)=>T(t,typeof e!="symbol"?e+"":e,o);const $={position:"bottom-right",timeout:5e3,dismissible:!0,closeButton:!1};class l{static async show(e,o,r={}){const s=this.id++,n={...$,...r},f={id:s,type:e,message:o,...n},d=await this.getToaster(n.position);return await d.addToast(f),{id:s,dismiss:()=>d.removeToast(s)}}static async getToaster(e){if(this.containers.has(e)){const n=this.containers.get(e);if(n&&document.body.contains(n))return n;this.containers.delete(e)}const o=document.createElement("at-toaster");o.setAttribute("position",e),document.body.appendChild(o),await customElements.whenDefined("at-toaster");const r=o;typeof r.componentOnReady=="function"&&await r.componentOnReady();const s=o;return this.containers.set(e,s),s}}c(l,"id",0),c(l,"containers",new Map);typeof window<"u"&&(window.ToasterService=l);const B={title:"Components/Toaster",argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:{type:"select"}},type:{options:["success","error","info","warning","default"],control:{type:"select"}},message:{control:"text"},title:{control:"text"},timeout:{control:"number"},dismissible:{control:"boolean"},closeButton:{control:"boolean"}}},v=t=>`
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
`,i=v.bind({});i.args={position:"bottom-right",type:"success",title:"Success!",message:"Operation completed successfully",timeout:5e3,dismissible:!0,closeButton:!1};const a=()=>`
  <at-button data-name="show" label="Start" type="primary"></at-button>
  <at-button data-name="dismiss" label="Recovered" type="secondary"></at-button>
  <script>
    let handle = null;
    document.querySelector('[data-name="show"]').onclick = async () => {
      handle ??= await ToasterService.show("error", "Cannot reach the service", {
        title: "Reconnecting",
        timeout: 0,
      });
    };
    document.querySelector('[data-name="dismiss"]').onclick = async () => {
      await handle?.dismiss();
      handle = null;
    };
  <\/script>
`;var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
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
\``,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,y,b,w,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`
  <at-button data-name="show" label="Start" type="primary"></at-button>
  <at-button data-name="dismiss" label="Recovered" type="secondary"></at-button>
  <script>
    let handle = null;
    document.querySelector('[data-name="show"]').onclick = async () => {
      handle ??= await ToasterService.show("error", "Cannot reach the service", {
        title: "Reconnecting",
        timeout: 0,
      });
    };
    document.querySelector('[data-name="dismiss"]').onclick = async () => {
      await handle?.dismiss();
      handle = null;
    };
  <\/script>
\``,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"A toast for a condition rather than an event: `timeout: 0` so it never\nexpires on its own, and the handle `show` returns is what takes it down when\nthe condition clears. Dismissing twice, or after the toast has been tapped\naway, does nothing.",...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.description}}};const k=["Default","DismissedByHandle"];export{i as Default,a as DismissedByHandle,k as __namedExportsOrder,B as default};
