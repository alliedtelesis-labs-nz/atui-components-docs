import{b as t}from"./lit-element-DgBHD-me.js";const z={title:"Components/Feedback/Relative Time",tags:["autodocs"]},a={render:()=>{const e=new Date;return e.setDate(e.getDate()-6),t`<at-relative-time
            .timestamp=${e}
        ></at-relative-time>`}},n={render:()=>t`<at-relative-time
            timestamp="2026-06-02T10:30:00Z"
        ></at-relative-time>`},i={render:()=>{const e=new Date;return e.setDate(e.getDate()+3),t`<at-relative-time
            .timestamp=${e}
        ></at-relative-time>`}},r={render:()=>{const e=new Date;return e.setMinutes(e.getMinutes()-30),t`<at-relative-time
            .timestamp=${e}
        ></at-relative-time>`}},s={render:()=>{const e=new Date(Date.now()-5e3);return t`<at-relative-time
            .timestamp=${e}
            update_interval="1000"
        ></at-relative-time>`}},o={render:()=>{const e=new Date,U=new Date(e.getTime()-3e4),Z=new Date(e.getTime()-3600*1e3),k=new Date(e.getTime()-2880*60*1e3),B=new Date(e.getTime()-720*60*60*1e3),E=new Date(e.getTime()+4320*60*1e3),P=new Date(e.getTime()+3600*60*60*1e3);return t`
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    Just now:
                    <at-relative-time .timestamp=${U}></at-relative-time>
                </div>
                <div>
                    1 hour ago:
                    <at-relative-time
                        .timestamp=${Z}
                    ></at-relative-time>
                </div>
                <div>
                    2 days ago:
                    <at-relative-time
                        .timestamp=${k}
                    ></at-relative-time>
                </div>
                <div>
                    1 month ago:
                    <at-relative-time
                        .timestamp=${B}
                    ></at-relative-time>
                </div>
                <div>
                    In 3 days:
                    <at-relative-time
                        .timestamp=${E}
                    ></at-relative-time>
                </div>
                <div>
                    In 5 months:
                    <at-relative-time
                        .timestamp=${P}
                    ></at-relative-time>
                </div>
            </div>
        `}};var m,d,c,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 6);
    return html\`<at-relative-time
            .timestamp=\${pastDate}
        ></at-relative-time>\`;
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Basic relative time display. Shows time relative to the current moment.",...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var v,u,D,g,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`<at-relative-time
            timestamp="2026-06-02T10:30:00Z"
        ></at-relative-time>\`
}`,...(D=(u=n.parameters)==null?void 0:u.docs)==null?void 0:D.source},description:{story:"Display time from an ISO 8601 string instead of a Date object.",...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var h,y,f,T,$;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 3);
    return html\`<at-relative-time
            .timestamp=\${futureDate}
        ></at-relative-time>\`;
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:`Future timestamps render as "time until" (e.g. "in 3 days"). The tense is
chosen automatically from the value — no extra configuration needed.`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.description}}};var M,S,x,A,I;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const pastDate = new Date();
    pastDate.setMinutes(pastDate.getMinutes() - 30);
    return html\`<at-relative-time
            .timestamp=\${pastDate}
        ></at-relative-time>\`;
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:`Recently updated timestamp. The label refreshes automatically on the
component's internal timer — no need to reassign the prop from the host.`,...(I=(A=r.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var b,j,F,N,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const justNow = new Date(Date.now() - 5000);
    return html\`<at-relative-time
            .timestamp=\${justNow}
            update_interval="1000"
        ></at-relative-time>\`;
  }
}`,...(F=(j=s.parameters)==null?void 0:j.docs)==null?void 0:F.source},description:{story:"Pin a fixed refresh cadence with `update_interval` (milliseconds). Here the\nlabel recomputes every second; by default the component chooses an adaptive\ninterval based on how old the timestamp is.",...(_=(N=s.parameters)==null?void 0:N.docs)==null?void 0:_.description}}};var H,O,R,C,J;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const now = new Date();
    const justNow = new Date(now.getTime() - 30000); // 30 seconds ago
    const anHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    const aMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const inThreeDays = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    const inFiveMonths = new Date(now.getTime() + 150 * 24 * 60 * 60 * 1000);
    return html\`
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    Just now:
                    <at-relative-time .timestamp=\${justNow}></at-relative-time>
                </div>
                <div>
                    1 hour ago:
                    <at-relative-time
                        .timestamp=\${anHourAgo}
                    ></at-relative-time>
                </div>
                <div>
                    2 days ago:
                    <at-relative-time
                        .timestamp=\${twoDaysAgo}
                    ></at-relative-time>
                </div>
                <div>
                    1 month ago:
                    <at-relative-time
                        .timestamp=\${aMonthAgo}
                    ></at-relative-time>
                </div>
                <div>
                    In 3 days:
                    <at-relative-time
                        .timestamp=\${inThreeDays}
                    ></at-relative-time>
                </div>
                <div>
                    In 5 months:
                    <at-relative-time
                        .timestamp=\${inFiveMonths}
                    ></at-relative-time>
                </div>
            </div>
        \`;
  }
}`,...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:"Display several timestamps at different intervals.",...(J=(C=o.parameters)==null?void 0:C.docs)==null?void 0:J.description}}};const G=["Default","ISOString","FutureTime","RecentlyUpdated","CustomInterval","MultipleTimestamps"];export{s as CustomInterval,a as Default,i as FutureTime,n as ISOString,o as MultipleTimestamps,r as RecentlyUpdated,G as __namedExportsOrder,z as default};
