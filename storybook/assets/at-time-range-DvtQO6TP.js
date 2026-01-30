import{j as t,M as i}from"./index-GDDsYOHC.js";import{useMDXComponents as o}from"./index-BM1YC0gX.js";import{ar as r}from"./MermaidMarkdown-z9Yq1GbJ.js";import"./iframe-d16h_tML.js";import"./index-DGnb9v-d.js";import"./index-DrFu-skq.js";const m=`# atui-time-range

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute              | Description                                                                                                                       | Type                                                                           | Default                                                                                          |
| ---------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| \`custom_error_message\` | \`custom_error_message\` | Custom error message to show when an invalid time is inputted.                                                                    | \`any\`                                                                          | \`null\`                                                                                           |
| \`enable_range_limit\`   | \`enable_range_limit\`   | Enable range limit setting. If set to false, use Jan 1, 1985 as the lower limit of time range, ignoring the value of range limit. | \`boolean\`                                                                      | \`true\`                                                                                           |
| \`enable_relative_time\` | \`enable_relative_time\` | Enable relative time selection.                                                                                                   | \`boolean\`                                                                      | \`true\`                                                                                           |
| \`presets\`              | --                     | Define the presets for the relative time ranges.                                                                                  | \`TimePresets[]\`                                                                | \`undefined\`                                                                                      |
| \`range_limit\`          | \`range_limit\`          | Lower limit of the time range.                                                                                                    | \`number\`                                                                       | \`7\`                                                                                              |
| \`selected_time_range\`  | --                     | Selected time range.                                                                                                              | \`SelectedTimeRange \\| { selected: TimeRangeDisplay.ALL; custom?: undefined; }\` | \`{         selected: {             unit: TimeUnit.HOURS,             value: 1,         },     }\` |
| \`show_all_time\`        | \`show_all_time\`        | Enable all time selection.                                                                                                        | \`boolean\`                                                                      | \`false\`                                                                                          |


## Events

| Event        | Description                                                       | Type                                                                                        |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| \`atuiChange\` | Emits an event containing the selected time range when it changes | \`CustomEvent<SelectedTimeRange \\| { selected: TimeRangeDisplay.ALL; custom?: undefined; }>\` |


## Dependencies

### Depends on

- [at-button-group](../at-button-group)
- [at-time-with-unit](at-time-with-unit)
- [at-custom-time-range](at-custom-time-range)

### Graph
\`\`\`mermaid
graph TD;
  at-time-range --> at-button-group
  at-time-range --> at-time-with-unit
  at-time-range --> at-custom-time-range
  at-button-group --> at-button-group-option
  at-button-group --> at-form-label
  at-form-label --> at-tooltip
  at-time-with-unit --> at-input-numeric
  at-time-with-unit --> at-select
  at-time-with-unit --> at-button
  at-input-numeric --> at-form-label
  at-input-numeric --> at-button
  at-button --> at-loading
  at-select --> at-menu
  at-select --> at-form-label
  at-select --> at-button
  at-select --> at-select-option
  at-select --> at-select-group
  at-custom-time-range --> at-select
  at-custom-time-range --> at-toggle-switch
  at-custom-time-range --> at-button
  at-toggle-switch --> at-form-label
  style at-time-range fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Time Range"}),`
`,t.jsx(r,{md:m})]})}function d(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{d as default};
