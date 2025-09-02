import{a as o,b as a,d as r}from"./chunk-OYGHDCNF.js";import{h as t}from"./chunk-B7O3QC5Z.js";var l=`dialog.backdrop::backdrop {
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  animation: fadeIn 0.3s ease forwards;
  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;
}

dialog.backdrop::backdrop {
  z-index: var(--z-backdrop, 1000);
}

@keyframes fadeIn {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.c-atui-dialog {
  position: fixed;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(100dvh - 48px);
  overflow: hidden;
  border: 0;
  padding: 0;
  background: transparent;
  z-index: var(--token-z-index-modal);
  transform-origin: center;
  opacity: 0;
  scale: 0.95;
  box-shadow: var(--token-shadow-3);
  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;
  visibility: hidden;
}
.c-atui-dialog::backdrop {
  background: none;
}
.c-atui-dialog .backdrop-content {
  display: flex;
  max-height: calc(100dvh - 48px);
}
.c-atui-dialog[open] {
  translate: 0 0;
  scale: 1;
  opacity: 1;
  visibility: visible;
  transition: translate 0.3s ease, scale 0.3s ease, opacity 0.3s ease, visibility 0s linear;
}
@starting-style {
  .c-atui-dialog[open] {
    opacity: 0;
    scale: 1.15;
  }
}
.c-atui-dialog:not([open]) {
  scale: 0.95;
  opacity: 0;
  visibility: hidden;
}`,d=(()=>{let s=class{constructor(e){o(this,e),this.role="dialog",this.backdrop=!1,this.isOpen=!1,this.triggerEls=[],this.externalTriggerListeners=[],this.handleDialogClose=n=>{n.preventDefault(),this.isOpen&&this.closeDialog()},this.handleKeyDown=n=>{n.key==="Escape"&&this.isOpen&&(n.preventDefault(),this.closeDialog())}}toggleDialog(){return t(this,null,function*(){this.isOpen?yield this.closeDialog():yield this.openDialog()})}openDialog(){return t(this,null,function*(){let e=this.el.querySelector("dialog");e&&!this.isOpen&&(e.showModal(),this.isOpen=!0,this.backdrop&&e.classList.add("backdrop"))})}closeDialog(){return t(this,null,function*(){let e=this.el.querySelector("dialog");e&&this.isOpen&&(e.close(),this.isOpen=!1,e.removeAttribute("open"),e.classList.remove("backdrop"))})}componentDidLoad(){return t(this,null,function*(){if(this.trigger_id){if(this.triggerEls=Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`)),this.triggerEls.length===0){console.warn(`atui-dialog: No elements found with data-id="${this.trigger_id}"`);return}this.setupExternalTriggerListeners()}})}disconnectedCallback(){this.cleanupExternalTriggerListeners()}cleanupExternalTriggerListeners(){this.externalTriggerListeners.forEach(({element:e,event:n,handler:i})=>{e.removeEventListener(n,i)}),this.externalTriggerListeners=[]}setupExternalTriggerListeners(){if(!this.triggerEls||this.triggerEls.length===0)return;let e=i=>t(this,null,function*(){i.preventDefault(),i.stopPropagation(),yield this.toggleDialog()}),n=i=>t(this,null,function*(){switch(i.key){case"Enter":case" ":i.preventDefault(),yield this.toggleDialog();break}});this.triggerEls.forEach(i=>{i.addEventListener("click",e),i.addEventListener("keydown",n),this.externalTriggerListeners.push({element:i,event:"click",handler:e},{element:i,event:"keydown",handler:n})})}render(){return a("dialog",{key:"7f9eee22d5fc66b0a5fadd0ada23876e1026e686",class:`c-atui-dialog ${this.backdrop?"backdrop":""}`,id:this.dialog_id,"data-name":"dialog",role:this.role,"aria-modal":"true",onClose:this.handleDialogClose,onKeyDown:this.handleKeyDown},a("div",{key:"2e2925023c03d4736879b8e6f16ed536b1f6c7a7",class:"backdrop-content"},a("slot",{key:"873af6c2c05cc8b3b44fc0db2064dc9102cbc191"})))}get el(){return r(this)}};return s.style=l,s})();export{d as atui_dialog};
