var _=Object.defineProperty;var F=(t,e,o)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var u=(t,e,o)=>F(t,typeof e!="symbol"?e+"":e,o);const I={position:"bottom-right",timeout:5e3,dismissible:!0,closeButton:!1,showProgress:!1};class m{static async show(e,o,l={}){const s=this.id++,a={...I,...l},H={id:s,type:e,message:o,...a},p=await this.getToaster(a.position);return await p.addToast(H),{id:s,dismiss:()=>p.removeToast(s)}}static async getToaster(e){if(this.containers.has(e)){const a=this.containers.get(e);if(a&&document.body.contains(a))return a;this.containers.delete(e)}const o=document.createElement("at-toaster");o.setAttribute("position",e),document.body.appendChild(o),await customElements.whenDefined("at-toaster");const l=o;typeof l.componentOnReady=="function"&&await l.componentOnReady();const s=o;return this.containers.set(e,s),s}}u(m,"id",0),u(m,"containers",new Map);typeof window<"u"&&(window.ToasterService=m);const N={title:"Components/Toaster",argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:{type:"select"}},type:{options:["success","error","info","warning","default"],control:{type:"select"}},message:{control:"text"},title:{control:"text"},timeout:{control:"number"},dismissible:{control:"boolean"},closeButton:{control:"boolean"}}},L=t=>`
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
`,d=L.bind({});d.args={position:"bottom-right",type:"success",title:"Success!",message:"Operation completed successfully",timeout:5e3,dismissible:!0,closeButton:!1,showProgress:!1};const n=()=>`
  <at-button data-name="remove" label="Remove Widget" type="destructive"></at-button>
  <p data-name="state">Widget is on the dashboard</p>
  <script>
    const state = document.querySelector('[data-name="state"]');
    document.querySelector('[data-name="remove"]').onclick = () => {
      state.textContent = "Widget removed";
      ToasterService.show("info", "Widget removed.", {
        timeout: 8000,
        showProgress: true,
        action: {
          label: "Undo",
          onTrigger: () => {
            state.textContent = "Widget is on the dashboard";
          },
        },
      });
    };
  <\/script>
`,r=()=>`
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
`,i=()=>`
  <at-button data-name="show" label="Show a slow toast" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ToasterService.show("success", "Hover me, or tab to the Undo.", {
        title: "Saved",
        timeout: 15000,
        showProgress: true,
        action: { label: "Undo", onTrigger: () => {} },
      });
    };
  <\/script>
`,c=()=>`
  <at-button data-name="show" label="Show every type" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ["default", "info", "success", "warning", "error"].forEach((type) =>
        ToasterService.show(type, \`A \${type} toast, counting down.\`, {
          timeout: 15000,
          showProgress: true,
        }),
      );
    };
  <\/script>
`;var h,y,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
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
\``,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,g,f,v,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`
  <at-button data-name="remove" label="Remove Widget" type="destructive"></at-button>
  <p data-name="state">Widget is on the dashboard</p>
  <script>
    const state = document.querySelector('[data-name="state"]');
    document.querySelector('[data-name="remove"]').onclick = () => {
      state.textContent = "Widget removed";
      ToasterService.show("info", "Widget removed.", {
        timeout: 8000,
        showProgress: true,
        action: {
          label: "Undo",
          onTrigger: () => {
            state.textContent = "Widget is on the dashboard";
          },
        },
      });
    };
  <\/script>
\``,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:`The friction ladder's low tier: act now, then offer the way back on the toast
itself rather than pre-confirming. Taking the action dismisses the toast. The
countdown bar -- opted into with \`showProgress\`, which is what an offer with
a deadline is for -- says how long it stands, and hovering the toast or
tabbing into it stops the clock, resuming with the time that was left.`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var T,k,$,q,O;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`
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
\``,...($=(k=r.parameters)==null?void 0:k.docs)==null?void 0:$.source},description:{story:"A toast for a condition rather than an event: `timeout: 0` so it never\nexpires on its own, and the handle `show` returns is what takes it down when\nthe condition clears. Dismissing twice, or after the toast has been tapped\naway, does nothing.",...(O=(q=r.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};var P,W,B,x,C;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`
  <at-button data-name="show" label="Show a slow toast" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ToasterService.show("success", "Hover me, or tab to the Undo.", {
        title: "Saved",
        timeout: 15000,
        showProgress: true,
        action: { label: "Undo", onTrigger: () => {} },
      });
    };
  <\/script>
\``,...(B=(W=i.parameters)==null?void 0:W.docs)==null?void 0:B.source},description:{story:`The pause is not opt-in the way the bar is: hover any timed toast, or tab
into it, and the clock stops until you leave, because a toast the user is
reading or reaching for should not be pulled out from under them. The bar is
on here so the hold is visible; a long timeout so it is easy to see by hand.`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var R,U,A,E,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`
  <at-button data-name="show" label="Show every type" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ["default", "info", "success", "warning", "error"].forEach((type) =>
        ToasterService.show(type, \\\`A \\\${type} toast, counting down.\\\`, {
          timeout: 15000,
          showProgress: true,
        }),
      );
    };
  <\/script>
\``,...(A=(U=c.parameters)==null?void 0:U.docs)==null?void 0:A.source},description:{story:`The bar carries the toast's type, drawn from the same accent token as the
message icon, so the countdown reads as part of the message rather than as
chrome bolted underneath it. Raises all five at once to compare.`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};const j=["Default","WithUndoAction","DismissedByHandle","PausesOnHover","CountdownByType"];export{c as CountdownByType,d as Default,r as DismissedByHandle,i as PausesOnHover,n as WithUndoAction,j as __namedExportsOrder,N as default};
