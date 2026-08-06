const N=[{label:"Details"},{label:"Policy"},{label:"Schedule",optional:!0},{label:"Review"}],a=n=>`
<div style="width: ${n.orientation==="vertical"?"280px":"640px"}">
    <at-stepper
        id="story-stepper"
        current="${n.current??0}"
        orientation="${n.orientation??"horizontal"}"
        ${n.linear===!1?"":"linear"}
        ${n.show_navigation?"show_navigation":""}
    ></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('story-stepper');
        stepper.steps = ${JSON.stringify(N)};
    })();
<\/script>`,B={title:"Components/Stepper",argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"radio"}}}},e=a.bind({});e.args={current:2,orientation:"horizontal",linear:!0};const t=a.bind({});t.args={current:2,orientation:"vertical",linear:!0};const r=a.bind({});r.args={current:1,orientation:"horizontal",linear:!0,show_navigation:!0};const z=()=>`
<div style="width: 640px">
    <at-stepper id="state-stepper" current="2"></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('state-stepper');
        stepper.steps = ${JSON.stringify([{label:"Completed"},{label:"Skipped",state:"skipped",optional:!0},{label:"Current"},{label:"Error",state:"error"},{label:"Pending"}])};
    })();
<\/script>`,s=z.bind({});s.args={};var i,o,p,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
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
    })();
<\/script>\``,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source},description:{story:"Mid-flow: earlier steps complete, the third current, the rest pending.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};var d,g,u,m,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
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
    })();
<\/script>\``,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"Vertical layout, for a narrow column or a side rail.",...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.description}}};var v,h,S,$,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => \`
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
    })();
<\/script>\``,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source},description:{story:"With the built-in Back / Next control row.",...(b=($=r.parameters)==null?void 0:$.docs)==null?void 0:b.description}}};var w,f,x,E,_;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`
<div style="width: 640px">
    <at-stepper id="state-stepper" current="2"></at-stepper>
</div>
<script>
    (() => {
        const stepper = document.getElementById('state-stepper');
        stepper.steps = \${JSON.stringify([{
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
<\/script>\``,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"All five step states side by side.",...(_=(E=s.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};const O=["Default","Vertical","WithNavigation","AllStates"];export{s as AllStates,e as Default,t as Vertical,r as WithNavigation,O as __namedExportsOrder,B as default};
