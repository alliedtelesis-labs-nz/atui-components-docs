const NAMESPACE = 'atui-components-stencil';
const BUILD = /* atui-components-stencil */ { hydratedSelectorName: "hydrated", lazyLoad: true, slotRelocation: true, updatable: true};

const globalScripts = () => {};
const globalStyles = "@charset \"UTF-8\";:root{--token-color-primary:#066aff;--token-color-secondary:#132039;--token-color-active-base:#90caf9;--token-color-active-light:#e3f2fd;--token-color-active-dark:#066aff;--token-color-active-default:#e3f2fd;--token-color-active-foreground:#066aff;--token-color-white:#ffffff;--token-color-black:#000000;--token-color-gray-100:#f8f9fa;--token-color-gray-200:#e9ecef;--token-color-gray-300:#dee2e6;--token-color-gray-400:#ced4da;--token-color-gray-500:#adb5bd;--token-color-gray-600:#6c757d;--token-color-gray-700:#495057;--token-color-gray-800:#343a40;--token-color-gray-900:#212529;--token-color-primary-blue:#066aff;--token-color-secondary-blue:#132039;--token-color-gray-lighter:#f8f9fa;--token-color-gray-light:#e9ecef;--token-color-surface-0:#fcfcfe;--token-color-surface-1:#f6f8fb;--token-color-surface-2:#ebeff7;--token-color-surface-3:#dae2ef;--token-color-base-white:#ffffff;--token-color-base-black:#000000;--token-text-active-dark:#0d47a1;--token-text-dark:#0f172a;--token-text-med:#475569;--token-text-light:#64748b;--token-text-disabled:#adb5bd;--token-text-warning:#ff6f00;--token-text-error:#d32f2f;--token-text-success:#388e3c;--token-text-active:#066aff;--token-button-bg-primary:#066aff;--token-button-height:36px;--token-button-disabled-bg:#f8f9fa;--token-button-disabled-color:#adb5bd;--token-button-border-color:#adb5bd;--token-button-color:#0f172a;--token-button-focus-border-color:#066aff;--token-button-focus-bg:#475569;--token-button-focus-bg-primary:#1976d2;--token-button-focus-bg-destructive:#d32f2f;--token-button-bg:#ffffff;--token-border-light:#dee2e6;--token-border-med:#ced4da;--token-border-dark:#adb5bd;--token-border-radius-sm:0.15rem;--token-border-radius-md:0.3rem;--token-border-radius-lg:0.46rem;--token-breakpoints-xs:0px;--token-breakpoints-sm:768px;--token-breakpoints-md:992px;--token-breakpoints-lg:1200px;--token-breakpoints-xl:1440px;--token-state-success-base:#4caf50;--token-state-success-light:#c8e6c9;--token-state-success-dark:#388e3c;--token-state-success-default:#c8e6c9;--token-state-success-foreground:#388e3c;--token-state-warning-base:#ffc107;--token-state-warning-light:#ffe082;--token-state-warning-dark:#ff6f00;--token-state-warning-default:#ffeaab;--token-state-warning-foreground:#cc5900;--token-state-error-base:#ef5350;--token-state-error-light:#ffcdd2;--token-state-error-dark:#d32f2f;--token-state-error-default:#ffcdd2;--token-state-error-foreground:#d32f2f;--token-state-disabled-base:#dee2e6;--token-state-disabled-light:#f8f9fa;--token-state-disabled-dark:#495057;--token-state-disabled-default:#f8f9fa;--token-state-disabled-foreground:#495057;--token-state-info-base:#2196f3;--token-state-info-light:#bbdefb;--token-state-info-dark:#1976d2;--token-state-info-default:#cee7fc;--token-state-info-foreground:#1976d2;--token-state-active-base:#90caf9;--token-state-active-light:#e3f2fd;--token-state-active-dark:#066aff;--token-state-active-default:#e3f2fd;--token-state-active-foreground:#066aff;--token-surface-0:#fcfcfe;--token-surface-1:#f6f8fb;--token-surface-2:#ebeff7;--token-surface-3:#dae2ef;--token-surface-base:#ffffff;--token-input-btn-height:36px;--token-input-height:36px;--token-input-bg:#ffffff;--token-input-disabled-bg:#f8f9fa;--token-input-disabled-color:#adb5bd;--token-input-border-color:#adb5bd;--token-input-color:#0f172a;--token-input-focus-border-color:#066aff;--token-shadow-0:0 0 #000;--token-shadow-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--token-shadow-2:0 4px 6px -1px rgba(0, 0, 0, 0.1),\n        0 2px 4px -2px rgba(0, 0, 0, 0.1);--token-shadow-3:0 10px 15px -3px rgba(0, 0, 0, 0.1),\n        0 4px 6px -4px rgba(0, 0, 0, 0.1);--token-shadow-none:0 0 #000;--token-shadow-sm:0px 3px 1px -2px rgba(0, 0, 0, 0.02),\n        0px 2px 2px 0px rgba(0, 0, 0, 0.01), 0px 1px 5px 0px rgba(0, 0, 0, 0.1);--token-shadow-md:0 4px 6px -1px rgba(0, 0, 0, 0.1),\n        0 2px 4px -2px rgba(0, 0, 0, 0.1);--token-shadow-lg:0 10px 15px -3px rgba(0, 0, 0, 0.1),\n        0 4px 6px -4px rgba(0, 0, 0, 0.1);--token-font-size-base:1rem;--token-font-size-caption:0.9286rem;--token-font-size-root:13px;--token-font-size-h1:1.692rem;--token-font-size-h2:1.385rem;--token-font-size-h3:1.23rem;--token-font-size-h4:1.12rem;--token-font-size-h5:1.0714rem;--token-font-size-h6:1rem;--token-font-size-body:1rem;--token-font-size-sm:0.9286rem;--token-font-size-xs:0.8571rem;--token-font-size-xl:3.5rem;--token-font-size-button:1rem;--token-font-size-icon-sm:1rem;--token-font-size-icon-md:1.1429rem;--token-font-size-icon-lg:1.2857rem;--token-font-size-icon-xl:1.5714rem;--token-dialog-backdrop-color:rgba(0, 0, 0, 0.2);--token-font-family-base:\"Roboto\", \"Helvetica Neue\", Helvetica, Arial,\n        sans-serif;--token-font-family-inter:\"Inter\", \"Helvetica Neue\", Helvetica, Arial,\n        sans-serif;--token-font-weight-light:400;--token-font-weight-med:500;--token-font-weight-bold:600;--token-height-navbar:48px;--token-height-header:72px;--token-height-input:36px;--token-line-height-base:140%;--token-line-height-heading:180%;--token-line-height-richtext:155%;--token-sidebar-background:#132039;--token-sidebar-foreground:#ffffff;--token-sidebar-primary:#066aff;--token-sidebar-primary-foreground:#ffffff;--token-sidebar-accent:#000000;--token-sidebar-border:#066aff;--token-sidebar-ring:#066aff;--token-transition-time:300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);--token-transition-base:all 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);--token-transition-fast:all 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);--token-transition-slow:all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);--token-width-input-sm:180px;--token-width-input-md:220px;--token-width-sidebar-collapsed:56px;--token-width-sidebar:300px;--token-width-menu:300px;--token-width-panel-xs:320px;--token-width-panel-sm:400px;--token-width-panel-md:500px;--token-width-panel-lg:600px;--token-width-panel-xl:700px;--token-z-index-header:1001;--token-z-index-nav:3001;--token-z-index-menu:4001;--token-z-index-modal:9001}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n */*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:\"\"}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--token-font-family-base);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}html{font-size:var(--token-font-size-root)}body{font-size:var(--token-font-size-body);line-height:var(--token-line-height-base);font-family:var(--token-font-family-base), sans-serif;font-weight:var(--token-font-weight-light)}h1,.h1{font-size:var(--token-font-size-h1)}h2,.h2{font-size:var(--token-font-size-h2)}h3,.h3{font-size:var(--token-font-size-h3)}h4,.h4{font-size:var(--token-font-size-h4)}h5,.h5{font-size:var(--token-font-size-h5)}h6,.h6{font-size:var(--token-font-size-h6)}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-weight:var(--token-font-weight-med);line-height:var(--token-line-height-base)}label{font-size:var(--token-font-size-xs);font-weight:var(--token-font-weight-med);line-height:var(--token-line-height-base)}small{font-size:var(--token-font-size-sm)}strong{font-weight:var(--token-font-weight-bold)}*{scrollbar-width:auto;scrollbar-color:var(--token-color-base-slate-400) transparent}*::-webkit-scrollbar{height:8px;width:8px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:var(--token-color-base-slate-400);border-radius:8px;border:1px solid transparent;background-clip:padding-box;}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.\\!fixed{position:fixed !important}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0}.left-0{left:0}.left-\\[22px\\]{left:22px}.right-0{right:0}.right-16{right:16px}.right-4{right:4px}.right-\\[36px\\]{right:36px}.top-0{top:0}.top-1\\/2{top:50%}.top-20{top:20px}.top-4{top:4px}.top-\\[-8px\\]{top:-8px}.top-\\[42px\\]{top:42px}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-modal{z-index:var(--token-z-index-modal)}.z-nav{z-index:var(--token-z-index-nav)}.order-1{order:1}.m-2{margin:2px}.m-\\[3px\\]{margin:3px}.mx-8{margin-left:8px;margin-right:8px}.my-2{margin-top:2px;margin-bottom:2px}.my-8{margin-top:8px;margin-bottom:8px}.mb-4{margin-bottom:4px}.mb-8{margin-bottom:8px}.ml-16{margin-left:16px}.ml-4{margin-left:4px}.ml-auto{margin-left:auto}.mr-24{margin-right:24px}.mr-4{margin-right:4px}.mr-8{margin-right:8px}.mr-\\[-1px\\]{margin-right:-1px}.mr-\\[16px\\]{margin-right:16px}.mr-\\[4px\\]{margin-right:4px}.mr-auto{margin-right:auto}.mt-0{margin-top:0}.mt-2{margin-top:2px}.mt-4{margin-top:4px}.mt-8{margin-top:8px}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.\\!h-16{height:16px !important}.h-0{height:0}.h-16{height:16px}.h-2{height:2px}.h-20{height:20px}.h-24{height:24px}.h-30{height:30px}.h-32{height:32px}.h-4{height:4px}.h-40{height:40px}.h-48{height:48px}.h-64{height:64px}.h-72{height:72px}.h-8{height:8px}.h-\\[14px\\]{height:14px}.h-\\[160px\\]{height:160px}.h-\\[16px\\]{height:16px}.h-\\[20px\\]{height:20px}.h-\\[235px\\]{height:235px}.h-\\[28px\\]{height:28px}.h-\\[30px\\]{height:30px}.h-\\[330px\\]{height:330px}.h-\\[36px\\]{height:36px}.h-\\[400px\\]{height:400px}.h-\\[40px\\]{height:40px}.h-\\[440px\\]{height:440px}.h-\\[70px\\]{height:70px}.h-dvh{height:100dvh}.h-full{height:100%}.h-screen{height:100vh}.min-h-0{min-height:0}.min-h-16{min-height:16px}.min-h-\\[32px\\]{min-height:32px}.min-h-\\[36px\\]{min-height:36px}.min-h-\\[40px\\]{min-height:40px}.min-h-\\[48px\\]{min-height:48px}.\\!w-16{width:16px !important}.w-0{width:0}.w-16{width:16px}.w-24{width:24px}.w-32{width:32px}.w-4{width:4px}.w-40{width:40px}.w-48{width:48px}.w-64{width:64px}.w-72{width:72px}.w-80{width:80px}.w-\\[14px\\]{width:14px}.w-\\[16px\\]{width:16px}.w-\\[40px\\]{width:40px}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-input-md{width:var(--token-width-input-md)}.w-input-sm{width:var(--token-width-input-sm)}.w-panel-lg{width:var(--token-width-panel-lg)}.w-panel-md{width:var(--token-width-panel-md)}.w-panel-sm{width:var(--token-width-panel-sm)}.w-panel-xl{width:var(--token-width-panel-xl)}.w-panel-xs{width:var(--token-width-panel-xs)}.w-sidebar{width:var(--token-width-sidebar)}.min-w-0{min-width:0}.min-w-100{min-width:100px}.min-w-panel-xs{min-width:var(--token-width-panel-xs)}.min-w-sidebar-collapsed{min-width:var(--token-width-sidebar-collapsed)}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-none{max-width:none}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-fill flex{display:flex;flex-direction:column;flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.basis-0{flex-basis:0}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[-10px\\]{--tw-translate-x:-10px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[10px\\]{--tw-translate-x:10px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-90{--tw-scale-x:.9;--tw-scale-y:.9;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.animate-\\[typing_1s_infinite\\]{animation:typing 1s infinite}@keyframes pulse{50%{opacity:0.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.resize{resize:both}.columns-2{-moz-columns:2;columns:2}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-16{gap:16px}.gap-2{gap:2px}.gap-4{gap:4px}.gap-8{gap:8px}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2px * (1 - var(--tw-space-y-reverse)));margin-bottom:calc(2px * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(4px * (1 - var(--tw-space-y-reverse)));margin-bottom:calc(4px * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-words{overflow-wrap:break-word}.\\!rounded-\\[4px\\]{border-radius:4px !important}.rounded{border-radius:0.25rem}.rounded-\\[0\\.3rem\\]{border-radius:0.3rem}.rounded-\\[4px\\]{border-radius:4px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-l-md{border-top-left-radius:0.375rem;border-bottom-left-radius:0.375rem}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:0.375rem;border-bottom-right-radius:0.375rem}.rounded-r-none{border-top-right-radius:0px;border-bottom-right-radius:0px}.border{border-width:1px}.border-2{border-width:2px}.border-4{border-width:4px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-l-2{border-left-width:2px}.border-r{border-right-width:1px}.border-solid{border-style:solid}.border-none{border-style:none}.border-dark{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-border-dark) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-destructive{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-destructive-foreground{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-error-base{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-error-base) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229, 231, 235, var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209, 213, 219, var(--tw-border-opacity, 1))}.border-light{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-border-light) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-med{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-border-med) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-primary{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-info-default) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-primary-foreground{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.border-transparent{border-color:transparent}.border-e-transparent{border-inline-end-color:transparent}.border-l-med{--tw-border-opacity:1;border-left-color:color-mix(in srgb, var(--token-border-med) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.\\!bg-surface-1{--tw-bg-opacity:1 !important;background-color:color-mix(in srgb, var(--token-color-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent) !important}.bg-active-foreground{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-active-foreground\\/10{background-color:color-mix(in srgb, var(--token-state-active-foreground) 10%, transparent)}.bg-active-foreground\\/15{background-color:color-mix(in srgb, var(--token-state-active-foreground) 15%, transparent)}.bg-active-foreground\\/30{background-color:color-mix(in srgb, var(--token-state-active-foreground) 30%, transparent)}.bg-active-foreground\\/50{background-color:color-mix(in srgb, var(--token-state-active-foreground) 50%, transparent)}.bg-active-light{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-active-light) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-card{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-color-white) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-card\\/80{background-color:color-mix(in srgb, var(--token-color-white) 80%, transparent)}.bg-destructive{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-destructive-foreground{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-disabled{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-disabled-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-disabled-dark{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-disabled-dark) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-disabled-light{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-disabled-light) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-error-base{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-error-base) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107, 114, 128, var(--tw-bg-opacity, 1))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75, 85, 99, var(--tw-bg-opacity, 1))}.bg-gray-950\\/80{background-color:rgba(3, 7, 18, 0.8)}.bg-info{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-info-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-info-foreground{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-primary{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-info-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-sidebar-background{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-sidebar-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-sidebar-primary{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-sidebar-primary) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-slate-600{--tw-bg-opacity:1;background-color:rgb(71, 85, 105, var(--tw-bg-opacity, 1))}.bg-success{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-success-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-success-base{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-success-base) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-success-foreground{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-success-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-surface-0{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-color-surface-0) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-surface-1{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-color-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-surface-2{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-color-surface-2) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-surface-base{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-background-surface) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-transparent{background-color:transparent}.bg-warning{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-warning-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-warning-base{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-warning-base) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-warning-foreground{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-warning-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255, 255, 255, var(--tw-bg-opacity, 1))}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-12{padding:12px}.p-16{padding:16px}.p-4{padding:4px}.p-8{padding:8px}.p-\\[10vh\\]{padding:10vh}.p-\\[14px\\]{padding:14px}.p-\\[15vh\\]{padding:15vh}.p-\\[5vh\\]{padding:5vh}.\\!px-\\[3px\\]{padding-left:3px !important;padding-right:3px !important}.\\!py-4{padding-top:4px !important;padding-bottom:4px !important}.px-12{padding-left:12px;padding-right:12px}.px-16{padding-left:16px;padding-right:16px}.px-4{padding-left:4px;padding-right:4px}.px-8{padding-left:8px;padding-right:8px}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[6px\\]{padding-left:6px;padding-right:6px}.py-2{padding-top:2px;padding-bottom:2px}.py-4{padding-top:4px;padding-bottom:4px}.py-64{padding-top:64px;padding-bottom:64px}.py-8{padding-top:8px;padding-bottom:8px}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.pb-16{padding-bottom:16px}.pb-8{padding-bottom:8px}.pl-16{padding-left:16px}.pl-4{padding-left:4px}.pl-8{padding-left:8px}.pr-0{padding-right:0}.pr-16{padding-right:16px}.pr-24{padding-right:24px}.pr-4{padding-right:4px}.pr-8{padding-right:8px}.pt-8{padding-top:8px}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.align-\\[-0\\.125em\\]{vertical-align:-0.125em}.\\!text-\\[11px\\]{font-size:11px !important}.\\!text-\\[16px\\]{font-size:16px !important}.\\!text-\\[18px\\]{font-size:18px !important}.\\!text-icon-sm{font-size:var(--token-font-size-icon-sm) !important}.\\!text-sm{font-size:var(--token-font-size-sm) !important}.text-\\[16px\\]{font-size:16px}.text-\\[24px\\]{font-size:24px}.text-\\[48px\\]{font-size:48px}.text-\\[64px\\]{font-size:64px}.text-\\[72px\\]{font-size:72px}.text-body{font-size:var(--token-font-size-body)}.text-button{font-size:var(--token-font-size-button)}.text-h4{font-size:var(--token-font-size-h4)}.text-h5{font-size:var(--token-font-size-h5)}.text-h6{font-size:var(--token-font-size-h6)}.text-icon-lg{font-size:var(--token-font-size-icon-lg)}.text-icon-md{font-size:var(--token-font-size-icon-md)}.text-icon-xl{font-size:var(--token-font-size-icon-xl)}.text-sm{font-size:var(--token-font-size-sm)}.text-xs{font-size:var(--token-font-size-xs)}.\\!font-medium{font-weight:var(--token-font-weight-med) !important}.font-medium{font-weight:var(--token-font-weight-med)}.font-normal{font-weight:var(--token-font-weight-light)}.capitalize{text-transform:capitalize}.\\!leading-\\[10px\\]{line-height:10px !important}.\\!leading-\\[30px\\]{line-height:30px !important}.\\!leading-normal{line-height:var(--token-line-height-base) !important}.leading-\\[0\\.9286rem\\]{line-height:0.9286rem}.leading-\\[100\\%\\]{line-height:100%}.leading-\\[16px\\]{line-height:16px}.leading-\\[24px\\]{line-height:24px}.leading-\\[30px\\]{line-height:30px}.leading-none{line-height:1}.leading-normal{line-height:var(--token-line-height-base)}.leading-tight{line-height:1.25}.\\!text-active-dark{--tw-text-opacity:1 !important;color:color-mix(in srgb, var(--token-state-active-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important}.\\!text-dark{--tw-text-opacity:1 !important;color:color-mix(in srgb, var(--token-text-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important}.\\!text-disabled{--tw-text-opacity:1 !important;color:color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important}.text-active{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-active-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-active-dark{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-active-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-active-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-dark{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-destructive-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-disabled{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-error{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-error) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-error-dark{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-error-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-impact{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-color-white) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-info-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-light{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-light) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-med{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-med) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-primary{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-info-default) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-primary-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-sidebar-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-sidebar-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-sidebar-primary-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-sidebar-primary-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-slate-300{--tw-text-opacity:1;color:rgb(203, 213, 225, var(--tw-text-opacity, 1))}.text-success-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-success-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-warning-foreground{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-state-warning-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.text-white{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-color-white) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.caret-transparent{caret-color:transparent}.accent-active-foreground{accent-color:color-mix(in srgb, var(--token-state-active-foreground) 100%, transparent)}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-30{opacity:0.3}.opacity-50{opacity:0.5}.opacity-70{opacity:0.7}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline-0{outline-width:0px}.outline-active{outline-color:color-mix(in srgb, var(--token-state-active-dark) 100%, transparent)}.outline-active-light{outline-color:color-mix(in srgb, var(--token-state-active-light) 100%, transparent)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.ring-active-foreground\\/30{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.grayscale-\\[1\\]{--tw-grayscale:grayscale(1);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur:blur(8px);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[background-color\\,color\\,box-shadow\\]{transition-property:background-color, color, box-shadow;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[color\\,background-color\\,box-shadow\\]{transition-property:color, background-color, box-shadow;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[left\\]{transition-property:left;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-colors{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-150{transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.duration-\\[300ms\\]{transition-duration:300ms}.ease-\\[cubic-bezier\\(0\\.455\\,0\\.03\\,0\\.515\\,0\\.955\\)\\]{transition-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955)}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}.hide-empty:empty{display:none}.\\[transition\\:0\\.2s\\]{transition:0.2s}.placeholder\\:text-dark::-moz-placeholder{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.placeholder\\:text-dark::placeholder{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.placeholder\\:text-disabled::-moz-placeholder{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.placeholder\\:text-disabled::placeholder{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.focus-within\\:h-fit:focus-within{height:-moz-fit-content;height:fit-content}.focus-within\\:overflow-visible:focus-within{overflow:visible}.focus-within\\:border-active-dark:focus-within{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-active-dark) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus-within\\:border-active-foreground:focus-within{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus-within\\:border-destructive:focus-within{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus-within\\:border-error-base:focus-within{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-error-base) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus-within\\:outline-0:focus-within{outline-width:0px}.focus-within\\:ring-0:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.focus-within\\:ring-2:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.focus-within\\:ring-active-foreground\\/30:focus-within{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent)}.focus-within\\:ring-destructive-foreground\\/30:focus-within{--tw-ring-color:color-mix(in srgb, var(--token-state-error-foreground) calc(0.3 * 100%), transparent)}.focus-within\\:ring-destructive\\/30:focus-within{--tw-ring-color:color-mix(in srgb, var(--token-state-error-default) calc(0.3 * 100%), transparent)}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-disabled-light:hover{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-state-disabled-light) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243, 244, 246, var(--tw-bg-opacity, 1))}.hover\\:bg-surface-1:hover{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-color-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.hover\\:text-dark:hover{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-dark) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.hover\\:text-disabled:hover{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.hover\\:text-med:hover{--tw-text-opacity:1;color:color-mix(in srgb, var(--token-text-med) calc(var(--tw-text-opacity, 1) * 100%), transparent)}.hover\\:underline:hover{text-decoration-line:underline}.focus\\:h-fit:focus{height:-moz-fit-content;height:fit-content}.focus\\:border-none:focus{border-style:none}.focus\\:border-active-dark:focus{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-active-dark) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus\\:border-active-foreground:focus{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus\\:bg-surface-1:focus{--tw-bg-opacity:1;background-color:color-mix(in srgb, var(--token-color-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:outline-0:focus{outline-width:0px}.focus\\:outline-2:focus{outline-width:2px}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.focus\\:ring-inset:focus{--tw-ring-inset:inset}.focus\\:ring-active-foreground\\/30:focus{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent)}.focus\\:ring-active-foreground\\/40:focus{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.4 * 100%), transparent)}.focus\\:ring-destructive-foreground\\/30:focus{--tw-ring-color:color-mix(in srgb, var(--token-state-error-foreground) calc(0.3 * 100%), transparent)}.focus-visible\\:border-active-foreground:focus-visible{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-0:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.focus-visible\\:ring-inset:focus-visible{--tw-ring-inset:inset}.focus-visible\\:ring-active-foreground\\/30:focus-visible{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent)}.focus-visible\\:ring-active-foreground\\/40:focus-visible{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.4 * 100%), transparent)}.focus-visible\\:ring-destructive-foreground\\/30:focus-visible{--tw-ring-color:color-mix(in srgb, var(--token-state-error-foreground) calc(0.3 * 100%), transparent)}.focus-visible\\:ring-offset-0:focus-visible{--tw-ring-offset-width:0px}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-\\[6px\\]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(6px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-active-foreground{--tw-ring-opacity:1;--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-ring-opacity, 1) * 100%), transparent)}.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-active-foreground\\/30{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent)}.group:hover .group-hover\\:bg-active-foreground\\/10{background-color:color-mix(in srgb, var(--token-state-active-foreground) 10%, transparent)}.group:hover .group-hover\\:bg-active-foreground\\/90{background-color:color-mix(in srgb, var(--token-state-active-foreground) 90%, transparent)}.group:hover .group-hover\\:bg-blue-900\\/30{background-color:rgba(30, 58, 138, 0.3)}.group:hover .group-hover\\:bg-destructive-foreground\\/10{background-color:color-mix(in srgb, var(--token-state-error-foreground) 10%, transparent)}.group:hover .group-hover\\:bg-destructive-foreground\\/90{background-color:color-mix(in srgb, var(--token-state-error-foreground) 90%, transparent)}.group:hover .group-hover\\:bg-red-900\\/30{background-color:rgba(127, 29, 29, 0.3)}.group:hover .group-hover\\:bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241, 245, 249, var(--tw-bg-opacity, 1))}.group:hover .group-hover\\:bg-slate-500\\/10{background-color:rgba(100, 116, 139, 0.1)}.group:hover .group-hover\\:bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51, 65, 85, var(--tw-bg-opacity, 1))}.group:hover .group-hover\\:bg-slate-900\\/10{background-color:rgba(15, 23, 42, 0.1)}.group:hover .group-hover\\:underline{text-decoration-line:underline}.group:focus .group-focus\\:bg-active-foreground\\/20{background-color:color-mix(in srgb, var(--token-state-active-foreground) 20%, transparent)}.group:focus .group-focus\\:bg-active-foreground\\/80{background-color:color-mix(in srgb, var(--token-state-active-foreground) 80%, transparent)}.group:focus .group-focus\\:bg-destructive-foreground\\/20{background-color:color-mix(in srgb, var(--token-state-error-foreground) 20%, transparent)}.group:focus .group-focus\\:bg-destructive-foreground\\/80{background-color:color-mix(in srgb, var(--token-state-error-foreground) 80%, transparent)}.group:focus .group-focus\\:bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226, 232, 240, var(--tw-bg-opacity, 1))}.group:focus .group-focus\\:bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30, 41, 59, var(--tw-bg-opacity, 1))}.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:border-2{border-width:2px}.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:border-active-foreground{--tw-border-opacity:1;border-color:color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent)}.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0))}.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:ring-active-foreground\\/30{--tw-ring-color:color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent)}.group:active .group-active\\:bg-active-foreground\\/20{background-color:color-mix(in srgb, var(--token-state-active-foreground) 20%, transparent)}.group:active .group-active\\:bg-blue-900\\/70{background-color:rgba(30, 58, 138, 0.7)}.group:active .group-active\\:bg-destructive-foreground\\/20{background-color:color-mix(in srgb, var(--token-state-error-foreground) 20%, transparent)}.group:active .group-active\\:bg-red-900\\/70{background-color:rgba(127, 29, 29, 0.7)}.group:active .group-active\\:bg-slate-500\\/20{background-color:rgba(100, 116, 139, 0.2)}.group:active .group-active\\:bg-slate-900\\/20{background-color:rgba(15, 23, 42, 0.2)}.group\\/sidebar-wrapper[data-state=collapsed] .group-data-\\[state\\=collapsed\\]\\/sidebar-wrapper\\:hidden{display:none}.group\\/sidebar-wrapper[data-state=collapsed] .group-data-\\[state\\=collapsed\\]\\/sidebar-wrapper\\:w-0{width:0}.group\\/sidebar-wrapper[data-state=collapsed] .group-data-\\[state\\=collapsed\\]\\/sidebar-wrapper\\:w-sidebar-collapsed{width:var(--token-width-sidebar-collapsed)}.group\\/accordion-item[data-state=expanded] .group-data-\\[state\\=expanded\\]\\/accordion-item\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (prefers-reduced-motion: reduce){@keyframes spin{to{transform:rotate(360deg)}}.motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\]{animation:spin 1.5s linear infinite}}";

