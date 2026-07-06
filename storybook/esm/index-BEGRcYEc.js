const NAMESPACE = 'atui-components-stencil';
const BUILD = /* atui-components-stencil */ { hotModuleReplacement: false, hydratedSelectorName: "hydrated", lazyLoad: true, propChangeCallback: true, slotRelocation: true, state: true, updatable: true};

const globalScripts = () => {};
const globalStyles = "@charset \"UTF-8\";\n@layer theme, base, components, utilities;\n@layer theme {\n  @theme default {\n    --font-sans:\n      ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\",\n      \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    --font-serif: ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif;\n    --font-mono:\n      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\n      \"Courier New\", monospace;\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-red-950: oklch(25.8% 0.092 26.042);\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-300: oklch(83.7% 0.128 66.29);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-orange-950: oklch(26.6% 0.079 36.259);\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-100: oklch(96.2% 0.059 95.617);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-300: oklch(87.9% 0.169 91.605);\n    --color-amber-400: oklch(82.8% 0.189 84.429);\n    --color-amber-500: oklch(76.9% 0.188 70.08);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-amber-900: oklch(41.4% 0.112 45.904);\n    --color-amber-950: oklch(27.9% 0.077 45.635);\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-300: oklch(90.5% 0.182 98.111);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-yellow-900: oklch(42.1% 0.095 57.708);\n    --color-yellow-950: oklch(28.6% 0.066 53.813);\n    --color-lime-50: oklch(98.6% 0.031 120.757);\n    --color-lime-100: oklch(96.7% 0.067 122.328);\n    --color-lime-200: oklch(93.8% 0.127 124.321);\n    --color-lime-300: oklch(89.7% 0.196 126.665);\n    --color-lime-400: oklch(84.1% 0.238 128.85);\n    --color-lime-500: oklch(76.8% 0.233 130.85);\n    --color-lime-600: oklch(64.8% 0.2 131.684);\n    --color-lime-700: oklch(53.2% 0.157 131.589);\n    --color-lime-800: oklch(45.3% 0.124 130.933);\n    --color-lime-900: oklch(40.5% 0.101 131.063);\n    --color-lime-950: oklch(27.4% 0.072 132.109);\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-300: oklch(87.1% 0.15 154.449);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-green-950: oklch(26.6% 0.065 152.934);\n    --color-emerald-50: oklch(97.9% 0.021 166.113);\n    --color-emerald-100: oklch(95% 0.052 163.051);\n    --color-emerald-200: oklch(90.5% 0.093 164.15);\n    --color-emerald-300: oklch(84.5% 0.143 164.978);\n    --color-emerald-400: oklch(76.5% 0.177 163.223);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-emerald-600: oklch(59.6% 0.145 163.225);\n    --color-emerald-700: oklch(50.8% 0.118 165.612);\n    --color-emerald-800: oklch(43.2% 0.095 166.913);\n    --color-emerald-900: oklch(37.8% 0.077 168.94);\n    --color-emerald-950: oklch(26.2% 0.051 172.552);\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-100: oklch(95.3% 0.051 180.801);\n    --color-teal-200: oklch(91% 0.096 180.426);\n    --color-teal-300: oklch(85.5% 0.138 181.071);\n    --color-teal-400: oklch(77.7% 0.152 181.912);\n    --color-teal-500: oklch(70.4% 0.14 182.503);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-teal-700: oklch(51.1% 0.096 186.391);\n    --color-teal-800: oklch(43.7% 0.078 188.216);\n    --color-teal-900: oklch(38.6% 0.063 188.416);\n    --color-teal-950: oklch(27.7% 0.046 192.524);\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-200: oklch(91.7% 0.08 205.041);\n    --color-cyan-300: oklch(86.5% 0.127 207.078);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-500: oklch(71.5% 0.143 215.221);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-cyan-700: oklch(52% 0.105 223.128);\n    --color-cyan-800: oklch(45% 0.085 224.283);\n    --color-cyan-900: oklch(39.8% 0.07 227.392);\n    --color-cyan-950: oklch(30.2% 0.056 229.695);\n    --color-sky-50: oklch(97.7% 0.013 236.62);\n    --color-sky-100: oklch(95.1% 0.026 236.824);\n    --color-sky-200: oklch(90.1% 0.058 230.902);\n    --color-sky-300: oklch(82.8% 0.111 230.318);\n    --color-sky-400: oklch(74.6% 0.16 232.661);\n    --color-sky-500: oklch(68.5% 0.169 237.323);\n    --color-sky-600: oklch(58.8% 0.158 241.966);\n    --color-sky-700: oklch(50% 0.134 242.749);\n    --color-sky-800: oklch(44.3% 0.11 240.79);\n    --color-sky-900: oklch(39.1% 0.09 240.876);\n    --color-sky-950: oklch(29.3% 0.066 243.157);\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-blue-950: oklch(28.2% 0.091 267.935);\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-200: oklch(87% 0.065 274.039);\n    --color-indigo-300: oklch(78.5% 0.115 274.713);\n    --color-indigo-400: oklch(67.3% 0.182 276.935);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-indigo-800: oklch(39.8% 0.195 277.366);\n    --color-indigo-900: oklch(35.9% 0.144 278.697);\n    --color-indigo-950: oklch(25.7% 0.09 281.288);\n    --color-violet-50: oklch(96.9% 0.016 293.756);\n    --color-violet-100: oklch(94.3% 0.029 294.588);\n    --color-violet-200: oklch(89.4% 0.057 293.283);\n    --color-violet-300: oklch(81.1% 0.111 293.571);\n    --color-violet-400: oklch(70.2% 0.183 293.541);\n    --color-violet-500: oklch(60.6% 0.25 292.717);\n    --color-violet-600: oklch(54.1% 0.281 293.009);\n    --color-violet-700: oklch(49.1% 0.27 292.581);\n    --color-violet-800: oklch(43.2% 0.232 292.759);\n    --color-violet-900: oklch(38% 0.189 293.745);\n    --color-violet-950: oklch(28.3% 0.141 291.089);\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-200: oklch(90.2% 0.063 306.703);\n    --color-purple-300: oklch(82.7% 0.119 306.383);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-purple-900: oklch(38.1% 0.176 304.987);\n    --color-purple-950: oklch(29.1% 0.149 302.717);\n    --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n    --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n    --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n    --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n    --color-fuchsia-400: oklch(74% 0.238 322.16);\n    --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n    --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n    --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n    --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n    --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n    --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n    --color-pink-50: oklch(97.1% 0.014 343.198);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-200: oklch(89.9% 0.061 343.231);\n    --color-pink-300: oklch(82.3% 0.12 346.018);\n    --color-pink-400: oklch(71.8% 0.202 349.761);\n    --color-pink-500: oklch(65.6% 0.241 354.308);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-700: oklch(52.5% 0.223 3.958);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-pink-900: oklch(40.8% 0.153 2.432);\n    --color-pink-950: oklch(28.4% 0.109 3.907);\n    --color-rose-50: oklch(96.9% 0.015 12.422);\n    --color-rose-100: oklch(94.1% 0.03 12.58);\n    --color-rose-200: oklch(89.2% 0.058 10.001);\n    --color-rose-300: oklch(81% 0.117 11.638);\n    --color-rose-400: oklch(71.2% 0.194 13.428);\n    --color-rose-500: oklch(64.5% 0.246 16.439);\n    --color-rose-600: oklch(58.6% 0.253 17.585);\n    --color-rose-700: oklch(51.4% 0.222 16.935);\n    --color-rose-800: oklch(45.5% 0.188 13.697);\n    --color-rose-900: oklch(41% 0.159 10.272);\n    --color-rose-950: oklch(27.1% 0.105 12.094);\n    --color-slate-50: oklch(98.4% 0.003 247.858);\n    --color-slate-100: oklch(96.8% 0.007 247.896);\n    --color-slate-200: oklch(92.9% 0.013 255.508);\n    --color-slate-300: oklch(86.9% 0.022 252.894);\n    --color-slate-400: oklch(70.4% 0.04 256.788);\n    --color-slate-500: oklch(55.4% 0.046 257.417);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-slate-700: oklch(37.2% 0.044 257.287);\n    --color-slate-800: oklch(27.9% 0.041 260.031);\n    --color-slate-900: oklch(20.8% 0.042 265.755);\n    --color-slate-950: oklch(12.9% 0.042 264.695);\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-gray-950: oklch(13% 0.028 261.692);\n    --color-zinc-50: oklch(98.5% 0 0);\n    --color-zinc-100: oklch(96.7% 0.001 286.375);\n    --color-zinc-200: oklch(92% 0.004 286.32);\n    --color-zinc-300: oklch(87.1% 0.006 286.286);\n    --color-zinc-400: oklch(70.5% 0.015 286.067);\n    --color-zinc-500: oklch(55.2% 0.016 285.938);\n    --color-zinc-600: oklch(44.2% 0.017 285.786);\n    --color-zinc-700: oklch(37% 0.013 285.805);\n    --color-zinc-800: oklch(27.4% 0.006 286.033);\n    --color-zinc-900: oklch(21% 0.006 285.885);\n    --color-zinc-950: oklch(14.1% 0.005 285.823);\n    --color-neutral-50: oklch(98.5% 0 0);\n    --color-neutral-100: oklch(97% 0 0);\n    --color-neutral-200: oklch(92.2% 0 0);\n    --color-neutral-300: oklch(87% 0 0);\n    --color-neutral-400: oklch(70.8% 0 0);\n    --color-neutral-500: oklch(55.6% 0 0);\n    --color-neutral-600: oklch(43.9% 0 0);\n    --color-neutral-700: oklch(37.1% 0 0);\n    --color-neutral-800: oklch(26.9% 0 0);\n    --color-neutral-900: oklch(20.5% 0 0);\n    --color-neutral-950: oklch(14.5% 0 0);\n    --color-stone-50: oklch(98.5% 0.001 106.423);\n    --color-stone-100: oklch(97% 0.001 106.424);\n    --color-stone-200: oklch(92.3% 0.003 48.717);\n    --color-stone-300: oklch(86.9% 0.005 56.366);\n    --color-stone-400: oklch(70.9% 0.01 56.259);\n    --color-stone-500: oklch(55.3% 0.013 58.071);\n    --color-stone-600: oklch(44.4% 0.011 73.639);\n    --color-stone-700: oklch(37.4% 0.01 67.558);\n    --color-stone-800: oklch(26.8% 0.007 34.298);\n    --color-stone-900: oklch(21.6% 0.006 56.043);\n    --color-stone-950: oklch(14.7% 0.004 49.25);\n    --color-mauve-50: oklch(98.5% 0 0);\n    --color-mauve-100: oklch(96% 0.003 325.6);\n    --color-mauve-200: oklch(92.2% 0.005 325.62);\n    --color-mauve-300: oklch(86.5% 0.012 325.68);\n    --color-mauve-400: oklch(71.1% 0.019 323.02);\n    --color-mauve-500: oklch(54.2% 0.034 322.5);\n    --color-mauve-600: oklch(43.5% 0.029 321.78);\n    --color-mauve-700: oklch(36.4% 0.029 323.89);\n    --color-mauve-800: oklch(26.3% 0.024 320.12);\n    --color-mauve-900: oklch(21.2% 0.019 322.12);\n    --color-mauve-950: oklch(14.5% 0.008 326);\n    --color-olive-50: oklch(98.8% 0.003 106.5);\n    --color-olive-100: oklch(96.6% 0.005 106.5);\n    --color-olive-200: oklch(93% 0.007 106.5);\n    --color-olive-300: oklch(88% 0.011 106.6);\n    --color-olive-400: oklch(73.7% 0.021 106.9);\n    --color-olive-500: oklch(58% 0.031 107.3);\n    --color-olive-600: oklch(46.6% 0.025 107.3);\n    --color-olive-700: oklch(39.4% 0.023 107.4);\n    --color-olive-800: oklch(28.6% 0.016 107.4);\n    --color-olive-900: oklch(22.8% 0.013 107.4);\n    --color-olive-950: oklch(15.3% 0.006 107.1);\n    --color-mist-50: oklch(98.7% 0.002 197.1);\n    --color-mist-100: oklch(96.3% 0.002 197.1);\n    --color-mist-200: oklch(92.5% 0.005 214.3);\n    --color-mist-300: oklch(87.2% 0.007 219.6);\n    --color-mist-400: oklch(72.3% 0.014 214.4);\n    --color-mist-500: oklch(56% 0.021 213.5);\n    --color-mist-600: oklch(45% 0.017 213.2);\n    --color-mist-700: oklch(37.8% 0.015 216);\n    --color-mist-800: oklch(27.5% 0.011 216.9);\n    --color-mist-900: oklch(21.8% 0.008 223.9);\n    --color-mist-950: oklch(14.8% 0.004 228.8);\n    --color-taupe-50: oklch(98.6% 0.002 67.8);\n    --color-taupe-100: oklch(96% 0.002 17.2);\n    --color-taupe-200: oklch(92.2% 0.005 34.3);\n    --color-taupe-300: oklch(86.8% 0.007 39.5);\n    --color-taupe-400: oklch(71.4% 0.014 41.2);\n    --color-taupe-500: oklch(54.7% 0.021 43.1);\n    --color-taupe-600: oklch(43.8% 0.017 39.3);\n    --color-taupe-700: oklch(36.7% 0.016 35.7);\n    --color-taupe-800: oklch(26.8% 0.011 36.5);\n    --color-taupe-900: oklch(21.4% 0.009 43.1);\n    --color-taupe-950: oklch(14.7% 0.004 49.3);\n    --color-black: #000;\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --breakpoint-sm: 40rem;\n    --breakpoint-md: 48rem;\n    --breakpoint-lg: 64rem;\n    --breakpoint-xl: 80rem;\n    --breakpoint-2xl: 96rem;\n    --container-3xs: 16rem;\n    --container-2xs: 18rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --text-8xl: 6rem;\n    --text-8xl--line-height: 1;\n    --text-9xl: 8rem;\n    --text-9xl--line-height: 1;\n    --font-weight-thin: 100;\n    --font-weight-extralight: 200;\n    --font-weight-light: 300;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --font-weight-black: 900;\n    --tracking-tighter: -0.05em;\n    --tracking-tight: -0.025em;\n    --tracking-normal: 0em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --tracking-widest: 0.1em;\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --leading-loose: 2;\n    --radius-xs: 0.125rem;\n    --radius-sm: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-4xl: 2rem;\n    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-md:\n      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --shadow-lg:\n      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --shadow-xl:\n      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n    --text-shadow-sm:\n      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),\n      0px 2px 2px rgb(0 0 0 / 0.075);\n    --text-shadow-md:\n      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),\n      0px 2px 4px rgb(0 0 0 / 0.1);\n    --text-shadow-lg:\n      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),\n      0px 4px 8px rgb(0 0 0 / 0.1);\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n    --animate-spin: spin 1s linear infinite;\n    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --animate-bounce: bounce 1s infinite;\n    @keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n    @keyframes ping {\n      75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n    @keyframes pulse {\n      50% {\n        opacity: 0.5;\n      }\n    }\n    @keyframes bounce {\n      0%, 100% {\n        transform: translateY(-25%);\n        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n      }\n      50% {\n        transform: none;\n        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n      }\n    }\n    --blur-xs: 4px;\n    --blur-sm: 8px;\n    --blur-md: 12px;\n    --blur-lg: 16px;\n    --blur-xl: 24px;\n    --blur-2xl: 40px;\n    --blur-3xl: 64px;\n    --perspective-dramatic: 100px;\n    --perspective-near: 300px;\n    --perspective-normal: 500px;\n    --perspective-midrange: 800px;\n    --perspective-distant: 1200px;\n    --aspect-video: 16 / 9;\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: --theme(--font-sans, initial);\n    --default-font-feature-settings: --theme(\n      --font-sans--font-feature-settings,\n      initial\n    );\n    --default-font-variation-settings: --theme(\n      --font-sans--font-variation-settings,\n      initial\n    );\n    --default-mono-font-family: --theme(--font-mono, initial);\n    --default-mono-font-feature-settings: --theme(\n      --font-mono--font-feature-settings,\n      initial\n    );\n    --default-mono-font-variation-settings: --theme(\n      --font-mono--font-variation-settings,\n      initial\n    );\n  }\n  /* Deprecated */\n  @theme default inline reference {\n    --blur: 8px;\n    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n    --radius: 0.25rem;\n    --max-width-prose: 65ch;\n  }\n}\n@source \"./**/*.{html,ts,tsx,jsx,js,css}\";\n:root {\n  /*\n    Config & Utils\n    Purpose: Variables for use in this file only\n    */\n  color-scheme: light;\n  --root-color: #ffffff;\n  --root-inv: #000000;\n  --mix-muted: 50%;\n  --mix-impact: 80%;\n  /* Primitives\n    Purpose: These represent raw design decisions like colors and spacing, with no usage context.\n    */\n  /*\n    Palette\n    Source: Tailwind\n    */\n  --token-color-base-grey-50: #f9fafb;\n  --token-color-base-grey-100: #f8f9fa;\n  --token-color-base-grey-200: #e9ecef;\n  --token-color-base-grey-300: #dee2e6;\n  --token-color-base-grey-400: #ced4da;\n  --token-color-base-grey-500: #adb5bd;\n  --token-color-base-grey-600: #6c757d;\n  --token-color-base-grey-700: #495057;\n  --token-color-base-grey-800: #343a40;\n  --token-color-base-grey-900: #212529;\n  --token-color-base-grey-950: #030712;\n  --token-color-base-gray-50: #f9fafb;\n  --token-color-base-gray-100: #f8f9fa;\n  --token-color-base-gray-200: #e9ecef;\n  --token-color-base-gray-300: #dee2e6;\n  --token-color-base-gray-400: #ced4da;\n  --token-color-base-gray-500: #adb5bd;\n  --token-color-base-gray-600: #6c757d;\n  --token-color-base-gray-700: #495057;\n  --token-color-base-gray-800: #343a40;\n  --token-color-base-gray-900: #212529;\n  --token-color-base-gray-950: #030712;\n  --token-color-base-slate-50: #f8fafc;\n  --token-color-base-slate-100: #f1f5f9;\n  --token-color-base-slate-200: #e2e8f0;\n  --token-color-base-slate-300: #cbd5e1;\n  --token-color-base-slate-400: #94a3b8;\n  --token-color-base-slate-500: #64748b;\n  --token-color-base-slate-600: #475569;\n  --token-color-base-slate-700: #334155;\n  --token-color-base-slate-800: #1e293b;\n  --token-color-base-slate-900: #0f172a;\n  --token-color-base-slate-950: #020617;\n  --token-color-base-purple-50: #ede7f6;\n  --token-color-base-purple-100: #d1c4e9;\n  --token-color-base-purple-200: #b39ddb;\n  --token-color-base-purple-300: #9575cd;\n  --token-color-base-purple-400: #7e57c2;\n  --token-color-base-purple-500: #673ab7;\n  --token-color-base-purple-600: #5e35b1;\n  --token-color-base-purple-700: #512da8;\n  --token-color-base-purple-800: #4527a0;\n  --token-color-base-purple-900: #311b92;\n  --token-color-base-purple-a100: #b388ff;\n  --token-color-base-purple-a200: #7c4dff;\n  --token-color-base-purple-a400: #651fff;\n  --token-color-base-purple-a700: #6200ea;\n  --token-color-base-sky-50: #f0f9ff;\n  --token-color-base-sky-100: #e0f2fe;\n  --token-color-base-sky-200: #bae6fd;\n  --token-color-base-sky-300: #7dd3fc;\n  --token-color-base-sky-400: #38bdf8;\n  --token-color-base-sky-500: #0ea5e9;\n  --token-color-base-sky-600: #0284c7;\n  --token-color-base-sky-700: #0369a1;\n  --token-color-base-sky-800: #075985;\n  --token-color-base-sky-900: #0c4a6e;\n  --token-color-base-sky-950: #082f49;\n  --token-color-blue-50: #eff6ff;\n  --token-color-base-blue-50: #e3f2fd;\n  --token-color-base-blue-75: #cee7fc;\n  --token-color-base-blue-100: #bbdefb;\n  --token-color-base-blue-200: #90caf9;\n  --token-color-base-blue-300: #64b5f6;\n  --token-color-base-blue-400: #42a5f5;\n  --token-color-base-blue-500: #2196f3;\n  --token-color-base-blue-600: #1e88e5;\n  --token-color-base-blue-700: #1976d2;\n  --token-color-base-blue-800: #1565c0;\n  --token-color-base-blue-900: #0d47a1;\n  --token-color-base-blue-a100: #82b1ff;\n  --token-color-base-blue-a200: #448aff;\n  --token-color-base-blue-a400: #2979ff;\n  --token-color-base-blue-a700: #2962ff;\n  --token-color-base-cyan-50: #e0f7fa;\n  --token-color-base-cyan-100: #b2ebf2;\n  --token-color-base-cyan-200: #80deea;\n  --token-color-base-cyan-300: #4dd0e1;\n  --token-color-base-cyan-400: #26c6da;\n  --token-color-base-cyan-500: #00bcd4;\n  --token-color-base-cyan-600: #00acc1;\n  --token-color-base-cyan-700: #0097a7;\n  --token-color-base-cyan-800: #00838f;\n  --token-color-base-cyan-900: #006064;\n  --token-color-base-cyan-a100: #84ffff;\n  --token-color-base-cyan-a200: #18ffff;\n  --token-color-base-cyan-a400: #00e5ff;\n  --token-color-base-cyan-a700: #00b8d4;\n  --token-color-base-teal-50: #e0f2f1;\n  --token-color-base-teal-100: #b2dfdb;\n  --token-color-base-teal-200: #80cbc4;\n  --token-color-base-teal-300: #4db6ac;\n  --token-color-base-teal-400: #26a69a;\n  --token-color-base-teal-500: #009688;\n  --token-color-base-teal-600: #00897b;\n  --token-color-base-teal-700: #00796b;\n  --token-color-base-teal-800: #00695c;\n  --token-color-base-teal-900: #004d40;\n  --token-color-base-teal-a100: #a7ffeb;\n  --token-color-base-teal-a200: #64ffda;\n  --token-color-base-teal-a400: #1de9b6;\n  --token-color-base-teal-a700: #00bfa5;\n  --token-color-base-green-50: #e8f5e9;\n  --token-color-base-green-100: #c8e6c9;\n  --token-color-base-green-200: #a5d6a7;\n  --token-color-base-green-300: #81c784;\n  --token-color-base-green-400: #66bb6a;\n  --token-color-base-green-500: #4caf50;\n  --token-color-base-green-600: #43a047;\n  --token-color-base-green-700: #388e3c;\n  --token-color-base-green-800: #2e7d32;\n  --token-color-base-green-900: #1b5e20;\n  --token-color-base-green-a100: #b9f6ca;\n  --token-color-base-green-a200: #69f0ae;\n  --token-color-base-green-a400: #00e676;\n  --token-color-base-green-a700: #00c853;\n  --token-color-base-lime-50: #f9fbe7;\n  --token-color-base-lime-100: #f0f4c3;\n  --token-color-base-lime-200: #e6ee9c;\n  --token-color-base-lime-300: #dce775;\n  --token-color-base-lime-400: #d4e157;\n  --token-color-base-lime-500: #cddc39;\n  --token-color-base-lime-600: #c0ca33;\n  --token-color-base-lime-700: #afb42b;\n  --token-color-base-lime-800: #9e9d24;\n  --token-color-base-lime-900: #827717;\n  --token-color-base-lime-a100: #f4ff81;\n  --token-color-base-lime-a200: #eeff41;\n  --token-color-base-lime-a400: #c6ff00;\n  --token-color-base-lime-a700: #aeea00;\n  --token-color-base-amber-50: #fff8e1;\n  --token-color-base-amber-100: #ffecb3;\n  --token-color-base-amber-150: #ffeaab;\n  --token-color-base-amber-200: #ffe082;\n  --token-color-base-amber-300: #ffd54f;\n  --token-color-base-amber-400: #ffca28;\n  --token-color-base-amber-500: #ffc107;\n  --token-color-base-amber-600: #ffb300;\n  --token-color-base-amber-700: #ffa000;\n  --token-color-base-amber-800: #ff8f00;\n  --token-color-base-amber-850: #cc5900;\n  --token-color-base-amber-900: #ff6f00;\n  --token-color-base-amber-a100: #ffe57f;\n  --token-color-base-amber-a200: #ffd740;\n  --token-color-base-amber-a400: #ffc400;\n  --token-color-base-amber-a700: #ffab00;\n  --token-color-base-orange-50: #fbe9e7;\n  --token-color-base-orange-100: #ffccbc;\n  --token-color-base-orange-200: #ffab91;\n  --token-color-base-orange-300: #ff8a65;\n  --token-color-base-orange-400: #ff7043;\n  --token-color-base-orange-500: #ff5722;\n  --token-color-base-orange-600: #f4511e;\n  --token-color-base-orange-700: #e64a19;\n  --token-color-base-orange-800: #d84315;\n  --token-color-base-orange-900: #bf360c;\n  --token-color-base-orange-a100: #ff9e80;\n  --token-color-base-orange-a200: #ff6e40;\n  --token-color-base-orange-a400: #ff3d00;\n  --token-color-base-orange-a700: #dd2c00;\n  --token-color-base-red-50: #ffe5ee;\n  --token-color-base-red-100: #ffcdd2;\n  --token-color-base-red-200: #ef9a9a;\n  --token-color-base-red-300: #e57373;\n  --token-color-base-red-400: #ef5350;\n  --token-color-base-red-500: #f44336;\n  --token-color-base-red-600: #e53935;\n  --token-color-base-red-700: #d32f2f;\n  --token-color-base-red-800: #c62828;\n  --token-color-base-red-900: #b71c1c;\n  --token-color-base-red-a100: #ff8a80;\n  --token-color-base-red-a200: #ff5252;\n  --token-color-base-red-a400: #ff1744;\n  --token-color-base-red-a700: #d50000;\n  --token-color-base-white: #ffffff;\n  --token-color-base-black: #000000;\n  --token-color-base-neutral-50: #fafafa;\n  --token-color-base-neutral-100: #f5f5f5;\n  --token-color-base-neutral-200: #e5e5e5;\n  --token-color-base-neutral-300: #d4d4d4;\n  --token-color-base-neutral-400: #a3a3a3;\n  --token-color-base-neutral-500: #737373;\n  --token-color-base-neutral-600: #525252;\n  --token-color-base-neutral-700: #404040;\n  --token-color-base-neutral-800: #262626;\n  --token-color-base-neutral-900: #171717;\n  --token-color-base-neutral-950: #0a0a0a;\n  --token-color-base-zinc-50: #fafafa;\n  --token-color-base-zinc-100: #f4f4f5;\n  --token-color-base-zinc-200: #e4e4e7;\n  --token-color-base-zinc-300: #d4d4d8;\n  --token-color-base-zinc-400: #a1a1aa;\n  --token-color-base-zinc-500: #71717a;\n  --token-color-base-zinc-600: #52525b;\n  --token-color-base-zinc-700: #3f3f46;\n  --token-color-base-zinc-800: #27272a;\n  --token-color-base-zinc-900: #18181b;\n  --token-color-base-zinc-950: #09090b;\n  --token-font-size-root: 13px;\n  --token-font-family-inter: 'Inter', 'Helvetica Neue', Helvetica, Arial,\n        sans-serif;\n  --token-font-family-mono: 'Roboto Mono', monospace;\n  --token-font-family-base: var(--token-font-family-inter);\n  --token-space-0: 0;\n  --token-space-2: 2px;\n  --token-space-4: 4px;\n  --token-space-8: 8px;\n  --token-space-12: 12px;\n  --token-space-16: 16px;\n  --token-space-20: 20px;\n  --token-space-22: 22px;\n  --token-space-24: 24px;\n  --token-space-30: 30px;\n  --token-space-32: 32px;\n  --token-space-40: 40px;\n  --token-space-48: 48px;\n  --token-space-50: 50px;\n  --token-space-64: 64px;\n  --token-space-72: 72px;\n  --token-space-80: 80px;\n  --token-space-100: 100px;\n  --token-space-120: 120px;\n  --token-space-180: 180px;\n  --token-space-220: 220px;\n  --token-space-340: 340px;\n  /* Semantic\n     These tokens convey meaning, defining where a token is used rather than what it is\n     Structure: They reference primitive or other semantic tokens when inheritance is expected.\n     Use Case: Switch these for dark mode.\n     */\n  /* Type: Legacy */\n  --token-font-size-base: 1rem;\n  --token-font-size-caption: 0.9286rem;\n  --token-font-size-h1: 1.692rem;\n  --token-font-size-h2: 1.385rem;\n  --token-font-size-h3: 1.23rem;\n  --token-font-size-h4: 1.12rem;\n  --token-font-size-h5: 1.0714rem;\n  --token-font-size-h6: 1rem;\n  --token-font-size-body: 1rem;\n  --token-font-size-sm: 0.9286rem;\n  --token-font-size-xs: 0.8571rem;\n  --token-font-size-xl: 3.5rem;\n  --token-font-size-button: 1rem;\n  --token-font-size-icon-sm: 1rem;\n  --token-font-size-icon-md: 1.1429rem;\n  --token-font-size-icon-lg: 1.2857rem;\n  --token-font-size-icon-xl: 1.5714rem;\n  /* Font Weight: Legacy */\n  --token-font-weight-light: 300;\n  --token-font-weight-med: 400;\n  --token-font-weight-bold: 600;\n  /*  Line Height: Legacy */\n  /* Type: OneConnect */\n  /*\n    TODO: Update type scale to match design\n    \"display\":      { \"family\": \"Inter\",  \"weight\": 500, \"size\": 40, \"lineHeight\": \"auto\",  \"tailwind\": \"text-[40px] font-medium\" },\n    \"h1\":           { \"family\": \"Inter\",  \"weight\": 500, \"size\": 32, \"lineHeight\": \"auto\",  \"tailwind\": \"text-[32px] font-medium\" },\n    \"h2\":           { \"family\": \"Inter\",  \"weight\": 400, \"size\": 24, \"lineHeight\": 37.5,    \"tailwind\": \"text-2xl font-normal leading-[37.5px]\" },\n    \"body-lg-bold\": { \"family\": \"Inter\",  \"weight\": 600, \"size\": 16, \"lineHeight\": 37.5,    \"tailwind\": \"text-base font-semibold leading-[37.5px]\" },\n    \"body-lg-med\":  { \"family\": \"Inter\",  \"weight\": 500, \"size\": 16, \"lineHeight\": 37.5,    \"tailwind\": \"text-base font-medium leading-[37.5px]\" },\n    \"body-lg\":      { \"family\": \"Inter\",  \"weight\": 400, \"size\": 16, \"lineHeight\": 37.5,    \"tailwind\": \"text-base font-normal leading-[37.5px]\" },\n    \"body\":         { \"family\": \"Inter\",  \"weight\": 400, \"size\": 14, \"lineHeight\": 18,      \"tailwind\": \"text-sm font-normal leading-[18px]\" },\n    \"caption\":      { \"family\": \"Inter\",  \"weight\": 400, \"size\": 12, \"lineHeight\": 18,      \"tailwind\": \"text-xs font-normal leading-[18px]\" },\n    \"caption-med\":  { \"family\": \"Inter\",  \"weight\": 500, \"size\": 12, \"lineHeight\": 16,      \"tailwind\": \"text-xs font-medium leading-4\" },\n    \"label\":        { \"family\": \"Roboto\", \"weight\": 500, \"size\": 12, \"lineHeight\": 28,      \"tailwind\": \"text-xs font-medium leading-7 font-roboto\" },\n    \"micro\":        { \"family\": \"Inter\",  \"weight\": 400, \"size\": 10, \"lineHeight\": \"auto\",  \"tailwind\": \"text-[10px] font-normal\" },\n    \"micro-med\":    { \"family\": \"Inter\",  \"weight\": 500, \"size\": 10, \"lineHeight\": 14.5,    \"tailwind\": \"text-[10px] font-medium leading-[14.5px]\" },\n    \"tiny\":         { \"family\": \"Inter\",  \"weight\": 400, \"size\": 8,  \"lineHeight\": 18,      \"tailwind\": \"text-[8px] font-normal leading-[18px]\" }\n    */\n  /* Brand Color */\n  --token-color-brand-primary: var(--token-color-base-blue-a400);\n  --token-color-brand-primary-foreground: var(--token-color-base-white);\n  /* Text Color */\n  --token-text-foreground: var(--token-color-base-slate-900);\n  --token-text-primary: var(--token-color-base-slate-900);\n  --token-text-secondary: var(--token-color-base-slate-600);\n  --token-text-tertiary: var(--token-color-base-slate-500);\n  --token-text-default: var(--token-color-base-slate-900);\n  --token-text-muted: var(--token-color-base-slate-500);\n  --token-text-disabled: var(--token-color-base-gray-500);\n  --token-text-warning: var(--token-color-base-amber-600);\n  --token-text-error: var(--token-color-base-red-600);\n  --token-text-success: var(--token-color-base-green-600);\n  --token-text-active: var(--token-color-base-blue-a400);\n  --token-text-inv: var(--token-color-base-slate-100);\n  /*\n    Surface Color\n    Use Case: Surface colors define UI elevation\n    Use for element background when you need to separate from background\n     */\n  --token-surface-0: var(--token-color-base-neutral-200);\n  --token-surface-1: var(--token-color-base-neutral-100);\n  --token-surface-2: var(--token-color-base-neutral-50);\n  --token-surface-background: var(--token-color-base-neutral-50);\n  --token-surface-foreground: var(--token-color-base-white);\n  --token-surface-inv: var(--token-color-base-neutral-800);\n  --token-surface-overlay: var(\n        --token-surface-inv\n    );\n  /* Tooltips, modal backdrop */\n  --token-focus-indicator: var(--token-surface-inv);\n  /* Button  */\n  /*\n    Status Color\n    Use Case: Used to represent severity in UI.\n    Use for element background when you need to indicate state.\n     */\n  --token-state-disabled-foreground: var(--token-text-disabled);\n  --token-state-disabled-background: var(--token-color-base-slate-200);\n  --token-state-disabled-foreground-inv: var(--token-color-base-slate-200);\n  --token-state-disabled-background-inv: var(--token-text-disabled);\n  --token-state-success-foreground: var(--token-color-base-green-900);\n  --token-state-success-background: var(--token-color-base-green-100);\n  --token-state-success-foreground-inv: var(--token-color-base-green-100);\n  --token-state-success-background-inv: var(--token-color-base-green-900);\n  --token-state-success-accent: var(--token-color-base-green-700);\n  --token-state-warning-foreground: var(--token-color-base-amber-850);\n  --token-state-warning-background: var(--token-color-base-amber-100);\n  --token-state-warning-foreground-inv: var(--token-color-base-amber-100);\n  --token-state-warning-background-inv: var(--token-color-base-amber-850);\n  --token-state-warning-accent: var(--token-color-base-amber-900);\n  --token-state-error-foreground: var(--token-color-base-red-700);\n  --token-state-error-background: var(--token-color-base-red-100);\n  --token-state-error-foreground-inv: var(--token-color-base-red-100);\n  --token-state-error-background-inv: var(--token-color-base-red-700);\n  --token-state-error-accent: var(--token-color-base-red-500);\n  --token-state-active-foreground: var(--token-color-base-blue-a400);\n  --token-state-active-background: var(--token-color-base-sky-100);\n  --token-state-active-foreground-inv: var(--token-color-base-sky-100);\n  --token-state-active-background-inv: var(--token-color-base-blue-900);\n  --token-state-active-accent: var(--token-color-base-blue-a400);\n  --token-state-info-foreground: var(--token-color-base-blue-a400);\n  --token-state-info-background: var(--token-color-base-blue-100);\n  --token-state-info-foreground-inv: var(--token-color-base-blue-100);\n  --token-state-info-background-inv: var(--token-color-base-blue-900);\n  --token-state-info-accent: var(--token-color-base-blue-500);\n  /* Border */\n  --token-border-default: var(--token-color-base-grey-500);\n  --token-border-impact: var(--token-color-base-grey-600);\n  --token-border-muted: var(--token-color-base-grey-300);\n  --token-border-input: var(--token-border-impact);\n  --token-border-error: var(--token-state-error-accent);\n  --token-border-active: var(--token-state-active-accent);\n  /* Border Radius (Legacy) */\n  --token-border-radius-sm: 0.15rem;\n  --token-border-radius-md: 0.3rem;\n  --token-border-radius-lg: 0.46rem;\n  /* Breakpoint (Legacy) */\n  --token-breakpoints-xs: 0px;\n  --token-breakpoints-sm: 768px;\n  --token-breakpoints-md: 992px;\n  --token-breakpoints-lg: 1200px;\n  --token-breakpoints-xl: 1440px;\n  /* Transition (Legacy) */\n  --token-transition-time: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --token-transition-base: all 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --token-transition-fast: all 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  --token-transition-slow: all 600ms cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  /* Sizing (Legacy) */\n  --token-width-input-sm: 180px;\n  --token-width-input-md: 220px;\n  --token-width-sidebar-offscreen: 0px;\n  --token-width-sidebar-collapsed: 50px;\n  --token-width-sidebar: 280px;\n  --token-width-menu: 300px;\n  --token-width-panel-xs: 320px;\n  --token-width-panel-sm: 400px;\n  --token-width-panel-md: 500px;\n  --token-width-panel-lg: 600px;\n  --token-width-panel-xl: 700px;\n  --token-input-btn-height: 36px;\n  --token-height-navbar: 48px;\n  --token-height-header: 72px;\n  --token-height-input: 36px;\n  --token-line-height-base: 140%;\n  --token-line-height-heading: 180%;\n  --token-line-height-richtext: 155%;\n  /* Z-index (Legacy) */\n  --token-z-index-header: 1001;\n  --token-z-index-nav: 3001;\n  --token-z-index-menu: 4001;\n  --token-z-index-modal: 9001;\n  /* Shadow (Legacy) */\n  --token-shadow-0: 0 0 #000;\n  --token-shadow-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --token-shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n        0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --token-shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n        0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --token-shadow-none: 0 0 #000;\n  --token-shadow-sm: 0px 3px 1px -2px rgba(0, 0, 0, 0.02),\n        0px 2px 2px 0px rgba(0, 0, 0, 0.01), 0px 1px 5px 0px rgba(0, 0, 0, 0.1);\n  --token-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n        0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --token-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n        0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  /*\n    Component\n    These tokens are specific to individual components and generally refer to semantic tokens.\n    Keep component-specific tokens alongside their component CSS when they won't be reused elsewhere.\n     */\n  /* Sidebar */\n  --token-sidebar-background: var(--token-surface-background);\n  --token-sidebar-foreground: var(--token-text-foreground);\n  --token-sidebar-active-background: var(--token-state-active-background);\n  --token-sidebar-active-foreground: var(--token-color-base-blue-a400);\n  --token-sidebar-border: var(--token-border-muted);\n  --token-sidebar-item-padding: 6px;\n  /* Input sizing */\n  --token-input-py-sm: 4px;\n  --token-input-py-md: 6px;\n  --token-input-py-lg: 8px;\n  --token-input-px-lg: 8px;\n  --token-input-height-sm: calc(2 * var(--token-input-py-sm) + 16px);\n  --token-input-height-md: calc(2 * var(--token-input-py-md) + 16px);\n  --token-input-height-lg: calc(2 * var(--token-input-py-lg) + 16px);\n  --token-input-height: var(\n        --token-input-height-lg\n    );\n  /* cascade variable — overridden by density classes */\n  --token-input-py: var(\n        --token-input-py-lg\n    );\n  /* cascade variable — overridden by density classes */\n  --token-input-background: var(--token-surface-foreground);\n  --token-input-disabled-bg: var(--token-state-disabled-background);\n  --token-input-disabled-color: var(--token-state-disabled-foreground);\n  --token-input-border-color: var(--token-border-input);\n  --token-input-color: var(--token-text-foreground);\n  --token-input-focus-border-color: var(--token-state-active-accent);\n  --token-input-radius: var(--token-border-radius-md);\n  /* Card */\n  --token-card-background: var(--token-surface-foreground);\n  --token-card-border: var(--token-border-muted);\n  --token-card-radius: var(--token-border-radius-lg);\n  /* Charts */\n  --chart-categorical-1: #54b399;\n  --chart-categorical-2: #6092c0;\n  --chart-categorical-3: #d36086;\n  --chart-categorical-4: #9170b8;\n  --chart-categorical-5: #ca8eae;\n  --chart-categorical-6: #d6bf57;\n  --chart-categorical-7: #b9a888;\n  --chart-categorical-8: #da8b45;\n  --chart-categorical-9: #aa6556;\n  --chart-categorical-10: #e7664c;\n  --chart-sequential-1: var(--token-color-base-blue-100);\n  --chart-sequential-2: var(--token-color-base-blue-200);\n  --chart-sequential-3: var(--token-color-base-blue-300);\n  --chart-sequential-4: var(--token-color-base-blue-400);\n  --chart-sequential-5: var(--token-color-base-blue-500);\n  --chart-sequential-6: var(--token-color-base-blue-600);\n  --chart-sequential-7: var(--token-color-base-blue-700);\n  --chart-sequential-8: var(--token-color-base-blue-800);\n  --chart-sequential-9: var(--token-color-base-blue-900);\n  --chart-events-1: var(--token-color-base-red-500);\n  --chart-events-2: #fec514;\n  --chart-events-3: #a0de1e;\n  --chart-device-status-2: #fec514;\n  --chart-device-status-3: var(--token-color-base-red-500);\n  --chart-device-status-5: var(--token-color-base-blue-500);\n  --chart-onboarding-status-1: #a0de1e;\n  --chart-onboarding-status-2: var(--token-color-base-blue-500);\n  --chart-onboarding-status-3: #fec514;\n  --chart-onboarding-status-4: var(--token-color-base-red-500);\n  --chart-onboarding-status-5: #dfdfdf;\n  --chart-text-foreground: var(--token-color-base-slate-900);\n  --chart-text-muted: var(--token-color-base-slate-500);\n  --chart-text-axis-line: var(--token-color-base-grey-300);\n  /* Menu */\n  --token-menu-background: var(--token-surface-background);\n  --token-menu-radius: var(--token-border-radius-lg);\n  --token-menu-item-radius: var(--token-border-radius-md);\n  /*\n    Feedback\n    Use for alerts, badges, banners, and inline messages.\n    */\n  --token-message-radius: var(--token-border-radius-lg);\n  --token-badge-radius: var(--token-border-radius-md);\n  --token-placeholder-radius: var(--token-border-radius-lg);\n  --token-feedback-foreground: var(--token-text-foreground);\n  --token-feedback-background: var(--token-surface-foreground);\n  --token-feedback-foreground-inv: var(--token-text-foreground);\n  --token-feedback-background-inv: var(--token-surface-foreground);\n  --token-feedback-success-foreground: var(--token-state-success-foreground);\n  --token-feedback-success-background: color-mix(\n        in srgb,\n        var(--token-state-success-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-success-foreground-inv: var(\n        --token-state-success-foreground-inv\n    );\n  --token-feedback-success-background-inv: var(\n        --token-state-success-background-inv\n    );\n  --token-feedback-success-accent: var(--token-state-success-accent);\n  --token-feedback-warning-foreground: var(--token-state-warning-foreground);\n  --token-feedback-warning-background: color-mix(\n        in srgb,\n        var(--token-state-warning-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-warning-foreground-inv: var(\n        --token-state-warning-foreground-inv\n    );\n  --token-feedback-warning-background-inv: var(\n        --token-state-warning-background-inv\n    );\n  --token-feedback-warning-accent: var(--token-state-warning-accent);\n  --token-feedback-error-foreground: var(--token-state-error-foreground);\n  --token-feedback-error-background: color-mix(\n        in srgb,\n        var(--token-state-error-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-error-foreground-inv: var(\n        --token-state-error-foreground-inv\n    );\n  --token-feedback-error-background-inv: var(\n        --token-state-error-background-inv\n    );\n  --token-feedback-error-accent: var(--token-state-error-accent);\n  --token-feedback-info-foreground: var(--token-state-info-foreground);\n  --token-feedback-info-background: color-mix(\n        in srgb,\n        var(--token-state-info-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-info-foreground-inv: var(\n        --token-state-info-foreground-inv\n    );\n  --token-feedback-info-background-inv: var(\n        --token-state-info-background-inv\n    );\n  --token-feedback-info-accent: var(--token-state-info-accent);\n  /* Button */\n  --token-button-radius: var(--token-border-radius-md);\n  --token-button-py-sm: var(--token-input-py-sm);\n  --token-button-py-md: var(--token-input-py-md);\n  --token-button-py-lg: var(--token-input-py-lg);\n  --token-button-px-sm: 8px;\n  --token-button-px-md: 8px;\n  --token-button-px-lg: 12px;\n  --token-button-height-sm: calc(2 * var(--token-button-py-sm) + 16px);\n  --token-button-height-md: calc(2 * var(--token-button-py-md) + 16px);\n  --token-button-height-lg: calc(2 * var(--token-button-py-lg) + 16px);\n  --token-button-foreground: var(--token-text-foreground-inv);\n  --token-button-foreground-inv: var(--token-text-inv);\n  --token-button-primary-background: var(--token-color-brand-primary);\n  --token-button-primary-foreground: var(--token-color-brand-primary);\n  --token-button-secondary-background: var(--token-surface-2);\n  --token-button-secondary-foreground: var(--token-button-color);\n  --token-button-destructive-foreground: var(\n        --token-state-error-background-inv\n    );\n  --token-button-destructive-background: var(\n        --token-state-error-background-inv\n    );\n  --token-button-disabled-background: var(--token-state-disabled-background);\n  --token-button-disabled-foreground: var(--token-text-disabled);\n  /*\n    Tables\n    Source: ag-grid\n    */\n  --ag-foreground-color: var(--token-text-foreground);\n  --ag-secondary-foreground-color: var(--token-text-muted);\n  --ag-disabled-foreground-color: var(--token-text-disabled);\n  --ag-background-color: var(--token-surface-foreground);\n  --ag-header-background-color: var(--token-surface-foreground);\n  --ag-tooltip-background-color: var(--token-surface-2);\n  --ag-subheader-background-color: var(--token-surface-2);\n  --ag-subheader-toolbar-background-color: color-mix(\n        in srgb,\n        var(--token-surface-inv),\n        transparent 40%\n    );\n  --ag-header-cell-hover-background-color: var(--token-surface-background);\n  --ag-row-hover-color: var(--token-surface-background);\n  --ag-column-hover-color: var(--token-surface-background);\n  --ag-selected-row-background-color: color-mix(\n        in srgb,\n        var(--token-state-active-accent),\n        transparent 40%\n    );\n  --ag-borders: none;\n  --ag-borders-critical: solid 1px;\n  --ag-border-color: var(--token-border-muted);\n  --ag-grid-size: 8px;\n  --ag-icon-size: 14px;\n  --ag-header-height: calc(var(--ag-grid-size) * 5);\n  --ag-row-height: calc(var(--ag-grid-size) * 6);\n  --ag-cell-horizontal-padding: calc(var(--ag-grid-size) * 3);\n  --ag-list-item-height: calc(var(--ag-grid-size) * 4);\n  --ag-row-group-indent-size: calc(\n        var(--ag-grid-size) * 3 + var(--ag-icon-size)\n    );\n  --ag-font-family: var(--token-font-family-base);\n  --ag-font-size: var(--token-font-size-base);\n  --ag-invalid-color: var(--token-state-error-foreground);\n  /* Chart */\n  --chart-axis-line: var(--token-border-muted);\n  --chart-label: var(--token-text-muted);\n  --chart-title: var(--token-text-foreground);\n  --chart-tooltip-title: var(--token-text-inv);\n  --chart-tooltip-body: var(--token-text-inv);\n  --chart-tooltip-bg: var(--token-surface-overlay);\n  --chart-categorical-1: #7e57c2;\n  --chart-categorical-2: #26a69a;\n  --chart-categorical-3: #42a5f5;\n  --chart-categorical-4: #ffca28;\n  --chart-categorical-5: #66bb6a;\n  --chart-categorical-6: #26c6da;\n  --chart-categorical-7: #d4e157;\n  --chart-categorical-8: #ff7043;\n  --chart-categorical-9: #5e35b1;\n  --chart-categorical-10: #00897b;\n  --chart-sequential-1: #bbdefb;\n  --chart-sequential-2: #90caf9;\n  --chart-sequential-3: #64b5f6;\n  --chart-sequential-4: #42a5f5;\n  --chart-sequential-5: #2196f3;\n  --chart-sequential-6: #1e88e5;\n  --chart-sequential-7: #1976d2;\n  --chart-sequential-8: #1565c0;\n  --chart-sequential-9: #0d47a1;\n  --chart-alert-1: #a0de1e;\n  --chart-alert-2: #ffc107;\n  --chart-alert-3: #f44336;\n  --chart-alert-4: #9e9e9e;\n  --chart-device-status-1: #a0de1e;\n  --chart-device-status-2: #ffc107;\n  --chart-device-status-3: #f44336;\n  --chart-device-status-4: #dfdfdf;\n  --chart-device-status-5: #2196f3;\n  --chart-onboarding-status-1: #43a047;\n  --chart-onboarding-status-2: #a0de1e;\n  --chart-onboarding-status-3: #2196f3;\n  --chart-onboarding-status-4: #fec514;\n  --chart-onboarding-status-5: #f44336;\n  --chart-onboarding-status-6: #dfdfdf;\n}\n\n/* Input density utilities — apply to a container to control the height of all child inputs. density-lg is the :root default — no class needed */\n.density-sm {\n  --token-input-height: var(--token-input-height-sm);\n  --token-input-py: var(--token-input-py-sm);\n}\n\n.density-md {\n  --token-input-height: var(--token-input-height-md);\n  --token-input-py: var(--token-input-py-md);\n}\n\n[data-theme=dark] {\n  color-scheme: dark;\n  --root-color: #000000;\n  --mix-muted: 50%;\n  --mix-impact: 80%;\n  /* Semantic\n    These tokens convey meaning, defining where a token is used rather than what it is\n    Structure: They reference primitive or other semantic tokens when inheritance is expected.\n    Use Case: Switch these for dark mode.\n    */\n  /* Text Color */\n  --token-text-foreground: var(--token-color-base-white);\n  --token-text-primary: var(--token-color-base-white);\n  --token-text-secondary: var(--token-color-base-grey-500);\n  --token-text-tertiary: var(--token-color-base-zinc-500);\n  --token-text-default: var(--token-color-white);\n  --token-text-muted: var(--token-color-base-grey-500);\n  --token-text-disabled: var(--token-color-base-zinc-500);\n  --token-text-warning: var(--token-color-base-amber-500);\n  --token-text-error: var(--token-color-base-red-400);\n  --token-text-success: var(--token-color-base-green-400);\n  --token-text-active: var(--token-color-base-blue-a100);\n  --token-text-inv: var(--token-color-base-slate-900);\n  /*\n    Surface Color\n    Use Case: Surface colors define UI elevation\n    Use for element background when you need to separate from background\n    */\n  --token-surface-0: var(--token-color-base-neutral-900);\n  --token-surface-1: var(--token-color-base-neutral-800);\n  --token-surface-2: var(--token-color-base-neutral-700);\n  --token-surface-background: var(--token-color-base-neutral-900);\n  --token-surface-foreground: var(--token-color-base-neutral-800);\n  --token-surface-inv: var(--token-color-base-slate-50);\n  --token-surface-overlay: var(--token-color-base-neutral-300);\n  --token-focus-indicator: var(--token-color-surface-inv);\n  /*\n    Status Color\n    Use Case: Used to represent severity in UI.\n    Use for element background when you need to indicate state.\n     */\n  --token-state-disabled-foreground: var(--token-text-disabled);\n  --token-state-disabled-background: var(--token-color-base-neutral-700);\n  --token-state-disabled-foreground-inv: var(--token-color-base-neutral-700);\n  --token-state-disabled-background-inv: var(--token-text-disabled);\n  --token-state-success-foreground: var(--token-color-base-green-100);\n  --token-state-success-background: var(--token-color-base-green-900);\n  --token-state-success-foreground-inv: var(--token-color-base-green-900);\n  --token-state-success-background-inv: var(--token-color-base-green-100);\n  --token-state-success-accent: var(--token-color-base-green-700);\n  --token-state-warning-foreground: var(--token-color-base-amber-300);\n  --token-state-warning-background: var(--token-color-base-amber-850);\n  --token-state-warning-foreground-inv: var(--token-color-base-amber-850);\n  --token-state-warning-background-inv: var(--token-color-base-amber-100);\n  --token-state-warning-accent: var(--token-color-base-amber-900);\n  --token-state-error-foreground: var(--token-color-base-red-100);\n  --token-state-error-background: var(--token-color-base-red-700);\n  --token-state-error-foreground-inv: var(--token-color-base-red-700);\n  --token-state-error-background-inv: var(--token-color-base-red-100);\n  --token-state-error-accent: var(--token-color-base-red-500);\n  --token-state-active-foreground: var(--token-color-base-blue-50);\n  --token-state-active-background: var(--token-color-base-blue-900);\n  --token-state-active-background-inv: var(--token-color-base-blue-a400);\n  --token-state-active-foreground-inv: var(--token-color-base-sky-100);\n  --token-state-active-accent: var(--token-color-base-blue-a400);\n  --token-state-info-foreground: var(--token-color-base-blue-100);\n  --token-state-info-background: var(--token-color-base-blue-900);\n  --token-state-info-foreground-inv: var(--token-color-base-blue-900);\n  --token-state-info-background-inv: var(--token-color-base-blue-100);\n  --token-state-info-accent: var(--token-color-base-blue-500);\n  /* Border */\n  --token-border-default: var(--token-color-base-zinc-500);\n  --token-border-impact: var(--token-color-base-zinc-400);\n  --token-border-muted: var(--token-color-base-zinc-600);\n  --token-border-input: var(--token-color-base-white);\n  --token-border-active: var(--token-state-active-accent);\n  --token-border-error: var(--token-state-error-accent);\n  /* Component\n    These tokens are specific to individual components and generally refer to semantic tokens.\n    Keep component-specific tokens alongside their component CSS when they won't be reused elsewhere.\n     */\n  /* Sidebar */\n  --token-sidebar-background: var(--token-surface-background);\n  --token-sidebar-foreground: var(--token-text-foreground);\n  --token-sidebar-active-background: var(--token-state-active-background);\n  --token-sidebar-active-foreground: var(--token-text-active);\n  --token-sidebar-border: var(--token-border-muted);\n  /* Input */\n  --token-input-background: var(--token-surface-foreground);\n  --token-input-disabled-bg: var(--token-state-disabled-background);\n  --token-input-disabled-color: var(--token-state-disabled-foreground);\n  --token-input-border-color: var(--token-border-input);\n  --token-input-color: var(--token-text-foreground);\n  --token-input-focus-border-color: var(--token-state-active-accent);\n  /* Card */\n  --token-card-background: var(--token-surface-foreground);\n  --token-card-border: var(--token-border-muted);\n  /* Charts */\n  --chart-categorical-4: #a98ad1;\n  --chart-categorical-5: #d9a8c3;\n  --chart-categorical-6: #e8d265;\n  --chart-categorical-7: #cfc09e;\n  --chart-categorical-8: #eca55c;\n  --chart-categorical-9: #c27d6e;\n  --chart-categorical-10: #f0826a;\n  --chart-sequential-1: var(--token-color-base-blue-900);\n  --chart-sequential-2: var(--token-color-base-blue-800);\n  --chart-sequential-3: var(--token-color-base-blue-700);\n  --chart-sequential-4: var(--token-color-base-blue-600);\n  --chart-sequential-5: var(--token-color-base-blue-500);\n  --chart-sequential-6: var(--token-color-base-blue-400);\n  --chart-sequential-7: var(--token-color-base-blue-300);\n  --chart-sequential-8: var(--token-color-base-blue-200);\n  --chart-sequential-9: var(--token-color-base-blue-100);\n  --chart-events-1: #ff5252;\n  --chart-events-2: #ffd740;\n  --chart-events-3: #b8f033;\n  --chart-device-status-5: var(--token-color-base-blue-300);\n  --chart-onboarding-status-1: #b8f033;\n  --chart-onboarding-status-2: var(--token-color-base-blue-300);\n  --chart-onboarding-status-3: #ffd740;\n  --chart-onboarding-status-4: #ff5252;\n  --chart-onboarding-status-5: #9e9e9e;\n  --chart-text-foreground: var(--token-color-base-white);\n  --chart-text-muted: var(--token-color-base-grey-500);\n  --chart-text-axis-line: var(--token-color-base-zinc-600);\n  /* Menu */\n  --token-menu-background: var(--token-surface-background);\n  /*  --token-menu-hover-background: var(--token-surface-background);*/\n  /*\n    Feedback\n    Use for alerts, badges, banners, and inline messages.\n    */\n  --token-feedback-foreground: var(--token-text-foreground);\n  --token-feedback-background: var(--token-surface-foreground);\n  --token-feedback-foreground-inv: var(--token-text-foreground);\n  --token-feedback-background-inv: var(--token-surface-foreground);\n  --token-feedback-success-foreground: var(--token-state-success-foreground);\n  --token-feedback-success-background: color-mix(\n        in srgb,\n        var(--token-state-success-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-success-foreground-inv: var(\n        --token-state-success-foreground-inv\n    );\n  --token-feedback-success-background-inv: var(\n        --token-state-success-background-inv\n    );\n  --token-feedback-success-background-accent: var(\n        --token-state-success-accent\n    );\n  --token-feedback-warning-foreground: var(--token-state-warning-foreground);\n  --token-feedback-warning-background: color-mix(\n        in srgb,\n        var(--token-state-warning-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-warning-foreground-inv: var(\n        --token-state-warning-foreground-inv\n    );\n  --token-feedback-warning-background-inv: var(\n        --token-state-warning-background-inv\n    );\n  --token-feedback-warning-backgroundaccent: var(\n        --token-state-warning-accent\n    );\n  --token-feedback-error-foreground: var(--token-state-error-foreground);\n  --token-feedback-error-background: color-mix(\n        in srgb,\n        var(--token-state-error-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-error-foreground-inv: var(\n        --token-state-error-foreground-inv\n    );\n  --token-feedback-error-background-inv: var(\n        --token-state-error-background-inv\n    );\n  --token-feedback-error-accent: var(--token-state-error-accent);\n  --token-feedback-info-foreground: var(--token-state-info-foreground);\n  --token-feedback-info-background: color-mix(\n        in srgb,\n        var(--token-state-info-background) var(--mix-muted),\n        var(--root-color)\n    );\n  --token-feedback-info-foreground-inv: var(\n        --token-state-info-foreground-inv\n    );\n  --token-feedback-info-background-inv: var(\n        --token-state-info-background-inv\n    );\n  --token-feedback-info-accent: var(--token-state-info-accent);\n  /* Button */\n  --token-button-foreground: var(--token-text-foreground);\n  --token-button-foreground-inv: var(--token-text-foreground);\n  --token-button-primary-background: var(--token-color-brand-primary);\n  --token-button-primary-foreground: var(--token-state-active-accent);\n  --token-button-secondary-background: var(--token-surface-2);\n  --token-button-secondary-foreground: var(--token-button-color);\n  --token-button-destructive-foreground: var(--token-state-error-accent);\n  --token-button-destructive-background: var(--token-state-error-accent);\n  --token-button-disabled-background: var(--token-state-disabled-background);\n  --token-button-disabled-foreground: var(--token-text-disabled);\n  /*\n    Tables\n    Source: ag-grid\n    */\n  --ag-foreground-color: var(--token-text-foreground);\n  --ag-secondary-foreground-color: var(--token-text-muted);\n  --ag-disabled-foreground-color: var(--token-text-disabled);\n  --ag-background-color: var(--token-surface-foreground);\n  --ag-header-background-color: var(--token-surface-foreground);\n  --ag-tooltip-background-color: var(--token-surface-2);\n  --ag-subheader-background-color: var(--token-surface-2);\n  --ag-subheader-toolbar-background-color: var(--token-surface-2);\n  --ag-header-cell-hover-background-color: var(--token-surface-background);\n  --ag-row-hover-color: var(--token-surface-background);\n  --ag-column-hover-color: var(--token-surface-background);\n  --ag-selected-row-background-color: color-mix(\n        in srgb,\n        var(--token-state-active-accent),\n        transparent 40%\n    );\n  --ag-borders: none;\n  --ag-borders-critical: solid 1px;\n  --ag-border-color: var(--token-border-muted);\n  --ag-grid-size: 8px;\n  --ag-icon-size: 18px;\n  --ag-header-height: calc(var(--ag-grid-size) * 6);\n  --ag-row-height: calc(var(--ag-grid-size) * 6);\n  --ag-cell-horizontal-padding: calc(var(--ag-grid-size) * 3);\n  --ag-list-item-height: calc(var(--ag-grid-size) * 4);\n  --ag-row-group-indent-size: calc(\n        var(--ag-grid-size) * 3 + var(--ag-icon-size)\n    );\n  --ag-font-family: var(--token-font-family-base);\n  --ag-font-size: var(--token-font-size-base);\n  --ag-invalid-color: var(--token-state-error-foreground);\n  /* Chart */\n  --chart-axis-line: var(--token-border-muted);\n  --chart-label: var(--token-text-muted);\n  --chart-title: var(--token-text-foreground);\n  --chart-tooltip-bg: var(--token-surface-background);\n  --chart-tooltip-title: var(--token-text-foreground);\n  --chart-tooltip-body: var(--token-text-foreground);\n  --chart-categorical-1: #6ecfb3;\n  --chart-categorical-2: #7aafd4;\n  --chart-categorical-3: #e87da0;\n  --chart-categorical-4: #e8d265;\n  --chart-categorical-5: #81c784;\n  --chart-categorical-6: #4dd0e1;\n  --chart-categorical-7: #dce775;\n  --chart-categorical-8: #ff8a65;\n  --chart-categorical-9: #9575cd;\n  --chart-categorical-10: #26a69a;\n  --chart-sequential-1: #0d47a1;\n  --chart-sequential-2: #1565c0;\n  --chart-sequential-3: #1976d2;\n  --chart-sequential-4: #1e88e5;\n  --chart-sequential-5: #2196f3;\n  --chart-sequential-6: #42a5f5;\n  --chart-sequential-7: #64b5f6;\n  --chart-sequential-8: #90caf9;\n  --chart-sequential-9: #bbdefb;\n  --chart-alert-1: #81c784;\n  --chart-alert-2: #ffd740;\n  --chart-alert-3: #ff5252;\n  --chart-alert-4: #9e9e9e;\n  --chart-device-status-1: #b8f033;\n  --chart-device-status-2: #ffd740;\n  --chart-device-status-3: #ff5252;\n  --chart-device-status-4: #9e9e9e;\n  --chart-device-status-5: #64b5f6;\n  --chart-onboarding-status-1: #43a047;\n  --chart-onboarding-status-2: #a0de1e;\n  --chart-onboarding-status-3: #64b5f6;\n  --chart-onboarding-status-4: #ffd740;\n  --chart-onboarding-status-5: #ff5252;\n  --chart-onboarding-status-6: #9e9e9e;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x:\n      0;\n  --tw-border-spacing-y:\n      0;\n  --tw-translate-x:\n      0;\n  --tw-translate-y:\n      0;\n  --tw-rotate:\n      0;\n  --tw-skew-x:\n      0;\n  --tw-skew-y:\n      0;\n  --tw-scale-x:\n      1;\n  --tw-scale-y:\n      1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness:\n      proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width:\n      0px;\n  --tw-ring-offset-color:\n      #fff;\n  --tw-ring-color:\n      rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow:\n      0 0 #0000;\n  --tw-ring-shadow:\n      0 0 #0000;\n  --tw-shadow:\n      0 0 #0000;\n  --tw-shadow-colored:\n      0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n\n::backdrop {\n  --tw-border-spacing-x:\n      0;\n  --tw-border-spacing-y:\n      0;\n  --tw-translate-x:\n      0;\n  --tw-translate-y:\n      0;\n  --tw-rotate:\n      0;\n  --tw-skew-x:\n      0;\n  --tw-skew-y:\n      0;\n  --tw-scale-x:\n      1;\n  --tw-scale-y:\n      1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness:\n      proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width:\n      0px;\n  --tw-ring-offset-color:\n      #fff;\n  --tw-ring-color:\n      rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow:\n      0 0 #0000;\n  --tw-ring-shadow:\n      0 0 #0000;\n  --tw-shadow:\n      0 0 #0000;\n  --tw-shadow-colored:\n      0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n\n/* ! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: color-mix(in srgb, var(--token-border-default) 100%, transparent);\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n  tab-size: 4;\n  /* 3 */\n  font-family: var(--token-font-family-base);\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  letter-spacing: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\ninput:where([type=button]),\ninput:where([type=reset]),\ninput:where([type=submit]) {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=until-found])) {\n  display: none;\n}\n\n/*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 2 */\n  border: 0 solid;\n  /* 3 */\n}\n\n/*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  /* 3 */\n  font-family: --theme(--default-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n  /* 4 */\n  font-feature-settings: --theme(--default-font-feature-settings, normal);\n  /* 5 */\n  font-variation-settings: --theme(--default-font-variation-settings, normal);\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\n  Remove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  -webkit-text-decoration: inherit;\n  text-decoration: inherit;\n}\n\n/*\n  Add the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: --theme(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n  /* 1 */\n  font-feature-settings: --theme(--default-mono-font-feature-settings, normal);\n  /* 2 */\n  font-variation-settings: --theme(--default-mono-font-variation-settings, normal);\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\n  Add the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/*\n  Add the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n\n/*\n  Make lists unstyled by default.\n*/\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\nbutton,\ninput,\nselect,\noptgroup,\ntextarea,\n::file-selector-button {\n  font: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  letter-spacing: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  border-radius: 0;\n  /* 2 */\n  background-color: transparent;\n  /* 3 */\n  opacity: 1;\n  /* 4 */\n}\n\n/*\n  Restore default font weight.\n*/\n:where(select:is([multiple], [size])) optgroup {\n  font-weight: bolder;\n}\n\n/*\n  Restore indentation.\n*/\n:where(select:is([multiple], [size])) optgroup option {\n  padding-inline-start: 20px;\n}\n\n/*\n  Restore space after button.\n*/\n::file-selector-button {\n  margin-inline-end: 4px;\n}\n\n/*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n::-moz-placeholder {\n  opacity: 1;\n}\n\n::placeholder {\n  opacity: 1;\n}\n\n/*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(…)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {\n  ::-moz-placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n  ::placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n}\n/*\n  Prevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n\n/*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n::-webkit-date-and-time-value {\n  min-height: 1lh;\n  /* 1 */\n  text-align: inherit;\n  /* 2 */\n}\n\n/*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n::-webkit-datetime-edit {\n  display: inline-flex;\n}\n\n/*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-datetime-edit,\n::-webkit-datetime-edit-year-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-minute-field,\n::-webkit-datetime-edit-second-field,\n::-webkit-datetime-edit-millisecond-field,\n::-webkit-datetime-edit-meridiem-field {\n  padding-block: 0;\n}\n\n/*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n::-webkit-calendar-picker-indicator {\n  line-height: 1;\n}\n\n/*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\n  Correct the inability to style the border radius in iOS Safari.\n*/\nbutton,\ninput:where([type=button], [type=reset], [type=submit]),\n::file-selector-button {\n  -webkit-appearance: button;\n  -moz-appearance: button;\n  appearance: button;\n}\n\n/*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n[hidden]:where(:not([hidden=until-found])) {\n  display: none !important;\n}\n\nhtml {\n  font-size: var(--token-font-size-root);\n}\n\nbody {\n  font-size: var(--token-font-size-body);\n  line-height: var(--token-line-height-base);\n  font-family: var(--token-font-family-base), sans-serif;\n  font-weight: var(--token-font-weight-light);\n  background-color: var(--token-surface-background);\n}\n\nh1,\n.h1 {\n  font-size: var(--token-font-size-h1);\n}\n\nh2,\n.h2 {\n  font-size: var(--token-font-size-h2);\n}\n\nh3,\n.h3 {\n  font-size: var(--token-font-size-h3);\n}\n\nh4,\n.h4 {\n  font-size: var(--token-font-size-h4);\n}\n\nh5,\n.h5 {\n  font-size: var(--token-font-size-h5);\n}\n\nh6,\n.h6 {\n  font-size: var(--token-font-size-h6);\n}\n\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--token-font-weight-med);\n  line-height: var(--token-line-height-base);\n}\n\nlabel {\n  font-size: var(--token-font-size-xs);\n  font-weight: var(--token-font-weight-med);\n  line-height: var(--token-line-height-base);\n}\n\nsmall {\n  font-size: var(--token-font-size-sm);\n}\n\nstrong {\n  font-weight: var(--token-font-weight-bold);\n}\n\n* {\n  scrollbar-width: auto;\n  scrollbar-color: var(--token-color-base-slate-400) transparent;\n}\n\n*::-webkit-scrollbar {\n  height: 8px;\n  width: 8px;\n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: var(--token-color-base-slate-400);\n  border-radius: 8px;\n  border: 1px solid transparent;\n  /* creates the visual margin */\n  background-clip: padding-box;\n  /* ensures the border doesn’t overlay the background */\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.pointer-events-auto {\n  pointer-events: auto;\n}\n\n.\\!visible {\n  visibility: visible !important;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.collapse {\n  visibility: collapse;\n}\n\n.static {\n  position: static;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.sticky {\n  position: sticky;\n}\n\n.inset-0 {\n  inset: 0;\n}\n\n.bottom-0 {\n  bottom: 0;\n}\n\n.left-0 {\n  left: 0;\n}\n\n.right-0 {\n  right: 0;\n}\n\n.right-24 {\n  right: 24px;\n}\n\n.right-4 {\n  right: 4px;\n}\n\n.right-\\[36px\\] {\n  right: 36px;\n}\n\n.top-0 {\n  top: 0;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.top-4 {\n  top: 4px;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.z-50 {\n  z-index: 50;\n}\n\n.m-2 {\n  margin: 2px;\n}\n\n.m-\\[2px\\] {\n  margin: 2px;\n}\n\n.mx-8 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.my-8 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.mb-4 {\n  margin-bottom: 4px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.ml-16 {\n  margin-left: 16px;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-24 {\n  margin-right: 24px;\n}\n\n.mr-4 {\n  margin-right: 4px;\n}\n\n.mr-8 {\n  margin-right: 8px;\n}\n\n.mr-\\[-1px\\] {\n  margin-right: -1px;\n}\n\n.mr-\\[16px\\] {\n  margin-right: 16px;\n}\n\n.mr-\\[4px\\] {\n  margin-right: 4px;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mt-0 {\n  margin-top: 0;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.mt-4 {\n  margin-top: 4px;\n}\n\n.mt-8 {\n  margin-top: 8px;\n}\n\n.box-border {\n  box-sizing: border-box;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.inline {\n  display: inline;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.\\!grid {\n  display: grid !important;\n}\n\n.grid {\n  display: grid;\n}\n\n.contents {\n  display: contents;\n}\n\n.hidden {\n  display: none;\n}\n\n.h-0 {\n  height: 0;\n}\n\n.h-16 {\n  height: 16px;\n}\n\n.h-2 {\n  height: 2px;\n}\n\n.h-20 {\n  height: 20px;\n}\n\n.h-24 {\n  height: 24px;\n}\n\n.h-32 {\n  height: 32px;\n}\n\n.h-4 {\n  height: 4px;\n}\n\n.h-40 {\n  height: 40px;\n}\n\n.h-64 {\n  height: 64px;\n}\n\n.h-8 {\n  height: 8px;\n}\n\n.h-\\[120px\\] {\n  height: 120px;\n}\n\n.h-\\[160px\\] {\n  height: 160px;\n}\n\n.h-\\[16px\\] {\n  height: 16px;\n}\n\n.h-\\[180px\\] {\n  height: 180px;\n}\n\n.h-\\[20px\\] {\n  height: 20px;\n}\n\n.h-\\[220px\\] {\n  height: 220px;\n}\n\n.h-\\[22px\\] {\n  height: 22px;\n}\n\n.h-\\[235px\\] {\n  height: 235px;\n}\n\n.h-\\[240px\\] {\n  height: 240px;\n}\n\n.h-\\[28px\\] {\n  height: 28px;\n}\n\n.h-\\[300px\\] {\n  height: 300px;\n}\n\n.h-\\[30px\\] {\n  height: 30px;\n}\n\n.h-\\[330px\\] {\n  height: 330px;\n}\n\n.h-\\[400px\\] {\n  height: 400px;\n}\n\n.h-\\[40px\\] {\n  height: 40px;\n}\n\n.h-\\[440px\\] {\n  height: 440px;\n}\n\n.h-\\[70px\\] {\n  height: 70px;\n}\n\n.h-\\[80px\\] {\n  height: 80px;\n}\n\n.h-button-lg {\n  height: var(--token-button-height-lg);\n}\n\n.h-button-md {\n  height: var(--token-button-height-md);\n}\n\n.h-button-sm {\n  height: var(--token-button-height-sm);\n}\n\n.h-dvh {\n  height: 100dvh;\n}\n\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-input {\n  height: var(--token-input-height);\n}\n\n.h-input-md {\n  height: var(--token-input-height-md);\n}\n\n.max-h-input-md {\n  max-height: var(--token-input-height-md);\n}\n\n.\\!min-h-16 {\n  min-height: 16px !important;\n}\n\n.min-h-0 {\n  min-height: 0;\n}\n\n.min-h-16 {\n  min-height: 16px;\n}\n\n.min-h-\\[32px\\] {\n  min-height: 32px;\n}\n\n.min-h-\\[36px\\] {\n  min-height: 36px;\n}\n\n.min-h-\\[40px\\] {\n  min-height: 40px;\n}\n\n.min-h-\\[48px\\] {\n  min-height: 48px;\n}\n\n.min-h-input {\n  min-height: var(--token-input-height);\n}\n\n.w-0 {\n  width: 0;\n}\n\n.w-16 {\n  width: 16px;\n}\n\n.w-24 {\n  width: 24px;\n}\n\n.w-32 {\n  width: 32px;\n}\n\n.w-4 {\n  width: 4px;\n}\n\n.w-40 {\n  width: 40px;\n}\n\n.w-64 {\n  width: 64px;\n}\n\n.w-80 {\n  width: 80px;\n}\n\n.w-\\[16px\\] {\n  width: 16px;\n}\n\n.w-\\[22px\\] {\n  width: 22px;\n}\n\n.w-\\[40px\\] {\n  width: 40px;\n}\n\n.w-auto {\n  width: auto;\n}\n\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-input-md {\n  width: var(--token-width-input-md);\n}\n\n.w-input-sm {\n  width: var(--token-width-input-sm);\n}\n\n.w-max {\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.w-panel-sm {\n  width: var(--token-width-panel-sm);\n}\n\n.w-sidebar {\n  width: var(--token-width-sidebar);\n}\n\n.\\!min-w-16 {\n  min-width: 16px !important;\n}\n\n.min-w-0 {\n  min-width: 0;\n}\n\n.min-w-100 {\n  min-width: 100px;\n}\n\n.max-w-3xl {\n  max-width: 48rem;\n}\n\n.max-w-4xl {\n  max-width: 56rem;\n}\n\n.max-w-none {\n  max-width: none;\n}\n\n.max-w-xs {\n  max-width: 20rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.flex-auto {\n  flex: 1 1 auto;\n}\n\n.flex-fill flex {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0%;\n}\n\n.flex-none {\n  flex: none;\n}\n\n.flex-shrink {\n  flex-shrink: 1;\n}\n\n.shrink {\n  flex-shrink: 1;\n}\n\n.shrink-0 {\n  flex-shrink: 0;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.basis-0 {\n  flex-basis: 0;\n}\n\n.border-collapse {\n  border-collapse: collapse;\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y:\n      -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-180 {\n  --tw-rotate:\n      180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-100 {\n  --tw-scale-x:\n      1;\n  --tw-scale-y:\n      1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-90 {\n  --tw-scale-x:\n      .9;\n  --tw-scale-y:\n      .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.animate-\\[typing_1s_infinite\\] {\n  animation: typing 1s infinite;\n}\n\n@keyframes progress-left {\n  0% {\n    left: -30%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.animate-progress-left {\n  animation: progress-left 1.6s linear infinite;\n}\n\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n.cursor-default {\n  cursor: default;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-text {\n  cursor: text;\n}\n\n.select-none {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.resize-none {\n  resize: none;\n}\n\n.resize {\n  resize: both;\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.content-stretch {\n  align-content: stretch;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-stretch {\n  align-items: stretch;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-16 {\n  gap: 16px;\n}\n\n.gap-2 {\n  gap: 2px;\n}\n\n.gap-4 {\n  gap: 4px;\n}\n\n.gap-8 {\n  gap: 8px;\n}\n\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse:\n      0;\n  margin-top: calc(2px * (1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2px * var(--tw-space-y-reverse));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse:\n      0;\n  margin-top: calc(4px * (1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(4px * var(--tw-space-y-reverse));\n}\n\n.self-start {\n  align-self: flex-start;\n}\n\n.self-end {\n  align-self: flex-end;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-visible {\n  overflow: visible;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n\n.whitespace-normal {\n  white-space: normal;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n\n.break-words {\n  overflow-wrap: break-word;\n}\n\n.break-all {\n  word-break: break-all;\n}\n\n.rounded {\n  border-radius: var(--token-border-radius-md);\n}\n\n.rounded-\\[0\\.3rem\\] {\n  border-radius: 0.3rem;\n}\n\n.rounded-\\[2px\\] {\n  border-radius: 2px;\n}\n\n.rounded-badge {\n  border-radius: var(--token-badge-radius);\n}\n\n.rounded-button {\n  border-radius: var(--token-button-radius);\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-input {\n  border-radius: var(--token-input-radius);\n}\n\n.rounded-lg {\n  border-radius: var(--token-border-radius-lg);\n}\n\n.rounded-md {\n  border-radius: var(--token-border-radius-md);\n}\n\n.rounded-menu {\n  border-radius: var(--token-menu-radius);\n}\n\n.rounded-menu-item {\n  border-radius: var(--token-menu-item-radius);\n}\n\n.rounded-placeholder {\n  border-radius: var(--token-placeholder-radius);\n}\n\n.rounded-sm {\n  border-radius: var(--token-border-radius-sm);\n}\n\n.rounded-l-md {\n  border-top-left-radius: var(--token-border-radius-md);\n  border-bottom-left-radius: var(--token-border-radius-md);\n}\n\n.rounded-l-none {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.rounded-r-md {\n  border-top-right-radius: var(--token-border-radius-md);\n  border-bottom-right-radius: var(--token-border-radius-md);\n}\n\n.rounded-r-none {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.rounded-t-lg {\n  border-top-left-radius: var(--token-border-radius-lg);\n  border-top-right-radius: var(--token-border-radius-lg);\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-0 {\n  border-width: 0px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-4 {\n  border-width: 4px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-l {\n  border-left-width: 1px;\n}\n\n.border-r {\n  border-right-width: 1px;\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.border-button-destructive {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-button-destructive-border) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-button-primary {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-button-primary-border) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-destructive {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-destructive-foreground {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-disabled-foreground\\/30 {\n  border-color: color-mix(in srgb, var(--token-state-disabled-foreground) 30%, transparent);\n}\n\n.border-error {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-border-error) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-feedback-error-foreground\\/30 {\n  border-color: color-mix(in srgb, var(--token-feedback-error-foreground) 30%, transparent);\n}\n\n.border-feedback-info-foreground\\/30 {\n  border-color: color-mix(in srgb, var(--token-feedback-info-foreground) 30%, transparent);\n}\n\n.border-feedback-success-foreground\\/30 {\n  border-color: color-mix(in srgb, var(--token-feedback-success-foreground) 30%, transparent);\n}\n\n.border-feedback-warning-foreground\\/30 {\n  border-color: color-mix(in srgb, var(--token-feedback-warning-foreground) 30%, transparent);\n}\n\n.border-input {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-border-muted) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-med {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-border-med) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-muted {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-border-muted) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-primary {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-border-primary) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.border-e-transparent {\n  border-inline-end-color: transparent;\n}\n\n.\\!bg-surface-1 {\n  --tw-bg-opacity:\n      1 !important;\n  background-color: color-mix(in srgb, var(--token-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent) !important;\n}\n\n.bg-active-accent {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-active-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-active-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-active-foreground {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-button-destructive {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-button-destructive-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-button-primary-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-button-primary-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-button-primary-background\\/10 {\n  background-color: color-mix(in srgb, var(--token-button-primary-background) 10%, transparent);\n}\n\n.bg-button-secondary-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-button-secondary-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-card-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-card-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-card-background\\/80 {\n  background-color: color-mix(in srgb, var(--token-card-background) 80%, transparent);\n}\n\n.bg-destructive-foreground {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-disabled-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-disabled-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-disabled-background-inv {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-disabled-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-disabled-foreground\\/40 {\n  background-color: color-mix(in srgb, var(--token-state-disabled-foreground) 40%, transparent);\n}\n\n.bg-feedback-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-background-inv {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-error-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-error-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-error-background-inv {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-error-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-info-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-info-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-info-background-inv {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-info-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-success-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-success-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-success-background-inv {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-success-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-warning-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-warning-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-feedback-warning-background-inv {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-feedback-warning-background-inv) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-gray-500 {\n  --tw-bg-opacity:\n      1;\n  background-color: rgb(107, 114, 128, var(--tw-bg-opacity, 1));\n}\n\n.bg-info-foreground {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-input-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-input-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-menu {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-menu-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-surface-1 {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-surface-2 {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-surface-2) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-surface-background {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-surface-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-surface-foreground {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-surface-foreground) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.bg-surface-foreground\\/80 {\n  background-color: color-mix(in srgb, var(--token-surface-foreground) 80%, transparent);\n}\n\n.bg-surface-overlay\\/90 {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 90%, transparent);\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-warning {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-warning-default) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.\\!fill-button-foreground {\n  fill: color-mix(in srgb, var(--token-button-foreground) 100%, transparent) !important;\n}\n\n.\\!fill-button-foreground-inv {\n  fill: color-mix(in srgb, var(--token-button-foreground-inv) 100%, transparent) !important;\n}\n\n.\\!fill-disabled-foreground {\n  fill: color-mix(in srgb, var(--token-state-disabled-foreground) 100%, transparent) !important;\n}\n\n.fill-active-foreground {\n  fill: color-mix(in srgb, var(--token-state-active-foreground) 100%, transparent);\n}\n\n.fill-button-destructive {\n  fill: color-mix(in srgb, var(--token-button-destructive-background) 100%, transparent);\n}\n\n.fill-button-foreground-inv {\n  fill: color-mix(in srgb, var(--token-button-foreground-inv) 100%, transparent);\n}\n\n.fill-button-primary-foreground {\n  fill: color-mix(in srgb, var(--token-button-primary-foreground) 100%, transparent);\n}\n\n.fill-button-secondary-foreground {\n  fill: color-mix(in srgb, var(--token-button-secondary-foreground) 100%, transparent);\n}\n\n.fill-disabled {\n  fill: color-mix(in srgb, var(--token-state-disabled-default) 100%, transparent);\n}\n\n.fill-disabled-foreground {\n  fill: color-mix(in srgb, var(--token-state-disabled-foreground) 100%, transparent);\n}\n\n.fill-disabled-foreground-inv {\n  fill: color-mix(in srgb, var(--token-state-disabled-foreground-inv) 100%, transparent);\n}\n\n.fill-feedback-error-accent {\n  fill: color-mix(in srgb, var(--token-feedback-error-accent) 100%, transparent);\n}\n\n.fill-feedback-error-foreground {\n  fill: color-mix(in srgb, var(--token-feedback-error-foreground) 100%, transparent);\n}\n\n.fill-feedback-error-foreground-inv {\n  fill: color-mix(in srgb, var(--token-feedback-error-foreground-inv) 100%, transparent);\n}\n\n.fill-feedback-foreground {\n  fill: color-mix(in srgb, var(--token-feedback-foreground) 100%, transparent);\n}\n\n.fill-feedback-foreground-inv {\n  fill: color-mix(in srgb, var(--token-feedback-foreground-inv) 100%, transparent);\n}\n\n.fill-feedback-info-accent {\n  fill: color-mix(in srgb, var(--token-feedback-info-accent) 100%, transparent);\n}\n\n.fill-feedback-info-foreground {\n  fill: color-mix(in srgb, var(--token-feedback-info-foreground) 100%, transparent);\n}\n\n.fill-feedback-info-foreground-inv {\n  fill: color-mix(in srgb, var(--token-feedback-info-foreground-inv) 100%, transparent);\n}\n\n.fill-feedback-success-accent {\n  fill: color-mix(in srgb, var(--token-feedback-success-accent) 100%, transparent);\n}\n\n.fill-feedback-success-foreground {\n  fill: color-mix(in srgb, var(--token-feedback-success-foreground) 100%, transparent);\n}\n\n.fill-feedback-success-foreground-inv {\n  fill: color-mix(in srgb, var(--token-feedback-success-foreground-inv) 100%, transparent);\n}\n\n.fill-feedback-warning-accent {\n  fill: color-mix(in srgb, var(--token-feedback-warning-accent) 100%, transparent);\n}\n\n.fill-feedback-warning-foreground {\n  fill: color-mix(in srgb, var(--token-feedback-warning-foreground) 100%, transparent);\n}\n\n.fill-feedback-warning-foreground-inv {\n  fill: color-mix(in srgb, var(--token-feedback-warning-foreground-inv) 100%, transparent);\n}\n\n.fill-foreground {\n  fill: color-mix(in srgb, var(--token-text-foreground) 100%, transparent);\n}\n\n.fill-foreground\\/40 {\n  fill: color-mix(in srgb, var(--token-text-foreground) 40%, transparent);\n}\n\n.fill-slate-300 {\n  fill: #cbd5e1;\n}\n\n.object-cover {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.p-12 {\n  padding: 12px;\n}\n\n.p-16 {\n  padding: 16px;\n}\n\n.p-4 {\n  padding: 4px;\n}\n\n.p-8 {\n  padding: 8px;\n}\n\n.p-\\[10vh\\] {\n  padding: 10vh;\n}\n\n.p-\\[14px\\] {\n  padding: 14px;\n}\n\n.p-\\[15vh\\] {\n  padding: 15vh;\n}\n\n.p-\\[16px\\] {\n  padding: 16px;\n}\n\n.p-\\[2px\\] {\n  padding: 2px;\n}\n\n.p-\\[5vh\\] {\n  padding: 5vh;\n}\n\n.px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.px-12 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.px-16 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.px-2 {\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.px-4 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.px-8 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.px-\\[6px\\] {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.py-120 {\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\n\n.py-2 {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.py-4 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.py-64 {\n  padding-top: 64px;\n  padding-bottom: 64px;\n}\n\n.py-8 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.py-\\[2px\\] {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.py-\\[6px\\] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.pb-16 {\n  padding-bottom: 16px;\n}\n\n.pb-4 {\n  padding-bottom: 4px;\n}\n\n.pb-8 {\n  padding-bottom: 8px;\n}\n\n.pl-4 {\n  padding-left: 4px;\n}\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.pr-24 {\n  padding-right: 24px;\n}\n\n.pr-4 {\n  padding-right: 4px;\n}\n\n.pr-8 {\n  padding-right: 8px;\n}\n\n.ps-8 {\n  padding-inline-start: 8px;\n}\n\n.pt-8 {\n  padding-top: 8px;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.align-\\[-0\\.125em\\] {\n  vertical-align: -0.125em;\n}\n\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n\n.text-body {\n  font-size: var(--token-font-size-body);\n}\n\n.text-button {\n  font-size: var(--token-font-size-button);\n}\n\n.text-h4 {\n  font-size: var(--token-font-size-h4);\n}\n\n.text-h5 {\n  font-size: var(--token-font-size-h5);\n}\n\n.text-icon-md {\n  font-size: var(--token-font-size-icon-md);\n}\n\n.text-sm {\n  font-size: var(--token-font-size-sm);\n}\n\n.text-xs {\n  font-size: var(--token-font-size-xs);\n}\n\n.\\!font-medium {\n  font-weight: var(--token-font-weight-med) !important;\n}\n\n.font-medium {\n  font-weight: var(--token-font-weight-med);\n}\n\n.font-normal {\n  font-weight: var(--token-font-weight-light);\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.\\!leading-normal {\n  line-height: var(--token-line-height-base) !important;\n}\n\n.leading-\\[0\\.9286rem\\] {\n  line-height: 0.9286rem;\n}\n\n.leading-\\[100\\%\\] {\n  line-height: 100%;\n}\n\n.leading-\\[16px\\] {\n  line-height: 16px;\n}\n\n.leading-\\[30px\\] {\n  line-height: 30px;\n}\n\n.leading-none {\n  line-height: 1;\n}\n\n.leading-normal {\n  line-height: var(--token-line-height-base);\n}\n\n.leading-tight {\n  line-height: 1.25;\n}\n\n.\\!text-active-foreground {\n  --tw-text-opacity:\n      1 !important;\n  color: color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important;\n}\n\n.\\!text-disabled {\n  --tw-text-opacity:\n      1 !important;\n  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important;\n}\n\n.\\!text-foreground {\n  --tw-text-opacity:\n      1 !important;\n  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent) !important;\n}\n\n.text-active-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-state-active-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-accent {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-destructive {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-destructive-background) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-destructive-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-destructive-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-primary-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-primary-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-button-secondary-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-button-secondary-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-destructive-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-state-error-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-disabled {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-disabled-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-state-disabled-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-disabled-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-state-disabled-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-error {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-error) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-error-accent {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-error-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-error-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-error-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-error-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-error-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-info-accent {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-info-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-info-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-info-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-info-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-info-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-success-accent {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-success-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-success-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-success-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-success-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-success-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-warning-accent {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-warning-accent) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-warning-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-warning-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-feedback-warning-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-feedback-warning-foreground-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-foreground-inv {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-inv) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-info-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-state-info-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-muted {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-muted) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-secondary {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-secondary) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.text-warning-foreground {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-state-warning-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.no-underline {\n  text-decoration-line: none;\n}\n\n.caret-transparent {\n  caret-color: transparent;\n}\n\n.accent-active-foreground {\n  accent-color: color-mix(in srgb, var(--token-state-active-foreground) 100%, transparent);\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-30 {\n  opacity: 0.3;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.opacity-70 {\n  opacity: 0.7;\n}\n\n.shadow {\n  --tw-shadow:\n      0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored:\n      0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow:\n      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored:\n      0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow:\n      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored:\n      0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}\n\n.shadow-none {\n  --tw-shadow:\n      0 0 #0000;\n  --tw-shadow-colored:\n      0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}\n\n.shadow-sm {\n  --tw-shadow:\n      0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored:\n      0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\n}\n\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.outline-0 {\n  outline-width: 0px;\n}\n\n.outline-active {\n  outline-color: color-mix(in srgb, var(--token-state-active-default) 100%, transparent);\n}\n\n.ring {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.ring-active {\n  --tw-ring-opacity:\n      1;\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-default) calc(var(--tw-ring-opacity, 1) * 100%), transparent);\n}\n\n.blur {\n  --tw-blur:\n      blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.grayscale-\\[1\\] {\n  --tw-grayscale:\n      grayscale(1);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.backdrop-blur {\n  --tw-backdrop-blur:\n      blur(8px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[background-color\\,color\\,box-shadow\\] {\n  transition-property: background-color, color, box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[color\\,background-color\\,box-shadow\\] {\n  transition-property: color, background-color, box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[fill\\] {\n  transition-property: fill;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[left\\] {\n  transition-property: left;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-150 {\n  transition-duration: 150ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n.duration-500 {\n  transition-duration: 500ms;\n}\n\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.py-button-sm {\n  padding-top: var(--token-button-py-sm);\n  padding-bottom: var(--token-button-py-sm);\n}\n\n.py-button-md {\n  padding-top: var(--token-button-py-md);\n  padding-bottom: var(--token-button-py-md);\n}\n\n.py-button-lg {\n  padding-top: var(--token-button-py-lg);\n  padding-bottom: var(--token-button-py-lg);\n}\n\n.px-button-sm {\n  padding-left: var(--token-button-px-sm);\n  padding-right: var(--token-button-px-sm);\n}\n\n.px-button-md {\n  padding-left: var(--token-button-px-md);\n  padding-right: var(--token-button-px-md);\n}\n\n.px-button-lg {\n  padding-left: var(--token-button-px-lg);\n  padding-right: var(--token-button-px-lg);\n}\n\n.py-input-y {\n  padding-top: var(--token-input-py-lg);\n  padding-bottom: var(--token-input-py-lg);\n}\n\n.px-input-x {\n  padding-left: var(--token-input-px-lg);\n  padding-right: var(--token-input-px-lg);\n}\n\n.pl-input-x {\n  padding-left: var(--token-input-px-lg);\n}\n\n@tailwind utilities;\n.hide-empty:empty {\n  display: none;\n}\n\n.at-button i,\n.at-button .material-icons {\n  font-size: var(--token-font-size-icon-md);\n  line-height: 1;\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-size: 16px;\n}\n\n* {\n  outline: none;\n}\n\n*:focus {\n  outline: none;\n}\n\n*:focus:visible {\n  outline: none;\n}\n\n.ag-cell,\n.ag-cell-wrapper {\n  display: inline-flex;\n}\n\n.placeholder\\:text-disabled::-moz-placeholder {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.placeholder\\:text-disabled::placeholder {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.placeholder\\:text-foreground::-moz-placeholder {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.placeholder\\:text-foreground::placeholder {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.empty\\:hidden:empty {\n  display: none;\n}\n\n.focus-within\\:z-10:focus-within {\n  z-index: 10;\n}\n\n.focus-within\\:border-active-accent:focus-within {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.focus-within\\:border-destructive:focus-within {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-error-default) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.focus-within\\:border-error:focus-within {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-border-error) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.focus-within\\:bg-surface-overlay\\/10:focus-within {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);\n}\n\n.focus-within\\:outline-0:focus-within {\n  outline-width: 0px;\n}\n\n.focus-within\\:ring:focus-within {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus-within\\:ring-0:focus-within {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus-within\\:ring-active-glow:focus-within {\n  --tw-ring-opacity:\n      1;\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);\n}\n\n.focus-within\\:ring-destructive\\/30:focus-within {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-error-default) calc(0.3 * 100%), transparent);\n}\n\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n\n.hover\\:bg-active-background:hover {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-state-active-background) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.hover\\:bg-surface-1:hover {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-surface-1) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.hover\\:bg-surface-2:hover {\n  --tw-bg-opacity:\n      1;\n  background-color: color-mix(in srgb, var(--token-surface-2) calc(var(--tw-bg-opacity, 1) * 100%), transparent);\n}\n\n.hover\\:bg-surface-overlay\\/10:hover {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);\n}\n\n.hover\\:fill-foreground:hover {\n  fill: color-mix(in srgb, var(--token-text-foreground) 100%, transparent);\n}\n\n.hover\\:text-disabled:hover {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-disabled) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.hover\\:text-foreground:hover {\n  --tw-text-opacity:\n      1;\n  color: color-mix(in srgb, var(--token-text-foreground) calc(var(--tw-text-opacity, 1) * 100%), transparent);\n}\n\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n\n.focus\\:z-10:focus {\n  z-index: 10;\n}\n\n.focus\\:border-none:focus {\n  border-style: none;\n}\n\n.focus\\:border-active-accent:focus {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.focus\\:bg-surface-overlay\\/20:focus {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 20%, transparent);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:outline-0:focus {\n  outline-width: 0px;\n}\n\n.focus\\:outline-2:focus {\n  outline-width: 2px;\n}\n\n.focus\\:ring:focus {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus\\:ring-inset:focus {\n  --tw-ring-inset:\n      inset;\n}\n\n.focus\\:ring-active-glow:focus {\n  --tw-ring-opacity:\n      1;\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);\n}\n\n.focus-visible\\:z-20:focus-visible {\n  z-index: 20;\n}\n\n.focus-visible\\:border-active-accent:focus-visible {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.focus-visible\\:bg-surface-overlay\\/10:focus-visible {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);\n}\n\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus-visible\\:ring-0:focus-visible {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus-visible\\:ring-2:focus-visible {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.focus-visible\\:ring-inset:focus-visible {\n  --tw-ring-inset:\n      inset;\n}\n\n.focus-visible\\:ring-active-foreground\\/20:focus-visible {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-foreground) calc(0.2 * 100%), transparent);\n}\n\n.focus-visible\\:ring-active-foreground\\/30:focus-visible {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-foreground) calc(0.3 * 100%), transparent);\n}\n\n.focus-visible\\:ring-active-foreground\\/40:focus-visible {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-foreground) calc(0.4 * 100%), transparent);\n}\n\n.focus-visible\\:ring-active-glow:focus-visible {\n  --tw-ring-opacity:\n      1;\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);\n}\n\n.focus-visible\\:ring-destructive-foreground\\/10:focus-visible {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-error-foreground) calc(0.1 * 100%), transparent);\n}\n\n.focus-visible\\:ring-destructive-foreground\\/20:focus-visible {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-error-foreground) calc(0.2 * 100%), transparent);\n}\n\n.focus-visible\\:ring-destructive-foreground\\/30:focus-visible {\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-error-foreground) calc(0.3 * 100%), transparent);\n}\n\n.focus-visible\\:ring-offset-0:focus-visible {\n  --tw-ring-offset-width:\n      0px;\n}\n\n.focus-visible\\:ring-offset-2:focus-visible {\n  --tw-ring-offset-width:\n      2px;\n}\n\n.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-4 {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.group\\/switch:focus-within .group-focus-within\\/switch\\:ring-active-glow {\n  --tw-ring-opacity:\n      1;\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);\n}\n\n.group:hover .group-hover\\:bg-button-destructive-background\\/10 {\n  background-color: color-mix(in srgb, var(--token-button-destructive-background) 10%, transparent);\n}\n\n.group:hover .group-hover\\:bg-button-primary-background\\/10 {\n  background-color: color-mix(in srgb, var(--token-button-primary-background) 10%, transparent);\n}\n\n.group:hover .group-hover\\:bg-destructive-foreground\\/10 {\n  background-color: color-mix(in srgb, var(--token-state-error-foreground) 10%, transparent);\n}\n\n.group:hover .group-hover\\:bg-surface-overlay\\/10 {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 10%, transparent);\n}\n\n.group:hover .group-hover\\:bg-surface-overlay\\/30 {\n  background-color: color-mix(in srgb, var(--token-surface-overlay) 30%, transparent);\n}\n\n.group:hover .group-hover\\:underline {\n  text-decoration-line: underline;\n}\n\n.group:focus .group-focus\\:bg-destructive-foreground\\/20 {\n  background-color: color-mix(in srgb, var(--token-state-error-foreground) 20%, transparent);\n}\n\n.group:focus .group-focus\\:bg-slate-200 {\n  --tw-bg-opacity:\n      1;\n  background-color: rgb(226, 232, 240, var(--tw-bg-opacity, 1));\n}\n\n.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:border-0 {\n  border-width: 0px;\n}\n\n.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:border-active-accent {\n  --tw-border-opacity:\n      1;\n  border-color: color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-border-opacity, 1) * 100%), transparent);\n}\n\n.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:ring {\n  --tw-ring-offset-shadow:\n      var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:\n      var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\n}\n\n.group\\/checkbox:focus-visible .group-focus-visible\\/checkbox\\:ring-active-glow {\n  --tw-ring-opacity:\n      1;\n  --tw-ring-color:\n      color-mix(in srgb, var(--token-state-active-accent) calc(var(--tw-ring-opacity, 1) * 50%), transparent);\n}\n\n.group:active .group-active\\:bg-button-destructive-background\\/20 {\n  background-color: color-mix(in srgb, var(--token-button-destructive-background) 20%, transparent);\n}\n\n.group:active .group-active\\:bg-button-destructive-background\\/70 {\n  background-color: color-mix(in srgb, var(--token-button-destructive-background) 70%, transparent);\n}\n\n.group:active .group-active\\:bg-button-primary-background\\/20 {\n  background-color: color-mix(in srgb, var(--token-button-primary-background) 20%, transparent);\n}\n\n.group:active .group-active\\:bg-button-primary-background\\/70 {\n  background-color: color-mix(in srgb, var(--token-button-primary-background) 70%, transparent);\n}\n\n.group:active .group-active\\:bg-button-secondary-background\\/20 {\n  background-color: color-mix(in srgb, var(--token-button-secondary-background) 20%, transparent);\n}\n\n.group\\/sidebar-wrapper[data-state=collapsed] .group-data-\\[state\\=collapsed\\]\\/sidebar-wrapper\\:hidden {\n  display: none;\n}\n\n.group\\/accordion-item[data-state=expanded] .group-data-\\[state\\=expanded\\]\\/accordion-item\\:rotate-180 {\n  --tw-rotate:\n      180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  @keyframes progress-left {\n    0% {\n      left: -30%;\n    }\n    100% {\n      left: 100%;\n    }\n  }\n  .motion-safe\\:animate-progress-left {\n    animation: progress-left 1.6s linear infinite;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  .motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\] {\n    animation: spin 1.5s linear infinite;\n  }\n}";

