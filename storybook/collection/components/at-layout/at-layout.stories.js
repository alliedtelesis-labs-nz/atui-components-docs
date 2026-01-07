const Template = (args) => `
${args.template === 'master-detail'
    ? `
<at-layout template="${args.template}">
    <div
        slot="master"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Master</h1>
    </div>
    <div
        slot="detail"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Detail</h1>
    </div>
</at-layout>
`
    : args.template === 'tabset'
        ? `
<at-layout template="${args.template}">
    <div
        slot="tabset-navigation"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Navigation</h1>
    </div>
    <div
        slot="tabset-content"
        style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
        <h1>Content</h1>
    </div>
</at-layout>`
        : `
<at-layout template="${args.template}">
    <div
      style="height:100px;width:100%;background-color:rgb(2, 156, 253, 0.7); border: 2px solid rgb(2, 156, 253); align-items:center; justify-content: center; display: flex; color: white;"
    >
      <h1>Content</h1>
    </div>
</at-layout>     
          `}`;
export default {
    title: 'Components/Layout',
    argTypes: {
        template: {
            options: ['master-detail', 'content-container', 'tabset'],
            control: { type: 'radio' },
        },
    },
};
export const Default = Template.bind({});
Default.args = {
    template: 'master-detail',
};
