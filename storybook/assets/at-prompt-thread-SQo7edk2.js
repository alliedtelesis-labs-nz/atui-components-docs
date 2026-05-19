import{j as e,M as a}from"./index-BrNLts-0.js";import{useMDXComponents as o}from"./index-DMhxrBNa.js";import{at as r}from"./MermaidMarkdown-DQoRtV7s.js";import"./iframe-f8fM_pEQ.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const i=`# at-prompt-thread



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute            | Description                                                                                                                                                                                       | Type                          | Default       |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------- |
| \`auto_scroll\`        | \`auto_scroll\`        | Automatically scroll to the bottom when new messages are added                                                                                                                                    | \`boolean\`                     | \`true\`        |
| \`chatbot_title\`      | \`chatbot_title\`      | Display name for chatbot/assistant messages                                                                                                                                                       | \`string\`                      | \`'Assistant'\` |
| \`enable_copy\`        | \`enable_copy\`        | Display copy action for assistant messages                                                                                                                                                        | \`boolean\`                     | \`true\`        |
| \`enable_edit\`        | \`enable_edit\`        | Display edit action for user messages                                                                                                                                                             | \`boolean\`                     | \`false\`       |
| \`enable_vote\`        | \`enable_vote\`        | Display voting actions for assistant messages                                                                                                                                                     | \`boolean\`                     | \`true\`        |
| \`loading\`            | \`loading\`            | Shows a loading indicator for incoming messages                                                                                                                                                   | \`boolean\`                     | \`false\`       |
| \`messages\`           | --                   | Array of messages to display in the conversation thread                                                                                                                                           | \`AtIPromptMessage[]\`          | \`[]\`          |
| \`response_animation\` | \`response_animation\` | Enable streaming text animations for system/assistant messages - 'none': No animation (default) - 'fade': Fade in the entire message - 'words': Animate words appearing sequentially like ChatGPT | \`"fade" \\| "none" \\| "words"\` | \`'words'\`     |


## Events

| Event                  | Description                                      | Type                                                   |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| \`atThreadMessageCopy\`  | Emitted when a message copy action is requested  | \`CustomEvent<{ messageId: string; content: string; }>\` |
| \`atThreadMessageEdit\`  | Emitted when a message edit action is requested  | \`CustomEvent<{ messageId: string; content: string; }>\` |
| \`atThreadMessageRetry\` | Emitted when a message retry action is requested | \`CustomEvent<{ messageId: string; }>\`                  |
| \`atThreadMessageVote\`  | Emitted when a message vote action is requested  | \`CustomEvent<{ messageId: string; score: number; }>\`   |


## Methods

### \`scrollLastMessageToTop() => Promise<void>\`

Scrolls the last user message to the top of the viewport

#### Returns

Type: \`Promise<void>\`



### \`scrollToBottom() => Promise<void>\`

Scrolls the thread to the bottom with smooth animation

#### Returns

Type: \`Promise<void>\`




## Slots

| Slot                   | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| \`"thread-empty-state"\` | Content is placed within the empty state wrapper. Used for placing custom empty state content. |
| \`"thread-messages"\`    | Content is placed within the messages wrapper. Used for placing custom messages content.       |


## Dependencies

### Used by

 - [at-prompt-container](../at-prompt-container)

### Depends on

- [at-prompt-message](../at-prompt-message)

### Graph
\`\`\`mermaid
graph TD;
  at-prompt-thread --> at-prompt-message
  at-prompt-message --> at-tooltip
  at-prompt-message --> at-button
  at-prompt-message --> at-icon
  at-prompt-message --> at-loading
  at-button --> at-loading
  at-prompt-container --> at-prompt-thread
  style at-prompt-thread fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Prompt/Thread"}),`
`,e.jsx(r,{md:i})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s()}export{h as default};
