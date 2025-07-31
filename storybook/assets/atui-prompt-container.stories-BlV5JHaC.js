import{x as t}from"./lit-element-BQ2u6o3f.js";const Y={title:"Components/Prompt/Container",component:"atui-prompt-container",argTypes:{header_title:{control:"text",description:"Container title"},subtitle:{control:"text",description:"Container subtitle"},placeholder:{control:"text",description:"Input placeholder text"},loading:{control:"boolean",description:"Loading state"},disabled:{control:"boolean",description:"Disabled state"},max_height:{control:"text",description:"Maximum container height"},show_header:{control:"boolean",description:"Show header section"},show_clear_button:{control:"boolean",description:"Show clear messages button"},empty_state_title:{control:"text",description:"Empty state title"},empty_state_description:{control:"text",description:"Empty state description"},max_message_length:{control:"number",description:"Maximum message length"}}},n={args:{title:"AI Assistant",placeholder:"Type your message here...",show_header:!0,show_clear_button:!0,max_height:"600px"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},s={args:{title:"AI Assistant",subtitle:"Powered by advanced language models",placeholder:"Ask me anything...",show_header:!0,show_clear_button:!0,max_height:"600px"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},i={args:{placeholder:"Type your message here...",show_header:!1,show_clear_button:!0,max_height:"500px"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},r={args:{title:"Quick Chat",placeholder:"Ask a quick question...",show_header:!0,show_clear_button:!1,max_height:"400px",empty_state_title:"Quick Chat",empty_state_description:"Get fast answers to your questions"},render:e=>t`
        <div style="width: 100%; max-width: 600px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},o={args:{title:"AI Assistant",placeholder:"Type your message here...",loading:!0,show_header:!0,show_clear_button:!0,max_height:"600px"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},l={args:{title:"AI Assistant",subtitle:"Currently unavailable",placeholder:"Service is temporarily unavailable...",disabled:!0,show_header:!0,show_clear_button:!0,max_height:"600px"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},d={args:{title:"AI Assistant",placeholder:"Type your message here (max 100 characters)...",show_header:!0,show_clear_button:!0,max_height:"600px",max_message_length:100},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},h={args:{title:"Code Assistant",subtitle:"Get help with programming questions",placeholder:"Describe your coding problem...",show_header:!0,show_clear_button:!0,max_height:"600px",empty_state_title:"Ready to code?",empty_state_description:"Ask me about programming languages, debugging, or best practices"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_clear_button=${e.show_clear_button}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .max_message_length=${e.max_message_length}
            ></atui-prompt-container>
        </div>
    `},_={args:{title:"Interactive Demo",subtitle:"Try sending messages to see the interface in action",placeholder:"Type your message here...",show_header:!0,show_new_thread_button:!0,max_height:"600px"},render:e=>t`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                id="demo-container"
                .header_title=${e.header_title}
                .subtitle=${e.subtitle}
                .placeholder=${e.placeholder}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .max_height=${e.max_height}
                .show_header=${e.show_header}
                .show_new_thread_button=${e.show_new_thread_button}
                .max_message_length=${e.max_message_length}
                @atuiSubmit=${m=>{const a=m.target,p=m.detail;a.addMessage("user",p),a.loading=!0;const N=setTimeout(()=>{a.addMessage("assistant",`You said: "${p}". This is a demo response from the AI assistant!`),a.loading=!1},2e3);a.addEventListener("atuiStop",()=>{clearTimeout(N),a.loading=!1},{once:!0})}}
            ></atui-prompt-container>
        </div>
    `};var c,g,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'AI Assistant',
    placeholder: 'Type your message here...',
    show_header: true,
    show_clear_button: true,
    max_height: '600px'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var $,b,x;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'AI Assistant',
    subtitle: 'Powered by advanced language models',
    placeholder: 'Ask me anything...',
    show_header: true,
    show_clear_button: true,
    max_height: '600px'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,y,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...',
    show_header: false,
    show_clear_button: true,
    max_height: '500px'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,S,f;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Quick Chat',
    placeholder: 'Ask a quick question...',
    show_header: true,
    show_clear_button: false,
    max_height: '400px',
    empty_state_title: 'Quick Chat',
    empty_state_description: 'Get fast answers to your questions'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 600px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,C,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'AI Assistant',
    placeholder: 'Type your message here...',
    loading: true,
    show_header: true,
    show_clear_button: true,
    max_height: '600px'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var k,D,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'AI Assistant',
    subtitle: 'Currently unavailable',
    placeholder: 'Service is temporarily unavailable...',
    disabled: true,
    show_header: true,
    show_clear_button: true,
    max_height: '600px'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var E,L,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'AI Assistant',
    placeholder: 'Type your message here (max 100 characters)...',
    show_header: true,
    show_clear_button: true,
    max_height: '600px',
    max_message_length: 100
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var G,Q,W;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Code Assistant',
    subtitle: 'Get help with programming questions',
    placeholder: 'Describe your coding problem...',
    show_header: true,
    show_clear_button: true,
    max_height: '600px',
    empty_state_title: 'Ready to code?',
    empty_state_description: 'Ask me about programming languages, debugging, or best practices'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_clear_button=\${args.show_clear_button}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .max_message_length=\${args.max_message_length}
            ></atui-prompt-container>
        </div>
    \`
}`,...(W=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var H,P,z;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Interactive Demo',
    subtitle: 'Try sending messages to see the interface in action',
    placeholder: 'Type your message here...',
    show_header: true,
    show_new_thread_button: true,
    max_height: '600px'
  },
  render: args => html\`
        <div style="width: 100%; max-width: 800px; margin: 0 auto;">
            <atui-prompt-container
                id="demo-container"
                .header_title=\${args.header_title}
                .subtitle=\${args.subtitle}
                .placeholder=\${args.placeholder}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .max_height=\${args.max_height}
                .show_header=\${args.show_header}
                .show_new_thread_button=\${args.show_new_thread_button}
                .max_message_length=\${args.max_message_length}
                @atuiSubmit=\${e => {
    const container = e.target;
    const content = e.detail;

    // Add user message
    container.addMessage('user', content);

    // Simulate loading
    container.loading = true;

    // Simulate AI response after 2 seconds
    const timeout = setTimeout(() => {
      container.addMessage('assistant', \`You said: "\${content}". This is a demo response from the AI assistant!\`);
      container.loading = false;
    }, 2000);

    // Handle stop
    container.addEventListener('atuiStop', () => {
      clearTimeout(timeout);
      container.loading = false;
    }, {
      once: true
    });
  }}
            ></atui-prompt-container>
        </div>
    \`
}`,...(z=(P=_.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const O=["Default","WithSubtitle","NoHeader","CompactSize","Loading","Disabled","WithCharacterLimit","CustomEmptyState","InteractiveDemo"];export{r as CompactSize,h as CustomEmptyState,n as Default,l as Disabled,_ as InteractiveDemo,o as Loading,i as NoHeader,d as WithCharacterLimit,s as WithSubtitle,O as __namedExportsOrder,Y as default};
