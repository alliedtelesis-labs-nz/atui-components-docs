var Vn=Object.defineProperty,ne=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var kn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable;var hn=(n,e,t)=>e in n?Vn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,mn=(n,e)=>{for(var t in e||={})kn.call(e,t)&&hn(n,t,e[t]);if(M)for(var t of M(e))vn.call(e,t)&&hn(n,t,e[t]);return n},Qe=(n,e)=>ne(n,ee(e));var xn=n=>e=>{var t=n[e];if(t)return t();throw new Error("Module not found in bundle: "+e)};var Je=(n,e)=>{var t={};for(var o in n)kn.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&M)for(var o of M(n))e.indexOf(o)<0&&vn.call(n,o)&&(t[o]=n[o]);return t};var D=(n,e,t)=>new Promise((o,r)=>{var i=c=>{try{s(t.next(c))}catch(l){r(l)}},a=c=>{try{s(t.throw(c))}catch(l){r(l)}},s=c=>c.done?o(c.value):Promise.resolve(c.value).then(i,a);s((t=t.apply(n,e)).next())});var te=xn({"./at-accordion-item_2.entry.js":()=>import("./chunk-NU3XTV2G.js"),"./at-accordion.entry.js":()=>import("./chunk-QGKHJUXW.js"),"./at-avatar.entry.js":()=>import("./chunk-4FFX5A5R.js"),"./at-badge.entry.js":()=>import("./chunk-VI5KG3TB.js"),"./at-breadcrumb-item.entry.js":()=>import("./chunk-JJ7TT4Q7.js"),"./at-breadcrumb.entry.js":()=>import("./chunk-26TAIBMX.js"),"./at-button-group-option.entry.js":()=>import("./chunk-RE5HRNRG.js"),"./at-button-group_3.entry.js":()=>import("./chunk-C4KQOXSH.js"),"./at-button-switch.entry.js":()=>import("./chunk-F62FDFJX.js"),"./at-button_2.entry.js":()=>import("./chunk-NYZNCBIZ.js"),"./at-card.entry.js":()=>import("./chunk-J6VG4FSI.js"),"./at-chart-bar-line.entry.js":()=>import("./chunk-MVRBCPGL.js"),"./at-chart-breakdown.entry.js":()=>import("./chunk-MYOU6OCB.js"),"./at-chart-donut.entry.js":()=>import("./chunk-DBKBCV2V.js"),"./at-chart-gauge.entry.js":()=>import("./chunk-OLDF5LZW.js"),"./at-chart-sparkline.entry.js":()=>import("./chunk-P2XPHUF4.js"),"./at-chart-trend.entry.js":()=>import("./chunk-CDQQ3HHY.js"),"./at-checkbox-cell.entry.js":()=>import("./chunk-BQ7A46S6.js"),"./at-checkbox-group.entry.js":()=>import("./chunk-FNLWZKHT.js"),"./at-checkbox-header.entry.js":()=>import("./chunk-K3M4ZVDJ.js"),"./at-checkbox.entry.js":()=>import("./chunk-3SKR4M6S.js"),"./at-chip-list-cell.entry.js":()=>import("./chunk-XYLRY7RP.js"),"./at-chip-list.entry.js":()=>import("./chunk-W766GPR6.js"),"./at-color-status-cell.entry.js":()=>import("./chunk-LFRFASNH.js"),"./at-column-manager_3.entry.js":()=>import("./chunk-4VMJPTOF.js"),"./at-control-group_6.entry.js":()=>import("./chunk-PZPMTC4E.js"),"./at-dashboard.entry.js":()=>import("./chunk-3M7FDYPQ.js"),"./at-dialog.entry.js":()=>import("./chunk-VMTGMN7Z.js"),"./at-edit-text-cell.entry.js":()=>import("./chunk-IJWVPOAY.js"),"./at-form-label_2.entry.js":()=>import("./chunk-VLDVUKIP.js"),"./at-header.entry.js":()=>import("./chunk-ITM6ZTP6.js"),"./at-health-dot-cell.entry.js":()=>import("./chunk-ZOPYTHGF.js"),"./at-health-dot.entry.js":()=>import("./chunk-W7544LH7.js"),"./at-icon.entry.js":()=>import("./chunk-PRSIT3FM.js"),"./at-input-date_3.entry.js":()=>import("./chunk-4DFFOWGB.js"),"./at-input-numeric.entry.js":()=>import("./chunk-R24RAFVA.js"),"./at-input-range.entry.js":()=>import("./chunk-2VXWJ3JQ.js"),"./at-input.entry.js":()=>import("./chunk-53GYXXT2.js"),"./at-layout_2.entry.js":()=>import("./chunk-NZ67NMKJ.js"),"./at-list-item.entry.js":()=>import("./chunk-3NV7J4NC.js"),"./at-list-selector-item.entry.js":()=>import("./chunk-M2CTDVHK.js"),"./at-list-selector.entry.js":()=>import("./chunk-6D7M2V2M.js"),"./at-menu-cell.entry.js":()=>import("./chunk-WECWBIHD.js"),"./at-menu-item.entry.js":()=>import("./chunk-DBDRDJWO.js"),"./at-menu.entry.js":()=>import("./chunk-AQUVAF46.js"),"./at-message.entry.js":()=>import("./chunk-XSPZNJ7U.js"),"./at-multi-btn-cell.entry.js":()=>import("./chunk-YFTGBCEK.js"),"./at-multi-select.entry.js":()=>import("./chunk-C4DXYQMQ.js"),"./at-placeholder.entry.js":()=>import("./chunk-2FEY7233.js"),"./at-progress-bar.entry.js":()=>import("./chunk-EX6O7AEH.js"),"./at-prompt-container.entry.js":()=>import("./chunk-3TONZ7UL.js"),"./at-prompt-input_2.entry.js":()=>import("./chunk-H6EB6M5S.js"),"./at-prompt-message.entry.js":()=>import("./chunk-W3C4FT3P.js"),"./at-radio-group.entry.js":()=>import("./chunk-HFWIFVSY.js"),"./at-radio.entry.js":()=>import("./chunk-JXMDZQMI.js"),"./at-relative-datetime-cell.entry.js":()=>import("./chunk-PIS3BHPN.js"),"./at-relative-time.entry.js":()=>import("./chunk-MHWYVN4C.js"),"./at-search-table.entry.js":()=>import("./chunk-T6GCU6BH.js"),"./at-select_3.entry.js":()=>import("./chunk-TWGZ6O52.js"),"./at-side-panel.entry.js":()=>import("./chunk-ITHTBZBK.js"),"./at-sidebar-menu.entry.js":()=>import("./chunk-UNTSWPZH.js"),"./at-sidebar-menuitem.entry.js":()=>import("./chunk-MYYCAZTT.js"),"./at-sidebar-submenu.entry.js":()=>import("./chunk-6C5BBVYM.js"),"./at-sidebar-trigger.entry.js":()=>import("./chunk-7J2CA2OK.js"),"./at-sidebar.entry.js":()=>import("./chunk-C2IMQJTH.js"),"./at-src-dest.entry.js":()=>import("./chunk-PH7YO32L.js"),"./at-static-table.entry.js":()=>import("./chunk-QVMD6VSN.js"),"./at-status-bar.entry.js":()=>import("./chunk-7ZLETKZM.js"),"./at-tab-content.entry.js":()=>import("./chunk-D3MXJBDU.js"),"./at-tabs.entry.js":()=>import("./chunk-P4E7ZUKN.js"),"./at-text-badge-cell.entry.js":()=>import("./chunk-SC5MXDZV.js"),"./at-text-cell.entry.js":()=>import("./chunk-DIHZEU2R.js"),"./at-text-icon-cell.entry.js":()=>import("./chunk-KOKWKPNU.js"),"./at-text-image-cell.entry.js":()=>import("./chunk-7QPS3TKR.js"),"./at-text-status-cell.entry.js":()=>import("./chunk-IOSX3VUC.js"),"./at-textarea.entry.js":()=>import("./chunk-IJAUO7FB.js"),"./at-time-range.entry.js":()=>import("./chunk-6XA6TRKR.js"),"./at-title-subtitle-cell.entry.js":()=>import("./chunk-X4SYV4NK.js"),"./at-title-subtitle-date-cell.entry.js":()=>import("./chunk-3JCOGHO6.js"),"./at-toaster.entry.js":()=>import("./chunk-7KIKLMRR.js"),"./at-toggle-cell.entry.js":()=>import("./chunk-D47BO2V2.js"),"./at-tree-item.entry.js":()=>import("./chunk-5K7LZT7L.js"),"./at-tree.entry.js":()=>import("./chunk-G5G5KAXX.js")});var oe="atui-components-stencil",A={hotModuleReplacement:!1,hydratedSelectorName:"hydrated",lazyLoad:!0,propChangeCallback:!0,slotRelocation:!0,state:!0,updatable:!0},tt=()=>{},wn=`@charset "UTF-8";
@layer theme, base, components, utilities;
@layer theme {
  @theme default {
    --font-sans:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);
    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);
    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);
    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);
    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);
    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);
    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);
    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);
    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);
    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);
    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);
    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);
    --color-mauve-50: oklch(98.5% 0 0);
    --color-mauve-100: oklch(96% 0.003 325.6);
    --color-mauve-200: oklch(92.2% 0.005 325.62);
    --color-mauve-300: oklch(86.5% 0.012 325.68);
    --color-mauve-400: oklch(71.1% 0.019 323.02);
    --color-mauve-500: oklch(54.2% 0.034 322.5);
    --color-mauve-600: oklch(43.5% 0.029 321.78);
    --color-mauve-700: oklch(36.4% 0.029 323.89);
    --color-mauve-800: oklch(26.3% 0.024 320.12);
    --color-mauve-900: oklch(21.2% 0.019 322.12);
    --color-mauve-950: oklch(14.5% 0.008 326);
    --color-olive-50: oklch(98.8% 0.003 106.5);
    --color-olive-100: oklch(96.6% 0.005 106.5);
    --color-olive-200: oklch(93% 0.007 106.5);
    --color-olive-300: oklch(88% 0.011 106.6);
    --color-olive-400: oklch(73.7% 0.021 106.9);
    --color-olive-500: oklch(58% 0.031 107.3);
    --color-olive-600: oklch(46.6% 0.025 107.3);
    --color-olive-700: oklch(39.4% 0.023 107.4);
    --color-olive-800: oklch(28.6% 0.016 107.4);
    --color-olive-900: oklch(22.8% 0.013 107.4);
    --color-olive-950: oklch(15.3% 0.006 107.1);
    --color-mist-50: oklch(98.7% 0.002 197.1);
    --color-mist-100: oklch(96.3% 0.002 197.1);
    --color-mist-200: oklch(92.5% 0.005 214.3);
    --color-mist-300: oklch(87.2% 0.007 219.6);
    --color-mist-400: oklch(72.3% 0.014 214.4);
    --color-mist-500: oklch(56% 0.021 213.5);
    --color-mist-600: oklch(45% 0.017 213.2);
    --color-mist-700: oklch(37.8% 0.015 216);
    --color-mist-800: oklch(27.5% 0.011 216.9);
    --color-mist-900: oklch(21.8% 0.008 223.9);
    --color-mist-950: oklch(14.8% 0.004 228.8);
    --color-taupe-50: oklch(98.6% 0.002 67.8);
    --color-taupe-100: oklch(96% 0.002 17.2);
    --color-taupe-200: oklch(92.2% 0.005 34.3);
    --color-taupe-300: oklch(86.8% 0.007 39.5);
    --color-taupe-400: oklch(71.4% 0.014 41.2);
    --color-taupe-500: oklch(54.7% 0.021 43.1);
    --color-taupe-600: oklch(43.8% 0.017 39.3);
    --color-taupe-700: oklch(36.7% 0.016 35.7);
    --color-taupe-800: oklch(26.8% 0.011 36.5);
    --color-taupe-900: oklch(21.4% 0.009 43.1);
    --color-taupe-950: oklch(14.7% 0.004 49.3);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;
    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;
    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;
    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;
    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl:
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);
    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);
    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm:
      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md:
      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg:
      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }
    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }
    @keyframes bounce {
      0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;
    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;
    --aspect-video: 16 / 9;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: --theme(--font-sans, initial);
    --default-font-feature-settings: --theme(
      --font-sans--font-feature-settings,
      initial
    );
    --default-font-variation-settings: --theme(
      --font-sans--font-variation-settings,
      initial
    );
    --default-mono-font-family: --theme(--font-mono, initial);
    --default-mono-font-feature-settings: --theme(
      --font-mono--font-feature-settings,
      initial
    );
    --default-mono-font-variation-settings: --theme(
      --font-mono--font-variation-settings,
      initial
    );
  }
  /* Deprecated */
  @theme default inline reference {
    --blur: 8px;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    --radius: 0.25rem;
    --max-width-prose: 65ch;
  }
}
@source "./**/*.{html,ts,tsx,jsx,js,css}";
:root {
  /*
    Config & Utils
    Purpose: Variables for use in this file only
    */
  color-scheme: light;
  --root-color: #ffffff;
  --root-inv: #000000;
  --mix-muted: 50%;
  --mix-impact: 80%;
  /* Primitives
    Purpose: These represent raw design decisions like colors and spacing, with no usage context.
    */
  /*
    Palette
    Source: Tailwind
    */
  --token-color-base-grey-50: #f9fafb;
  --token-color-base-grey-100: #f8f9fa;
  --token-color-base-grey-200: #e9ecef;
  --token-color-base-grey-300: #dee2e6;
  --token-color-base-grey-400: #ced4da;
  --token-color-base-grey-500: #adb5bd;
  --token-color-base-grey-600: #6c757d;
  --token-color-base-grey-700: #495057;
  --token-color-base-grey-800: #343a40;
  --token-color-base-grey-900: #212529;
  --token-color-base-grey-950: #030712;
  --token-color-base-gray-50: #f9fafb;
  --token-color-base-gray-100: #f8f9fa;
  --token-color-base-gray-200: #e9ecef;
  --token-color-base-gray-300: #dee2e6;
  --token-color-base-gray-400: #ced4da;
  --token-color-base-gray-500: #adb5bd;
  --token-color-base-gray-600: #6c757d;
  --token-color-base-gray-700: #495057;
  --token-color-base-gray-800: #343a40;
  --token-color-base-gray-900: #212529;
  --token-color-base-gray-950: #030712;
  --token-color-base-slate-50: #f8fafc;
  --token-color-base-slate-100: #f1f5f9;
  --token-color-base-slate-200: #e2e8f0;
  --token-color-base-slate-300: #cbd5e1;
  --token-color-base-slate-400: #94a3b8;
  --token-color-base-slate-500: #64748b;
  --token-color-base-slate-600: #475569;
  --token-color-base-slate-700: #334155;
  --token-color-base-slate-800: #1e293b;
  --token-color-base-slate-900: #0f172a;
  --token-color-base-slate-950: #020617;
  --token-color-base-purple-50: #ede7f6;
  --token-color-base-purple-100: #d1c4e9;
  --token-color-base-purple-200: #b39ddb;
  --token-color-base-purple-300: #9575cd;
  --token-color-base-purple-400: #7e57c2;
  --token-color-base-purple-500: #673ab7;
  --token-color-base-purple-600: #5e35b1;
  --token-color-base-purple-700: #512da8;
  --token-color-base-purple-800: #4527a0;
  --token-color-base-purple-900: #311b92;
  --token-color-base-purple-a100: #b388ff;
  --token-color-base-purple-a200: #7c4dff;
  --token-color-base-purple-a400: #651fff;
  --token-color-base-purple-a700: #6200ea;
  --token-color-base-sky-50: #f0f9ff;
  --token-color-base-sky-100: #e0f2fe;
  --token-color-base-sky-200: #bae6fd;
  --token-color-base-sky-300: #7dd3fc;
  --token-color-base-sky-400: #38bdf8;
  --token-color-base-sky-500: #0ea5e9;
  --token-color-base-sky-600: #0284c7;
  --token-color-base-sky-700: #0369a1;
  --token-color-base-sky-800: #075985;
  --token-color-base-sky-900: #0c4a6e;
  --token-color-base-sky-950: #082f49;
  --token-color-blue-50: #eff6ff;
  --token-color-base-blue-50: #e3f2fd;
  --token-color-base-blue-75: #cee7fc;
  --token-color-base-blue-100: #bbdefb;
  --token-color-base-blue-200: #90caf9;
  --token-color-base-blue-300: #64b5f6;
  --token-color-base-blue-400: #42a5f5;
  --token-color-base-blue-500: #2196f3;
  --token-color-base-blue-600: #1e88e5;
  --token-color-base-blue-700: #1976d2;
  --token-color-base-blue-800: #1565c0;
  --token-color-base-blue-900: #0d47a1;
  --token-color-base-blue-a100: #82b1ff;
  --token-color-base-blue-a200: #448aff;
  --token-color-base-blue-a400: #2979ff;
  --token-color-base-blue-a700: #2962ff;
  --token-color-base-cyan-50: #e0f7fa;
  --token-color-base-cyan-100: #b2ebf2;
  --token-color-base-cyan-200: #80deea;
  --token-color-base-cyan-300: #4dd0e1;
  --token-color-base-cyan-400: #26c6da;
  --token-color-base-cyan-500: #00bcd4;
  --token-color-base-cyan-600: #00acc1;
  --token-color-base-cyan-700: #0097a7;
  --token-color-base-cyan-800: #00838f;
  --token-color-base-cyan-900: #006064;
  --token-color-base-cyan-a100: #84ffff;
  --token-color-base-cyan-a200: #18ffff;
  --token-color-base-cyan-a400: #00e5ff;
  --token-color-base-cyan-a700: #00b8d4;
  --token-color-base-teal-50: #e0f2f1;
  --token-color-base-teal-100: #b2dfdb;
  --token-color-base-teal-200: #80cbc4;
  --token-color-base-teal-300: #4db6ac;
  --token-color-base-teal-400: #26a69a;
  --token-color-base-teal-500: #009688;
  --token-color-base-teal-600: #00897b;
  --token-color-base-teal-700: #00796b;
  --token-color-base-teal-800: #00695c;
  --token-color-base-teal-900: #004d40;
  --token-color-base-teal-a100: #a7ffeb;
  --token-color-base-teal-a200: #64ffda;
  --token-color-base-teal-a400: #1de9b6;
  --token-color-base-teal-a700: #00bfa5;
  --token-color-base-green-50: #e8f5e9;
  --token-color-base-green-100: #c8e6c9;
  --token-color-base-green-200: #a5d6a7;
  --token-color-base-green-300: #81c784;
  --token-color-base-green-400: #66bb6a;
  --token-color-base-green-500: #4caf50;
  --token-color-base-green-600: #43a047;
  --token-color-base-green-700: #388e3c;
  --token-color-base-green-800: #2e7d32;
  --token-color-base-green-900: #1b5e20;
  --token-color-base-green-a100: #b9f6ca;
  --token-color-base-green-a200: #69f0ae;
  --token-color-base-green-a400: #00e676;
  --token-color-base-green-a700: #00c853;
  --token-color-base-lime-50: #f9fbe7;
  --token-color-base-lime-100: #f0f4c3;
  --token-color-base-lime-200: #e6ee9c;
  --token-color-base-lime-300: #dce775;
  --token-color-base-lime-400: #d4e157;
  --token-color-base-lime-500: #cddc39;
  --token-color-base-lime-600: #c0ca33;
  --token-color-base-lime-700: #afb42b;
  --token-color-base-lime-800: #9e9d24;
  --token-color-base-lime-900: #827717;
  --token-color-base-lime-a100: #f4ff81;
  --token-color-base-lime-a200: #eeff41;
  --token-color-base-lime-a400: #c6ff00;
  --token-color-base-lime-a700: #aeea00;
  --token-color-base-amber-50: #fff8e1;
  --token-color-base-amber-100: #ffecb3;
  --token-color-base-amber-150: #ffeaab;
  --token-color-base-amber-200: #ffe082;
  --token-color-base-amber-300: #ffd54f;
  --token-color-base-amber-400: #ffca28;
  --token-color-base-amber-500: #ffc107;
  --token-color-base-amber-600: #ffb300;
  --token-color-base-amber-700: #ffa000;
  --token-color-base-amber-800: #ff8f00;
  --token-color-base-amber-850: #cc5900;
  --token-color-base-amber-900: #ff6f00;
  --token-color-base-amber-a100: #ffe57f;
  --token-color-base-amber-a200: #ffd740;
  --token-color-base-amber-a400: #ffc400;
  --token-color-base-amber-a700: #ffab00;
  --token-color-base-orange-50: #fbe9e7;
  --token-color-base-orange-100: #ffccbc;
  --token-color-base-orange-200: #ffab91;
  --token-color-base-orange-300: #ff8a65;
  --token-color-base-orange-400: #ff7043;
  --token-color-base-orange-500: #ff5722;
  --token-color-base-orange-600: #f4511e;
  --token-color-base-orange-700: #e64a19;
  --token-color-base-orange-800: #d84315;
  --token-color-base-orange-900: #bf360c;
  --token-color-base-orange-a100: #ff9e80;
  --token-color-base-orange-a200: #ff6e40;
  --token-color-base-orange-a400: #ff3d00;
  --token-color-base-orange-a700: #dd2c00;
  --token-color-base-red-50: #ffe5ee;
  --token-color-base-red-100: #ffcdd2;
  --token-color-base-red-200: #ef9a9a;
  --token-color-base-red-300: #e57373;
  --token-color-base-red-400: #ef5350;
  --token-color-base-red-500: #f44336;
  --token-color-base-red-600: #e53935;
  --token-color-base-red-700: #d32f2f;
  --token-color-base-red-800: #c62828;
  --token-color-base-red-900: #b71c1c;
  --token-color-base-red-a100: #ff8a80;
  --token-color-base-red-a200: #ff5252;
  --token-color-base-red-a400: #ff1744;
  --token-color-base-red-a700: #d50000;
  --token-color-base-white: #ffffff;
  --token-color-base-black: #000000;
  --token-color-base-neutral-50: #fafafa;
  --token-color-base-neutral-100: #f5f5f5;
  --token-color-base-neutral-200: #e5e5e5;
  --token-color-base-neutral-300: #d4d4d4;
  --token-color-base-neutral-400: #a3a3a3;
  --token-color-base-neutral-500: #737373;
  --token-color-base-neutral-600: #525252;
  --token-color-base-neutral-700: #404040;
  --token-color-base-neutral-800: #262626;
  --token-color-base-neutral-900: #171717;
  --token-color-base-neutral-950: #0a0a0a;
  --token-color-base-zinc-50: #fafafa;
  --token-color-base-zinc-100: #f4f4f5;
  --token-color-base-zinc-200: #e4e4e7;
  --token-color-base-zinc-300: #d4d4d8;
  --token-color-base-zinc-400: #a1a1aa;
  --token-color-base-zinc-500: #71717a;
  --token-color-base-zinc-600: #52525b;
  --token-color-base-zinc-700: #3f3f46;
  --token-color-base-zinc-800: #27272a;
  --token-color-base-zinc-900: #18181b;
  --token-color-base-zinc-950: #09090b;
  --token-font-size-root: 13px;
  --token-font-family-inter: 'Inter', 'Helvetica Neue', Helvetica, Arial,
        sans-serif;
  --token-font-family-mono: 'Roboto Mono', monospace;
  --token-font-family-base: var(--token-font-family-inter);
  --token-space-0: 0;
  --token-space-2: 2px;
  --token-space-4: 4px;
  --token-space-8: 8px;
  --token-space-12: 12px;
  --token-space-16: 16px;
  --token-space-20: 20px;
  --token-space-22: 22px;
  --token-space-24: 24px;
  --token-space-30: 30px;
  --token-space-32: 32px;
  --token-space-40: 40px;
  --token-space-48: 48px;
  --token-space-50: 50px;
  --token-space-64: 64px;
  --token-space-72: 72px;
  --token-space-80: 80px;
  --token-space-100: 100px;
  --token-space-120: 120px;
  --token-space-180: 180px;
  --token-space-220: 220px;
  --token-space-340: 340px;
  /* Semantic
     These tokens convey meaning, defining where a token is used rather than what it is
     Structure: They reference primitive or other semantic tokens when inheritance is expected.
     Use Case: Switch these for dark mode.
     */
  /* Type: Legacy */
  --token-font-size-base: 1rem;
  --token-font-size-caption: 0.9286rem;
  --token-font-size-h1: 1.692rem;
  --token-font-size-h2: 1.385rem;
  --token-font-size-h3: 1.23rem;
  --token-font-size-h4: 1.12rem;
  --token-font-size-h5: 1.0714rem;
  --token-font-size-h6: 1rem;
  --token-font-size-body: 1rem;
  --token-font-size-sm: 0.9286rem;
  --token-font-size-xs: 0.8571rem;
  --token-font-size-xl: 3.5rem;
  --token-font-size-button: 1rem;
  --token-font-size-icon-sm: 1rem;
  --token-font-size-icon-md: 1.1429rem;
  --token-font-size-icon-lg: 1.2857rem;
  --token-font-size-icon-xl: 1.5714rem;
  /* Font Weight: Legacy */
  --token-font-weight-light: 300;
  --token-font-weight-med: 400;
  --token-font-weight-bold: 600;
  /*  Line Height: Legacy */
  /* Type: OneConnect */
  /*
    TODO: Update type scale to match design
    "display":      { "family": "Inter",  "weight": 500, "size": 40, "lineHeight": "auto",  "tailwind": "text-[40px] font-medium" },
    "h1":           { "family": "Inter",  "weight": 500, "size": 32, "lineHeight": "auto",  "tailwind": "text-[32px] font-medium" },
    "h2":           { "family": "Inter",  "weight": 400, "size": 24, "lineHeight": 37.5,    "tailwind": "text-2xl font-normal leading-[37.5px]" },
    "body-lg-bold": { "family": "Inter",  "weight": 600, "size": 16, "lineHeight": 37.5,    "tailwind": "text-base font-semibold leading-[37.5px]" },
    "body-lg-med":  { "family": "Inter",  "weight": 500, "size": 16, "lineHeight": 37.5,    "tailwind": "text-base font-medium leading-[37.5px]" },
    "body-lg":      { "family": "Inter",  "weight": 400, "size": 16, "lineHeight": 37.5,    "tailwind": "text-base font-normal leading-[37.5px]" },
    "body":         { "family": "Inter",  "weight": 400, "size": 14, "lineHeight": 18,      "tailwind": "text-sm font-normal leading-[18px]" },
    "caption":      { "family": "Inter",  "weight": 400, "size": 12, "lineHeight": 18,      "tailwind": "text-xs font-normal leading-[18px]" },
    "caption-med":  { "family": "Inter",  "weight": 500, "size": 12, "lineHeight": 16,      "tailwind": "text-xs font-medium leading-4" },
    "label":        { "family": "Roboto", "weight": 500, "size": 12, "lineHeight": 28,      "tailwind": "text-xs font-medium leading-7 font-roboto" },
    "micro":        { "family": "Inter",  "weight": 400, "size": 10, "lineHeight": "auto",  "tailwind": "text-[10px] font-normal" },
    "micro-med":    { "family": "Inter",  "weight": 500, "size": 10, "lineHeight": 14.5,    "tailwind": "text-[10px] font-medium leading-[14.5px]" },
    "tiny":         { "family": "Inter",  "weight": 400, "size": 8,  "lineHeight": 18,      "tailwind": "text-[8px] font-normal leading-[18px]" }
    */
  /* Brand Color */
  --token-color-brand-primary: var(--token-color-base-blue-a400);
  --token-color-brand-primary-foreground: var(--token-color-base-white);
  /* Text Color */
  --token-text-foreground: var(--token-color-base-slate-900);
  --token-text-primary: var(--token-color-base-slate-900);
  --token-text-secondary: var(--token-color-base-slate-600);
  --token-text-tertiary: var(--token-color-base-slate-500);
  --token-text-default: var(--token-color-base-slate-900);
  --token-text-muted: var(--token-color-base-slate-500);
  --token-text-disabled: var(--token-color-base-gray-500);
  --token-text-warning: var(--token-color-base-amber-600);
  --token-text-error: var(--token-color-base-red-600);
  --token-text-success: var(--token-color-base-green-600);
  --token-text-active: var(--token-color-base-blue-a400);
  --token-text-inv: var(--token-color-base-slate-100);
  /*
    Surface Color
    Use Case: Surface colors define UI elevation
    Use for element background when you need to separate from background
     */
  --token-surface-0: var(--token-color-base-neutral-200);
  --token-surface-1: var(--token-color-base-neutral-100);
  --token-surface-2: var(--token-color-base-neutral-50);
  --token-surface-background: var(--token-color-base-neutral-50);
  --token-surface-foreground: var(--token-color-base-white);
  --token-surface-inv: var(--token-color-base-neutral-800);
  --token-surface-overlay: var(
        --token-surface-inv
    );
  /* Tooltips, modal backdrop */
  --token-focus-indicator: var(--token-surface-inv);
  /* Button  */
  /*
    Status Color
    Use Case: Used to represent severity in UI.
    Use for element background when you need to indicate state.
     */
  --token-state-disabled-foreground: var(--token-text-disabled);
  --token-state-disabled-background: var(--token-color-base-slate-200);
  --token-state-disabled-foreground-inv: var(--token-color-base-slate-200);
  --token-state-disabled-background-inv: var(--token-text-disabled);
  --token-state-success-foreground: var(--token-color-base-green-900);
  --token-state-success-background: var(--token-color-base-green-100);
  --token-state-success-foreground-inv: var(--token-color-base-green-100);
  --token-state-success-background-inv: var(--token-color-base-green-900);
  --token-state-success-accent: var(--token-color-base-green-700);
  --token-state-warning-foreground: var(--token-color-base-amber-850);
  --token-state-warning-background: var(--token-color-base-amber-100);
  --token-state-warning-foreground-inv: var(--token-color-base-amber-100);
  --token-state-warning-background-inv: var(--token-color-base-amber-850);
  --token-state-warning-accent: var(--token-color-base-amber-900);
  --token-state-error-foreground: var(--token-color-base-red-700);
  --token-state-error-background: var(--token-color-base-red-100);
  --token-state-error-foreground-inv: var(--token-color-base-red-100);
  --token-state-error-background-inv: var(--token-color-base-red-700);
  --token-state-error-accent: var(--token-color-base-red-500);
  --token-state-active-foreground: var(--token-color-base-blue-a400);
  --token-state-active-background: var(--token-color-base-sky-100);
  --token-state-active-foreground-inv: var(--token-color-base-sky-100);
  --token-state-active-background-inv: var(--token-color-base-blue-900);
  --token-state-active-accent: var(--token-color-base-blue-a400);
  --token-state-info-foreground: var(--token-color-base-blue-a400);
  --token-state-info-background: var(--token-color-base-blue-100);
  --token-state-info-foreground-inv: var(--token-color-base-blue-100);
  --token-state-info-background-inv: var(--token-color-base-blue-900);
  --token-state-info-accent: var(--token-color-base-blue-500);
  /* Border */
  --token-border-default: var(--token-color-base-grey-500);
  --token-border-impact: var(--token-color-base-grey-600);
  --token-border-muted: var(--token-color-base-grey-300);
  --token-border-input: var(--token-border-impact);
  --token-border-error: var(--token-state-error-accent);
  --token-border-active: var(--token-state-active-accent);
  /* Border Radius (Legacy) */
  --token-border-radius-sm: 0.15rem;
  --token-border-radius-md: 0.3rem;
  --token-border-radius-lg: 0.46rem;
  /* Breakpoint (Legacy) */
  --token-breakpoints-xs: 0px;
  --token-breakpoints-sm: 768px;
  --token-breakpoints-md: 992px;
  --token-breakpoints-lg: 1200px;
  --token-breakpoints-xl: 1440px;
  /* Transition (Legacy) */
  --token-transition-time: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --token-transition-base: all 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --token-transition-fast: all 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --token-transition-slow: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /* Sizing (Legacy) */
  --token-width-input-sm: 180px;
  --token-width-input-md: 220px;
  --token-width-sidebar-offscreen: 0px;
  --token-width-sidebar-collapsed: 50px;
  --token-width-sidebar: 280px;
  --token-width-menu: 300px;
  --token-width-panel-xs: 320px;
  --token-width-panel-sm: 400px;
  --token-width-panel-md: 500px;
  --token-width-panel-lg: 600px;
  --token-width-panel-xl: 700px;
  --token-input-btn-height: 36px;
  --token-height-navbar: 48px;
  --token-height-header: 72px;
  --token-height-input: 36px;
  --token-line-height-base: 140%;
  --token-line-height-heading: 180%;
  --token-line-height-richtext: 155%;
  /* Z-index (Legacy) */
  --token-z-index-header: 1001;
  --token-z-index-nav: 3001;
  --token-z-index-menu: 4001;
  --token-z-index-modal: 9001;
  /* Shadow (Legacy) */
  --token-shadow-0: 0 0 #000;
  --token-shadow-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --token-shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --token-shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --token-shadow-none: 0 0 #000;
  --token-shadow-sm: 0px 3px 1px -2px rgba(0, 0, 0, 0.02),
        0px 2px 2px 0px rgba(0, 0, 0, 0.01), 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  --token-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --token-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
  /*
    Component
    These tokens are specific to individual components and generally refer to semantic tokens.
    Keep component-specific tokens alongside their component CSS when they won't be reused elsewhere.
     */
  /* Sidebar */
  --token-sidebar-background: var(--token-surface-background);
  --token-sidebar-foreground: var(--token-text-foreground);
  --token-sidebar-active-background: var(--token-state-active-background);
  --token-sidebar-active-foreground: var(--token-color-base-blue-a400);
  --token-sidebar-border: var(--token-border-muted);
  --token-sidebar-item-padding: 6px;
  /* Input sizing */
  --token-input-py-sm: 4px;
  --token-input-py-md: 6px;
  --token-input-py-lg: 8px;
  --token-input-px-lg: 8px;
  --token-input-height-sm: calc(2 * var(--token-input-py-sm) + 16px);
  --token-input-height-md: calc(2 * var(--token-input-py-md) + 16px);
  --token-input-height-lg: calc(2 * var(--token-input-py-lg) + 16px);
  --token-input-height: var(
        --token-input-height-lg
    );
  /* cascade variable \u2014 overridden by density classes */
  --token-input-py: var(
        --token-input-py-lg
    );
  /* cascade variable \u2014 overridden by density classes */
  --token-input-background: var(--token-surface-foreground);
  --token-input-disabled-bg: var(--token-state-disabled-background);
  --token-input-disabled-color: var(--token-state-disabled-foreground);
  --token-input-border-color: var(--token-border-input);
  --token-input-color: var(--token-text-foreground);
  --token-input-focus-border-color: var(--token-state-active-accent);
  --token-input-radius: var(--token-border-radius-md);
  /* Card */
  --token-card-background: var(--token-surface-foreground);
  --token-card-border: var(--token-border-muted);
  --token-card-radius: var(--token-border-radius-lg);
  /* Charts */
  --chart-categorical-1: #54b399;
  --chart-categorical-2: #6092c0;
  --chart-categorical-3: #d36086;
  --chart-categorical-4: #9170b8;
  --chart-categorical-5: #ca8eae;
  --chart-categorical-6: #d6bf57;
  --chart-categorical-7: #b9a888;
  --chart-categorical-8: #da8b45;
  --chart-categorical-9: #aa6556;
  --chart-categorical-10: #e7664c;
  --chart-sequential-1: var(--token-color-base-blue-100);
  --chart-sequential-2: var(--token-color-base-blue-200);
  --chart-sequential-3: var(--token-color-base-blue-300);
  --chart-sequential-4: var(--token-color-base-blue-400);
  --chart-sequential-5: var(--token-color-base-blue-500);
  --chart-sequential-6: var(--token-color-base-blue-600);
  --chart-sequential-7: var(--token-color-base-blue-700);
  --chart-sequential-8: var(--token-color-base-blue-800);
  --chart-sequential-9: var(--token-color-base-blue-900);
  --chart-events-1: var(--token-color-base-red-500);
  --chart-events-2: #fec514;
  --chart-events-3: #a0de1e;
  --chart-device-status-2: #fec514;
  --chart-device-status-3: var(--token-color-base-red-500);
  --chart-device-status-5: var(--token-color-base-blue-500);
  --chart-onboarding-status-1: #a0de1e;
  --chart-onboarding-status-2: var(--token-color-base-blue-500);
  --chart-onboarding-status-3: #fec514;
  --chart-onboarding-status-4: var(--token-color-base-red-500);
  --chart-onboarding-status-5: #dfdfdf;
  --chart-text-foreground: var(--token-color-base-slate-900);
  --chart-text-muted: var(--token-color-base-slate-500);
  --chart-text-axis-line: var(--token-color-base-grey-300);
  /* Menu */
  --token-menu-background: var(--token-surface-background);
  --token-menu-radius: var(--token-border-radius-lg);
  --token-menu-item-radius: var(--token-border-radius-md);
  /*
    Feedback
    Use for alerts, badges, banners, and inline messages.
    */
  --token-message-radius: var(--token-border-radius-lg);
  --token-badge-radius: var(--token-border-radius-md);
  --token-placeholder-radius: var(--token-border-radius-lg);
  --token-feedback-foreground: var(--token-text-foreground);
  --token-feedback-background: var(--token-surface-foreground);
  --token-feedback-foreground-inv: var(--token-text-foreground);
  --token-feedback-background-inv: var(--token-surface-foreground);
  --token-feedback-success-foreground: var(--token-state-success-foreground);
  --token-feedback-success-background: color-mix(
        in srgb,
        var(--token-state-success-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-success-foreground-inv: var(
        --token-state-success-foreground-inv
    );
  --token-feedback-success-background-inv: var(
        --token-state-success-background-inv
    );
  --token-feedback-success-accent: var(--token-state-success-accent);
  --token-feedback-warning-foreground: var(--token-state-warning-foreground);
  --token-feedback-warning-background: color-mix(
        in srgb,
        var(--token-state-warning-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-warning-foreground-inv: var(
        --token-state-warning-foreground-inv
    );
  --token-feedback-warning-background-inv: var(
        --token-state-warning-background-inv
    );
  --token-feedback-warning-accent: var(--token-state-warning-accent);
  --token-feedback-error-foreground: var(--token-state-error-foreground);
  --token-feedback-error-background: color-mix(
        in srgb,
        var(--token-state-error-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-error-foreground-inv: var(
        --token-state-error-foreground-inv
    );
  --token-feedback-error-background-inv: var(
        --token-state-error-background-inv
    );
  --token-feedback-error-accent: var(--token-state-error-accent);
  --token-feedback-info-foreground: var(--token-state-info-foreground);
  --token-feedback-info-background: color-mix(
        in srgb,
        var(--token-state-info-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-info-foreground-inv: var(
        --token-state-info-foreground-inv
    );
  --token-feedback-info-background-inv: var(
        --token-state-info-background-inv
    );
  --token-feedback-info-accent: var(--token-state-info-accent);
  /* Button */
  --token-button-radius: var(--token-border-radius-md);
  --token-button-py-sm: var(--token-input-py-sm);
  --token-button-py-md: var(--token-input-py-md);
  --token-button-py-lg: var(--token-input-py-lg);
  --token-button-px-sm: 8px;
  --token-button-px-md: 8px;
  --token-button-px-lg: 12px;
  --token-button-height-sm: calc(2 * var(--token-button-py-sm) + 16px);
  --token-button-height-md: calc(2 * var(--token-button-py-md) + 16px);
  --token-button-height-lg: calc(2 * var(--token-button-py-lg) + 16px);
  --token-button-foreground: var(--token-text-foreground-inv);
  --token-button-foreground-inv: var(--token-text-inv);
  --token-button-primary-background: var(--token-color-brand-primary);
  --token-button-primary-foreground: var(--token-color-brand-primary);
  --token-button-secondary-background: var(--token-surface-2);
  --token-button-secondary-foreground: var(--token-button-color);
  --token-button-destructive-foreground: var(
        --token-state-error-background-inv
    );
  --token-button-destructive-background: var(
        --token-state-error-background-inv
    );
  --token-button-disabled-background: var(--token-state-disabled-background);
  --token-button-disabled-foreground: var(--token-text-disabled);
  /*
    Tables
    Source: ag-grid
    */
  --ag-foreground-color: var(--token-text-foreground);
  --ag-secondary-foreground-color: var(--token-text-muted);
  --ag-disabled-foreground-color: var(--token-text-disabled);
  --ag-background-color: var(--token-surface-foreground);
  --ag-header-background-color: var(--token-surface-foreground);
  --ag-tooltip-background-color: var(--token-surface-2);
  --ag-subheader-background-color: var(--token-surface-2);
  --ag-subheader-toolbar-background-color: color-mix(
        in srgb,
        var(--token-surface-inv),
        transparent 40%
    );
  --ag-header-cell-hover-background-color: var(--token-surface-background);
  --ag-row-hover-color: var(--token-surface-background);
  --ag-column-hover-color: var(--token-surface-background);
  --ag-selected-row-background-color: color-mix(
        in srgb,
        var(--token-state-active-accent),
        transparent 40%
    );
  --ag-borders: none;
  --ag-borders-critical: solid 1px;
  --ag-border-color: var(--token-border-muted);
  --ag-grid-size: 8px;
  --ag-icon-size: 14px;
  --ag-header-height: calc(var(--ag-grid-size) * 5);
  --ag-row-height: calc(var(--ag-grid-size) * 6);
  --ag-cell-horizontal-padding: calc(var(--ag-grid-size) * 3);
  --ag-list-item-height: calc(var(--ag-grid-size) * 4);
  --ag-row-group-indent-size: calc(
        var(--ag-grid-size) * 3 + var(--ag-icon-size)
    );
  --ag-font-family: var(--token-font-family-base);
  --ag-font-size: var(--token-font-size-base);
  --ag-invalid-color: var(--token-state-error-foreground);
  /* Chart */
  --chart-axis-line: var(--token-border-muted);
  --chart-label: var(--token-text-muted);
  --chart-title: var(--token-text-foreground);
  --chart-tooltip-title: var(--token-text-inv);
  --chart-tooltip-body: var(--token-text-inv);
  --chart-tooltip-bg: var(--token-surface-overlay);
  --chart-categorical-1: #7e57c2;
  --chart-categorical-2: #26a69a;
  --chart-categorical-3: #42a5f5;
  --chart-categorical-4: #ffca28;
  --chart-categorical-5: #66bb6a;
  --chart-categorical-6: #26c6da;
  --chart-categorical-7: #d4e157;
  --chart-categorical-8: #ff7043;
  --chart-categorical-9: #5e35b1;
  --chart-categorical-10: #00897b;
  --chart-sequential-1: #bbdefb;
  --chart-sequential-2: #90caf9;
  --chart-sequential-3: #64b5f6;
  --chart-sequential-4: #42a5f5;
  --chart-sequential-5: #2196f3;
  --chart-sequential-6: #1e88e5;
  --chart-sequential-7: #1976d2;
  --chart-sequential-8: #1565c0;
  --chart-sequential-9: #0d47a1;
  --chart-alert-1: #a0de1e;
  --chart-alert-2: #ffc107;
  --chart-alert-3: #f44336;
  --chart-alert-4: #9e9e9e;
  --chart-device-status-1: #a0de1e;
  --chart-device-status-2: #ffc107;
  --chart-device-status-3: #f44336;
  --chart-device-status-4: #dfdfdf;
  --chart-device-status-5: #2196f3;
  --chart-onboarding-status-1: #43a047;
  --chart-onboarding-status-2: #a0de1e;
  --chart-onboarding-status-3: #2196f3;
  --chart-onboarding-status-4: #fec514;
  --chart-onboarding-status-5: #f44336;
  --chart-onboarding-status-6: #dfdfdf;
}

/* Input density utilities \u2014 apply to a container to control the height of all child inputs. density-lg is the :root default \u2014 no class needed */
.density-sm {
  --token-input-height: var(--token-input-height-sm);
  --token-input-py: var(--token-input-py-sm);
}

.density-md {
  --token-input-height: var(--token-input-height-md);
  --token-input-py: var(--token-input-py-md);
}

[data-theme=dark] {
  color-scheme: dark;
  --root-color: #000000;
  --mix-muted: 50%;
  --mix-impact: 80%;
  /* Semantic
    These tokens convey meaning, defining where a token is used rather than what it is
    Structure: They reference primitive or other semantic tokens when inheritance is expected.
    Use Case: Switch these for dark mode.
    */
  /* Text Color */
  --token-text-foreground: var(--token-color-base-white);
  --token-text-primary: var(--token-color-base-white);
  --token-text-secondary: var(--token-color-base-grey-500);
  --token-text-tertiary: var(--token-color-base-zinc-500);
  --token-text-default: var(--token-color-white);
  --token-text-muted: var(--token-color-base-grey-500);
  --token-text-disabled: var(--token-color-base-zinc-500);
  --token-text-warning: var(--token-color-base-amber-500);
  --token-text-error: var(--token-color-base-red-400);
  --token-text-success: var(--token-color-base-green-400);
  --token-text-active: var(--token-color-base-blue-a100);
  --token-text-inv: var(--token-color-base-slate-900);
  /*
    Surface Color
    Use Case: Surface colors define UI elevation
    Use for element background when you need to separate from background
    */
  --token-surface-0: var(--token-color-base-neutral-900);
  --token-surface-1: var(--token-color-base-neutral-800);
  --token-surface-2: var(--token-color-base-neutral-700);
  --token-surface-background: var(--token-color-base-neutral-900);
  --token-surface-foreground: var(--token-color-base-neutral-800);
  --token-surface-inv: var(--token-color-base-slate-50);
  --token-surface-overlay: var(--token-color-base-neutral-300);
  --token-focus-indicator: var(--token-color-surface-inv);
  /*
    Status Color
    Use Case: Used to represent severity in UI.
    Use for element background when you need to indicate state.
     */
  --token-state-disabled-foreground: var(--token-text-disabled);
  --token-state-disabled-background: var(--token-color-base-neutral-700);
  --token-state-disabled-foreground-inv: var(--token-color-base-neutral-700);
  --token-state-disabled-background-inv: var(--token-text-disabled);
  --token-state-success-foreground: var(--token-color-base-green-100);
  --token-state-success-background: var(--token-color-base-green-900);
  --token-state-success-foreground-inv: var(--token-color-base-green-900);
  --token-state-success-background-inv: var(--token-color-base-green-100);
  --token-state-success-accent: var(--token-color-base-green-700);
  --token-state-warning-foreground: var(--token-color-base-amber-300);
  --token-state-warning-background: var(--token-color-base-amber-850);
  --token-state-warning-foreground-inv: var(--token-color-base-amber-850);
  --token-state-warning-background-inv: var(--token-color-base-amber-100);
  --token-state-warning-accent: var(--token-color-base-amber-900);
  --token-state-error-foreground: var(--token-color-base-red-100);
  --token-state-error-background: var(--token-color-base-red-700);
  --token-state-error-foreground-inv: var(--token-color-base-red-700);
  --token-state-error-background-inv: var(--token-color-base-red-100);
  --token-state-error-accent: var(--token-color-base-red-500);
  --token-state-active-foreground: var(--token-color-base-blue-50);
  --token-state-active-background: var(--token-color-base-blue-900);
  --token-state-active-background-inv: var(--token-color-base-blue-a400);
  --token-state-active-foreground-inv: var(--token-color-base-sky-100);
  --token-state-active-accent: var(--token-color-base-blue-a400);
  --token-state-info-foreground: var(--token-color-base-blue-100);
  --token-state-info-background: var(--token-color-base-blue-900);
  --token-state-info-foreground-inv: var(--token-color-base-blue-900);
  --token-state-info-background-inv: var(--token-color-base-blue-100);
  --token-state-info-accent: var(--token-color-base-blue-500);
  /* Border */
  --token-border-default: var(--token-color-base-zinc-500);
  --token-border-impact: var(--token-color-base-zinc-400);
  --token-border-muted: var(--token-color-base-zinc-600);
  --token-border-input: var(--token-color-base-white);
  --token-border-active: var(--token-state-active-accent);
  --token-border-error: var(--token-state-error-accent);
  /* Component
    These tokens are specific to individual components and generally refer to semantic tokens.
    Keep component-specific tokens alongside their component CSS when they won't be reused elsewhere.
     */
  /* Sidebar */
  --token-sidebar-background: var(--token-surface-background);
  --token-sidebar-foreground: var(--token-text-foreground);
  --token-sidebar-active-background: var(--token-state-active-background);
  --token-sidebar-active-foreground: var(--token-text-active);
  --token-sidebar-border: var(--token-border-muted);
  /* Input */
  --token-input-background: var(--token-surface-foreground);
  --token-input-disabled-bg: var(--token-state-disabled-background);
  --token-input-disabled-color: var(--token-state-disabled-foreground);
  --token-input-border-color: var(--token-border-input);
  --token-input-color: var(--token-text-foreground);
  --token-input-focus-border-color: var(--token-state-active-accent);
  /* Card */
  --token-card-background: var(--token-surface-foreground);
  --token-card-border: var(--token-border-muted);
  /* Charts */
  --chart-categorical-4: #a98ad1;
  --chart-categorical-5: #d9a8c3;
  --chart-categorical-6: #e8d265;
  --chart-categorical-7: #cfc09e;
  --chart-categorical-8: #eca55c;
  --chart-categorical-9: #c27d6e;
  --chart-categorical-10: #f0826a;
  --chart-sequential-1: var(--token-color-base-blue-900);
  --chart-sequential-2: var(--token-color-base-blue-800);
  --chart-sequential-3: var(--token-color-base-blue-700);
  --chart-sequential-4: var(--token-color-base-blue-600);
  --chart-sequential-5: var(--token-color-base-blue-500);
  --chart-sequential-6: var(--token-color-base-blue-400);
  --chart-sequential-7: var(--token-color-base-blue-300);
  --chart-sequential-8: var(--token-color-base-blue-200);
  --chart-sequential-9: var(--token-color-base-blue-100);
  --chart-events-1: #ff5252;
  --chart-events-2: #ffd740;
  --chart-events-3: #b8f033;
  --chart-device-status-5: var(--token-color-base-blue-300);
  --chart-onboarding-status-1: #b8f033;
  --chart-onboarding-status-2: var(--token-color-base-blue-300);
  --chart-onboarding-status-3: #ffd740;
  --chart-onboarding-status-4: #ff5252;
  --chart-onboarding-status-5: #9e9e9e;
  --chart-text-foreground: var(--token-color-base-white);
  --chart-text-muted: var(--token-color-base-grey-500);
  --chart-text-axis-line: var(--token-color-base-zinc-600);
  /* Menu */
  --token-menu-background: var(--token-surface-background);
  /*  --token-menu-hover-background: var(--token-surface-background);*/
  /*
    Feedback
    Use for alerts, badges, banners, and inline messages.
    */
  --token-feedback-foreground: var(--token-text-foreground);
  --token-feedback-background: var(--token-surface-foreground);
  --token-feedback-foreground-inv: var(--token-text-foreground);
  --token-feedback-background-inv: var(--token-surface-foreground);
  --token-feedback-success-foreground: var(--token-state-success-foreground);
  --token-feedback-success-background: color-mix(
        in srgb,
        var(--token-state-success-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-success-foreground-inv: var(
        --token-state-success-foreground-inv
    );
  --token-feedback-success-background-inv: var(
        --token-state-success-background-inv
    );
  --token-feedback-success-background-accent: var(
        --token-state-success-accent
    );
  --token-feedback-warning-foreground: var(--token-state-warning-foreground);
  --token-feedback-warning-background: color-mix(
        in srgb,
        var(--token-state-warning-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-warning-foreground-inv: var(
        --token-state-warning-foreground-inv
    );
  --token-feedback-warning-background-inv: var(
        --token-state-warning-background-inv
    );
  --token-feedback-warning-backgroundaccent: var(
        --token-state-warning-accent
    );
  --token-feedback-error-foreground: var(--token-state-error-foreground);
  --token-feedback-error-background: color-mix(
        in srgb,
        var(--token-state-error-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-error-foreground-inv: var(
        --token-state-error-foreground-inv
    );
  --token-feedback-error-background-inv: var(
        --token-state-error-background-inv
    );
  --token-feedback-error-accent: var(--token-state-error-accent);
  --token-feedback-info-foreground: var(--token-state-info-foreground);
  --token-feedback-info-background: color-mix(
        in srgb,
        var(--token-state-info-background) var(--mix-muted),
        var(--root-color)
    );
  --token-feedback-info-foreground-inv: var(
        --token-state-info-foreground-inv
    );
  --token-feedback-info-background-inv: var(
        --token-state-info-background-inv
    );
  --token-feedback-info-accent: var(--token-state-info-accent);
  /* Button */
  --token-button-foreground: var(--token-text-foreground);
  --token-button-foreground-inv: var(--token-text-foreground);
  --token-button-primary-background: var(--token-color-brand-primary);
  --token-button-primary-foreground: var(--token-state-active-accent);
  --token-button-secondary-background: var(--token-surface-2);
  --token-button-secondary-foreground: var(--token-button-color);
  --token-button-destructive-foreground: var(--token-state-error-accent);
  --token-button-destructive-background: var(--token-state-error-accent);
  --token-button-disabled-background: var(--token-state-disabled-background);
  --token-button-disabled-foreground: var(--token-text-disabled);
  /*
    Tables
    Source: ag-grid
    */
  --ag-foreground-color: var(--token-text-foreground);
  --ag-secondary-foreground-color: var(--token-text-muted);
  --ag-disabled-foreground-color: var(--token-text-disabled);
  --ag-background-color: var(--token-surface-foreground);
  --ag-header-background-color: var(--token-surface-foreground);
  --ag-tooltip-background-color: var(--token-surface-2);
  --ag-subheader-background-color: var(--token-surface-2);
  --ag-subheader-toolbar-background-color: var(--token-surface-2);
  --ag-header-cell-hover-background-color: var(--token-surface-background);
  --ag-row-hover-color: var(--token-surface-background);
  --ag-column-hover-color: var(--token-surface-background);
  --ag-selected-row-background-color: color-mix(
        in srgb,
        var(--token-state-active-accent),
        transparent 40%
    );
  --ag-borders: none;
  --ag-borders-critical: solid 1px;
  --ag-border-color: var(--token-border-muted);
  --ag-grid-size: 8px;
  --ag-icon-size: 18px;
  --ag-header-height: calc(var(--ag-grid-size) * 6);
  --ag-row-height: calc(var(--ag-grid-size) * 6);
  --ag-cell-horizontal-padding: calc(var(--ag-grid-size) * 3);
  --ag-list-item-height: calc(var(--ag-grid-size) * 4);
  --ag-row-group-indent-size: calc(
        var(--ag-grid-size) * 3 + var(--ag-icon-size)
    );
  --ag-font-family: var(--token-font-family-base);
  --ag-font-size: var(--token-font-size-base);
  --ag-invalid-color: var(--token-state-error-foreground);
  /* Chart */
  --chart-axis-line: var(--token-border-muted);
  --chart-label: var(--token-text-muted);
  --chart-title: var(--token-text-foreground);
  --chart-tooltip-bg: var(--token-surface-background);
  --chart-tooltip-title: var(--token-text-foreground);
  --chart-tooltip-body: var(--token-text-foreground);
  --chart-categorical-1: #6ecfb3;
  --chart-categorical-2: #7aafd4;
  --chart-categorical-3: #e87da0;
  --chart-categorical-4: #e8d265;
  --chart-categorical-5: #81c784;
  --chart-categorical-6: #4dd0e1;
  --chart-categorical-7: #dce775;
  --chart-categorical-8: #ff8a65;
  --chart-categorical-9: #9575cd;
  --chart-categorical-10: #26a69a;
  --chart-sequential-1: #0d47a1;
  --chart-sequential-2: #1565c0;
  --chart-sequential-3: #1976d2;
  --chart-sequential-4: #1e88e5;
  --chart-sequential-5: #2196f3;
  --chart-sequential-6: #42a5f5;
  --chart-sequential-7: #64b5f6;
  --chart-sequential-8: #90caf9;
  --chart-sequential-9: #bbdefb;
  --chart-alert-1: #81c784;
  --chart-alert-2: #ffd740;
  --chart-alert-3: #ff5252;
  --chart-alert-4: #9e9e9e;
  --chart-device-status-1: #b8f033;
  --chart-device-status-2: #ffd740;
  --chart-device-status-3: #ff5252;
  --chart-device-status-4: #9e9e9e;
  --chart-device-status-5: #64b5f6;
  --chart-onboarding-status-1: #43a047;
  --chart-onboarding-status-2: #a0de1e;
  --chart-onboarding-status-3: #64b5f6;
  --chart-onboarding-status-4: #ffd740;
  --chart-onboarding-status-5: #ff5252;
  --chart-onboarding-status-6: #9e9e9e;
}

*, ::before, ::after {
  --tw-border-spacing-x:
      0;
  --tw-border-spacing-y:
      0;
  --tw-translate-x:
      0;
  --tw-translate-y:
      0;
  --tw-rotate:
      0;
  --tw-skew-x:
      0;
  --tw-skew-y:
      0;
  --tw-scale-x:
      1;
  --tw-scale-y:
      1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness:
      proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width:
      0px;
  --tw-ring-offset-color:
      #fff;
  --tw-ring-color:
      rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:
      0 0 #0000;
  --tw-ring-shadow:
      0 0 #0000;
  --tw-shadow:
      0 0 #0000;
  --tw-shadow-colored:
      0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}

::backdrop {
  --tw-border-spacing-x:
      0;
  --tw-border-spacing-y:
      0;
  --tw-translate-x:
      0;
  --tw-translate-y:
      0;
  --tw-rotate:
      0;
  --tw-skew-x:
      0;
  --tw-skew-y:
      0;
  --tw-scale-x:
      1;
  --tw-scale-y:
      1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness:
      proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width:
      0px;
  --tw-ring-offset-color:
      #fff;
  --tw-ring-color:
      rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:
      0 0 #0000;
  --tw-ring-shadow:
      0 0 #0000;
  --tw-shadow:
      0 0 #0000;
  --tw-shadow-colored:
      0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}

/* ! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com */
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: color-mix(in srgb, var(--token-border-default) 100%, transparent);
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/
html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
  tab-size: 4;
  /* 3 */
  font-family: var(--token-font-family-base);
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/
body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/
hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
button,
input:where([type=button]),
input:where([type=reset]),
input:where([type=submit]) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/
button,
[role=button] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden=until-found])) {
  display: none;
}

/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/
*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 2 */
  border: 0 solid;
  /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/
html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  /* 3 */
  font-family: --theme(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
  /* 4 */
  font-feature-settings: --theme(--default-font-feature-settings, normal);
  /* 5 */
  font-variation-settings: --theme(--default-font-variation-settings, normal);
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/
hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: --theme(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
  /* 1 */
  font-feature-settings: --theme(--default-mono-font-feature-settings, normal);
  /* 2 */
  font-variation-settings: --theme(--default-mono-font-variation-settings, normal);
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
  Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}

/*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/
ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/
button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  border-radius: 0;
  /* 2 */
  background-color: transparent;
  /* 3 */
  opacity: 1;
  /* 4 */
}

/*
  Restore default font weight.
*/
:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/
:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/
::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/
::-moz-placeholder {
  opacity: 1;
}

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/
@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {
  ::-moz-placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}
/*
  Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/
::-webkit-date-and-time-value {
  min-height: 1lh;
  /* 1 */
  text-align: inherit;
  /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/
::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/
::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/
::-webkit-calendar-picker-indicator {
  line-height: 1;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/
button,
input:where([type=button], [type=reset], [type=submit]),
::file-selector-button {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/
[hidden]:where(:not([hidden=until-found])) {
  display: none !important;
}

html {
  font-size: var(--token-font-size-root);
}

body {
  font-size: var(--token-font-size-body);
  line-height: var(--token-line-height-base);
  font-family: var(--token-font-family-base), sans-serif;
  font-weight: var(--token-font-weight-light);
  background-color: var(--token-surface-background);
}

h1,
.h1 {
  font-size: var(--token-font-size-h1);
}

h2,
.h2 {
  font-size: var(--token-font-size-h2);
}

h3,
.h3 {
  font-size: var(--token-font-size-h3);
}

h4,
.h4 {
  font-size: var(--token-font-size-h4);
}

h5,
.h5 {
  font-size: var(--token-font-size-h5);
}

h6,
.h6 {
  font-size: var(--token-font-size-h6);
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--token-font-weight-med);
  line-height: var(--token-line-height-base);
}

label {
  font-size: var(--token-font-size-xs);
  font-weight: var(--token-font-weight-med);
  line-height: var(--token-line-height-base);
}

small {
  font-size: var(--token-font-size-sm);
}

strong {
  font-weight: var(--token-font-weight-bold);
}

* {
  scrollbar-width: auto;
  scrollbar-color: var(--token-color-base-slate-400) transparent;
}

*::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--token-color-base-slate-400);
  border-radius: 8px;
  border: 1px solid transparent;
  /* creates the visual margin */
  background-clip: padding-box;
  /* ensures the border doesn\u2019t overlay the background */
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.\\!visible {
  visibility: visible !important;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.inset-0 {
  inset: 0;
}

.bottom-0 {
  bottom: 0;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.right-24 {
  right: 24px;
}

.right-4 {
  right: 4px;
}

.right-\\[36px\\] {
  right: 36px;
}

.top-0 {
  top: 0;
}

.top-1\\/2 {
  top: 50%;
}

.top-4 {
  top: 4px;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-50 {
  z-index: 50;
}

.m-2 {
  margin: 2px;
}

.m-\\[2px\\] {
  margin: 2px;
}

.mx-8 {
  margin-left: 8px;
  margin-right: 8px;
}

.my-8 {
  margin-top: 8px;
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 4px;
}

.mb-8 {
  margin-bottom: 8px;
}

.ml-16 {
  margin-left: 16px;
}

.ml-4 {
  margin-left: 4px;
}

.ml-auto {
  margin-left: auto;
}

.mr-24 {
  margin-right: 24px;
}

.mr-4 {
  margin-right: 4px;
}

.mr-8 {
  margin-right: 8px;
}

.mr-\\[-1px\\] {
  margin-right: -1px;
}

.mr-\\[16px\\] {
  margin-right: 16px;
}

.mr-\\[4px\\] {
  margin-right: 4px;
}

.mr-auto {
  margin-right: auto;
}

.mt-0 {
  margin-top: 0;
}

.mt-2 {
  margin-top: 2px;
}

.mt-4 {
  margin-top: 4px;
}

.mt-8 {
  margin-top: 8px;
}

.box-border {
  box-sizing: border-box;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.\\!grid {
  display: grid !important;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-0 {
  height: 0;
}

.h-16 {
  height: 16px;
}

.h-2 {
  height: 2px;
}

.h-20 {
  height: 20px;
}

.h-24 {
  height: 24px;
}

.h-32 {
  height: 32px;
}

.h-4 {
  height: 4px;
}

.h-40 {
  height: 40px;
}

.h-64 {
  height: 64px;
}

.h-8 {
  height: 8px;
}

.h-\\[120px\\] {
  height: 120px;
}

.h-\\[160px\\] {
  height: 160px;
}

.h-\\[16px\\] {
  height: 16px;
}

.h-\\[180px\\] {
  height: 180px;
}

.h-\\[20px\\] {
  height: 20px;
}

.h-\\[220px\\] {
  height: 220px;
}

.h-\\[22px\\] {
  height: 22px;
}

.h-\\[235px\\] {
  height: 235px;
}

.h-\\[240px\\] {
  height: 240px;
}

.h-\\[28px\\] {
  height: 28px;
}

.h-\\[300px\\] {
  height: 300px;
}

.h-\\[30px\\] {
  height: 30px;
}

.h-\\[330px\\] {
  height: 330px;
}

.h-\\[400px\\] {
  height: 400px;
}

.h-\\[40px\\] {
  height: 40px;
}

.h-\\[440px\\] {
  height: 440px;
}

.h-\\[70px\\] {
  height: 70px;
}

.h-\\[80px\\] {
  height: 80px;
}

.h-button-lg {
  height: var(--token-button-height-lg);
}

.h-button-md {
  height: var(--token-button-height-md);
}

.h-button-sm {
  height: var(--token-button-height-sm);
}

.h-dvh {
  height: 100dvh;
}

.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}

.h-full {
  height: 100%;
}

.h-input {
  height: var(--token-input-height);
}

.h-input-md {
  height: var(--token-input-height-md);
}

.max-h-input-md {
  max-height: var(--token-input-height-md);
}

.\\!min-h-16 {
  min-height: 16px !important;
}

.min-h-0 {
  min-height: 0;
}

.min-h-16 {
  min-height: 16px;
}

.min-h-\\[32px\\] {
  min-height: 32px;
}

.min-h-\\[36px\\] {
  min-height: 36px;
}

.min-h-\\[40px\\] {
  min-height: 40px;
}

.min-h-\\[48px\\] {
  min-height: 48px;
}

.min-h-input {
  min-height: var(--token-input-height);
}

.w-0 {
  width: 0;
}

.w-16 {
  width: 16px;
}

.w-24 {
  width: 24px;
}

.w-32 {
  width: 32px;
}

.w-4 {
  width: 4px;
}

.w-40 {
  width: 40px;
}

.w-64 {
  width: 64px;
}

.w-80 {
  width: 80px;
}

.w-\\[16px\\] {
  width: 16px;
}

.w-\\[22px\\] {
  width: 22px;
}

.w-\\[40px\\] {
  width: 40px;
}

.w-auto {
  width: auto;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-full {
  width: 100%;
}

.w-input-md {
  width: var(--token-width-input-md);
}

.w-input-sm {
  width: var(--token-width-input-sm);
}

.w-max {
  width: -moz-max-content;
  width: max-content;
}

.w-panel-sm {
  width: var(--token-width-panel-sm);
}

.w-sidebar {
  width: var(--token-width-sidebar);
}

.\\!min-w-16 {
  min-width: 16px !important;
}

.min-w-0 {
  min-width: 0;
}

.min-w-100 {
  min-width: 100px;
}

.min-w-\\[140px\\] {
  min-width: 140px;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.max-w-none {
  max-width: none;
}

.max-w-xs {
  max-width: 20rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-fill flex {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
}

.flex-none {
  flex: none;
}

.flex-shrink {
  flex-shrink: 1;
}

.shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.basis-0 {
  flex-basis: 0;
}

.border-collapse {
  border-collapse: collapse;
}

.-translate-y-1\\/2 {
  --tw-translate-y:
      -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate:
      180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x:
      1;
  --tw-scale-y:
      1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-90 {
  --tw-scale-x:
      .9;
  --tw-scale-y:
      .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.animate-\\[typing_1s_infinite\\] {
  animation: typing 1s infinite;
}

@keyframes progress-left {
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}
.animate-progress-left {
  animation: progress-left 1.6s linear infinite;
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.resize-none {
  resize: none;
}

.resize {
  resize: both;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.content-stretch {
  align-content: stretch;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-16 {
  gap: 16px;
}

.gap-2 {
  gap: 2px;
}

.gap-4 {
  gap: 4px;
}

.gap-8 {
  gap: 8px;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse:
      0;
  margin-top: calc(2px * (1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2px * var(--tw-space-y-reverse));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse:
      0;
  margin-top: calc(4px * (1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(4px * var(--tw-space-y-reverse));
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.overflow-y-auto {
  overflow-y: auto;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.whitespace-normal {
  white-space: normal;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.break-words {
  overflow-wrap: break-word;
}

.break-all {
  word-break: break-all;
}

.rounded {
  border-radius: var(--token-border-radius-md);
}

.rounded-\\[0\\.3rem\\] {
  border-radius: 0.3rem;
}

.rounded-\\[2px\\] {
  border-radius: 2px;
}

.rounded-badge {
  border-radius: var(--token-badge-radius);
}

.rounded-button {
  border-radius: var(--token-button-radius);
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-input {
  border-radius: var(--token-input-radius);
}

.rounded-lg {
  border-radius: var(--token-border-radius-lg);
}

.rounded-md {
  border-radius: var(--token-border-radius-md);
}

.rounded-menu {
  border-radius: var(--token-menu-radius);
}

.rounded-menu-item {
  border-radius: var(--token-menu-item-radius);
}

.rounded-placeholder {
  border-radius: var(--token-placeholder-radius);
}

.rounded-sm {
  border-radius: var(--token-border-radius-sm);
}

.rounded-l-md {
  border-top-left-radius: var(--token-border-radius-md);
  border-bottom-left-radius: var(--token-border-radius-md);
}

.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.rounded-r-md {
  border-top-right-radius: var(--token-border-radius-md);
  border-bottom-right-radius: var(--token-border-radius-md);
}

.rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.rounded-t-lg {
  border-top-left-radius: var(--token-border-radius-lg);
  border-top-right-radius: var(--token-border-radius-lg);
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border-4 {
  border-width: 4px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.border-r {
  border-right-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-none {
  border-style: none;
}

.border-button-destructive {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-button-destructive-border) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-button-primary {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-button-primary-border) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-destructive {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-destructive-foreground {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-disabled-foreground\\/30 {
  border-color: color-mix(in srgb, var(--token-state-disabled-foreground) 30%, transparent);
}

.border-error {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-border-error) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-feedback-error-foreground\\/30 {
  border-color: color-mix(in srgb, var(--token-feedback-error-foreground) 30%, transparent);
}

.border-feedback-info-foreground\\/30 {
  border-color: color-mix(in srgb, var(--token-feedback-info-foreground) 30%, transparent);
}

.border-feedback-success-foreground\\/30 {
  border-color: color-mix(in srgb, var(--token-feedback-success-foreground) 30%, transparent);
}

.border-feedback-warning-foreground\\/30 {
  border-color: color-mix(in srgb, var(--token-feedback-warning-foreground) 30%, transparent);
}

.border-input {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-border-muted) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-med {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-border-med) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-muted {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-border-muted) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-primary {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-border-primary) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.border-transparent {
  border-color: transparent;
}

.border-e-transparent {
  border-inline-end-color: transparent;
}

.\\!bg-surface-1 {
  --tw-bg-opacity:
      1 !important;
  background-color: color-mix(in srgb, var(--token-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent) !important;
}

.bg-active-accent {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-active-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-active-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-active-foreground {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-button-destructive {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-button-destructive-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-button-primary-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-button-primary-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-button-primary-background\\/10 {
  background-color: color-mix(in srgb, var(--token-button-primary-background) 10%, transparent);
}

.bg-button-secondary-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-button-secondary-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-card-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-card-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-card-background\\/80 {
  background-color: color-mix(in srgb, var(--token-card-background) 80%, transparent);
}

.bg-destructive-foreground {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-disabled-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-disabled-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-disabled-background-inv {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-disabled-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-disabled-foreground\\/40 {
  background-color: color-mix(in srgb, var(--token-state-disabled-foreground) 40%, transparent);
}

.bg-feedback-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-background-inv {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-error-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-error-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-error-background-inv {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-error-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-info-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-info-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-info-background-inv {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-info-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-success-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-success-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-success-background-inv {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-success-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-warning-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-warning-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-feedback-warning-background-inv {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-feedback-warning-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-gray-500 {
  --tw-bg-opacity:
      1;
  background-color: rgb(107, 114, 128, var(--tw-bg-opacity, 1));
}

.bg-info-foreground {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-input-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-input-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-menu {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-menu-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-surface-1 {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-surface-2 {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-surface-2) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-surface-background {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-surface-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-surface-foreground {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-surface-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.bg-surface-foreground\\/80 {
  background-color: color-mix(in srgb, var(--token-surface-foreground) 80%, transparent);
}

.bg-surface-overlay\\/90 {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 90%, transparent);
}

.bg-transparent {
  background-color: transparent;
}

.bg-warning {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-warning-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.\\!fill-button-foreground {
  fill: color-mix(in srgb, var(--token-button-foreground) 100%, transparent) !important;
}

.\\!fill-button-foreground-inv {
  fill: color-mix(in srgb, var(--token-button-foreground-inv) 100%, transparent) !important;
}

.\\!fill-disabled-foreground {
  fill: color-mix(in srgb, var(--token-state-disabled-foreground) 100%, transparent) !important;
}

.fill-active-foreground {
  fill: color-mix(in srgb, var(--token-state-active-foreground) 100%, transparent);
}

.fill-button-destructive {
  fill: color-mix(in srgb, var(--token-button-destructive-background) 100%, transparent);
}

.fill-button-foreground-inv {
  fill: color-mix(in srgb, var(--token-button-foreground-inv) 100%, transparent);
}

.fill-button-primary-foreground {
  fill: color-mix(in srgb, var(--token-button-primary-foreground) 100%, transparent);
}

.fill-button-secondary-foreground {
  fill: color-mix(in srgb, var(--token-button-secondary-foreground) 100%, transparent);
}

.fill-disabled {
  fill: color-mix(in srgb, var(--token-state-disabled-default) 100%, transparent);
}

.fill-disabled-foreground {
  fill: color-mix(in srgb, var(--token-state-disabled-foreground) 100%, transparent);
}

.fill-disabled-foreground-inv {
  fill: color-mix(in srgb, var(--token-state-disabled-foreground-inv) 100%, transparent);
}

.fill-feedback-error-accent {
  fill: color-mix(in srgb, var(--token-feedback-error-accent) 100%, transparent);
}

.fill-feedback-error-foreground {
  fill: color-mix(in srgb, var(--token-feedback-error-foreground) 100%, transparent);
}

.fill-feedback-error-foreground-inv {
  fill: color-mix(in srgb, var(--token-feedback-error-foreground-inv) 100%, transparent);
}

.fill-feedback-foreground {
  fill: color-mix(in srgb, var(--token-feedback-foreground) 100%, transparent);
}

.fill-feedback-foreground-inv {
  fill: color-mix(in srgb, var(--token-feedback-foreground-inv) 100%, transparent);
}

.fill-feedback-info-accent {
  fill: color-mix(in srgb, var(--token-feedback-info-accent) 100%, transparent);
}

.fill-feedback-info-foreground {
  fill: color-mix(in srgb, var(--token-feedback-info-foreground) 100%, transparent);
}

.fill-feedback-info-foreground-inv {
  fill: color-mix(in srgb, var(--token-feedback-info-foreground-inv) 100%, transparent);
}

.fill-feedback-success-accent {
  fill: color-mix(in srgb, var(--token-feedback-success-accent) 100%, transparent);
}

.fill-feedback-success-foreground {
  fill: color-mix(in srgb, var(--token-feedback-success-foreground) 100%, transparent);
}

.fill-feedback-success-foreground-inv {
  fill: color-mix(in srgb, var(--token-feedback-success-foreground-inv) 100%, transparent);
}

.fill-feedback-warning-accent {
  fill: color-mix(in srgb, var(--token-feedback-warning-accent) 100%, transparent);
}

.fill-feedback-warning-foreground {
  fill: color-mix(in srgb, var(--token-feedback-warning-foreground) 100%, transparent);
}

.fill-feedback-warning-foreground-inv {
  fill: color-mix(in srgb, var(--token-feedback-warning-foreground-inv) 100%, transparent);
}

.fill-foreground {
  fill: color-mix(in srgb, var(--token-text-foreground) 100%, transparent);
}

.fill-foreground\\/40 {
  fill: color-mix(in srgb, var(--token-text-foreground) 40%, transparent);
}

.fill-slate-300 {
  fill: #cbd5e1;
}

.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
}

.p-0 {
  padding: 0;
}

.p-12 {
  padding: 12px;
}

.p-16 {
  padding: 16px;
}

.p-4 {
  padding: 4px;
}

.p-8 {
  padding: 8px;
}

.p-\\[10vh\\] {
  padding: 10vh;
}

.p-\\[14px\\] {
  padding: 14px;
}

.p-\\[15vh\\] {
  padding: 15vh;
}

.p-\\[16px\\] {
  padding: 16px;
}

.p-\\[2px\\] {
  padding: 2px;
}

.p-\\[5vh\\] {
  padding: 5vh;
}

.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.px-12 {
  padding-left: 12px;
  padding-right: 12px;
}

.px-16 {
  padding-left: 16px;
  padding-right: 16px;
}

.px-2 {
  padding-left: 2px;
  padding-right: 2px;
}

.px-4 {
  padding-left: 4px;
  padding-right: 4px;
}

.px-8 {
  padding-left: 8px;
  padding-right: 8px;
}

.px-\\[6px\\] {
  padding-left: 6px;
  padding-right: 6px;
}

.py-120 {
  padding-top: 120px;
  padding-bottom: 120px;
}

.py-2 {
  padding-top: 2px;
  padding-bottom: 2px;
}

.py-4 {
  padding-top: 4px;
  padding-bottom: 4px;
}

.py-64 {
  padding-top: 64px;
  padding-bottom: 64px;
}

.py-8 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-\\[2px\\] {
  padding-top: 2px;
  padding-bottom: 2px;
}

.py-\\[6px\\] {
  padding-top: 6px;
  padding-bottom: 6px;
}

.pb-16 {
  padding-bottom: 16px;
}

.pb-4 {
  padding-bottom: 4px;
}

.pb-8 {
  padding-bottom: 8px;
}

.pl-4 {
  padding-left: 4px;
}

.pr-0 {
  padding-right: 0;
}

.pr-24 {
  padding-right: 24px;
}

.pr-4 {
  padding-right: 4px;
}

.pr-8 {
  padding-right: 8px;
}

.ps-8 {
  padding-inline-start: 8px;
}

.pt-8 {
  padding-top: 8px;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.align-middle {
  vertical-align: middle;
}

.align-\\[-0\\.125em\\] {
  vertical-align: -0.125em;
}

.text-\\[10px\\] {
  font-size: 10px;
}

.text-body {
  font-size: var(--token-font-size-body);
}

.text-button {
  font-size: var(--token-font-size-button);
}

.text-h4 {
  font-size: var(--token-font-size-h4);
}

.text-h5 {
  font-size: var(--token-font-size-h5);
}

.text-icon-md {
  font-size: var(--token-font-size-icon-md);
}

.text-sm {
  font-size: var(--token-font-size-sm);
}

.text-xs {
  font-size: var(--token-font-size-xs);
}

.\\!font-medium {
  font-weight: var(--token-font-weight-med) !important;
}

.font-bold {
  font-weight: var(--token-font-weight-bold);
}

.font-medium {
  font-weight: var(--token-font-weight-med);
}

.font-normal {
  font-weight: var(--token-font-weight-light);
}

.capitalize {
  text-transform: capitalize;
}

.italic {
  font-style: italic;
}

.tabular-nums {
  --tw-numeric-spacing:
      tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.\\!leading-normal {
  line-height: var(--token-line-height-base) !important;
}

.leading-\\[0\\.9286rem\\] {
  line-height: 0.9286rem;
}

.leading-\\[100\\%\\] {
  line-height: 100%;
}

.leading-\\[16px\\] {
  line-height: 16px;
}

.leading-\\[30px\\] {
  line-height: 30px;
}

.leading-none {
  line-height: 1;
}

.leading-normal {
  line-height: var(--token-line-height-base);
}

.leading-tight {
  line-height: 1.25;
}

.\\!text-active-foreground {
  --tw-text-opacity:
      1 !important;
  color: color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important;
}

.\\!text-disabled {
  --tw-text-opacity:
      1 !important;
  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important;
}

.\\!text-foreground {
  --tw-text-opacity:
      1 !important;
  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important;
}

.text-active-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-accent {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-destructive {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-destructive-background) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-destructive-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-destructive-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-primary-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-primary-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-button-secondary-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-button-secondary-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-destructive-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-disabled {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-disabled-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-disabled-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-disabled-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-disabled-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-error {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-error) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-error-accent {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-error-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-error-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-error-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-error-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-error-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-info-accent {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-info-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-info-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-info-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-info-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-info-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-success-accent {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-success-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-success-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-success-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-success-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-success-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-warning-accent {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-warning-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-warning-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-warning-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-feedback-warning-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-feedback-warning-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-foreground-inv {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-info-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-muted {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-muted) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-secondary {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-secondary) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-success {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-success-default) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.text-warning-foreground {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-state-warning-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.no-underline {
  text-decoration-line: none;
}

.caret-transparent {
  caret-color: transparent;
}

.accent-active-foreground {
  accent-color: color-mix(in srgb, var(--token-state-active-foreground) 100%, transparent);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-30 {
  opacity: 0.3;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-70 {
  opacity: 0.7;
}

.shadow {
  --tw-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored:
      0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored:
      0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored:
      0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}

.shadow-none {
  --tw-shadow:
      0 0 #0000;
  --tw-shadow-colored:
      0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow:
      0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored:
      0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline-0 {
  outline-width: 0px;
}

.outline-active {
  outline-color: color-mix(in srgb, var(--token-state-active-default) 100%, transparent);
}

.ring {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.ring-active {
  --tw-ring-opacity:
      1;
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-default) calc(var(--tw-ring-opacity, 1) * 100%), transparent);
}

.blur {
  --tw-blur:
      blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.grayscale-\\[1\\] {
  --tw-grayscale:
      grayscale(1);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.backdrop-blur {
  --tw-backdrop-blur:
      blur(8px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[background-color\\,color\\,box-shadow\\] {
  transition-property: background-color, color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[color\\,background-color\\,box-shadow\\] {
  transition-property: color, background-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[fill\\] {
  transition-property: fill;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[left\\] {
  transition-property: left;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-150 {
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.py-button-sm {
  padding-top: var(--token-button-py-sm);
  padding-bottom: var(--token-button-py-sm);
}

.py-button-md {
  padding-top: var(--token-button-py-md);
  padding-bottom: var(--token-button-py-md);
}

.py-button-lg {
  padding-top: var(--token-button-py-lg);
  padding-bottom: var(--token-button-py-lg);
}

.px-button-sm {
  padding-left: var(--token-button-px-sm);
  padding-right: var(--token-button-px-sm);
}

.px-button-md {
  padding-left: var(--token-button-px-md);
  padding-right: var(--token-button-px-md);
}

.px-button-lg {
  padding-left: var(--token-button-px-lg);
  padding-right: var(--token-button-px-lg);
}

.py-input-y {
  padding-top: var(--token-input-py-lg);
  padding-bottom: var(--token-input-py-lg);
}

.px-input-x {
  padding-left: var(--token-input-px-lg);
  padding-right: var(--token-input-px-lg);
}

.pl-input-x {
  padding-left: var(--token-input-px-lg);
}

@tailwind utilities;
.hide-empty:empty {
  display: none;
}

.at-button i,
.at-button .material-icons {
  font-size: var(--token-font-size-icon-md);
  line-height: 1;
}

.material-icons {
  font-family: "Material Icons";
  font-size: 16px;
}

* {
  outline: none;
}

*:focus {
  outline: none;
}

*:focus:visible {
  outline: none;
}

.ag-cell,
.ag-cell-wrapper {
  display: inline-flex;
}

.placeholder\\:text-disabled::-moz-placeholder {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.placeholder\\:text-disabled::placeholder {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.placeholder\\:text-foreground::-moz-placeholder {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.placeholder\\:text-foreground::placeholder {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.empty\\:hidden:empty {
  display: none;
}

.focus-within\\:z-10:focus-within {
  z-index: 10;
}

.focus-within\\:border-active-accent:focus-within {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.focus-within\\:border-destructive:focus-within {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.focus-within\\:border-error:focus-within {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-border-error) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.focus-within\\:bg-surface-overlay\\/10:focus-within {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);
}

.focus-within\\:outline-0:focus-within {
  outline-width: 0px;
}

.focus-within\\:ring:focus-within {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus-within\\:ring-0:focus-within {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus-within\\:ring-active-glow:focus-within {
  --tw-ring-opacity:
      1;
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);
}

.focus-within\\:ring-destructive\\/30:focus-within {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-error-default) calc(0.3 * 100%), transparent);
}

.hover\\:cursor-pointer:hover {
  cursor: pointer;
}

.hover\\:bg-active-background:hover {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-state-active-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.hover\\:bg-surface-1:hover {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.hover\\:bg-surface-2:hover {
  --tw-bg-opacity:
      1;
  background-color: color-mix(in srgb, var(--token-surface-2) calc(var(--tw-bg-opacity, 1) * 100%), transparent);
}

.hover\\:bg-surface-overlay\\/10:hover {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);
}

.hover\\:fill-foreground:hover {
  fill: color-mix(in srgb, var(--token-text-foreground) 100%, transparent);
}

.hover\\:text-disabled:hover {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.hover\\:text-foreground:hover {
  --tw-text-opacity:
      1;
  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.focus\\:z-10:focus {
  z-index: 10;
}

.focus\\:border-none:focus {
  border-style: none;
}

.focus\\:border-active-accent:focus {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.focus\\:bg-surface-overlay\\/20:focus {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 20%, transparent);
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:outline-0:focus {
  outline-width: 0px;
}

.focus\\:outline-2:focus {
  outline-width: 2px;
}

.focus\\:ring:focus {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus\\:ring-0:focus {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus\\:ring-inset:focus {
  --tw-ring-inset:
      inset;
}

.focus\\:ring-active-glow:focus {
  --tw-ring-opacity:
      1;
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);
}

.focus-visible\\:z-20:focus-visible {
  z-index: 20;
}

.focus-visible\\:border-active-accent:focus-visible {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.focus-visible\\:bg-surface-overlay\\/10:focus-visible {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);
}

.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring:focus-visible {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus-visible\\:ring-0:focus-visible {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.focus-visible\\:ring-inset:focus-visible {
  --tw-ring-inset:
      inset;
}

.focus-visible\\:ring-active-foreground\\/20:focus-visible {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-foreground) calc(0.2 * 100%), transparent);
}

.focus-visible\\:ring-active-foreground\\/30:focus-visible {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent);
}

.focus-visible\\:ring-active-foreground\\/40:focus-visible {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-foreground) calc(0.4 * 100%), transparent);
}

.focus-visible\\:ring-active-glow:focus-visible {
  --tw-ring-opacity:
      1;
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);
}

.focus-visible\\:ring-destructive-foreground\\/10:focus-visible {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-error-foreground) calc(0.1 * 100%), transparent);
}

.focus-visible\\:ring-destructive-foreground\\/20:focus-visible {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-error-foreground) calc(0.2 * 100%), transparent);
}

.focus-visible\\:ring-destructive-foreground\\/30:focus-visible {
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-error-foreground) calc(0.3 * 100%), transparent);
}

.focus-visible\\:ring-offset-0:focus-visible {
  --tw-ring-offset-width:
      0px;
}

.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width:
      2px;
}

.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-4 {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-active-glow {
  --tw-ring-opacity:
      1;
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);
}

.group:hover .group-hover\\:bg-button-destructive-background\\/10 {
  background-color: color-mix(in srgb, var(--token-button-destructive-background) 10%, transparent);
}

.group:hover .group-hover\\:bg-button-primary-background\\/10 {
  background-color: color-mix(in srgb, var(--token-button-primary-background) 10%, transparent);
}

.group:hover .group-hover\\:bg-destructive-foreground\\/10 {
  background-color: color-mix(in srgb, var(--token-state-error-foreground) 10%, transparent);
}

.group:hover .group-hover\\:bg-surface-overlay\\/10 {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);
}

.group:hover .group-hover\\:bg-surface-overlay\\/30 {
  background-color: color-mix(in srgb, var(--token-surface-overlay) 30%, transparent);
}

.group:hover .group-hover\\:underline {
  text-decoration-line: underline;
}

.group:focus .group-focus\\:bg-destructive-foreground\\/20 {
  background-color: color-mix(in srgb, var(--token-state-error-foreground) 20%, transparent);
}

.group:focus .group-focus\\:bg-slate-200 {
  --tw-bg-opacity:
      1;
  background-color: rgb(226, 232, 240, var(--tw-bg-opacity, 1));
}

.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:border-0 {
  border-width: 0px;
}

.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:border-active-accent {
  --tw-border-opacity:
      1;
  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);
}

.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:ring {
  --tw-ring-offset-shadow:
      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:
      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));
}

.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:ring-active-glow {
  --tw-ring-opacity:
      1;
  --tw-ring-color:
      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);
}

.group:active .group-active\\:bg-button-destructive-background\\/20 {
  background-color: color-mix(in srgb, var(--token-button-destructive-background) 20%, transparent);
}

.group:active .group-active\\:bg-button-destructive-background\\/70 {
  background-color: color-mix(in srgb, var(--token-button-destructive-background) 70%, transparent);
}

.group:active .group-active\\:bg-button-primary-background\\/20 {
  background-color: color-mix(in srgb, var(--token-button-primary-background) 20%, transparent);
}

.group:active .group-active\\:bg-button-primary-background\\/70 {
  background-color: color-mix(in srgb, var(--token-button-primary-background) 70%, transparent);
}

.group:active .group-active\\:bg-button-secondary-background\\/20 {
  background-color: color-mix(in srgb, var(--token-button-secondary-background) 20%, transparent);
}

.group\\/sidebar-wrapper[data-state=collapsed] .group-data-\\[state\\=collapsed\\]\\/sidebar-wrapper\\:hidden {
  display: none;
}

.group\\/accordion-item[data-state=expanded] .group-data-\\[state\\=expanded\\]\\/accordion-item\\:rotate-180 {
  --tw-rotate:
      180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (prefers-reduced-motion: no-preference) {
  @keyframes progress-left {
    0% {
      left: -30%;
    }
    100% {
      left: 100%;
    }
  }
  .motion-safe\\:animate-progress-left {
    animation: progress-left 1.6s linear infinite;
  }
}
@media (prefers-reduced-motion: reduce) {
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\] {
    animation: spin 1.5s linear infinite;
  }
}`,re="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xhtml";function An(n,e,t){let o=typeof HTMLElement<"u"?HTMLElement.prototype:null;for(;n&&n!==o;){let r=Object.getOwnPropertyDescriptor(n,e);if(r&&(!t||r.get))return r;n=Object.getPrototypeOf(n)}}var ie=(n,e)=>{var t;let o=e.$cmpMeta$;Object.entries((t=o.$members$)!=null?t:{}).map(([i,[a]])=>{if(a&31||a&32){let s=n[i],c=An(Object.getPrototypeOf(n),i,!0)||Object.getOwnPropertyDescriptor(n,i);c&&Object.defineProperty(n,i,{get(){return c.get.call(this)},set(l){c.set.call(this,l)},configurable:!0,enumerable:!0}),e.$instanceValues$.has(i)?n[i]=e.$instanceValues$.get(i):s!==void 0&&(n[i]=s)}})},S=n=>{if(n.__stencil__getHostRef)return n.__stencil__getHostRef()},ot=(n,e)=>{e&&(n.__stencil__getHostRef=()=>e,e.$lazyInstance$=n,e.$cmpMeta$.$flags$&512&&A.state&&ie(n,e))},se=(n,e)=>{let t={$flags$:0,$hostElement$:n,$cmpMeta$:e,$instanceValues$:new Map,$serializerValues$:new Map};t.$onInstancePromise$=new Promise(r=>t.$onInstanceResolve$=r),t.$onReadyPromise$=new Promise(r=>t.$onReadyResolve$=r),n["s-p"]=[],n["s-rc"]=[],t.$fetchedCbList$=[];let o=t;return n.__stencil__getHostRef=()=>o,o},yn=(n,e)=>e in n,u=(n,e)=>(0,console.error)(n,e),V=new Map,ce=(n,e,t)=>{let o=n.$tagName$.replace(/-/g,"_"),r=n.$lazyBundleId$;if(!r)return;let i=V.get(r);if(i)return i[o];if(!t||!A.hotModuleReplacement){let a=s=>(V.set(r,s),s[o]);switch(r){case"at-accordion":return import("./chunk-QGKHJUXW.js").then(a,u);case"at-avatar":return import("./chunk-4FFX5A5R.js").then(a,u);case"at-breadcrumb":return import("./chunk-26TAIBMX.js").then(a,u);case"at-button-switch":return import("./chunk-F62FDFJX.js").then(a,u);case"at-card":return import("./chunk-J6VG4FSI.js").then(a,u);case"at-chart-breakdown":return import("./chunk-MYOU6OCB.js").then(a,u);case"at-chart-donut":return import("./chunk-DBKBCV2V.js").then(a,u);case"at-chart-gauge":return import("./chunk-OLDF5LZW.js").then(a,u);case"at-chart-trend":return import("./chunk-CDQQ3HHY.js").then(a,u);case"at-header":return import("./chunk-ITM6ZTP6.js").then(a,u);case"at-list-item":return import("./chunk-3NV7J4NC.js").then(a,u);case"at-list-selector":return import("./chunk-6D7M2V2M.js").then(a,u);case"at-multi-select":return import("./chunk-C4DXYQMQ.js").then(a,u);case"at-placeholder":return import("./chunk-2FEY7233.js").then(a,u);case"at-progress-bar":return import("./chunk-EX6O7AEH.js").then(a,u);case"at-prompt-container":return import("./chunk-3TONZ7UL.js").then(a,u);case"at-radio-group":return import("./chunk-HFWIFVSY.js").then(a,u);case"at-relative-time":return import("./chunk-MHWYVN4C.js").then(a,u);case"at-src-dest":return import("./chunk-PH7YO32L.js").then(a,u);case"at-static-table":return import("./chunk-QVMD6VSN.js").then(a,u);case"at-status-bar":return import("./chunk-7ZLETKZM.js").then(a,u);case"at-tab-content":return import("./chunk-D3MXJBDU.js").then(a,u);case"at-tabs":return import("./chunk-P4E7ZUKN.js").then(a,u);case"at-textarea":return import("./chunk-IJAUO7FB.js").then(a,u);case"at-tree":return import("./chunk-G5G5KAXX.js").then(a,u);case"at-breadcrumb-item":return import("./chunk-JJ7TT4Q7.js").then(a,u);case"at-chart-sparkline":return import("./chunk-P2XPHUF4.js").then(a,u);case"at-health-dot":return import("./chunk-W7544LH7.js").then(a,u);case"at-list-selector-item":return import("./chunk-M2CTDVHK.js").then(a,u);case"at-radio":return import("./chunk-JXMDZQMI.js").then(a,u);case"at-tree-item":return import("./chunk-5K7LZT7L.js").then(a,u);case"at-button-group-option":return import("./chunk-RE5HRNRG.js").then(a,u);case"at-chip-list":return import("./chunk-W766GPR6.js").then(a,u);case"at-input":return import("./chunk-53GYXXT2.js").then(a,u);case"at-checkbox-group":return import("./chunk-FNLWZKHT.js").then(a,u);case"at-menu-item":return import("./chunk-DBDRDJWO.js").then(a,u);case"at-checkbox":return import("./chunk-3SKR4M6S.js").then(a,u);case"at-badge":return import("./chunk-VI5KG3TB.js").then(a,u);case"at-menu":return import("./chunk-AQUVAF46.js").then(a,u);case"at-icon":return import("./chunk-PRSIT3FM.js").then(a,u);case"at-dialog":return import("./chunk-VMTGMN7Z.js").then(a,u);case"at-input-range":return import("./chunk-2VXWJ3JQ.js").then(a,u);case"at-side-panel":return import("./chunk-ITHTBZBK.js").then(a,u);case"at-sidebar":return import("./chunk-C2IMQJTH.js").then(a,u);case"at-sidebar-menu":return import("./chunk-UNTSWPZH.js").then(a,u);case"at-sidebar-submenu":return import("./chunk-6C5BBVYM.js").then(a,u);case"at-sidebar-trigger":return import("./chunk-7J2CA2OK.js").then(a,u);case"at-time-range":return import("./chunk-6XA6TRKR.js").then(a,u);case"at-toaster":return import("./chunk-7KIKLMRR.js").then(a,u);case"at-layout_2":return import("./chunk-NZ67NMKJ.js").then(a,u);case"at-message":return import("./chunk-XSPZNJ7U.js").then(a,u);case"at-prompt-input_2":return import("./chunk-H6EB6M5S.js").then(a,u);case"at-sidebar-menuitem":return import("./chunk-MYYCAZTT.js").then(a,u);case"at-input-numeric":return import("./chunk-R24RAFVA.js").then(a,u);case"at-form-label_2":return import("./chunk-VLDVUKIP.js").then(a,u);case"at-search-table":return import("./chunk-T6GCU6BH.js").then(a,u);case"at-button-group_3":return import("./chunk-C4KQOXSH.js").then(a,u);case"at-accordion-item_2":return import("./chunk-NU3XTV2G.js").then(a,u);case"at-input-date_3":return import("./chunk-4DFFOWGB.js").then(a,u);case"at-select_3":return import("./chunk-TWGZ6O52.js").then(a,u);case"at-prompt-message":return import("./chunk-W3C4FT3P.js").then(a,u);case"at-button_2":return import("./chunk-NYZNCBIZ.js").then(a,u);case"at-control-group_6":return import("./chunk-PZPMTC4E.js").then(a,u);case"at-column-manager_3":return import("./chunk-4VMJPTOF.js").then(a,u);case"at-dashboard":return import("./chunk-3M7FDYPQ.js").then(a,u);case"at-chart-bar-line":return import("./chunk-MVRBCPGL.js").then(a,u);case"at-checkbox-cell":return import("./chunk-BQ7A46S6.js").then(a,u);case"at-checkbox-header":return import("./chunk-K3M4ZVDJ.js").then(a,u);case"at-chip-list-cell":return import("./chunk-XYLRY7RP.js").then(a,u);case"at-color-status-cell":return import("./chunk-LFRFASNH.js").then(a,u);case"at-edit-text-cell":return import("./chunk-IJWVPOAY.js").then(a,u);case"at-health-dot-cell":return import("./chunk-ZOPYTHGF.js").then(a,u);case"at-menu-cell":return import("./chunk-WECWBIHD.js").then(a,u);case"at-multi-btn-cell":return import("./chunk-YFTGBCEK.js").then(a,u);case"at-relative-datetime-cell":return import("./chunk-PIS3BHPN.js").then(a,u);case"at-text-badge-cell":return import("./chunk-SC5MXDZV.js").then(a,u);case"at-text-cell":return import("./chunk-DIHZEU2R.js").then(a,u);case"at-text-icon-cell":return import("./chunk-KOKWKPNU.js").then(a,u);case"at-text-image-cell":return import("./chunk-7QPS3TKR.js").then(a,u);case"at-text-status-cell":return import("./chunk-IOSX3VUC.js").then(a,u);case"at-title-subtitle-cell":return import("./chunk-X4SYV4NK.js").then(a,u);case"at-title-subtitle-date-cell":return import("./chunk-3JCOGHO6.js").then(a,u);case"at-toggle-cell":return import("./chunk-D47BO2V2.js").then(a,u)}}return te(`./${r}.entry.js`).then(a=>(V.set(r,a),a[o]),a=>{u(a,e.$hostElement$)})},W=new Map,le="{visibility:hidden}.hydrated{visibility:inherit}",jn="slot-fb{display:contents}slot-fb[hidden]{display:none}",$n="http://www.w3.org/1999/xlink",v=typeof window<"u"?window:{},m={$flags$:0,$resourcesUrl$:"",jmp:n=>n(),raf:n=>requestAnimationFrame(n),ael:(n,e,t,o)=>n.addEventListener(e,t,o),rel:(n,e,t,o)=>n.removeEventListener(e,t,o),ce:(n,e)=>new CustomEvent(n,e)},de=(()=>{var n;let e=!1;try{(n=v.document)==null||n.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch{}return e})(),ue=n=>Promise.resolve(n),H=(()=>{try{return v.document.adoptedStyleSheets?(new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"):!1}catch{}return!1})(),en=H?!!v.document&&Object.getOwnPropertyDescriptor(v.document.adoptedStyleSheets,"length").writable:!1,tn=!1,zn=[],On=[],ge=(n,e)=>t=>{n.push(t),tn||(tn=!0,e&&m.$flags$&4?un(on):m.raf(on))},Sn=n=>{for(let e=0;e<n.length;e++)try{n[e](performance.now())}catch(t){u(t)}n.length=0},on=()=>{Sn(zn),Sn(On),(tn=zn.length>0)&&m.raf(on)},un=n=>ue().then(n),be=ge(On,!0);function fe(n){if(!H)return;let e=new CSSStyleSheet;return e.replaceSync(n),e}var I;function pe(n){var e;let t={mode:"open"},o=this.attachShadow(t);if(I===void 0&&(I=(e=fe(wn))!=null?e:null),I)en?o.adoptedStyleSheets.push(I):o.adoptedStyleSheets=[...o.adoptedStyleSheets,I];else if(!H){let r=document.createElement("style");r.innerHTML=wn,o.prepend(r)}}var In=n=>{let e=rn(n,"childNodes");n.tagName&&n.tagName.includes("-")&&n["s-cr"]&&n.tagName!=="SLOT-FB"&&gn(e,n.tagName).forEach(o=>{o.nodeType===1&&o.tagName==="SLOT-FB"&&(ke(o,F(o),!1).length?o.hidden=!0:o.hidden=!1)});let t=0;for(t=0;t<e.length;t++){let o=e[t];o.nodeType===1&&rn(o,"childNodes").length&&In(o)}},he=n=>{let e=[];for(let t=0;t<n.length;t++){let o=n[t]["s-nr"]||void 0;o&&o.isConnected&&e.push(o)}return e};function gn(n,e,t){let o=0,r=[],i;for(;o<n.length;o++){if(i=n[o],i["s-sr"]&&(!e||i["s-hn"]===e)&&(t===void 0||F(i)===t)&&(r.push(i),typeof t<"u"))return r;r=[...r,...gn(i.childNodes,e,t)]}return r}var ke=(n,e,t=!0)=>{let o=[];(t&&n["s-sr"]||!n["s-sr"])&&o.push(n);let r=n;for(;r=r.nextSibling;)F(r)===e&&(t||!r["s-sr"])&&o.push(r);return o},_n=(n,e)=>n.nodeType===1?n.getAttribute("slot")===null&&e===""||n.getAttribute("slot")===e:n["s-sn"]===e?!0:e==="",F=n=>typeof n["s-sn"]=="string"?n["s-sn"]:n.nodeType===1&&n.getAttribute("slot")||void 0;function ve(n){if(n.assignedElements||n.assignedNodes||!n["s-sr"])return;let e=t=>(function(o){let r=[],i=this["s-sn"];o?.flatten&&console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);let a=this["s-cr"].parentElement;return(a.__childNodes?a.childNodes:he(a.childNodes)).forEach(c=>{i===F(c)&&r.push(c)}),t?r.filter(c=>c.nodeType===1):r}).bind(n);n.assignedElements=e(!0),n.assignedNodes=e(!1)}function me(n){n.dispatchEvent(new CustomEvent("slotchange",{bubbles:!1,cancelable:!1,composed:!1}))}function xe(n,e){var t;if(e=e||((t=n["s-ol"])==null?void 0:t.parentElement),!e)return{slotNode:null,slotName:""};let o=n["s-sn"]=F(n)||"",r=rn(e,"childNodes");return{slotNode:gn(r,e.tagName,o)[0],slotName:o}}function rn(n,e){if("__"+e in n){let t=n["__"+e];return typeof t!="function"?t:t.bind(n)}else return typeof n[e]!="function"?n[e]:n[e].bind(n)}var L=(n,e="")=>()=>{},we=(n,e)=>()=>{};function qn(n){var e,t,o;return(o=(t=(e=n.head)==null?void 0:e.querySelector('meta[name="csp-nonce"]'))==null?void 0:t.getAttribute("content"))!=null?o:void 0}var U=new WeakMap,ye=(n,e,t)=>{let o=W.get(n);H&&t?(o=o||new CSSStyleSheet,typeof o=="string"?o=e:o.replaceSync(e)):o=e,W.set(n,o)},$e=(n,e,t)=>{var o,r,i;let a=Pn(e),s=W.get(a);if(!v.document)return a;if(n=n.nodeType===11?n:v.document,s)if(typeof s=="string"){n=n.head||n;let c=U.get(n),l;if(c||U.set(n,c=new Set),!c.has(a)){l=v.document.createElement("style"),l.textContent=s;let b=(o=m.$nonce$)!=null?o:qn(v.document);if(b!=null&&l.setAttribute("nonce",b),!(e.$flags$&1))if(n.nodeName==="HEAD"){let g=n.querySelectorAll("link[rel=preconnect]"),d=g.length>0?g[g.length-1].nextSibling:n.querySelector("style");n.insertBefore(l,d?.parentNode===n?d:null)}else if("host"in n)if(H){let g=(r=n.defaultView)!=null?r:n.ownerDocument.defaultView,d=new g.CSSStyleSheet;d.replaceSync(s),en?n.adoptedStyleSheets.unshift(d):n.adoptedStyleSheets=[d,...n.adoptedStyleSheets]}else{let g=n.querySelector("style");g?g.textContent=s+g.textContent:n.prepend(l)}else n.append(l);e.$flags$&1&&n.insertBefore(l,null),e.$flags$&4&&(l.textContent+=jn),c&&c.add(a)}}else{let c=U.get(n);if(c||U.set(n,c=new Set),!c.has(a)){let l=(i=n.defaultView)!=null?i:n.ownerDocument.defaultView,b;if(s.constructor===l.CSSStyleSheet)b=s;else{b=new l.CSSStyleSheet;for(let g=0;g<s.cssRules.length;g++)b.insertRule(s.cssRules[g].cssText,g)}en?n.adoptedStyleSheets.push(b):n.adoptedStyleSheets=[...n.adoptedStyleSheets,b],c.add(a)}}return a},ze=n=>{let e=n.$cmpMeta$,t=n.$hostElement$,o=e.$flags$,r=L("attachStyles",e.$tagName$),i=$e(t.shadowRoot?t.shadowRoot:t.getRootNode(),e);o&10&&(t["s-sc"]=i,t.classList.add(i+"-h")),r()},Pn=(n,e)=>"sc-"+n.$tagName$,Se=n=>n!=null&&n!==void 0,bn=n=>(n=typeof n,n==="object"||n==="function"),Hn=(n,e,...t)=>{typeof n=="string"&&(n=n);let o=null,r=null,i=null,a=!1,s=!1,c=[],l=g=>{for(let d=0;d<g.length;d++)o=g[d],Array.isArray(o)?l(o):o!=null&&typeof o!="boolean"&&((a=typeof n!="function"&&!bn(o))&&(o=String(o)),a&&s?c[c.length-1].$text$+=o:c.push(a?G(null,o):o),s=a)};if(l(t),e){e.key&&(r=e.key),e.name&&(i=e.name);{let g=e.className||e.class;g&&(e.class=typeof g!="object"?g:Object.keys(g).filter(d=>g[d]).join(" "))}}if(typeof n=="function")return n(e===null?{}:e,c,Te);let b=G(n,null);return b.$attrs$=e,c.length>0&&(b.$children$=c),b.$key$=r,b.$name$=i,b},G=(n,e)=>{let t={$flags$:0,$tag$:n,$text$:e??null,$elm$:null,$children$:null};return t.$attrs$=null,t.$key$=null,t.$name$=null,t},_e={},Ce=n=>n&&n.$tag$===_e,Te={forEach:(n,e)=>n.map(Cn).forEach(e),map:(n,e)=>n.map(Cn).map(e).map(Ee)},Cn=n=>({vattrs:n.$attrs$,vchildren:n.$children$,vkey:n.$key$,vname:n.$name$,vtag:n.$tag$,vtext:n.$text$}),Ee=n=>{if(typeof n.vtag=="function"){let t=mn({},n.vattrs);return n.vkey&&(t.key=n.vkey),n.vname&&(t.name=n.vname),Hn(n.vtag,t,...n.vchildren||[])}let e=G(n.vtag,n.vtext);return e.$attrs$=n.vattrs,e.$children$=n.vchildren,e.$key$=n.vkey,e.$name$=n.vname,e},fn=n=>{if(!n)return;let e=Object.keys(n);if(e.length===0)return;let t=!1;for(let r of e){if(t)break;for(let i of n[r])if(typeof i=="string"){t=!0;break}}if(!t)return n;let o={};for(let r of e)o[r]=n[r].map(i=>typeof i=="string"?{[i]:0}:i);return o},an=(n,e,t)=>n!=null&&!bn(n)?e&4?n==="false"?!1:n===""||!!n:e&2?typeof n=="string"?parseFloat(n):typeof n=="number"?n:NaN:e&1?String(n):n:n,Le=n=>{var e;return(e=S(n))==null?void 0:e.$hostElement$},rt=(n,e,t)=>{let o=Le(n);return{emit:r=>Fn(o,e,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:r})}},Fn=(n,e,t)=>{let o=m.ce(e,t);return n.dispatchEvent(o),o},Tn=(n,e,t,o,r,i,a)=>{if(t===o)return;let s=yn(n,e),c=e.toLowerCase();if(e==="class"){let l=n.classList,b=En(t),g=En(o);l.remove(...b.filter(d=>d&&!g.includes(d))),l.add(...g.filter(d=>d&&!b.includes(d)))}else if(e==="style"){for(let l in t)(!o||o[l]==null)&&(l.includes("-")?n.style.removeProperty(l):n.style[l]="");for(let l in o)(!t||o[l]!==t[l])&&(l.includes("-")?n.style.setProperty(l,o[l]):n.style[l]=o[l])}else if(e!=="key")if(e==="ref")o&&je(o,n);else if(!s&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"?e=e.slice(3):yn(v,c)?e=c.slice(2):e=c[2]+e.slice(3),t||o){let l=e.endsWith(Bn);e=e.replace(Ue,""),t&&m.rel(n,e,t,l),o&&m.ael(n,e,o,l)}}else if(e[0]==="a"&&e.startsWith("attr:")){let l=e.slice(5),b;{let g=S(n);if(g&&g.$cmpMeta$&&g.$cmpMeta$.$members$){let d=g.$cmpMeta$.$members$[l];d&&d[1]&&(b=d[1])}}b||(b=l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),o==null||o===!1?(o!==!1||n.getAttribute(b)==="")&&n.removeAttribute(b):n.setAttribute(b,o===!0?"":o);return}else if(e[0]==="p"&&e.startsWith("prop:")){let l=e.slice(5);try{n[l]=o}catch{}return}else{let l=bn(o);if((s||l&&o!==null)&&!r)try{if(n.tagName.includes("-"))n[e]!==o&&(n[e]=o);else{let g=o??"";e==="list"?s=!1:(t==null||n[e]!==g)&&(typeof n.__lookupSetter__(e)=="function"?n[e]=g:n.setAttribute(e,g))}}catch{}let b=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(e=c,b=!0),o==null||o===!1?(o!==!1||n.getAttribute(e)==="")&&(b?n.removeAttributeNS($n,e):n.removeAttribute(e)):(!s||i&4||r)&&!l&&n.nodeType===1&&(o=o===!0?"":o,b?n.setAttributeNS($n,e,o):n.setAttribute(e,o))}},Re=/\s/,En=n=>(typeof n=="object"&&n&&"baseVal"in n&&(n=n.baseVal),!n||typeof n!="string"?[]:n.split(Re)),Bn="Capture",Ue=new RegExp(Bn+"$"),sn=(n,e,t,o)=>{let r=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,i=n&&n.$attrs$||{},a=e.$attrs$||{};for(let s of Ln(Object.keys(i)))s in a||Tn(r,s,i[s],void 0,t,e.$flags$);for(let s of Ln(Object.keys(a)))Tn(r,s,i[s],a[s],t,e.$flags$)};function Ln(n){return n.includes("ref")?[...n.filter(e=>e!=="ref"),"ref"]:n}var X,K,j,q=!1,N=!1,J=!1,$=!1,cn=[],ln=[],Z=(n,e,t)=>{var o;let r=e.$children$[t],i=0,a,s,c;if(q||(J=!0,r.$tag$==="slot"&&(r.$flags$|=r.$children$?2:1)),r.$text$!=null)a=r.$elm$=v.document.createTextNode(r.$text$);else if(r.$flags$&1)a=r.$elm$=v.document.createTextNode(""),sn(null,r,$);else{if($||($=r.$tag$==="svg"),!v.document)throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");if(a=r.$elm$=v.document.createElementNS($?re:ae,!q&&A.slotRelocation&&r.$flags$&2?"slot-fb":r.$tag$),$&&r.$tag$==="foreignObject"&&($=!1),sn(null,r,$),Se(X)&&a["s-si"]!==X&&a.classList.add(a["s-si"]=X),r.$children$){let l=r.$tag$==="template"?a.content:a;for(i=0;i<r.$children$.length;++i)s=Z(n,r,i),s&&l.appendChild(s)}r.$tag$==="svg"?$=!1:a.tagName==="foreignObject"&&($=!0)}return a["s-hn"]=j,r.$flags$&3&&(a["s-sr"]=!0,a["s-cr"]=K,a["s-sn"]=r.$name$||"",a["s-rf"]=(o=r.$attrs$)==null?void 0:o.ref,ve(a),c=n&&n.$children$&&n.$children$[t],c&&c.$tag$===r.$tag$&&n.$elm$&&Mn(n.$elm$),Gn(K,a,e.$elm$,n?.$elm$)),a},Mn=n=>{m.$flags$|=1;let e=n.closest(j.toLowerCase());if(e!=null){let t=Array.from(e.__childNodes||e.childNodes).find(r=>r["s-cr"]),o=Array.from(n.__childNodes||n.childNodes);for(let r of t?o.reverse():o)r["s-sh"]!=null&&(_(e,r,t??null),r["s-sh"]=void 0,J=!0)}m.$flags$&=-2},Q=(n,e)=>{m.$flags$|=1;let t=Array.from(n.__childNodes||n.childNodes);if(n["s-sr"]){let o=n;for(;o=o.nextSibling;)o&&o["s-sn"]===n["s-sn"]&&o["s-sh"]===j&&t.push(o)}for(let o=t.length-1;o>=0;o--){let r=t[o];r["s-hn"]!==j&&r["s-ol"]&&(_(P(r).parentNode,r,P(r)),r["s-ol"].remove(),r["s-ol"]=void 0,r["s-sh"]=void 0,J=!0),e&&Q(r,e)}m.$flags$&=-2},Dn=(n,e,t,o,r,i)=>{let a=n["s-cr"]&&n["s-cr"].parentNode||n,s;for(a.shadowRoot&&a.tagName===j&&(a=a.shadowRoot),t.$tag$==="template"&&(a=a.content);r<=i;++r)o[r]&&(s=Z(null,t,r),s&&(o[r].$elm$=s,_(a,s,P(e))))},Yn=(n,e,t)=>{for(let o=e;o<=t;++o){let r=n[o];if(r){let i=r.$elm$;Wn(r),i&&(N=!0,i["s-ol"]?i["s-ol"].remove():Q(i,!0),i.remove())}}},Ae=(n,e,t,o,r=!1)=>{let i=0,a=0,s=0,c=0,l=e.length-1,b=e[0],g=e[l],d=o.length-1,p=o[0],f=o[d],k,z,y=t.$tag$==="template"?n.content:n;for(;i<=l&&a<=d;)if(b==null)b=e[++i];else if(g==null)g=e[--l];else if(p==null)p=o[++a];else if(f==null)f=o[--d];else if(Y(b,p,r))O(b,p,r),b=e[++i],p=o[++a];else if(Y(g,f,r))O(g,f,r),g=e[--l],f=o[--d];else if(Y(b,f,r))(b.$tag$==="slot"||f.$tag$==="slot")&&Q(b.$elm$.parentNode,!1),O(b,f,r),_(y,b.$elm$,g.$elm$.nextSibling),b=e[++i],f=o[--d];else if(Y(g,p,r))(b.$tag$==="slot"||f.$tag$==="slot")&&Q(g.$elm$.parentNode,!1),O(g,p,r),_(y,g.$elm$,b.$elm$),g=e[--l],p=o[++a];else{for(s=-1,c=i;c<=l;++c)if(e[c]&&e[c].$key$!==null&&e[c].$key$===p.$key$){s=c;break}s>=0?(z=e[s],z.$tag$!==p.$tag$?k=Z(e&&e[a],t,s):(O(z,p,r),e[s]=void 0,k=z.$elm$),p=o[++a]):(k=Z(e&&e[a],t,a),p=o[++a]),k&&_(P(b.$elm$).parentNode,k,P(b.$elm$))}i>l?Dn(n,o[d+1]==null?null:o[d+1].$elm$,t,o,a,d):a>d&&Yn(e,i,l)},Y=(n,e,t=!1)=>n.$tag$===e.$tag$?n.$tag$==="slot"?n.$name$===e.$name$:t?(t&&!n.$key$&&e.$key$&&(n.$key$=e.$key$),!0):n.$key$===e.$key$:!1,P=n=>n&&n["s-ol"]||n,O=(n,e,t=!1)=>{let o=e.$elm$=n.$elm$,r=n.$children$,i=e.$children$,a=e.$tag$,s=e.$text$,c;s==null?($=a==="svg"?!0:a==="foreignObject"?!1:$,a==="slot"&&!q&&n.$name$!==e.$name$&&(e.$elm$["s-sn"]=e.$name$||"",Mn(e.$elm$.parentElement)),sn(n,e,$),r!==null&&i!==null?Ae(o,r,e,i,t):i!==null?(n.$text$!==null&&(o.textContent=""),Dn(o,null,e,i,0,i.length-1)):!t&&A.updatable&&r!==null&&Yn(r,0,r.length-1),$&&a==="svg"&&($=!1)):(c=o["s-cr"])?c.parentNode.textContent=s:n.$text$!==s&&(o.data=s)},E=[],Xn=n=>{let e,t,o,r=n.__childNodes||n.childNodes;for(let i of r){if(i["s-sr"]&&(e=i["s-cr"])&&e.parentNode){t=e.parentNode.__childNodes||e.parentNode.childNodes;let a=i["s-sn"];for(o=t.length-1;o>=0;o--)if(e=t[o],!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==i["s-hn"]&&(!e["s-sh"]||e["s-sh"]!==i["s-hn"]))if(_n(e,a)){let s=E.find(c=>c.$nodeToRelocate$===e);N=!0,e["s-sn"]=e["s-sn"]||a,s?(s.$nodeToRelocate$["s-sh"]=i["s-hn"],s.$slotRefNode$=i):(e["s-sh"]=i["s-hn"],E.push({$slotRefNode$:i,$nodeToRelocate$:e})),e["s-sr"]&&E.map(c=>{_n(c.$nodeToRelocate$,e["s-sn"])&&(s=E.find(l=>l.$nodeToRelocate$===e),s&&!c.$slotRefNode$&&(c.$slotRefNode$=s.$slotRefNode$))})}else E.some(s=>s.$nodeToRelocate$===e)||E.push({$nodeToRelocate$:e})}i.nodeType===1&&Xn(i)}},Wn=n=>{n.$attrs$&&n.$attrs$.ref&&cn.push(()=>n.$attrs$.ref(null)),n.$children$&&n.$children$.map(Wn)},je=(n,e)=>{ln.push(()=>n(e))},Oe=()=>{cn.forEach(n=>n()),cn.length=0,ln.forEach(n=>n()),ln.length=0},_=(n,e,t,o)=>{if(typeof e["s-sn"]=="string"&&e["s-sr"]&&e["s-cr"])Gn(e["s-cr"],e,n,e.parentElement);else if(typeof e["s-sn"]=="string"){n.insertBefore(e,t);let{slotNode:r}=xe(e);return r&&!o&&me(r),e}return n.__insertBefore?n.__insertBefore(e,t):n?.insertBefore(e,t)};function Gn(n,e,t,o){var r,i;let a;if(n&&typeof e["s-sn"]=="string"&&e["s-sr"]&&n.parentNode&&n.parentNode["s-sc"]&&(a=e["s-si"]||n.parentNode["s-sc"])){let s=e["s-sn"],c=e["s-hn"];if((r=t.classList)==null||r.add(a+"-s"),o&&((i=o.classList)!=null&&i.contains(a+"-s"))){let l=(o.__childNodes||o.childNodes)[0],b=!1;for(;l;){if(l["s-sn"]!==s&&l["s-hn"]===c&&l["s-sr"]){b=!0;break}l=l.nextSibling}b||o.classList.remove(a+"-s")}}}var Ie=(n,e,t=!1)=>{var o,r,i,a,s;let c=n.$hostElement$,l=n.$cmpMeta$,b=n.$vnode$||G(null,null),d=Ce(e)?e:Hn(null,null,e);if(j=c.tagName,l.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},l.$attrsToReflect$.forEach(([p,f])=>{d.$attrs$[f]=c[p]})),t&&d.$attrs$)for(let p of Object.keys(d.$attrs$))c.hasAttribute(p)&&!["key","ref","style","class"].includes(p)&&(d.$attrs$[p]=c[p]);d.$tag$=null,d.$flags$|=4,n.$vnode$=d,d.$elm$=b.$elm$=c.shadowRoot||c,X=c["s-sc"],q=!!(l.$flags$&1)&&!(l.$flags$&128),K=c["s-cr"],N=!1,O(b,d,t);{if(m.$flags$|=1,J){Xn(d.$elm$);for(let p of E){let f=p.$nodeToRelocate$;if(!f["s-ol"]&&v.document){let k=v.document.createTextNode("");k["s-nr"]=f,_(f.parentNode,f["s-ol"]=k,f,t)}}for(let p of E){let f=p.$nodeToRelocate$,k=p.$slotRefNode$;if(f.nodeType===1&&t&&(f["s-ih"]=(o=f.hidden)!=null?o:!1),k){let z=k.parentNode,y=k.nextSibling;if(y&&y.nodeType===1){let w=(r=f["s-ol"])==null?void 0:r.previousSibling;for(;w;){let h=(i=w["s-nr"])!=null?i:null;if(h&&h["s-sn"]===f["s-sn"]&&z===(h.__parentNode||h.parentNode)){for(h=h.nextSibling;h===f||h?.["s-sr"];)h=h?.nextSibling;if(!h||!h["s-nr"]){y=h;break}}w=w.previousSibling}}let x=f.__parentNode||f.parentNode,C=f.__nextSibling||f.nextSibling;if((!y&&z!==x||C!==y)&&f!==y){if(_(z,f,y,t),f.nodeType===8&&f.nodeValue.startsWith("s-nt-")){let w=v.document.createTextNode(f.nodeValue.replace(/^s-nt-/,""));w["s-hn"]=f["s-hn"],w["s-sn"]=f["s-sn"],w["s-sh"]=f["s-sh"],w["s-sr"]=f["s-sr"],w["s-ol"]=f["s-ol"],w["s-ol"]["s-nr"]=w,_(f.parentNode,w,f,t),f.parentNode.removeChild(f)}f.nodeType===1&&f.tagName!=="SLOT-FB"&&(f.hidden=(a=f["s-ih"])!=null?a:!1)}f&&typeof k["s-rf"]=="function"&&k["s-rf"](k)}else f.nodeType===1&&(f.hidden=!0)}}N&&In(d.$elm$),m.$flags$&=-2,E.length=0}if(!q&&!(l.$flags$&1)&&c["s-cr"]){let p=d.$elm$.__childNodes||d.$elm$.childNodes;for(let f of p)if(f["s-hn"]!==j&&!f["s-sh"]){if(t&&f["s-ih"]==null&&(f["s-ih"]=(s=f.hidden)!=null?s:!1),f.nodeType===1)f.hidden=!0;else if(f.nodeType===3&&f.nodeValue.trim()){let k=v.document.createComment("s-nt-"+f.nodeValue);k["s-sn"]=f["s-sn"],_(f.parentNode,k,f,t),f.parentNode.removeChild(f)}}}K=void 0,Oe()},Kn=(n,e)=>{if(e&&!n.$onRenderResolve$&&e["s-p"]){let t=e["s-p"].push(new Promise(o=>n.$onRenderResolve$=()=>{e["s-p"].splice(t-1,1),o()}))}},pn=(n,e)=>{if(n.$flags$|=16,n.$flags$&4){n.$flags$|=512;return}Kn(n,n.$ancestorComponent$);let t=()=>qe(n,e);if(e){queueMicrotask(()=>{t()});return}return be(t)},qe=(n,e)=>{let t=n.$hostElement$,o=L("scheduleUpdate",n.$cmpMeta$.$tagName$),r=n.$lazyInstance$;if(!r)throw new Error(`Can't render component <${t.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let i;return e?(n.$deferredConnectedCallback$&&(n.$deferredConnectedCallback$=!1,T(r,"connectedCallback",void 0,t)),n.$flags$|=256,n.$queuedListeners$&&(n.$queuedListeners$.map(([a,s])=>T(r,a,s,t)),n.$queuedListeners$=void 0),n.$fetchedCbList$.length&&n.$fetchedCbList$.forEach(a=>a(t)),i=T(r,"componentWillLoad",void 0,t)):i=T(r,"componentWillUpdate",void 0,t),i=Rn(i,()=>T(r,"componentWillRender",void 0,t)),o(),Rn(i,()=>He(n,r,e))},Rn=(n,e)=>Pe(n)?n.then(e).catch(t=>{console.error(t),e()}):e(),Pe=n=>n instanceof Promise||n&&n.then&&typeof n.then=="function",He=(n,e,t)=>D(null,null,function*(){var o;let r=n.$hostElement$,i=L("update",n.$cmpMeta$.$tagName$),a=r["s-rc"];t&&ze(n);let s=L("render",n.$cmpMeta$.$tagName$);Fe(n,e,r,t),a&&(a.map(c=>c()),r["s-rc"]=void 0),s(),i();{let c=(o=r["s-p"])!=null?o:[],l=()=>Be(n);c.length===0?l():(Promise.all(c).then(l).catch(l),n.$flags$|=4,c.length=0)}}),Fe=(n,e,t,o)=>{try{e=e.render(),n.$flags$&=-17,n.$flags$|=2,Ie(n,e,o)}catch(r){u(r,n.$hostElement$)}return null},Be=n=>{let e=n.$cmpMeta$.$tagName$,t=n.$hostElement$,o=L("postUpdate",e),r=n.$lazyInstance$,i=n.$ancestorComponent$;T(r,"componentDidRender",void 0,t),n.$flags$&64?(T(r,"componentDidUpdate",void 0,t),o()):(n.$flags$|=64,Me(t),T(r,"componentDidLoad",void 0,t),o(),n.$onReadyResolve$(t),i||Nn()),n.$onInstanceResolve$(t),n.$onRenderResolve$&&(n.$onRenderResolve$(),n.$onRenderResolve$=void 0),n.$flags$&512&&un(()=>pn(n,!1)),n.$flags$&=-517},Nn=n=>{un(()=>Fn(v,"appload",{detail:{namespace:oe}}))},T=(n,e,t,o)=>{if(n&&n[e])try{return n[e](t)}catch(r){u(r,o)}},Me=n=>{var e;return n.classList.add((e=A.hydratedSelectorName)!=null?e:"hydrated")},De=(n,e)=>S(n).$instanceValues$.get(e),nn=(n,e,t,o)=>{let r=S(n);if(!r)return;if(!r)throw new Error(`Couldn't find host element for "${o.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);let i=r.$hostElement$,a=r.$instanceValues$.get(e),s=r.$flags$,c=r.$lazyInstance$;t=an(t,o.$members$[e][0]);let l=Number.isNaN(a)&&Number.isNaN(t),b=t!==a&&!l;if((!(s&8)||a===void 0)&&b){if(r.$instanceValues$.set(e,t),o.$watchers$){let g=o.$watchers$[e];g&&g.map(d=>{try{let[[p,f]]=Object.entries(d);(s&128||f&1)&&(c?c[p](t,a,e):r.$fetchedCbList$.push(()=>{r.$lazyInstance$[p](t,a,e)}))}catch(p){u(p,i)}})}if(s&2){if(c.componentShouldUpdate&&c.componentShouldUpdate(t,a,e)===!1&&!(s&16))return;s&16||pn(r,!1)}}},Zn=(n,e,t)=>{var o,r;let i=n.prototype;if(e.$members$||A.propChangeCallback){n.watchers&&!e.$watchers$&&(e.$watchers$=fn(n.watchers)),n.deserializers&&!e.$deserializers$&&(e.$deserializers$=n.deserializers),n.serializers&&!e.$serializers$&&(e.$serializers$=n.serializers);let a=Object.entries((o=e.$members$)!=null?o:{});if(a.map(([s,[c]])=>{if(c&31||t&2&&c&32){let{get:l,set:b}=An(i,s)||{};l&&(e.$members$[s][0]|=2048),b&&(e.$members$[s][0]|=4096),(t&1||!l)&&Object.defineProperty(i,s,{get(){{if((e.$members$[s][0]&2048)===0)return De(this,s);let g=S(this),d=g?g.$lazyInstance$:i;return d?d[s]:void 0}},configurable:!0,enumerable:!0}),Object.defineProperty(i,s,{set(g){let d=S(this);if(d){if(b){typeof(c&32?this[s]:d.$hostElement$[s])>"u"&&d.$instanceValues$.get(s)&&(g=d.$instanceValues$.get(s)),b.apply(this,[an(g,c)]),g=c&32?this[s]:d.$hostElement$[s],nn(this,s,g,e);return}{if((t&1)===0||(e.$members$[s][0]&4096)===0){nn(this,s,g,e),t&1&&!d.$lazyInstance$&&d.$fetchedCbList$.push(()=>{e.$members$[s][0]&4096&&d.$lazyInstance$[s]!==d.$instanceValues$.get(s)&&(d.$lazyInstance$[s]=g)});return}let p=()=>{let f=d.$lazyInstance$[s];!d.$instanceValues$.get(s)&&f&&d.$instanceValues$.set(s,f),d.$lazyInstance$[s]=an(g,c),nn(this,s,d.$lazyInstance$[s],e)};d.$lazyInstance$?p():d.$fetchedCbList$.push(()=>{p()})}}}})}else t&1&&c&64&&Object.defineProperty(i,s,{value(...l){var b;let g=S(this);return(b=g?.$onInstancePromise$)==null?void 0:b.then(()=>{var d;return(d=g.$lazyInstance$)==null?void 0:d[s](...l)})}})}),t&1){let s=new Map;i.attributeChangedCallback=function(c,l,b){m.jmp(()=>{var g;let d=s.get(c),p=S(this);if(this.hasOwnProperty(d)&&A.lazyLoad&&(b=this[d],delete this[d]),i.hasOwnProperty(d)&&typeof this[d]=="number"&&this[d]==b)return;if(d==null){let x=p?.$flags$;if(p&&x&&!(x&8)&&b!==l){let C=p.$lazyInstance$,w=(g=e.$watchers$)==null?void 0:g[c];w?.forEach(h=>{let[[R,B]]=Object.entries(h);C[R]!=null&&(x&128||B&1)&&C[R].call(C,b,l,c)})}return}let f=a.find(([x])=>x===d),k=f&&f[1][0]&4,z=k&&b===null&&this[d]===void 0;k&&(b=!(b===null||b==="false"));let y=Object.getOwnPropertyDescriptor(i,d);!z&&b!=this[d]&&(!y.get||y.set)&&(this[d]=b)})},n.observedAttributes=Array.from(new Set([...Object.keys((r=e.$watchers$)!=null?r:{}),...a.filter(([c,l])=>l[0]&31).map(([c,l])=>{var b;let g=l[1]||c;return s.set(g,c),l[0]&512&&((b=e.$attrsToReflect$)==null||b.push([c,g])),g})]))}}return n},Ye=(n,e,t,o)=>D(null,null,function*(){let r;try{if((e.$flags$&32)===0){if(e.$flags$|=32,t.$lazyBundleId$){let c=ce(t,e);if(c&&"then"in c){let g=we();r=yield c,g()}else r=c;if(!r)throw new Error(`Constructor for "${t.$tagName$}#${e.$modeName$}" was not found`);r.isProxied||(t.$watchers$=fn(r.watchers),t.$serializers$=r.serializers,t.$deserializers$=r.deserializers,Zn(r,t,2),r.isProxied=!0);let l=L("createInstance",t.$tagName$);e.$flags$|=8;try{new r(e)}catch(g){u(g,n)}e.$flags$&=-9,e.$flags$|=128,l(),t.$flags$&4?e.$deferredConnectedCallback$=!0:dn(e.$lazyInstance$,n)}else{r=n.constructor;let c=n.localName;customElements.whenDefined(c).then(()=>e.$flags$|=128)}if(r&&r.style){let c;typeof r.style=="string"&&(c=r.style);let l=Pn(t);if(!W.has(l)||A.hotModuleReplacement){let b=L("registerStyles",t.$tagName$);ye(l,c,!!(t.$flags$&1)),b()}}}let i=e.$ancestorComponent$,a=()=>pn(e,!0);i&&i["s-rc"]?i["s-rc"].push(a):a()}catch(i){u(i,n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$onReadyResolve$&&e.$onReadyResolve$(n)}}),dn=(n,e)=>{T(n,"connectedCallback",void 0,e)},Xe=n=>{if((m.$flags$&1)===0){let e=S(n);if(!e)return;let t=e.$cmpMeta$,o=L("connectedCallback",t.$tagName$);if(e.$flags$&1)Qn(n,e,t.$listeners$),e?.$lazyInstance$?dn(e.$lazyInstance$,n):e?.$onReadyPromise$&&e.$onReadyPromise$.then(()=>dn(e.$lazyInstance$,n));else{e.$flags$|=1,t.$flags$&12&&We(n);{let r=n;for(;r=r.parentNode||r.host;)if(r["s-p"]){Kn(e,e.$ancestorComponent$=r);break}}t.$members$&&Object.entries(t.$members$).map(([r,[i]])=>{if(i&31&&Object.prototype.hasOwnProperty.call(n,r)){let a=n[r];delete n[r],n[r]=a}}),Ye(n,e,t)}o()}},We=n=>{if(!v.document)return;let e=n["s-cr"]=v.document.createComment("");e["s-cn"]=!0,_(n,e,n.firstChild)},Un=(n,e)=>{T(n,"disconnectedCallback",void 0,e||n)},Ge=n=>D(null,null,function*(){if((m.$flags$&1)===0){let e=S(n);e?.$rmListeners$&&(e.$rmListeners$.map(t=>t()),e.$rmListeners$=void 0),e?.$lazyInstance$?Un(e.$lazyInstance$,n):e?.$onReadyPromise$&&e.$onReadyPromise$.then(()=>Un(e.$lazyInstance$,n))}U.has(n)&&U.delete(n),n.shadowRoot&&U.has(n.shadowRoot)&&U.delete(n.shadowRoot)}),at=(n,e={})=>{var t;if(!v.document){console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");return}let o=L(),r=[],i=e.exclude||[],a=v.customElements,s=v.document.head,c=s.querySelector("meta[charset]"),l=v.document.createElement("style"),b=[],g,d=!0;Object.assign(m,e),m.$resourcesUrl$=new URL(e.resourcesUrl||"./",v.document.baseURI).href;let p=!1;if(n.map(f=>{f[1].map(k=>{var z,y;let x={$flags$:k[0],$tagName$:k[1],$members$:k[2],$listeners$:k[3]};x.$flags$&4&&(p=!0),x.$members$=k[2],x.$listeners$=k[3],x.$attrsToReflect$=[],x.$watchers$=fn(k[4]),x.$serializers$=(z=k[5])!=null?z:{},x.$deserializers$=(y=k[6])!=null?y:{};let C=x.$tagName$,w=class extends HTMLElement{"s-p";"s-rc";hasRegisteredEventListeners=!1;constructor(h){if(super(h),h=this,se(h,x),x.$flags$&1){if(!h.shadowRoot)pe.call(h,x);else if(h.shadowRoot.mode!=="open")throw new Error(`Unable to re-use existing shadow root for ${x.$tagName$}! Mode is set to ${h.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}connectedCallback(){let h=S(this);h&&(this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0,Qn(this,h,x.$listeners$)),g&&(clearTimeout(g),g=null),d?b.push(this):m.jmp(()=>Xe(this)))}disconnectedCallback(){m.jmp(()=>Ge(this)),m.raf(()=>{var h;let R=S(this);if(!R)return;let B=b.findIndex(Jn=>Jn===this);B>-1&&b.splice(B,1),((h=R?.$vnode$)==null?void 0:h.$elm$)instanceof Node&&!R.$vnode$.$elm$.isConnected&&delete R.$vnode$.$elm$})}componentOnReady(){var h;return(h=S(this))==null?void 0:h.$onReadyPromise$}};x.$lazyBundleId$=f[0],!i.includes(C)&&!a.get(C)&&(r.push(C),a.define(C,Zn(w,x,1)))})}),r.length>0&&(p&&(l.textContent+=jn),l.textContent+=r.sort()+le,l.innerHTML.length)){l.setAttribute("data-styles","");let f=(t=m.$nonce$)!=null?t:qn(v.document);f!=null&&l.setAttribute("nonce",f),s.insertBefore(l,c?c.nextSibling:s.firstChild)}d=!1,b.length?b.map(f=>f.connectedCallback()):m.jmp(()=>g=setTimeout(Nn,30)),o()},it=(n,e)=>e,Qn=(n,e,t,o)=>{t&&v.document&&t.map(([r,i,a])=>{let s=Ne(v.document,n,r),c=Ke(e,a),l=Ze(r);m.ael(s,i,c,l),(e.$rmListeners$=e.$rmListeners$||[]).push(()=>m.rel(s,i,c,l))})},Ke=(n,e)=>t=>{var o;try{n.$flags$&256?(o=n.$lazyInstance$)==null||o[e](t):(n.$queuedListeners$=n.$queuedListeners$||[]).push([e,t])}catch(r){u(r,n.$hostElement$)}},Ne=(n,e,t)=>t&4?n:t&8?v:e,Ze=n=>de?{passive:(n&1)!==0,capture:(n&2)!==0}:(n&2)!==0;export{mn as a,Qe as b,Je as c,D as d,tt as e,ot as f,Hn as g,_e as h,Le as i,rt as j,at as k,it as l};
