const i=[{label:"Details"},{label:"Policy"},{label:"Schedule",optional:!0},{label:"Review"}],a=s=>`
<div style="width: ${s.orientation==="vertical"?"280px":"640px"}">
    <at-stepper
        id="story-stepper"
        current="${s.current??0}"
        orientation="${s.orientation??"horizontal"}"
        ${s.linear===!1?"":"linear"}
        ${s.show_navigation?"show_navigation":""}
    ></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('story-stepper');
        stepper.steps = ${JSON.stringify(i)};
        // The stepper never moves itself — the host owns current so it can
        // validate before advancing. The story is the host here.
        stepper.addEventListener('atuiStepChange', (event) => {
            stepper.current = event.detail;
        });
        stepper.addEventListener('atuiNext', (event) => {
            stepper.current = Math.min(event.detail + 1, ${i.length-1});
        });
        stepper.addEventListener('atuiPrev', (event) => {
            stepper.current = Math.max(event.detail - 1, 0);
        });
    })();
<\/script>`,L={title:"Components/Stepper",argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"radio"}}}},e=a.bind({});e.args={current:2,orientation:"horizontal",linear:!0};const t=a.bind({});t.args={current:2,orientation:"vertical",linear:!0};const r=a.bind({});r.args={current:1,orientation:"horizontal",linear:!0,show_navigation:!0};const N=()=>`
<div style="width: 640px">
    <at-stepper id="state-stepper" current="3"></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('state-stepper');
        stepper.steps = ${JSON.stringify([{label:"Success",state:"success"},{label:"Completed"},{label:"Skipped",state:"skipped",optional:!0},{label:"Current"},{label:"Error",state:"error"},{label:"Pending"}])};
    })();
<\/script>`,n=N.bind({});n.args={};var p,o,l,c,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<div style="width: \${args.orientation === 'vertical' ? '280px' : '640px'}">
    <at-stepper
        id="story-stepper"
        current="\${args.current ?? 0}"
        orientation="\${args.orientation ?? 'horizontal'}"
        \${args.linear === false ? '' : 'linear'}
        \${args.show_navigation ? 'show_navigation' : ''}
    ></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('story-stepper');
        stepper.steps = \${JSON.stringify(STEPS)};
        // The stepper never moves itself — the host owns current so it can
        // validate before advancing. The story is the host here.
        stepper.addEventListener('atuiStepChange', (event) => {
            stepper.current = event.detail;
        });
        stepper.addEventListener('atuiNext', (event) => {
            stepper.current = Math.min(event.detail + 1, \${STEPS.length - 1});
        });
        stepper.addEventListener('atuiPrev', (event) => {
            stepper.current = Math.max(event.detail - 1, 0);
        });
    })();
<\/script>\``,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source},description:{story:"Mid-flow: earlier steps complete, the third current, the rest pending.",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var v,u,h,g,m;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => \`
<div style="width: \${args.orientation === 'vertical' ? '280px' : '640px'}">
    <at-stepper
        id="story-stepper"
        current="\${args.current ?? 0}"
        orientation="\${args.orientation ?? 'horizontal'}"
        \${args.linear === false ? '' : 'linear'}
        \${args.show_navigation ? 'show_navigation' : ''}
    ></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('story-stepper');
        stepper.steps = \${JSON.stringify(STEPS)};
        // The stepper never moves itself — the host owns current so it can
        // validate before advancing. The story is the host here.
        stepper.addEventListener('atuiStepChange', (event) => {
            stepper.current = event.detail;
        });
        stepper.addEventListener('atuiNext', (event) => {
            stepper.current = Math.min(event.detail + 1, \${STEPS.length - 1});
        });
        stepper.addEventListener('atuiPrev', (event) => {
            stepper.current = Math.max(event.detail - 1, 0);
        });
    })();
<\/script>\``,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Vertical layout, for a narrow column or a side rail.",...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};var y,S,$,E,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
<div style="width: \${args.orientation === 'vertical' ? '280px' : '640px'}">
    <at-stepper
        id="story-stepper"
        current="\${args.current ?? 0}"
        orientation="\${args.orientation ?? 'horizontal'}"
        \${args.linear === false ? '' : 'linear'}
        \${args.show_navigation ? 'show_navigation' : ''}
    ></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('story-stepper');
        stepper.steps = \${JSON.stringify(STEPS)};
        // The stepper never moves itself — the host owns current so it can
        // validate before advancing. The story is the host here.
        stepper.addEventListener('atuiStepChange', (event) => {
            stepper.current = event.detail;
        });
        stepper.addEventListener('atuiNext', (event) => {
            stepper.current = Math.min(event.detail + 1, \${STEPS.length - 1});
        });
        stepper.addEventListener('atuiPrev', (event) => {
            stepper.current = Math.max(event.detail - 1, 0);
        });
    })();
<\/script>\``,...($=(S=r.parameters)==null?void 0:S.docs)==null?void 0:$.source},description:{story:"With the built-in Back / Next control row.",...(b=(E=r.parameters)==null?void 0:E.docs)==null?void 0:b.description}}};var f,w,x,T,P;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => \`
<div style="width: 640px">
    <at-stepper id="state-stepper" current="3"></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('state-stepper');
        stepper.steps = \${JSON.stringify([{
  label: 'Success',
  state: 'success'
}, {
  label: 'Completed'
}, {
  label: 'Skipped',
  state: 'skipped',
  optional: true
}, {
  label: 'Current'
}, {
  label: 'Error',
  state: 'error'
}, {
  label: 'Pending'
}])};
    })();
<\/script>\``,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:"All six step states side by side.",...(P=(T=n.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};const _=["Default","Vertical","WithNavigation","AllStates"];export{n as AllStates,e as Default,t as Vertical,r as WithNavigation,_ as __namedExportsOrder,L as default};
