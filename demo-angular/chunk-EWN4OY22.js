import{a as t,b as i,d as s}from"./chunk-QKUNSOAU.js";import{h as e}from"./chunk-B7O3QC5Z.js";var l=`dialog.backdrop::backdrop {
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
}`,c=(()=>{let o=class{constructor(n){t(this,n),this.role="dialog",this.backdrop=!1,this.isOpen=!1,this.handleDialogClose=a=>{a.preventDefault(),this.isOpen&&this.closeDialog()},this.handleKeyDown=a=>{a.key==="Escape"&&this.isOpen&&(a.preventDefault(),this.closeDialog())}}openDialog(){return e(this,null,function*(){let n=this.el.querySelector("dialog");n&&!this.isOpen&&(n.showModal(),this.isOpen=!0,this.backdrop&&n.classList.add("backdrop"))})}closeDialog(){return e(this,null,function*(){let n=this.el.querySelector("dialog");n&&this.isOpen&&(n.close(),this.isOpen=!1,n.removeAttribute("open"),n.classList.remove("backdrop"))})}render(){return i("dialog",{key:"a7cf76492afd7f55bbadc23b360f0fccb41457c9",class:`c-atui-dialog ${this.backdrop?"backdrop":""}`,id:this.dialog_id,"data-name":"dialog",role:this.role,"aria-modal":"true",onClose:this.handleDialogClose,onKeyDown:this.handleKeyDown},i("div",{key:"07a3552e9e0adc62e8f7cd301c89337c4763e1a3",class:"backdrop-content"},i("slot",{key:"7466c89b5b53865fd8a3c69243ce6e8a32980960"})))}get el(){return s(this)}};return o.style=l,o})();export{c as atui_dialog};
