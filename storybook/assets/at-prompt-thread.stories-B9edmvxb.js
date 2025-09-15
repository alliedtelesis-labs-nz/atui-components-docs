import{x as t}from"./lit-element-CzV6k0XT.js";const p=[{id:"1",role:"user",content:"Hello! Can you help me understand how AI works?",name:"John Doe",timestamp:"2:30 PM"},{id:"2",role:"assistant",content:"Hello! I'd be happy to help you understand AI. Artificial Intelligence is a broad field that involves creating computer systems that can perform tasks that typically require human intelligence.",name:"AI Assistant",timestamp:"2:30 PM"},{id:"3",role:"user",content:"That's interesting! Can you give me some specific examples?",name:"John Doe",timestamp:"2:31 PM"},{id:"4",role:"assistant",content:`Certainly! Here are some common AI applications:

• **Natural Language Processing**: Like chatbots and language translation
• **Computer Vision**: Image recognition and facial detection
• **Machine Learning**: Recommendation systems like those used by Netflix or Spotify
• **Robotics**: Autonomous vehicles and manufacturing robots
• **Game Playing**: AI systems that can play chess, Go, or video games`,name:"AI Assistant",timestamp:"2:31 PM"}],k={title:"Components/Prompt/Thread",component:"at-prompt-thread",argTypes:{messages:{control:"object",description:"Array of messages to display"},loading:{control:"boolean",description:"Loading state"},empty_state_title:{control:"text",description:"Empty state title"},empty_state_description:{control:"text",description:"Empty state description"},auto_scroll:{control:"boolean",description:"Auto scroll to bottom on new messages"},max_height:{control:"text",description:"Maximum height of the thread container"}}},s={args:{messages:[],empty_state_title:"No messages yet",empty_state_description:"Start a conversation by sending a message"},render:e=>t`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `},a={args:{messages:p,auto_scroll:!0,max_height:"400px"},render:e=>t`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `},r={args:{messages:p,loading:!0,auto_scroll:!0,max_height:"400px"},render:e=>t`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `},o={args:{messages:[...p,{id:"5",role:"assistant",name:"AI Assistant",timestamp:"2:32 PM",error:!0,error_message:"Failed to generate response. Please try again."}],auto_scroll:!0,max_height:"400px"},render:e=>t`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `},n={args:{messages:p,auto_scroll:!0,max_height:"200px"},render:e=>t`
        <div
            style="height: 200px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `},i={args:{messages:[{id:"1",role:"system",content:"Conversation started at 2:30 PM",timestamp:"2:30 PM"},{id:"2",role:"user",content:"Hello!",name:"User",timestamp:"2:30 PM"},{id:"3",role:"assistant",content:"Hello! How can I help you today?",name:"AI Assistant",timestamp:"2:30 PM"},{id:"4",role:"system",content:"AI model updated to version 2.0",timestamp:"2:31 PM"}],auto_scroll:!0,max_height:"400px"},render:e=>t`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `},m={args:{messages:[],empty_state_title:"Welcome to AI Chat",empty_state_description:"Ask me anything to get started. I'm here to help!"},render:e=>t`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=${e.messages}
                .loading=${e.loading}
                .empty_state_title=${e.empty_state_title}
                .empty_state_description=${e.empty_state_description}
                .auto_scroll=${e.auto_scroll}
                .max_height=${e.max_height}
            ></at-prompt-thread>
        </div>
    `};var d,l,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    messages: [],
    empty_state_title: 'No messages yet',
    empty_state_description: 'Start a conversation by sending a message'
  },
  render: args => html\`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(_=(l=s.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};var g,c,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    auto_scroll: true,
    max_height: '400px'
  },
  render: args => html\`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var y,u,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    loading: true,
    auto_scroll: true,
    max_height: '400px'
  },
  render: args => html\`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var $,b,v;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    messages: [...sampleMessages, {
      id: '5',
      role: 'assistant' as const,
      name: 'AI Assistant',
      timestamp: '2:32 PM',
      error: true,
      error_message: 'Failed to generate response. Please try again.'
    }],
    auto_scroll: true,
    max_height: '400px'
  },
  render: args => html\`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var M,f,A;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    auto_scroll: true,
    max_height: '200px'
  },
  render: args => html\`
        <div
            style="height: 200px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(A=(f=n.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var I,P,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      role: 'system' as const,
      content: 'Conversation started at 2:30 PM',
      timestamp: '2:30 PM'
    }, {
      id: '2',
      role: 'user' as const,
      content: 'Hello!',
      name: 'User',
      timestamp: '2:30 PM'
    }, {
      id: '3',
      role: 'assistant' as const,
      content: 'Hello! How can I help you today?',
      name: 'AI Assistant',
      timestamp: '2:30 PM'
    }, {
      id: '4',
      role: 'system' as const,
      content: 'AI model updated to version 2.0',
      timestamp: '2:31 PM'
    }],
    auto_scroll: true,
    max_height: '400px'
  },
  render: args => html\`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(S=(P=i.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var C,E,H;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    messages: [],
    empty_state_title: 'Welcome to AI Chat',
    empty_state_description: "Ask me anything to get started. I'm here to help!"
  },
  render: args => html\`
        <div
            style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;"
        >
            <at-prompt-thread
                .messages=\${args.messages}
                .loading=\${args.loading}
                .empty_state_title=\${args.empty_state_title}
                .empty_state_description=\${args.empty_state_description}
                .auto_scroll=\${args.auto_scroll}
                .max_height=\${args.max_height}
            ></at-prompt-thread>
        </div>
    \`
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const L=["Empty","WithMessages","WithLoading","WithError","ShortContainer","SystemMessages","CustomEmptyState"];export{m as CustomEmptyState,s as Empty,n as ShortContainer,i as SystemMessages,o as WithError,r as WithLoading,a as WithMessages,L as __namedExportsOrder,k as default};
