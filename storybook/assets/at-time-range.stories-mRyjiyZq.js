const s=e=>`
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
    ${e.presets?`el.presets = ${JSON.stringify(e.presets)};`:""}
    el.selected_time_range = ${JSON.stringify(e.selected_time_range??{selected:{unit:"HOURS",value:1}})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
`,d=async({canvasElement:e,args:o})=>{await customElements.whenDefined("at-time-range");const g=e.querySelector("at-time-range"),u=e.querySelector("#debug-output");g&&(o.presets&&(g.presets=o.presets),g.selected_time_range=o.selected_time_range??{selected:{unit:"HOURS",value:1}},u&&(u.textContent="Initial: "+JSON.stringify(g.selected_time_range,null,2)),g.addEventListener("atuiTimeChange",R=>{u&&(u.textContent="atuiTimeChange: "+JSON.stringify(R.detail,null,2))}))},q={title:"Components/Time Range"},t=s.bind({});t.args={enable_range_limit:!0,enable_relative_time:!0,range_limit:7,show_all_time:!0,selected_time_range:{selected:"all"}};t.play=d;const n=s.bind({});n.args={enable_range_limit:!1,enable_relative_time:!1,show_all_time:!1,selected_time_range:{selected:{unit:"HOURS",value:1}}};n.play=d;const i=s.bind({});i.args={presets:[{unit:"MINUTES",value:15},{unit:"MINUTES",value:30},{unit:"HOURS",value:1},{unit:"HOURS",value:6},{unit:"HOURS",value:24}],enable_range_limit:!0,enable_relative_time:!1,range_limit:7,show_all_time:!1,selected_time_range:{selected:{unit:"MINUTES",value:15}}};i.play=d;const a=s.bind({});a.args={enable_range_limit:!0,enable_relative_time:!0,range_limit:30,show_all_time:!1,selected_time_range:{selected:{unit:"DAYS",value:7}}};a.play=d;const r=s.bind({});r.args={enable_range_limit:!1,enable_relative_time:!0,show_all_time:!0,selected_time_range:{selected:"all"}};r.play=d;const l=s.bind({});l.args={enable_range_limit:!0,enable_relative_time:!0,range_limit:400,show_all_time:!1,selected_time_range:{selected:{unit:"DAYS",value:7}}};l.play=d;var m,_,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
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
    \${args.presets ? \`el.presets = \${JSON.stringify(args.presets)};\` : ''}
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(p=(_=t.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};var c,f,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
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
    \${args.presets ? \`el.presets = \${JSON.stringify(args.presets)};\` : ''}
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
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
    \${args.presets ? \`el.presets = \${JSON.stringify(args.presets)};\` : ''}
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,h,$;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
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
    \${args.presets ? \`el.presets = \${JSON.stringify(args.presets)};\` : ''}
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...($=(h=a.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var O,w,C;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`args => \`
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
    \${args.presets ? \`el.presets = \${JSON.stringify(args.presets)};\` : ''}
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,J,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => \`
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
    \${args.presets ? \`el.presets = \${JSON.stringify(args.presets)};\` : ''}
    el.selected_time_range = \${JSON.stringify(args.selected_time_range ?? {
  selected: {
    unit: 'HOURS',
    value: 1
  }
})};
    debug.textContent = 'Initial: ' + JSON.stringify(el.selected_time_range, null, 2);
    el.addEventListener('atuiTimeChange', function(e) {
        debug.textContent = 'atuiTimeChange: ' + JSON.stringify(e.detail, null, 2);
    });
})();
<\/script>
\``,...(T=(J=l.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};const U=["Default","PredefinedPresetsOnly","CustomPresetsShortRange","RelativeTimeWithPresets","WithAllTime","AllPresetsWithinRangeLimit"];export{l as AllPresetsWithinRangeLimit,i as CustomPresetsShortRange,t as Default,n as PredefinedPresetsOnly,a as RelativeTimeWithPresets,r as WithAllTime,U as __namedExportsOrder,q as default};
