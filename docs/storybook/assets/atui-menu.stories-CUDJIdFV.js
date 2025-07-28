const r=t=>`
<atui-auto-open-menu
    offset_x=${t.offset_x}
    offset_y=${t.offset_y}
    origin_x="${t.origin_x}"
    origin_y="${t.origin_y}"
    width="${t.width}"
>
    <div slot="menu-title">
        <div
            style="height:90px; width:100%; background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Bar</h1>
        </div>
    </div>
    <div slot="menu-content">
        <div
            style="height:200px;width:100%;background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Dropdown</h1>
        </div>
    </div>
</atui-auto-open-menu>`,s={title:"Components/Auto Open Menu",argTypes:{origin_x:{options:["start","center","end"],control:{type:"radio"}},origin_y:{options:["top","center","bottom"],control:{type:"radio"}}}},e=r.bind({});e.args={offset_x:0,offset_y:0,origin_x:"start",origin_y:"top",width:"280px"};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
<atui-auto-open-menu
    offset_x=\${args.offset_x}
    offset_y=\${args.offset_y}
    origin_x="\${args.origin_x}"
    origin_y="\${args.origin_y}"
    width="\${args.width}"
>
    <div slot="menu-title">
        <div
            style="height:90px; width:100%; background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Bar</h1>
        </div>
    </div>
    <div slot="menu-content">
        <div
            style="height:200px;width:100%;background-color:rgb(78,186,254); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
        >
            <h1>Menu Dropdown</h1>
        </div>
    </div>
</atui-auto-open-menu>\``,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const d=["Primary"];export{e as Primary,d as __namedExportsOrder,s as default};
