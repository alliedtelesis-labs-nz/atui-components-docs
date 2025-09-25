const n=[{id:"1",role:"user",content:"Hello! Can you help me understand how AI works?",name:"John Doe",timestamp:"2:30 PM"},{id:"2",role:"assistant",content:"Hello! I'd be happy to help you understand AI. Artificial Intelligence is a broad field that involves creating computer systems that can perform tasks that typically require human intelligence.",name:"AI Assistant",timestamp:"2:30 PM"},{id:"3",role:"user",content:"That's interesting! Can you give me some specific examples?",name:"John Doe",timestamp:"2:31 PM"},{id:"4",role:"assistant",content:"Certainly! Here are some common AI applications:\\n\\n• **Natural Language Processing**: Like chatbots and language translation\\n• **Computer Vision**: Image recognition and facial detection\\n• **Machine Learning**: Recommendation systems like those used by Netflix or Spotify\\n• **Robotics**: Autonomous vehicles and manufacturing robots\\n• **Game Playing**: AI systems that can play chess, Go, or video games",name:"AI Assistant",timestamp:"2:31 PM"}],r=e=>`
<div style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <at-prompt-thread
        messages='${JSON.stringify(e.messages??[])}'
        chatbot_title="${e.chatbot_title??"Assistant"}"
        response_animation="${e.response_animation??"none"}"
        ${e.loading?"loading":""}
        ${e.auto_scroll?"auto_scroll":""}
        ${e.enable_vote?"enable_vote":""}
        ${e.enable_copy?"enable_copy":""}
        ${e.enable_edit?"enable_edit":""}
    ></at-prompt-thread>
</div>
`,$={title:"Components/Prompt/Thread",argTypes:{messages:{control:"object",description:"Array of messages to display"},loading:{control:"boolean",description:"Loading state"},auto_scroll:{control:"boolean",description:"Auto scroll to bottom on new messages"},chatbot_title:{control:"text",description:"Display name for chatbot/assistant messages"},response_animation:{control:"select",options:["none","fade","words"],description:"Animation type for responses"},enable_vote:{control:"boolean",description:"Display voting actions for assistant messages"},enable_copy:{control:"boolean",description:"Display copy action for assistant messages"},enable_edit:{control:"boolean",description:"Display edit action for user messages"}}},a=r.bind({});a.args={messages:n,auto_scroll:!0,enable_vote:!0,enable_copy:!0,enable_edit:!1,response_animation:"none"};const t=r.bind({});t.args={messages:n,loading:!0,auto_scroll:!0,enable_vote:!0,enable_copy:!0,response_animation:"none"};const s=r.bind({});s.args={messages:n,auto_scroll:!0,enable_vote:!0,enable_copy:!0,response_animation:"words"};const o=r.bind({});o.args={messages:[...n,{id:"5",role:"assistant",name:"AI Assistant",timestamp:"2:32 PM",error:!0,error_message:"Failed to generate response. Please try again."}],auto_scroll:!0,enable_vote:!0,enable_copy:!0,response_animation:"none"};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<div style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <at-prompt-thread
        messages='\${JSON.stringify(args.messages ?? [])}'
        chatbot_title="\${args.chatbot_title ?? 'Assistant'}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.auto_scroll ? 'auto_scroll' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-thread>
</div>
\``,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
<div style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <at-prompt-thread
        messages='\${JSON.stringify(args.messages ?? [])}'
        chatbot_title="\${args.chatbot_title ?? 'Assistant'}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.auto_scroll ? 'auto_scroll' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-thread>
</div>
\``,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,_,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
<div style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <at-prompt-thread
        messages='\${JSON.stringify(args.messages ?? [])}'
        chatbot_title="\${args.chatbot_title ?? 'Assistant'}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.auto_scroll ? 'auto_scroll' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-thread>
</div>
\``,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
<div style="height: 400px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <at-prompt-thread
        messages='\${JSON.stringify(args.messages ?? [])}'
        chatbot_title="\${args.chatbot_title ?? 'Assistant'}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.auto_scroll ? 'auto_scroll' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-thread>
</div>
\``,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const v=["Default","WithLoading","WithAnimations","WithError"];export{a as Default,s as WithAnimations,o as WithError,t as WithLoading,v as __namedExportsOrder,$ as default};