/*
 Stencil Client Platform v4.36.2 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'atui-accordion':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-accordion.entry.js').then(processMod, consoleError);
                case 'atui-avatar':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-avatar.entry.js').then(processMod, consoleError);
                case 'atui-breadcrumb':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-breadcrumb.entry.js').then(processMod, consoleError);
                case 'atui-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-card.entry.js').then(processMod, consoleError);
                case 'atui-chart-bar-line':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-chart-bar-line.entry.js').then(processMod, consoleError);
                case 'atui-chart-donut':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-chart-donut.entry.js').then(processMod, consoleError);
                case 'atui-list-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-list-item.entry.js').then(processMod, consoleError);
                case 'atui-list-selector':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-list-selector.entry.js').then(processMod, consoleError);
                case 'atui-message':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-message.entry.js').then(processMod, consoleError);
                case 'atui-multi-select':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-multi-select.entry.js').then(processMod, consoleError);
                case 'atui-placeholder':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-placeholder.entry.js').then(processMod, consoleError);
                case 'atui-prompt-container':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-prompt-container.entry.js').then(processMod, consoleError);
                case 'atui-radio-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-radio-group.entry.js').then(processMod, consoleError);
                case 'atui-search-table':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-search-table.entry.js').then(processMod, consoleError);
                case 'atui-sidebar-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-sidebar-menu.entry.js').then(processMod, consoleError);
                case 'atui-sidebar-submenu':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-sidebar-submenu.entry.js').then(processMod, consoleError);
                case 'atui-sidebar-trigger':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-sidebar-trigger.entry.js').then(processMod, consoleError);
                case 'atui-src-dest':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-src-dest.entry.js').then(processMod, consoleError);
                case 'atui-static-table':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-static-table.entry.js').then(processMod, consoleError);
                case 'atui-status-bar':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-status-bar.entry.js').then(processMod, consoleError);
                case 'atui-tab-content':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-tab-content.entry.js').then(processMod, consoleError);
                case 'atui-tab-selector':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-tab-selector.entry.js').then(processMod, consoleError);
                case 'atui-table-pagination':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-table-pagination.entry.js').then(processMod, consoleError);
                case 'atui-textarea':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-textarea.entry.js').then(processMod, consoleError);
                case 'atui-tree':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-tree.entry.js').then(processMod, consoleError);
                case 'atui-breadcrumb-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-breadcrumb-item.entry.js').then(processMod, consoleError);
                case 'atui-list-selector-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-list-selector-item.entry.js').then(processMod, consoleError);
                case 'atui-menu-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-menu-item.entry.js').then(processMod, consoleError);
                case 'atui-radio':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-radio.entry.js').then(processMod, consoleError);
                case 'atui-sidebar-menuitem':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-sidebar-menuitem.entry.js').then(processMod, consoleError);
                case 'atui-tree-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-tree-item.entry.js').then(processMod, consoleError);
                case 'atui-button-group-option':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-button-group-option.entry.js').then(processMod, consoleError);
                case 'atui-chip-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-chip-list.entry.js').then(processMod, consoleError);
                case 'atui-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-header.entry.js').then(processMod, consoleError);
                case 'atui-input':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-input.entry.js').then(processMod, consoleError);
                case 'atui-toggle-switch':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-toggle-switch.entry.js').then(processMod, consoleError);
                case 'atui-checkbox-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-checkbox-group.entry.js').then(processMod, consoleError);
                case 'atui-select':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-select.entry.js').then(processMod, consoleError);
                case 'atui-checkbox':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-checkbox.entry.js').then(processMod, consoleError);
                case 'atui-badge':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-badge.entry.js').then(processMod, consoleError);
                case 'atui-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-menu.entry.js').then(processMod, consoleError);
                case 'atui-dialog':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-dialog.entry.js').then(processMod, consoleError);
                case 'atui-input-range':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-input-range.entry.js').then(processMod, consoleError);
                case 'atui-side-panel':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-side-panel.entry.js').then(processMod, consoleError);
                case 'atui-sidebar':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-sidebar.entry.js').then(processMod, consoleError);
                case 'atui-time-range':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-time-range.entry.js').then(processMod, consoleError);
                case 'atui-layout_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-layout_2.entry.js').then(processMod, consoleError);
                case 'atui-prompt-input_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-prompt-input_2.entry.js').then(processMod, consoleError);
                case 'atui-accordion-item_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-accordion-item_2.entry.js').then(processMod, consoleError);
                case 'atui-input-numeric':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-input-numeric.entry.js').then(processMod, consoleError);
                case 'atui-form-label_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-form-label_2.entry.js').then(processMod, consoleError);
                case 'atui-button-group_3':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-button-group_3.entry.js').then(processMod, consoleError);
                case 'atui-button_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-button_2.entry.js').then(processMod, consoleError);
                case 'atui-search_4':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-search_4.entry.js').then(processMod, consoleError);
                case 'atui-column-manager_3':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-column-manager_3.entry.js').then(processMod, consoleError);
                case 'atui-checkbox-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-checkbox-cell.entry.js').then(processMod, consoleError);
                case 'atui-checkbox-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-checkbox-header.entry.js').then(processMod, consoleError);
                case 'atui-chip-list-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-chip-list-cell.entry.js').then(processMod, consoleError);
                case 'atui-color-status-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-color-status-cell.entry.js').then(processMod, consoleError);
                case 'atui-edit-text-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-edit-text-cell.entry.js').then(processMod, consoleError);
                case 'atui-menu-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-menu-cell.entry.js').then(processMod, consoleError);
                case 'atui-multi-btn-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-multi-btn-cell.entry.js').then(processMod, consoleError);
                case 'atui-text-badge-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-text-badge-cell.entry.js').then(processMod, consoleError);
                case 'atui-text-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-text-cell.entry.js').then(processMod, consoleError);
                case 'atui-text-icon-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-text-icon-cell.entry.js').then(processMod, consoleError);
                case 'atui-text-image-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-text-image-cell.entry.js').then(processMod, consoleError);
                case 'atui-text-status-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-text-status-cell.entry.js').then(processMod, consoleError);
                case 'atui-title-subtitle-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-title-subtitle-cell.entry.js').then(processMod, consoleError);
                case 'atui-title-subtitle-date-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-title-subtitle-date-cell.entry.js').then(processMod, consoleError);
                case 'atui-toggle-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-toggle-cell.entry.js').then(processMod, consoleError);
                case 'atui-prompt-message':
                    return import(
                      /* webpackMode: "lazy" */
                      './atui-prompt-message.entry.js').then(processMod, consoleError);
          }
      }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  if (!supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({ mode: "open" });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0)) {
      slottedNodes.push(childNode);
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                if (supportsMutableAdoptedStyleSheets) {
                  styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                } else {
                  styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
                }
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      if (supportsMutableAdoptedStyleSheets) {
        styleContainerNode.adoptedStyleSheets.push(style);
      } else {
        styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (typeof propValue === "string" && (propType & 16 /* Unknown */ || propType & 8 /* Any */) && (propValue.startsWith("{") && propValue.endsWith("}") || propValue.startsWith("[") && propValue.endsWith("]"))) {
    try {
      return JSON.parse(propValue);
    } catch (e) {
    }
  }
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (true)) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags)
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 4 /* TargetDocument */) {
    return doc;
  }
  if (flags & 8 /* TargetWindow */) {
    return win;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

export { Fragment as F, Host as H, getElement as a, bootstrapLazy as b, createEvent as c, globalScripts as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
//# sourceMappingURL=index-CIq6mZ3i.js.map

//# sourceMappingURL=index-CIq6mZ3i.js.map