const m=e=>`
<at-prompt-message
    role="${e.role??""}"
    content="${e.content??""}"
    name="${e.name??""}"
    avatar="${e.avatar??""}"
    timestamp="${e.timestamp??""}"
    error_message="${e.error_message??""}"
    animate="${e.animate??""}"
    ${e.loading?"loading":""}
    ${e.error?"error":""}
></at-prompt-message>
`,k={title:"Components/Prompt/Message",argTypes:{role:{control:"select",options:["user","assistant","system"],description:"Message role/sender"},content:{control:"text",description:"Message content"},name:{control:"text",description:"Sender name"},avatar:{control:"text",description:"Avatar image URL"},timestamp:{control:"text",description:"Message timestamp"},loading:{control:"boolean",description:"Loading state"},error:{control:"boolean",description:"Error state"},error_message:{control:"text",description:"Error message text"},animate:{control:"select",options:["none","fade","words"],description:"Animation type for text streaming"}}},a=m.bind({});a.args={role:"user",content:"Hello! Can you help me understand how this component works?",name:"John Doe",timestamp:"2:30 PM"};const s=m.bind({});s.args={role:"assistant",content:"Of course! This component is designed to display chat messages in different styles based on the sender role. It supports user messages, assistant responses, and system notifications.",name:"AI Assistant",timestamp:"2:31 PM"};const r=m.bind({});r.args={role:"assistant",name:"AI Assistant",loading:!0};const t=m.bind({});t.args={role:"assistant",name:"AI Assistant",error:!0,error_message:"Failed to generate response. Please try again.",timestamp:"2:35 PM"};const o=m.bind({});o.args={role:"assistant",content:"This message will animate word by word like ChatGPT responses, creating a streaming effect that makes the conversation feel more dynamic and engaging.",name:"AI Assistant",timestamp:"2:35 PM",animate:"words"};const C=e=>`
<at-prompt-message
    role="${e.role??""}"
    name="${e.name??""}"
    avatar="${e.avatar??""}"
    timestamp="${e.timestamp??""}"
    ${e.loading?"loading":""}
    ${e.error?"error":""}
    error_message="${e.error_message??""}"
>
    <div>
        <p><strong>Here's a complex response with custom HTML:</strong></p>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>You can include any custom content in the slot.</p>
    </div>
</at-prompt-message>
`,n=C.bind({});n.args={role:"assistant",name:"AI Assistant",timestamp:"2:33 PM"};const S=()=>`
<div class="max-w-4xl space-y-4">
    <at-prompt-message
        role="user"
        content="Hello! How are you today?"
        name="User"
        timestamp="2:30 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="assistant"
        content="Hello! I'm doing well, thank you for asking. How can I help you today?"
        name="AI Assistant"
        timestamp="2:30 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="user"
        content="Can you explain how machine learning works?"
        name="User"
        timestamp="2:31 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="assistant"
        loading
        name="AI Assistant"
    ></at-prompt-message>
</div>
`,i=S.bind({});var p,g,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<at-prompt-message
    role="\${args.role ?? ''}"
    content="\${args.content ?? ''}"
    name="\${args.name ?? ''}"
    avatar="\${args.avatar ?? ''}"
    timestamp="\${args.timestamp ?? ''}"
    error_message="\${args.error_message ?? ''}"
    animate="\${args.animate ?? ''}"
    \${args.loading ? 'loading' : ''}
    \${args.error ? 'error' : ''}
></at-prompt-message>
\``,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var c,d,$;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<at-prompt-message
    role="\${args.role ?? ''}"
    content="\${args.content ?? ''}"
    name="\${args.name ?? ''}"
    avatar="\${args.avatar ?? ''}"
    timestamp="\${args.timestamp ?? ''}"
    error_message="\${args.error_message ?? ''}"
    animate="\${args.animate ?? ''}"
    \${args.loading ? 'loading' : ''}
    \${args.error ? 'error' : ''}
></at-prompt-message>
\``,...($=(d=s.parameters)==null?void 0:d.docs)==null?void 0:$.source}}};var u,v,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<at-prompt-message
    role="\${args.role ?? ''}"
    content="\${args.content ?? ''}"
    name="\${args.name ?? ''}"
    avatar="\${args.avatar ?? ''}"
    timestamp="\${args.timestamp ?? ''}"
    error_message="\${args.error_message ?? ''}"
    animate="\${args.animate ?? ''}"
    \${args.loading ? 'loading' : ''}
    \${args.error ? 'error' : ''}
></at-prompt-message>
\``,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,M,A;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
<at-prompt-message
    role="\${args.role ?? ''}"
    content="\${args.content ?? ''}"
    name="\${args.name ?? ''}"
    avatar="\${args.avatar ?? ''}"
    timestamp="\${args.timestamp ?? ''}"
    error_message="\${args.error_message ?? ''}"
    animate="\${args.animate ?? ''}"
    \${args.loading ? 'loading' : ''}
    \${args.error ? 'error' : ''}
></at-prompt-message>
\``,...(A=(M=t.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var w,_,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => \`
<at-prompt-message
    role="\${args.role ?? ''}"
    content="\${args.content ?? ''}"
    name="\${args.name ?? ''}"
    avatar="\${args.avatar ?? ''}"
    timestamp="\${args.timestamp ?? ''}"
    error_message="\${args.error_message ?? ''}"
    animate="\${args.animate ?? ''}"
    \${args.loading ? 'loading' : ''}
    \${args.error ? 'error' : ''}
></at-prompt-message>
\``,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var P,I,H;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`args => \`
<at-prompt-message
    role="\${args.role ?? ''}"
    name="\${args.name ?? ''}"
    avatar="\${args.avatar ?? ''}"
    timestamp="\${args.timestamp ?? ''}"
    \${args.loading ? 'loading' : ''}
    \${args.error ? 'error' : ''}
    error_message="\${args.error_message ?? ''}"
>
    <div>
        <p><strong>Here's a complex response with custom HTML:</strong></p>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>You can include any custom content in the slot.</p>
    </div>
</at-prompt-message>
\``,...(H=(I=n.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var f,L,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => \`
<div class="max-w-4xl space-y-4">
    <at-prompt-message
        role="user"
        content="Hello! How are you today?"
        name="User"
        timestamp="2:30 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="assistant"
        content="Hello! I'm doing well, thank you for asking. How can I help you today?"
        name="AI Assistant"
        timestamp="2:30 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="user"
        content="Can you explain how machine learning works?"
        name="User"
        timestamp="2:31 PM"
    ></at-prompt-message>
    <at-prompt-message
        role="assistant"
        loading
        name="AI Assistant"
    ></at-prompt-message>
</div>
\``,...(b=(L=i.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const T=["UserMessage","AssistantMessage","LoadingMessage","ErrorMessage","AnimatedWords","WithSlotContent","Conversation"];export{o as AnimatedWords,s as AssistantMessage,i as Conversation,t as ErrorMessage,r as LoadingMessage,a as UserMessage,n as WithSlotContent,T as __namedExportsOrder,k as default};
