const l=[{unit:"HOURS",value:1},{unit:"HOURS",value:12},{unit:"DAYS",value:7},{unit:"MONTHS",value:1},{unit:"YEARS",value:1},{unit:"YEARS",value:5}],d=e=>`
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=${e.range_limit??7}
        enable_range_limit=${!!e.enable_range_limit}
        enable_relative_time=${e.enable_relative_time!==!1}
        ${e.show_all_time?"show_all_time":""}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = ${JSON.stringify(e.presets??l)};
    el.selected_time_range = ${JSON.stringify(e.selected_time_range??{selected:{unit:"HOURS",value:1}})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiChange', function(e) {
        debug.textContent = 'atuiChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
`,u=async({canvasElement:e,args:o})=>{await customElements.whenDefined("at-time-range");const s=e.querySelector("at-time-range"),g=e.querySelector("#debug-output");s&&(s.presets=o.presets??l,s.selected_time_range=o.selected_time_range??{selected:{unit:"HOURS",value:1}},g&&(g.textContent="Initial: "+JSON.stringify(s.selected_time_range,null,2)),s.addEventListener("atuiChange",N=>{g&&(g.textContent="atuiChange: "+JSON.stringify(N.detail,null,2))}))},J={title:"Components/Time Range"},t=d.bind({});t.args={presets:l,enable_range_limit:!0,enable_relative_time:!0,range_limit:7,show_all_time:!0,selected_time_range:{selected:"all"}};t.play=u;const n=d.bind({});n.args={presets:l,enable_range_limit:!1,enable_relative_time:!1,show_all_time:!1,selected_time_range:{selected:{unit:"HOURS",value:1}}};n.play=u;const i=d.bind({});i.args={presets:[{unit:"MINUTES",value:15},{unit:"MINUTES",value:30},{unit:"HOURS",value:1},{unit:"HOURS",value:6},{unit:"HOURS",value:24}],enable_range_limit:!0,enable_relative_time:!1,range_limit:7,show_all_time:!1,selected_time_range:{selected:{unit:"MINUTES",value:15}}};i.play=u;const a=d.bind({});a.args={presets:l,enable_range_limit:!0,enable_relative_time:!0,range_limit:30,show_all_time:!1,selected_time_range:{selected:{unit:"DAYS",value:7}}};a.play=u;const r=d.bind({});r.args={presets:l,enable_range_limit:!1,enable_relative_time:!0,show_all_time:!0,selected_time_range:{selected:"all"}};r.play=u;var _,p,m;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=\${args.range_limit ?? 7}
        enable_range_limit=\${args.enable_range_limit ? true : false}
        enable_relative_time=\${args.enable_relative_time !== false}
        \${args.show_all_time ? 'show_all_time' : ''}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = \${JSON.stringify(args.presets ?? defaultPresets)};
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiChange', function(e) {
        debug.textContent = 'atuiChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,f,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=\${args.range_limit ?? 7}
        enable_range_limit=\${args.enable_range_limit ? true : false}
        enable_relative_time=\${args.enable_relative_time !== false}
        \${args.show_all_time ? 'show_all_time' : ''}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = \${JSON.stringify(args.presets ?? defaultPresets)};
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiChange', function(e) {
        debug.textContent = 'atuiChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,S,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=\${args.range_limit ?? 7}
        enable_range_limit=\${args.enable_range_limit ? true : false}
        enable_relative_time=\${args.enable_relative_time !== false}
        \${args.show_all_time ? 'show_all_time' : ''}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = \${JSON.stringify(args.presets ?? defaultPresets)};
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiChange', function(e) {
        debug.textContent = 'atuiChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var x,h,O;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=\${args.range_limit ?? 7}
        enable_range_limit=\${args.enable_range_limit ? true : false}
        enable_relative_time=\${args.enable_relative_time !== false}
        \${args.show_all_time ? 'show_all_time' : ''}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = \${JSON.stringify(args.presets ?? defaultPresets)};
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiChange', function(e) {
        debug.textContent = 'atuiChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(O=(h=a.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var $,w,C;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`args => \`
<div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
    <at-time-range
        range_limit=\${args.range_limit ?? 7}
        enable_range_limit=\${args.enable_range_limit ? true : false}
        enable_relative_time=\${args.enable_relative_time !== false}
        \${args.show_all_time ? 'show_all_time' : ''}
    />
    <pre id="debug-output" style="margin: 0; padding: 8px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 12px; white-space: pre-wrap;">Waiting for selection...</pre>
</div>
<script>
(function() {
    var el = document.querySelector('at-time-range');
    var debug = document.querySelector('#debug-output');
    el.presets = \${JSON.stringify(args.presets ?? defaultPresets)};
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiChange', function(e) {
        debug.textContent = 'atuiChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const R=["Default","PredefinedPresetsOnly","CustomPresetsShortRange","RelativeTimeWithPresets","WithAllTime"];export{i as CustomPresetsShortRange,t as Default,n as PredefinedPresetsOnly,a as RelativeTimeWithPresets,r as WithAllTime,R as __namedExportsOrder,J as default};
