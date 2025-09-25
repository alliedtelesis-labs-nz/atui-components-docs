const r=e=>`
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='${JSON.stringify(e.messages??[])}'
        placeholder="${e.placeholder??""}"
        error_text="${e.error_text??""}"
        max_message_length="${e.max_message_length??2e3}"
        response_animation="${e.response_animation??"none"}"
        ${e.loading?"loading":""}
        ${e.disabled?"disabled":""}
        ${e.show_new_thread_button?"show_new_thread_button":""}
        ${e.enable_vote?"enable_vote":""}
        ${e.enable_copy?"enable_copy":""}
        ${e.enable_edit?"enable_edit":""}
    ></at-prompt-container>
</div>
`,v={title:"Components/Prompt/Container",argTypes:{messages:{control:"object",description:"Array of messages to display"},placeholder:{control:"text",description:"Input placeholder text"},error_text:{control:"text",description:"Error text for input validation"},loading:{control:"boolean",description:"Loading state"},disabled:{control:"boolean",description:"Disabled state"},show_new_thread_button:{control:"boolean",description:"Show new thread button"},max_message_length:{control:"number",description:"Maximum message length"},enable_vote:{control:"boolean",description:"Display voting actions for assistant messages"},enable_copy:{control:"boolean",description:"Display copy action for assistant messages"},enable_edit:{control:"boolean",description:"Display edit action for user messages"},response_animation:{control:"select",options:["none","fade","words"],description:"Animation type for responses"}}},a=r.bind({});a.args={messages:[{id:"1",role:"user",content:"Hello! How does the voting and copy functionality work?",name:"User",timestamp:"2:30 PM"},{id:"2",role:"assistant",content:"Great question! The voting functionality allows you to rate responses with thumbs up/down buttons. The copy feature lets you easily copy any message content to your clipboard. You can see these actions appear when you hover over assistant messages.",name:"AI Assistant",timestamp:"2:31 PM"},{id:"3",role:"user",content:"Can I edit my previous messages?",name:"User",timestamp:"2:32 PM"},{id:"4",role:"assistant",content:"Yes! When editing is enabled, you can click the edit button on your messages to modify them. This is useful for refining your questions or fixing typos.",name:"AI Assistant",timestamp:"2:32 PM"}],placeholder:"Type your message here...",show_new_thread_button:!0,enable_vote:!0,enable_copy:!0,enable_edit:!0,response_animation:"none"};const n=r.bind({});n.args={messages:[{id:"1",role:"user",content:"Hello! How are you today?",name:"User",timestamp:"2:30 PM"},{id:"2",role:"assistant",content:"Hello! I'm doing well, thank you for asking. How can I help you today?",name:"AI Assistant",timestamp:"2:30 PM"}],placeholder:"Type your message here...",show_new_thread_button:!0,enable_vote:!0,enable_copy:!0};const t=r.bind({});t.args={messages:[{id:"1",role:"user",content:"What is machine learning?",name:"User",timestamp:"2:30 PM"}],placeholder:"Type your message here...",loading:!0,show_new_thread_button:!0,enable_vote:!0,enable_copy:!0};const s=r.bind({});s.args={placeholder:"Service is temporarily unavailable...",disabled:!0,show_new_thread_button:!0,enable_vote:!1,enable_copy:!1};const o=r.bind({});o.args={placeholder:"Type your message here (max 100 characters)...",max_message_length:100,show_new_thread_button:!0,enable_vote:!0,enable_copy:!0};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='\${JSON.stringify(args.messages ?? [])}'
        placeholder="\${args.placeholder ?? ''}"
        error_text="\${args.error_text ?? ''}"
        max_message_length="\${args.max_message_length ?? 2000}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.disabled ? 'disabled' : ''}
        \${args.show_new_thread_button ? 'show_new_thread_button' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-container>
</div>
\``,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var _,g,m;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => \`
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='\${JSON.stringify(args.messages ?? [])}'
        placeholder="\${args.placeholder ?? ''}"
        error_text="\${args.error_text ?? ''}"
        max_message_length="\${args.max_message_length ?? 2000}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.disabled ? 'disabled' : ''}
        \${args.show_new_thread_button ? 'show_new_thread_button' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-container>
</div>
\``,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,c,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='\${JSON.stringify(args.messages ?? [])}'
        placeholder="\${args.placeholder ?? ''}"
        error_text="\${args.error_text ?? ''}"
        max_message_length="\${args.max_message_length ?? 2000}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.disabled ? 'disabled' : ''}
        \${args.show_new_thread_button ? 'show_new_thread_button' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-container>
</div>
\``,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var b,u,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => \`
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='\${JSON.stringify(args.messages ?? [])}'
        placeholder="\${args.placeholder ?? ''}"
        error_text="\${args.error_text ?? ''}"
        max_message_length="\${args.max_message_length ?? 2000}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.disabled ? 'disabled' : ''}
        \${args.show_new_thread_button ? 'show_new_thread_button' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-container>
</div>
\``,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var $,w,x;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`args => \`
<div style="width: 100%; max-width: 800px; margin: 0 auto;">
    <at-prompt-container
        messages='\${JSON.stringify(args.messages ?? [])}'
        placeholder="\${args.placeholder ?? ''}"
        error_text="\${args.error_text ?? ''}"
        max_message_length="\${args.max_message_length ?? 2000}"
        response_animation="\${args.response_animation ?? 'none'}"
        \${args.loading ? 'loading' : ''}
        \${args.disabled ? 'disabled' : ''}
        \${args.show_new_thread_button ? 'show_new_thread_button' : ''}
        \${args.enable_vote ? 'enable_vote' : ''}
        \${args.enable_copy ? 'enable_copy' : ''}
        \${args.enable_edit ? 'enable_edit' : ''}
    ></at-prompt-container>
</div>
\``,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const f=["Default","WithMessages","Loading","Disabled","WithCharacterLimit"];export{a as Default,s as Disabled,t as Loading,o as WithCharacterLimit,n as WithMessages,f as __namedExportsOrder,v as default};
