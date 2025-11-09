const n={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[t=>{const s=!t().toString().includes("defineCustomElement"),i=(""+t()).split(`
`).filter(e=>e.trim().length).map(e=>e.split("<"));return`
            ${s?`
            <script
                type="module"
                src="./atui-components-stencil/atui-components-stencil.esm.js"
            ><\/script>`:`
            <script>
                if (customElements.get('atui-table')) location.reload();
            <\/script>`}
            <div style="display: flex; flex-direction: column-reverse; gap: 8px;">
                <code class="prettyprint" style="padding: 10px; background-color: #f6f8fb">
                    ${i.map(e=>`<span style="display: flex">${e.map(r=>`<p>${r.replace(/ /g,"&nbsp;")}</p>`).join("<p><</p>")}</span>`).join("")}
                </code>
                <div style="width: 80%">
                    ${t()}
                </div>
                <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"><\/script>
            </div>
            `}]};export{n as default};