/*
 Stencil Client Platform v4.43.4 | MIT Licensed | https://stenciljs.com
 */


// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/get-prop-descriptor.ts
function getPropertyDescriptor(obj, memberName, getOnly) {
  const stopAt = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : null;
  while (obj && obj !== stopAt) {
    const desc = Object.getOwnPropertyDescriptor(obj, memberName);
    if (desc && (!getOnly || desc.get)) return desc;
    obj = Object.getPrototypeOf(obj);
  }
  return void 0;
}

// src/utils/es2022-rewire-class-members.ts
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if ((memberFlags & 31 /* Prop */ || memberFlags & 32 /* State */)) {
      const ogValue = instance[memberName];
      const ogDescriptor = getPropertyDescriptor(Object.getPrototypeOf(instance), memberName, true) || Object.getOwnPropertyDescriptor(instance, memberName);
      if (ogDescriptor) {
        Object.defineProperty(instance, memberName, {
          get() {
            return ogDescriptor.get.call(this);
          },
          set(newValue) {
            ogDescriptor.set.call(this, newValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      if (hostRef.$instanceValues$.has(memberName)) {
        instance[memberName] = hostRef.$instanceValues$.get(memberName);
      } else if (ogValue !== void 0) {
        instance[memberName] = ogValue;
      }
    }
  });
};

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  if (!hostRef) return;
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
  if (hostRef.$cmpMeta$.$flags$ & 512 /* hasModernPropertyDecls */ && (BUILD.state)) {
    reWireGetterSetter(lazyInstance, hostRef);
  }
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map(),
    $serializerValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  {
    hostRef.$fetchedCbList$ = [];
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
              
                case 'at-accordion':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-accordion.entry.js').then(processMod, consoleError);
                case 'at-avatar':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-avatar.entry.js').then(processMod, consoleError);
                case 'at-breadcrumb':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-breadcrumb.entry.js').then(processMod, consoleError);
                case 'at-button-switch':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-button-switch.entry.js').then(processMod, consoleError);
                case 'at-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-card.entry.js').then(processMod, consoleError);
                case 'at-chart-breakdown':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chart-breakdown.entry.js').then(processMod, consoleError);
                case 'at-chart-donut':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chart-donut.entry.js').then(processMod, consoleError);
                case 'at-chart-gauge':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chart-gauge.entry.js').then(processMod, consoleError);
                case 'at-chart-sparkline':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chart-sparkline.entry.js').then(processMod, consoleError);
                case 'at-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-header.entry.js').then(processMod, consoleError);
                case 'at-list-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-list-item.entry.js').then(processMod, consoleError);
                case 'at-list-selector':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-list-selector.entry.js').then(processMod, consoleError);
                case 'at-multi-select':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-multi-select.entry.js').then(processMod, consoleError);
                case 'at-placeholder':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-placeholder.entry.js').then(processMod, consoleError);
                case 'at-progress-bar':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-progress-bar.entry.js').then(processMod, consoleError);
                case 'at-prompt-container':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-prompt-container.entry.js').then(processMod, consoleError);
                case 'at-radio-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-radio-group.entry.js').then(processMod, consoleError);
                case 'at-relative-time':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-relative-time.entry.js').then(processMod, consoleError);
                case 'at-src-dest':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-src-dest.entry.js').then(processMod, consoleError);
                case 'at-static-table':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-static-table.entry.js').then(processMod, consoleError);
                case 'at-status-bar':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-status-bar.entry.js').then(processMod, consoleError);
                case 'at-tab-content':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-tab-content.entry.js').then(processMod, consoleError);
                case 'at-tabs':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-tabs.entry.js').then(processMod, consoleError);
                case 'at-textarea':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-textarea.entry.js').then(processMod, consoleError);
                case 'at-tree':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-tree.entry.js').then(processMod, consoleError);
                case 'at-breadcrumb-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-breadcrumb-item.entry.js').then(processMod, consoleError);
                case 'at-list-selector-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-list-selector-item.entry.js').then(processMod, consoleError);
                case 'at-radio':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-radio.entry.js').then(processMod, consoleError);
                case 'at-tree-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-tree-item.entry.js').then(processMod, consoleError);
                case 'at-button-group-option':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-button-group-option.entry.js').then(processMod, consoleError);
                case 'at-chip-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chip-list.entry.js').then(processMod, consoleError);
                case 'at-input':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-input.entry.js').then(processMod, consoleError);
                case 'at-menu-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-menu-item.entry.js').then(processMod, consoleError);
                case 'at-checkbox-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-checkbox-group.entry.js').then(processMod, consoleError);
                case 'at-checkbox':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-checkbox.entry.js').then(processMod, consoleError);
                case 'at-badge':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-badge.entry.js').then(processMod, consoleError);
                case 'at-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-menu.entry.js').then(processMod, consoleError);
                case 'at-icon':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-icon.entry.js').then(processMod, consoleError);
                case 'at-dialog':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-dialog.entry.js').then(processMod, consoleError);
                case 'at-input-range':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-input-range.entry.js').then(processMod, consoleError);
                case 'at-side-panel':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-side-panel.entry.js').then(processMod, consoleError);
                case 'at-sidebar':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-sidebar.entry.js').then(processMod, consoleError);
                case 'at-sidebar-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-sidebar-menu.entry.js').then(processMod, consoleError);
                case 'at-sidebar-submenu':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-sidebar-submenu.entry.js').then(processMod, consoleError);
                case 'at-sidebar-trigger':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-sidebar-trigger.entry.js').then(processMod, consoleError);
                case 'at-time-range':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-time-range.entry.js').then(processMod, consoleError);
                case 'at-toaster':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-toaster.entry.js').then(processMod, consoleError);
                case 'at-layout_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-layout_2.entry.js').then(processMod, consoleError);
                case 'at-message':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-message.entry.js').then(processMod, consoleError);
                case 'at-prompt-input_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-prompt-input_2.entry.js').then(processMod, consoleError);
                case 'at-sidebar-menuitem':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-sidebar-menuitem.entry.js').then(processMod, consoleError);
                case 'at-prompt-message':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-prompt-message.entry.js').then(processMod, consoleError);
                case 'at-input-numeric':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-input-numeric.entry.js').then(processMod, consoleError);
                case 'at-form-label_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-form-label_2.entry.js').then(processMod, consoleError);
                case 'at-search-table':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-search-table.entry.js').then(processMod, consoleError);
                case 'at-button-group_3':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-button-group_3.entry.js').then(processMod, consoleError);
                case 'at-accordion-item_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-accordion-item_2.entry.js').then(processMod, consoleError);
                case 'at-input-date_3':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-input-date_3.entry.js').then(processMod, consoleError);
                case 'at-select_3':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-select_3.entry.js').then(processMod, consoleError);
                case 'at-button_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-button_2.entry.js').then(processMod, consoleError);
                case 'at-control-group_6':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-control-group_6.entry.js').then(processMod, consoleError);
                case 'at-column-manager_3':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-column-manager_3.entry.js').then(processMod, consoleError);
                case 'at-dashboard':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-dashboard.entry.js').then(processMod, consoleError);
                case 'at-chart-bar-line':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chart-bar-line.entry.js').then(processMod, consoleError);
                case 'at-checkbox-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-checkbox-cell.entry.js').then(processMod, consoleError);
                case 'at-checkbox-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-checkbox-header.entry.js').then(processMod, consoleError);
                case 'at-chip-list-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-chip-list-cell.entry.js').then(processMod, consoleError);
                case 'at-color-status-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-color-status-cell.entry.js').then(processMod, consoleError);
                case 'at-edit-text-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-edit-text-cell.entry.js').then(processMod, consoleError);
                case 'at-health-dot-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-health-dot-cell.entry.js').then(processMod, consoleError);
                case 'at-menu-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-menu-cell.entry.js').then(processMod, consoleError);
                case 'at-multi-btn-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-multi-btn-cell.entry.js').then(processMod, consoleError);
                case 'at-relative-datetime-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-relative-datetime-cell.entry.js').then(processMod, consoleError);
                case 'at-text-badge-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-text-badge-cell.entry.js').then(processMod, consoleError);
                case 'at-text-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-text-cell.entry.js').then(processMod, consoleError);
                case 'at-text-icon-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-text-icon-cell.entry.js').then(processMod, consoleError);
                case 'at-text-image-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-text-image-cell.entry.js').then(processMod, consoleError);
                case 'at-text-status-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-text-status-cell.entry.js').then(processMod, consoleError);
                case 'at-title-subtitle-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-title-subtitle-cell.entry.js').then(processMod, consoleError);
                case 'at-title-subtitle-date-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-title-subtitle-date-cell.entry.js').then(processMod, consoleError);
                case 'at-toggle-cell':
                    return import(
                      /* webpackMode: "lazy" */
                      './at-toggle-cell.entry.js').then(processMod, consoleError);
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
var XLINK_NS = "http://www.w3.org/1999/xlink";
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
    if (!win.document.adoptedStyleSheets) {
      return false;
    }
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
  const opts = { mode: "open" };
  const shadowRoot = this.attachShadow(opts);
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  } else if (!supportsConstructableStylesheets) {
    const styleElm = document.createElement("style");
    styleElm.innerHTML = globalStyles;
    shadowRoot.prepend(styleElm);
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
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0 || getSlotName(childNode) === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
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
function dispatchSlotChangeEvent(elm) {
  elm.dispatchEvent(new CustomEvent("slotchange", { bubbles: false, cancelable: false, composed: false }));
}
function findSlotFromSlottedNode(slottedNode, parentHost) {
  var _a;
  parentHost = parentHost || ((_a = slottedNode["s-ol"]) == null ? void 0 : _a.parentElement);
  if (!parentHost) return { slotNode: null, slotName: "" };
  const slotName = slottedNode["s-sn"] = getSlotName(slottedNode) || "";
  const childNodes = internalCall(parentHost, "childNodes");
  const slotNode = getHostSlotNodes(childNodes, parentHost.tagName, slotName)[0];
  return { slotNode, slotName };
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

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/runtime/styles.ts
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
  var _a, _b, _c;
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
        styleElm = win.document.createElement("style");
        styleElm.textContent = style;
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
              const currentWindow = (_b = styleContainerNode.defaultView) != null ? _b : styleContainerNode.ownerDocument.defaultView;
              const stylesheet = new currentWindow.CSSStyleSheet();
              stylesheet.replaceSync(style);
              if (supportsMutableAdoptedStyleSheets) {
                styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
              } else {
                styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
              }
            } else {
              const existingStyleContainer = styleContainerNode.querySelector("style");
              if (existingStyleContainer && true) {
                existingStyleContainer.textContent = style + existingStyleContainer.textContent;
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
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.textContent += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else {
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        const currentWindow = (_c = styleContainerNode.defaultView) != null ? _c : styleContainerNode.ownerDocument.defaultView;
        let stylesheet;
        if (style.constructor === currentWindow.CSSStyleSheet) {
          stylesheet = style;
        } else {
          stylesheet = new currentWindow.CSSStyleSheet();
          for (let i2 = 0; i2 < style.cssRules.length; i2++) {
            stylesheet.insertRule(style.cssRules[i2].cssText, i2);
          }
        }
        if (supportsMutableAdoptedStyleSheets) {
          styleContainerNode.adoptedStyleSheets.push(stylesheet);
        } else {
          styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, stylesheet];
        }
        appliedStyles.add(scopeId2);
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

// src/utils/helpers.ts
var isDef = (v) => v != null && v !== void 0;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/runtime/vdom/h.ts
var h = (nodeName, vnodeData, ...children) => {
  if (typeof nodeName === "string") {
    nodeName = transformTag(nodeName);
  }
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
    // Normalize undefined to null to prevent rendering "undefined" as text
    $text$: text != null ? text : null,
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

// src/runtime/normalize-watchers.ts
var normalizeWatchers = (raw) => {
  if (!raw) return void 0;
  const keys = Object.keys(raw);
  if (keys.length === 0) return void 0;
  let hasLegacy = false;
  for (const propName of keys) {
    if (hasLegacy) break;
    for (const h2 of raw[propName]) {
      if (typeof h2 === "string") {
        hasLegacy = true;
        break;
      }
    }
  }
  if (!hasLegacy) return raw;
  const out = {};
  for (const propName of keys) {
    out[propName] = raw[propName].map(
      (h2) => typeof h2 === "string" ? { [h2]: 0 } : h2
    );
  }
  return out;
};

// src/runtime/parse-property-value.ts
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
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
      queueRefAttachment(newValue, elm);
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
  } else if (memberName[0] === "a" && memberName.startsWith("attr:")) {
    const propName = memberName.slice(5);
    let attrName;
    {
      const hostRef = getHostRef(elm);
      if (hostRef && hostRef.$cmpMeta$ && hostRef.$cmpMeta$.$members$) {
        const memberMeta = hostRef.$cmpMeta$.$members$[propName];
        if (memberMeta && memberMeta[1]) {
          attrName = memberMeta[1];
        }
      }
    }
    if (!attrName) {
      attrName = propName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(attrName) === "") {
        elm.removeAttribute(attrName);
      }
    } else {
      elm.setAttribute(attrName, newValue === true ? "" : newValue);
    }
    return;
  } else if (memberName[0] === "p" && memberName.startsWith("prop:")) {
    const propName = memberName.slice(5);
    try {
      elm[propName] = newValue;
    } catch (e) {
    }
    return;
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] !== n) {
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
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
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

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var refCallbacksToRemove = [];
var refCallbacksToAttach = [];
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
  if (newVNode2.$text$ != null) {
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
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");
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
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      const appendTarget = newVNode2.$tag$ === "template" ? elm.content : elm;
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          appendTarget.appendChild(childNode);
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
        relocateToHostRoot(oldParentVNode.$elm$);
      }
      {
        addRemoveSlotScopedClass(contentRef, elm, newParentVNode.$elm$, oldParentVNode == null ? void 0 : oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.__childNodes || host.childNodes).find(
      (ref) => ref["s-cr"]
    );
    const childNodeArray = Array.from(
      parentElm.__childNodes || parentElm.childNodes
    );
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  if (parentElm["s-sr"]) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
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
  if (parentVNode.$tag$ === "template") {
    containerElm = containerElm.content;
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
  const containerElm = newVNode2.$tag$ === "template" ? parentElm.content : parentElm;
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
      insertBefore(containerElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(containerElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
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
  if (text == null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
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
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
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
    if (vNode.$attrs$ && vNode.$attrs$.ref) {
      refCallbacksToRemove.push(() => vNode.$attrs$.ref(null));
    }
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var queueRefAttachment = (refCallback, elm) => {
  {
    refCallbacksToAttach.push(() => refCallback(elm));
  }
};
var flushQueuedRefCallbacks = () => {
  {
    refCallbacksToRemove.forEach((cb) => cb());
    refCallbacksToRemove.length = 0;
    refCallbacksToAttach.forEach((cb) => cb());
    refCallbacksToAttach.length = 0;
  }
};
var insertBefore = (parent, newNode, reference, isInitialLoad) => {
  {
    if (typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
      addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
    } else if (typeof newNode["s-sn"] === "string") {
      parent.insertBefore(newNode, reference);
      const { slotNode } = findSlotFromSlottedNode(newNode);
      if (slotNode && !isInitialLoad) dispatchSlotChangeEvent(slotNode);
      return newNode;
    }
  }
  if (parent.__insertBefore) {
    return parent.__insertBefore(newNode, reference);
  } else {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
function addRemoveSlotScopedClass(reference, slotNode, newParent, oldParent) {
  var _a, _b;
  let scopeId2;
  if (reference && typeof slotNode["s-sn"] === "string" && !!slotNode["s-sr"] && reference.parentNode && reference.parentNode["s-sc"] && (scopeId2 = slotNode["s-si"] || reference.parentNode["s-sc"])) {
    const scopeName = slotNode["s-sn"];
    const hostName = slotNode["s-hn"];
    (_a = newParent.classList) == null ? void 0 : _a.add(scopeId2 + "-s");
    if (oldParent && ((_b = oldParent.classList) == null ? void 0 : _b.contains(scopeId2 + "-s"))) {
      let child = (oldParent.__childNodes || oldParent.childNodes)[0];
      let found = false;
      while (child) {
        if (child["s-sn"] !== scopeName && child["s-hn"] === hostName && !!child["s-sr"]) {
          found = true;
          break;
        }
        child = child.nextSibling;
      }
      if (!found) oldParent.classList.remove(scopeId2 + "-s");
    }
  }
}
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.forEach(([propName, attribute]) => {
      {
        rootVnode.$attrs$[attribute] = hostElm[propName];
      }
    });
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
  {
    scopeId = hostElm["s-sc"];
  }
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
          insertBefore(
            nodeToRelocate.parentNode,
            nodeToRelocate["s-ol"] = orgLocationNode,
            nodeToRelocate,
            isInitialLoad
          );
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (nodeToRelocate.nodeType === 1 /* ElementNode */ && isInitialLoad) {
          nodeToRelocate["s-ih"] = (_a = nodeToRelocate.hidden) != null ? _a : false;
        }
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_b = nodeToRelocate["s-ol"]) == null ? void 0 : _b.previousSibling;
            while (orgLocationNode) {
              let refNode = (_c = orgLocationNode["s-nr"]) != null ? _c : null;
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
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode, isInitialLoad);
              if (nodeToRelocate.nodeType === 8 /* CommentNode */ && nodeToRelocate.nodeValue.startsWith("s-nt-")) {
                const textNode = win.document.createTextNode(nodeToRelocate.nodeValue.replace(/^s-nt-/, ""));
                textNode["s-hn"] = nodeToRelocate["s-hn"];
                textNode["s-sn"] = nodeToRelocate["s-sn"];
                textNode["s-sh"] = nodeToRelocate["s-sh"];
                textNode["s-sr"] = nodeToRelocate["s-sr"];
                textNode["s-ol"] = nodeToRelocate["s-ol"];
                textNode["s-ol"]["s-nr"] = textNode;
                insertBefore(nodeToRelocate.parentNode, textNode, nodeToRelocate, isInitialLoad);
                nodeToRelocate.parentNode.removeChild(nodeToRelocate);
              }
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_d = nodeToRelocate["s-ih"]) != null ? _d : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
          nodeToRelocate.hidden = true;
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  if (!useNativeShadowDom && !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && hostElm["s-cr"]) {
    const children = rootVnode.$elm$.__childNodes || rootVnode.$elm$.childNodes;
    for (const childNode of children) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
          childNode.hidden = true;
        } else if (childNode.nodeType === 3 /* TextNode */ && !!childNode.nodeValue.trim()) {
          const textCommentNode = win.document.createComment("s-nt-" + childNode.nodeValue);
          textCommentNode["s-sn"] = childNode["s-sn"];
          insertBefore(childNode.parentNode, textCommentNode, childNode, isInitialLoad);
          childNode.parentNode.removeChild(childNode);
        }
      }
    }
  }
  contentRef = void 0;
  flushQueuedRefCallbacks();
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
      if (hostRef.$deferredConnectedCallback$) {
        hostRef.$deferredConnectedCallback$ = false;
        safeCall(instance, "connectedCallback", void 0, elm);
      }
      {
        hostRef.$flags$ |= 256 /* isListenReady */;
        if (hostRef.$queuedListeners$) {
          hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
          hostRef.$queuedListeners$ = void 0;
        }
      }
      if (hostRef.$fetchedCbList$.length) {
        hostRef.$fetchedCbList$.forEach((cb) => cb(elm));
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
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err) => {
  console.error(err);
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
      Promise.all(childrenPromises).then(postUpdate).catch(postUpdate);
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
    if (cmpMeta.$watchers$) {
      const watchMethods = cmpMeta.$watchers$[propName];
      if (watchMethods) {
        watchMethods.map((watcher) => {
          try {
            const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
            if (flags & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */) {
              if (!instance) {
                hostRef.$fetchedCbList$.push(() => {
                  hostRef.$lazyInstance$[watchMethodName](newVal, oldVal, propName);
                });
              } else {
                instance[watchMethodName](newVal, oldVal, propName);
              }
            }
          } catch (e) {
            consoleError(e, elm);
          }
        });
      }
    }
    if (flags & 2 /* hasRendered */) {
      if (instance.componentShouldUpdate) {
        const shouldUpdate = instance.componentShouldUpdate(newVal, oldVal, propName);
        if (shouldUpdate === false && !(flags & 16 /* isQueuedForUpdate */)) {
          return;
        }
      }
      if (!(flags & 16 /* isQueuedForUpdate */)) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || BUILD.propChangeCallback) {
    {
      if (Cstr.watchers && !cmpMeta.$watchers$) {
        cmpMeta.$watchers$ = normalizeWatchers(Cstr.watchers);
      }
      if (Cstr.deserializers && !cmpMeta.$deserializers$) {
        cmpMeta.$deserializers$ = Cstr.deserializers;
      }
      if (Cstr.serializers && !cmpMeta.$serializers$) {
        cmpMeta.$serializers$ = Cstr.serializers;
      }
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = getPropertyDescriptor(prototype, memberName) || {};
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
                  ref.$fetchedCbList$.push(() => {
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
                ref.$fetchedCbList$.push(() => {
                  setterSetVal();
                });
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
          const hostRef = getHostRef(this);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          }
          if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((watcher) => {
                const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
                if (instance[watchMethodName] != null && (flags2 & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */)) {
                  instance[watchMethodName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propFlags = members.find(([m]) => m === propName);
          const isBooleanTarget = propFlags && propFlags[1][0] & 4 /* Boolean */;
          const isSpuriousBooleanRemoval = isBooleanTarget && newValue === null && this[propName] === void 0;
          if (isBooleanTarget) {
            newValue = newValue === null || newValue === "false" ? false : true;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          if (!isSpuriousBooleanRemoval && newValue != this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 31 /* HasAttribute */).map(([propName, m]) => {
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
  try {
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
            cmpMeta.$watchers$ = normalizeWatchers(Cstr.watchers);
            cmpMeta.$serializers$ = Cstr.serializers;
            cmpMeta.$deserializers$ = Cstr.deserializers;
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
        const needsDeferredCallback = cmpMeta.$flags$ & 4 /* hasSlotRelocation */;
        if (!needsDeferredCallback) {
          fireConnectedCallback(hostRef.$lazyInstance$, elm);
        } else {
          hostRef.$deferredConnectedCallback$ = true;
        }
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
        if (!styles.has(scopeId2) || BUILD.hotModuleReplacement) {
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
  } catch (e) {
    consoleError(e, elm);
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$onReadyResolve$) {
      hostRef.$onReadyResolve$(elm);
    }
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
          if (memberFlags & 31 /* Prop */ && Object.prototype.hasOwnProperty.call(elm, memberName)) {
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
      var _a2, _b;
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
        cmpMeta.$watchers$ = normalizeWatchers(compactMeta[4]);
        cmpMeta.$serializers$ = (_a2 = compactMeta[5]) != null ? _a2 : {};
        cmpMeta.$deserializers$ = (_b = compactMeta[6]) != null ? _b : {};
      }
      const tagName = transformTag(cmpMeta.$tagName$);
      const HostElement = class extends HTMLElement {
        ["s-p"];
        ["s-rc"];
        hasRegisteredEventListeners = false;
        // StencilLazyHost
        constructor(self) {
          super(self);
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
function transformTag(tag) {
  return tag;
}

export { Fragment as F, Host as H, getElement as a, bootstrapLazy as b, createEvent as c, globalScripts as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
