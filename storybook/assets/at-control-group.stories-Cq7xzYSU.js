const ut={title:"Components/Control Group",argTypes:{direction:{options:["horizontal","vertical"],control:{type:"radio"}}}},t={render:()=>`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">
        <at-icon name="dashboard"></at-icon>
    </at-button>
    <at-button type="secondaryOutline">Text</at-button>
    <at-button type="secondaryOutline">Right</at-button>
</at-control-group>`},n={render:()=>`
<at-control-group direction="vertical">
    <at-button type="secondaryOutline">
        <at-icon name="dashboard"></at-icon>
    </at-button>
    <at-button type="secondaryOutline">Text</at-button>
    <at-button type="secondaryOutline">Bottom</at-button>
</at-control-group>`},e={render:()=>`
<at-control-group direction="horizontal">
    <at-input placeholder="Search..."></at-input>
    <at-button type="secondaryOutline">Search</at-button>
</at-control-group>`},o={render:()=>`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-input placeholder="Search..."></at-input>
</at-control-group>`},a={render:()=>`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-input placeholder="Search..."></at-input>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>`},r={render:()=>`
<at-control-group direction="horizontal">
    <at-select placeholder="Choose..."></at-select>
    <at-button type="secondaryOutline">Go</at-button>
</at-control-group>`},u={render:()=>`
<at-control-group direction="horizontal">
    <at-multi-select placeholder="Choose..."></at-multi-select>
    <at-button type="secondaryOutline">Go</at-button>
</at-control-group>`},i={render:()=>`
<at-control-group direction="horizontal">
    <at-search placeholder="Search..."></at-search>
    <at-button type="secondaryOutline">Filter</at-button>
</at-control-group>`},c={render:()=>`
<at-control-group direction="horizontal">
    <at-input-date></at-input-date>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>`},l={render:()=>`
<at-control-group direction="horizontal">
    <at-input-time></at-input-time>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>`},p={render:()=>`
<at-control-group direction="horizontal">
    <at-input-date></at-input-date>
    <at-input-time></at-input-time>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>`},s={render:()=>`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
</at-control-group>`},m={render:()=>`
<at-control-group direction="horizontal">
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>`},d={render:()=>`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>`},b={render:()=>`
<div style="display: flex; gap: 24px;">
    <at-control-group direction="vertical">
        <at-button type="secondaryOutline">Text</at-button>
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
    </at-control-group>

    <at-control-group direction="vertical">
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
        <at-button type="secondaryOutline">Text</at-button>
    </at-control-group>

    <at-control-group direction="vertical">
        <at-button type="secondaryOutline">Text</at-button>
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
        <at-button type="secondaryOutline">Text</at-button>
    </at-control-group>
</div>`};var g,y,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">
        <at-icon name="dashboard"></at-icon>
    </at-button>
    <at-button type="secondaryOutline">Text</at-button>
    <at-button type="secondaryOutline">Right</at-button>
</at-control-group>\`
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var O,T,x;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="vertical">
    <at-button type="secondaryOutline">
        <at-icon name="dashboard"></at-icon>
    </at-button>
    <at-button type="secondaryOutline">Text</at-button>
    <at-button type="secondaryOutline">Bottom</at-button>
</at-control-group>\`
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,z,B;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-input placeholder="Search..."></at-input>
    <at-button type="secondaryOutline">Search</at-button>
</at-control-group>\`
}`,...(B=(z=e.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var M,v,W;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-input placeholder="Search..."></at-input>
</at-control-group>\`
}`,...(W=(v=o.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var A,C,G;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-input placeholder="Search..."></at-input>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>\`
}`,...(G=(C=a.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var I,D,L;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-select placeholder="Choose..."></at-select>
    <at-button type="secondaryOutline">Go</at-button>
</at-control-group>\`
}`,...(L=(D=r.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var V,f,_;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-multi-select placeholder="Choose..."></at-multi-select>
    <at-button type="secondaryOutline">Go</at-button>
</at-control-group>\`
}`,...(_=(f=u.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var F,H,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-search placeholder="Search..."></at-search>
    <at-button type="secondaryOutline">Filter</at-button>
</at-control-group>\`
}`,...(R=(H=i.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var E,j,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-input-date></at-input-date>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>\`
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,w,J;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-input-time></at-input-time>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>\`
}`,...(J=(w=l.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};var K,N,P;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-input-date></at-input-date>
    <at-input-time></at-input-time>
    <at-button type="secondaryOutline">Apply</at-button>
</at-control-group>\`
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var Q,U,X;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
</at-control-group>\`
}`,...(X=(U=s.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>\`
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,nt,et;d.parameters={...d.parameters,docs:{...(tt=d.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => \`
<at-control-group direction="horizontal">
    <at-button type="secondaryOutline">Text</at-button>
    <at-menu>
        <at-button slot="menu-trigger">Menu</at-button>
        <at-menu-item label="Option 1"></at-menu-item>
        <at-menu-item label="Option 2"></at-menu-item>
    </at-menu>
    <at-button type="secondaryOutline">Text</at-button>
</at-control-group>\`
}`,...(et=(nt=d.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};var ot,at,rt;b.parameters={...b.parameters,docs:{...(ot=b.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => \`
<div style="display: flex; gap: 24px;">
    <at-control-group direction="vertical">
        <at-button type="secondaryOutline">Text</at-button>
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
    </at-control-group>

    <at-control-group direction="vertical">
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
        <at-button type="secondaryOutline">Text</at-button>
    </at-control-group>

    <at-control-group direction="vertical">
        <at-button type="secondaryOutline">Text</at-button>
        <at-menu>
            <at-button slot="menu-trigger">Menu</at-button>
            <at-menu-item label="Option 1"></at-menu-item>
            <at-menu-item label="Option 2"></at-menu-item>
        </at-menu>
        <at-button type="secondaryOutline">Text</at-button>
    </at-control-group>
</div>\`
}`,...(rt=(at=b.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};const it=["ButtonsHorizontal","ButtonsVertical","InputLeading","InputTrailing","ButtonInputButton","SelectWithButton","MultiSelectWithButton","SearchWithButton","DateWithButton","TimeWithButton","DateAndTime","MenuTrailing","MenuLeading","ButtonMenuButton","VerticalWithMenu"];export{a as ButtonInputButton,d as ButtonMenuButton,t as ButtonsHorizontal,n as ButtonsVertical,p as DateAndTime,c as DateWithButton,e as InputLeading,o as InputTrailing,m as MenuLeading,s as MenuTrailing,u as MultiSelectWithButton,i as SearchWithButton,r as SelectWithButton,l as TimeWithButton,b as VerticalWithMenu,it as __namedExportsOrder,ut as default};
