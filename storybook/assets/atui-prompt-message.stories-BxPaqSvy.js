import{x as a}from"./lit-element-CzV6k0XT.js";const E={title:"Components/Prompt/Message",component:"atui-prompt-message",argTypes:{role:{control:"select",options:["user","assistant","system"],description:"Message role/sender"},content:{control:"text",description:"Message content"},name:{control:"text",description:"Sender name"},avatar:{control:"text",description:"Avatar image URL"},timestamp:{control:"text",description:"Message timestamp"},loading:{control:"boolean",description:"Loading state"},error:{control:"boolean",description:"Error state"},error_message:{control:"text",description:"Error message text"}}},r={args:{role:"user",content:"Hello! Can you help me understand how this component works?",name:"John Doe",timestamp:"2:30 PM"},render:e=>a`
        <atui-prompt-message
            role=${e.role}
            content=${e.content}
            name=${e.name}
            avatar=${e.avatar}
            loading=${e.loading}
            error=${e.error}
            error_message=${e.error_message}
        ></atui-prompt-message>
    `},s={args:{role:"assistant",content:"Of course! This component is designed to display chat messages in different styles based on the sender role. It supports user messages, assistant responses, and system notifications.",name:"AI Assistant",timestamp:"2:31 PM"},render:e=>a`
        <atui-prompt-message
            .role=${e.role}
            .content=${e.content}
            .name=${e.name}
            .avatar=${e.avatar}
            .timestamp=${e.timestamp}
            .loading=${e.loading}
            .error=${e.error}
            .error_message=${e.error_message}
        ></atui-prompt-message>
    `},t={args:{role:"system",content:"Conversation started at 2:30 PM",timestamp:"2:30 PM"},render:e=>a`
        <atui-prompt-message
            .role=${e.role}
            .content=${e.content}
            .name=${e.name}
            .avatar=${e.avatar}
            .timestamp=${e.timestamp}
            .loading=${e.loading}
            .error=${e.error}
            .error_message=${e.error_message}
        ></atui-prompt-message>
    `},n={args:{role:"assistant",name:"AI Assistant",loading:!0},render:e=>a`
        <atui-prompt-message
            .role=${e.role}
            .content=${e.content}
            .name=${e.name}
            .avatar=${e.avatar}
            .timestamp=${e.timestamp}
            .loading=${e.loading}
            .error=${e.error}
            .error_message=${e.error_message}
        ></atui-prompt-message>
    `},o={args:{role:"assistant",name:"AI Assistant",error:!0,error_message:"Failed to generate response. Please try again.",timestamp:"2:35 PM"},render:e=>a`
        <atui-prompt-message
            .role=${e.role}
            .content=${e.content}
            .name=${e.name}
            .avatar=${e.avatar}
            .timestamp=${e.timestamp}
            .loading=${e.loading}
            .error=${e.error}
            .error_message=${e.error_message}
        ></atui-prompt-message>
    `},m={args:{role:"user",content:"This message includes a custom avatar image.",name:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b95d1cec?w=32&h=32&fit=crop&crop=face",timestamp:"2:32 PM"},render:e=>a`
        <atui-prompt-message
            .role=${e.role}
            .content=${e.content}
            .name=${e.name}
            .avatar=${e.avatar}
            .timestamp=${e.timestamp}
            .loading=${e.loading}
            .error=${e.error}
            .error_message=${e.error_message}
        ></atui-prompt-message>
    `},i={args:{role:"assistant",name:"AI Assistant",timestamp:"2:33 PM"},render:e=>a`
        <atui-prompt-message
            .role=${e.role}
            .name=${e.name}
            .avatar=${e.avatar}
            .timestamp=${e.timestamp}
            .loading=${e.loading}
            .error=${e.error}
            .error_message=${e.error_message}
        >
            <div>
                <p>
                    <strong>Here's a complex response with custom HTML:</strong>
                </p>

                <ul>
                    <li>List item 1</li>

                    <li>List item 2</li>

                    <li>List item 3</li>
                </ul>

                <p>You can include any custom content in the slot.</p>
            </div>
        </atui-prompt-message>
    `},p={render:()=>a`
        <div class="max-w-4xl space-y-4">
            <atui-prompt-message
                role="user"
                content="Hello! How are you today?"
                name="User"
                timestamp="2:30 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="assistant"
                content="Hello! I'm doing well, thank you for asking. How can I help you today?"
                name="AI Assistant"
                timestamp="2:30 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="user"
                content="Can you explain how machine learning works?"
                name="User"
                timestamp="2:31 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="assistant"
                loading="true"
                name="AI Assistant"
            ></atui-prompt-message>
        </div>
    `};var g,l,c;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    role: 'user',
    content: 'Hello! Can you help me understand how this component works?',
    name: 'John Doe',
    timestamp: '2:30 PM'
  },
  render: args => html\`
        <atui-prompt-message
            role=\${args.role}
            content=\${args.content}
            name=\${args.name}
            avatar=\${args.avatar}
            loading=\${args.loading}
            error=\${args.error}
            error_message=\${args.error_message}
        ></atui-prompt-message>
    \`
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,$;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    content: 'Of course! This component is designed to display chat messages in different styles based on the sender role. It supports user messages, assistant responses, and system notifications.',
    name: 'AI Assistant',
    timestamp: '2:31 PM'
  },
  render: args => html\`
        <atui-prompt-message
            .role=\${args.role}
            .content=\${args.content}
            .name=\${args.name}
            .avatar=\${args.avatar}
            .timestamp=\${args.timestamp}
            .loading=\${args.loading}
            .error=\${args.error}
            .error_message=\${args.error_message}
        ></atui-prompt-message>
    \`
}`,...($=(u=s.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var h,v,M;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    role: 'system',
    content: 'Conversation started at 2:30 PM',
    timestamp: '2:30 PM'
  },
  render: args => html\`
        <atui-prompt-message
            .role=\${args.role}
            .content=\${args.content}
            .name=\${args.name}
            .avatar=\${args.avatar}
            .timestamp=\${args.timestamp}
            .loading=\${args.loading}
            .error=\${args.error}
            .error_message=\${args.error_message}
        ></atui-prompt-message>
    \`
}`,...(M=(v=t.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var _,y,A;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    name: 'AI Assistant',
    loading: true
  },
  render: args => html\`
        <atui-prompt-message
            .role=\${args.role}
            .content=\${args.content}
            .name=\${args.name}
            .avatar=\${args.avatar}
            .timestamp=\${args.timestamp}
            .loading=\${args.loading}
            .error=\${args.error}
            .error_message=\${args.error_message}
        ></atui-prompt-message>
    \`
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var P,w,I;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    name: 'AI Assistant',
    error: true,
    error_message: 'Failed to generate response. Please try again.',
    timestamp: '2:35 PM'
  },
  render: args => html\`
        <atui-prompt-message
            .role=\${args.role}
            .content=\${args.content}
            .name=\${args.name}
            .avatar=\${args.avatar}
            .timestamp=\${args.timestamp}
            .loading=\${args.loading}
            .error=\${args.error}
            .error_message=\${args.error_message}
        ></atui-prompt-message>
    \`
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var x,f,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    role: 'user',
    content: 'This message includes a custom avatar image.',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b95d1cec?w=32&h=32&fit=crop&crop=face',
    timestamp: '2:32 PM'
  },
  render: args => html\`
        <atui-prompt-message
            .role=\${args.role}
            .content=\${args.content}
            .name=\${args.name}
            .avatar=\${args.avatar}
            .timestamp=\${args.timestamp}
            .loading=\${args.loading}
            .error=\${args.error}
            .error_message=\${args.error_message}
        ></atui-prompt-message>
    \`
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var H,L,C;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    name: 'AI Assistant',
    timestamp: '2:33 PM'
  },
  render: args => html\`
        <atui-prompt-message
            .role=\${args.role}
            .name=\${args.name}
            .avatar=\${args.avatar}
            .timestamp=\${args.timestamp}
            .loading=\${args.loading}
            .error=\${args.error}
            .error_message=\${args.error_message}
        >
            <div>
                <p>
                    <strong>Here's a complex response with custom HTML:</strong>
                </p>

                <ul>
                    <li>List item 1</li>

                    <li>List item 2</li>

                    <li>List item 3</li>
                </ul>

                <p>You can include any custom content in the slot.</p>
            </div>
        </atui-prompt-message>
    \`
}`,...(C=(L=i.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var k,T,U;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => html\`
        <div class="max-w-4xl space-y-4">
            <atui-prompt-message
                role="user"
                content="Hello! How are you today?"
                name="User"
                timestamp="2:30 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="assistant"
                content="Hello! I'm doing well, thank you for asking. How can I help you today?"
                name="AI Assistant"
                timestamp="2:30 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="user"
                content="Can you explain how machine learning works?"
                name="User"
                timestamp="2:31 PM"
            ></atui-prompt-message>
            <atui-prompt-message
                role="assistant"
                loading="true"
                name="AI Assistant"
            ></atui-prompt-message>
        </div>
    \`
}`,...(U=(T=p.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const J=["UserMessage","AssistantMessage","SystemMessage","LoadingMessage","ErrorMessage","WithAvatar","WithSlotContent","Conversation"];export{s as AssistantMessage,p as Conversation,o as ErrorMessage,n as LoadingMessage,t as SystemMessage,r as UserMessage,m as WithAvatar,i as WithSlotContent,J as __namedExportsOrder,E as default};
