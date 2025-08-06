import{a as o,b as a,d as s}from"./chunk-CP7M2NO3.js";import{i as t}from"./chunk-7EPSDV5K.js";var l=`.c-atui-dialog {
  margin: auto;
  display: block;
  max-height: calc(100dvh - 48px);
  overflow: hidden;
  border: 0;
  padding: 0;
  background: transparent;
  visibility: hidden;
  z-index: var(--token-z-index-modal);
  transform-origin: bottom center;
  opacity: 0;
  scale: 0.95;
  box-shadow: var(--token-shadow-3);
  transition: translate var(--token-transition-time), scale var(--token-transition-time), filter var(--token-transition-time), opacity var(--token-transition-time), visibility var(--token-transition-time);
}
.c-atui-dialog::backdrop {
  animation: fadeIn 0.3s ease forwards;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity var(--token-transition-time) ease-in-out allow-discrete;
}
@keyframes fadeIn {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
.c-atui-dialog > * {
  max-height: calc(100dvh - 48px);
}
.c-atui-dialog[open] {
  translate: 0 0;
  scale: 1;
  opacity: 1;
  visibility: visible;
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
}`,c=(()=>{let e=class{constructor(n){o(this,n),this.role="dialog",this.isOpen=!1,this.handleDialogClose=i=>{i.preventDefault(),this.isOpen&&this.closeDialog()},this.handleKeyDown=i=>{i.key==="Escape"&&this.isOpen&&(i.preventDefault(),this.closeDialog())}}openDialog(){return t(this,null,function*(){let n=this.el.querySelector("dialog");n&&!this.isOpen&&(n.showModal(),this.isOpen=!0)})}closeDialog(){return t(this,null,function*(){let n=this.el.querySelector("dialog");n&&this.isOpen&&(n.close(),this.isOpen=!1,n.removeAttribute("open"))})}render(){return a("dialog",{key:"84c80f1f47f2e6c157b60fcdf53ce9af733e6763",class:"c-atui-dialog",id:this.dialog_id,"data-name":"dialog",role:this.role,"aria-modal":"true",onClose:this.handleDialogClose,onKeyDown:this.handleKeyDown},a("div",{key:"ca1d3894f886d338ec97929d034f15d8b697d4f5",class:"backdrop-content"},a("slot",{key:"c818707aec856895a92c640170b45bcb0911261a"})))}get el(){return s(this)}};return e.style=l,e})();export{c as atui_dialog};
