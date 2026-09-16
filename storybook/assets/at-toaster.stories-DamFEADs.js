var I=Object.defineProperty;var _=(t,e,o)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var u=(t,e,o)=>_(t,typeof e!="symbol"?e+"":e,o);const F={position:"bottom-right",timeout:5e3,dismissible:!0,closeButton:!1,showProgress:!1,pauseOnHover:!1};class p{static async show(e,o,l={}){const s=this.id++,a={...F,...l},D={id:s,type:e,message:o,...a},h=await this.getToaster(a.position);return await h.addToast(D),{id:s,dismiss:()=>h.removeToast(s)}}static async getToaster(e){if(this.containers.has(e)){const a=this.containers.get(e);if(a&&document.body.contains(a))return a;this.containers.delete(e)}const o=document.createElement("at-toaster");o.setAttribute("position",e),document.body.appendChild(o),await customElements.whenDefined("at-toaster");const l=o;typeof l.componentOnReady=="function"&&await l.componentOnReady();const s=o;return this.containers.set(e,s),s}}u(p,"id",0),u(p,"containers",new Map);typeof window<"u"&&(window.ToasterService=p);const N={title:"Components/Toaster",argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:{type:"select"}},type:{options:["success","error","info","warning","default"],control:{type:"select"}},message:{control:"text"},title:{control:"text"},timeout:{control:"number"},dismissible:{control:"boolean"},closeButton:{control:"boolean"},showProgress:{control:"boolean"},pauseOnHover:{control:"boolean"}}},L=t=>`
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
      showProgress: ${t.showProgress},
      pauseOnHover: ${t.pauseOnHover},
    });
  };
  <\/script>
`,d=L.bind({});d.args={position:"bottom-right",type:"success",title:"Success!",message:"Operation completed successfully",timeout:5e3,dismissible:!0,closeButton:!1,showProgress:!1,pauseOnHover:!1};const n=()=>`
  <at-button data-name="remove" label="Remove Widget" type="destructive"></at-button>
  <p data-name="state">Widget is on the dashboard</p>
  <script>
    const state = document.querySelector('[data-name="state"]');
    document.querySelector('[data-name="remove"]').onclick = () => {
      state.textContent = "Widget removed";
      ToasterService.show("info", "Widget removed.", {
        timeout: 8000,
        showProgress: true,
        pauseOnHover: true,
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
  <at-button data-name="show" label="Show both toasts" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ToasterService.show("success", "Hover me, or tab to the Undo. I hold.", {
        title: "pauseOnHover: true",
        timeout: 15000,
        showProgress: true,
        pauseOnHover: true,
        action: { label: "Undo", onTrigger: () => {} },
      });
      ToasterService.show("default", "Hover me. I keep counting down.", {
        title: "pauseOnHover: false",
        timeout: 15000,
        showProgress: true,
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
`;var m,w,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
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
      showProgress: \${args.showProgress},
      pauseOnHover: \${args.pauseOnHover},
    });
  };
  <\/script>
\``,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,g,v,f,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`
  <at-button data-name="remove" label="Remove Widget" type="destructive"></at-button>
  <p data-name="state">Widget is on the dashboard</p>
  <script>
    const state = document.querySelector('[data-name="state"]');
    document.querySelector('[data-name="remove"]').onclick = () => {
      state.textContent = "Widget removed";
      ToasterService.show("info", "Widget removed.", {
        timeout: 8000,
        showProgress: true,
        pauseOnHover: true,
        action: {
          label: "Undo",
          onTrigger: () => {
            state.textContent = "Widget is on the dashboard";
          },
        },
      });
    };
  <\/script>
\``,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:`The friction ladder's low tier: act now, then offer the way back on the toast
itself rather than pre-confirming. Taking the action dismisses the toast. The
countdown bar -- opted into with \`showProgress\`, which is what an offer with
a deadline is for -- says how long it stands. \`pauseOnHover\` belongs on a
toast like this one too: the offer should not expire under the pointer of
someone deciding whether to take it.`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var T,O,H,k,$;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`
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
\``,...(H=(O=r.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"A toast for a condition rather than an event: `timeout: 0` so it never\nexpires on its own, and the handle `show` returns is what takes it down when\nthe condition clears. Dismissing twice, or after the toast has been tapped\naway, does nothing.",...($=(k=r.parameters)==null?void 0:k.docs)==null?void 0:$.description}}};var P,q,x,W,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`
  <at-button data-name="show" label="Show both toasts" type="primary"></at-button>
  <script>
    document.querySelector('[data-name="show"]').onclick = () => {
      ToasterService.show("success", "Hover me, or tab to the Undo. I hold.", {
        title: "pauseOnHover: true",
        timeout: 15000,
        showProgress: true,
        pauseOnHover: true,
        action: { label: "Undo", onTrigger: () => {} },
      });
      ToasterService.show("default", "Hover me. I keep counting down.", {
        title: "pauseOnHover: false",
        timeout: 15000,
        showProgress: true,
      });
    };
  <\/script>
\``,...(x=(q=i.parameters)==null?void 0:q.docs)==null?void 0:x.source},description:{story:`\`pauseOnHover\` opts the toast into stopping its clock under the pointer,
resuming with the time that was left. Off by default, so a toast under a
resting pointer still expires on schedule. Tabbing in always holds the toast
whether or not you opt in, since that is how a keyboard user reaches the
action at all. The bar is on here so the hold is visible.

Raises both to compare: hover each in turn and watch only one bar stop.`,...(B=(W=i.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var C,R,U,A,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`
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
\``,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:`The bar carries the toast's type, drawn from the same accent token as the
message icon, so the countdown reads as part of the message rather than as
chrome bolted underneath it. Raises all five at once to compare.`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};const j=["Default","WithUndoAction","DismissedByHandle","PausesOnHover","CountdownByType"];export{c as CountdownByType,d as Default,r as DismissedByHandle,i as PausesOnHover,n as WithUndoAction,j as __namedExportsOrder,N as default};
