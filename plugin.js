var privileges = ["cellValue", "configuration"];

var templateCell = document.createElement("template");
templateCell.innerHTML = `
<style>
  #container {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    height: 100%;
    width: calc(100% - 16px);
    padding: 0 8px;
  }

  #custom-button {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
    color-scheme: light;
    border-collapse: collapse;
    caption-side: bottom;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    border-color: hsl(var(--border));
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
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
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    text-transform: none;
    cursor: pointer;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: inline-flex;
    height: 2.25rem;
    align-items: center;
    justify-content: center;
    border-radius: calc(var(--radius) - 2px);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    --tw-ring-offset-color: hsl(var(--background));
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  #custom-button:hover {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
    color-scheme: light;
    border-collapse: collapse;
    caption-side: bottom;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    border-color: hsl(var(--border));
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
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
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    margin: 0;
    padding: 0;
    text-transform: none;
    cursor: pointer;
    -webkit-appearance: button;
    background-image: none;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: inline-flex;
    height: 2.25rem;
    align-items: center;
    justify-content: center;
    border-radius: calc(var(--radius) - 2px);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    --tw-ring-offset-color: hsl(var(--background));
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  #custom-button svg {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
    color-scheme: light;
    border-collapse: collapse;
    caption-side: bottom;
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    text-transform: none;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: hsl(var(--accent-foreground));
    fill: none;
    stroke: currentcolor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    border-color: hsl(var(--border));
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
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
    display: block;
    vertical-align: middle;
    height: 1rem;
    width: 1rem;
  }
</style>

<div id="container">
  <span id="cell_value"></span>
  <button id="custom-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
      ></path>
      <path d="M5 3v4"></path>
      <path d="M19 17v4"></path>
      <path d="M3 5h4"></path>
      <path d="M17 19h4"></path>
    </svg>
  </button>
</div>
`;

var templateEditor_$PLUGIN_ID = document.createElement("template");
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
  #plugin-container {
    background-color: white;
    width: 600px;
  }

  ::after,
  ::before {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }
  
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
  b {
    font-weight: bolder;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    outline: none !important;
    border: none !important;
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
    color: inherit;
    /* 1 */
    margin: 0;
    /* 2 */
    padding: 0;
    /* 3 */
  }
  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    /* 1 */
    color: #9ca3af;
    /* 2 */
  }
  input {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }
  :-moz-focusring {
    outline: auto;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  input::placeholder {
    opacity: 1;
    color: #9ca3af;
  }
  [role="button"] {
    cursor: pointer;
  }
  :disabled {
    cursor: default;
  }
  svg {
    display: block;
    vertical-align: middle;
  }
  [hidden] {
    display: none;
  }
  *,
  ::after,
  ::before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-scroll-snap-strictness: proximity;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
  }
  ::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-scroll-snap-strictness: proximity;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .z-50 {
    z-index: 50;
  }
  .mb-1 {
    margin-bottom: 0.25rem;
  }
  .ml-3 {
    margin-left: 0.75rem;
  }
  .mr-2 {
    margin-right: 0.5rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .h-11 {
    height: 0.75rem;
  }
  .h-4 {
    height: 1rem;
  }
  .h-5 {
    height: 1.25rem;
  }
  .h-full {
    height: 100%;
  }
  .max-h-\[300px\] {
    max-height: 300px;
  }
  .w-4 {
    width: 1rem;
  }
  .w-5 {
    width: 1.25rem;
  }
  .w-\[500px\] {
    width: 500px;
  }
  .w-full {
    width: 100%;
  }
  .min-w-\[8rem\] {
    min-width: 8rem;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .-rotate-90 {
    --tw-rotate: -90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .cursor-default {
    cursor: default;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .rounded-sm {
    border-radius: 0.125rem;
  }
  .border {
    border-width: 1px;
  }
  .border-b {
    border-bottom-width: 1px;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-style: solid;
    border-color: #cbd5e1;
  }
  .bg-transparent {
    background-color: transparent;
  }
  .stroke-blue-500 {
    stroke: #3b82f6;
  }
  .p-1 {
    padding: 0.25rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .py-1\.5 {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  .py-2 {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .text-blue-500 {
    --tw-text-opacity: 1;
    color: rgb(59 130 246 / var(--tw-text-opacity));
  }
  .opacity-50 {
    opacity: 0.5;
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .outline {
    outline-style: solid;
  }
  .hover-bg-change:hover {
    background-color: rgba(244, 244, 245, 0.5);
  }
  .disabled\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  .disabled\:opacity-50:disabled {
    opacity: 0.5;
  }
  .data-\[disabled\]\:pointer-events-none[data-disabled] {
    pointer-events: none;
  }
  .data-\[disabled\]\:opacity-50[data-disabled] {
    opacity: 0.5;
  }
</style>

<div id="plugin-container">
  <div
    data-side="bottom"
    data-align="end"
    role="menu"
    aria-orientation="vertical"
    data-state="open"
    data-radix-menu-content=""
    dir="ltr"
    id="radix-:r1s:"
    aria-labelledby="radix-:r1r:"
    class="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[500px] min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md"
    tabindex="-1"
    data-orientation="vertical"
    style="
      outline: none;
      --radix-dropdown-menu-content-transform-origin: var(
        --radix-popper-transform-origin
      );
      --radix-dropdown-menu-content-available-width: var(
        --radix-popper-available-width
      );
      --radix-dropdown-menu-content-available-height: var(
        --radix-popper-available-height
      );
      --radix-dropdown-menu-trigger-width: var(--radix-popper-anchor-width);
      --radix-dropdown-menu-trigger-height: var(--radix-popper-anchor-height);
    "
  >
    <div
      class="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md"
      cmdk-root=""
    >
      <label
        cmdk-label=""
        for=":r3u:"
        id=":r3t:"
        style="
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0px, 0px, 0px, 0px);
          white-space: nowrap;
          border-width: 0px;
        "
      ></label>
      <div class="text-primary ml-3 mt-2 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5 -rotate-90 stroke-blue-500"
        >
          <path
            d="M4 7H6C12.6274 7 18 12.3726 18 19V19M4 7L7 4M4 7L7 10"
          ></path>
        </svg>
        <p class="mb-1 text-sm text-blue-500">
          You can ask anything, like "add more emoji"
        </p>
      </div>
      <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2 h-4 w-4 shrink-0 opacity-50"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg
        ><form class="w-full" id="enhance-form">
        <input
          class="placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Ask the AI anything..."
          cmdk-input=""
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          aria-autocomplete="list"
          role="combobox"
          aria-expanded="true"
          aria-controls=":r3s:"
          aria-labelledby=":r3t:"
          id="enhance-input"
          type="text"
          value=""
        /></form>
      </div>
      <div
        class="max-h-[300px] text-sm px-2 py-1 overflow-y-auto overflow-x-hidden"
        cmdk-list=""
        role="listbox"
        aria-label="Suggestions"
        id="suggestions"
        aria-labelledby=":r3u:"
        style="--cmdk-list-height: 228px"
      >
        <div cmdk-list-sizer="">
          <div
            class="text-foreground [&amp;_[cmdk-group-heading]]:px-2 [&amp;_[cmdk-group-heading]]:py-2 [&amp;_[cmdk-group-heading]]:text-xs [&amp;_[cmdk-group-heading]]:font-medium [&amp;_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1"
            cmdk-group=""
            role="presentation"
            data-value="suggestions"
          >
            <div cmdk-group-heading="" aria-hidden="true" id=":r41:">
              Suggestions
            </div>
            <div
              class="py-1"
              cmdk-group-items=""
              role="group"
              aria-labelledby=":r41:"
            >
              <div
                class="py-2 aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover-bg-change"
                id=":r42:"
                cmdk-item=""
                role="option"
                data-value="fix grammar"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path></svg
                ><span>Fix grammar</span>
              </div>
              <div
                class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover-bg-change"
                id=":r43:"
                cmdk-item=""
                role="option"
                data-value="improve writing"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                  ></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path></svg
                ><span>Improve writing</span>
              </div>
              <div
                class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover-bg-change"
                id=":r44:"
                cmdk-item=""
                role="option"
                data-value="make it punchier"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                  ></path></svg
                ><span>Make it punchier</span>
              </div>
              <div
                class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover-bg-change"
                id=":r45:"
                cmdk-item=""
                role="option"
                data-value="condense"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    d="M11.5 3.04999C11.7485 3.04999 11.95 3.25146 11.95 3.49999V7.49999C11.95 7.74852 11.7485 7.94999 11.5 7.94999C11.2515 7.94999 11.05 7.74852 11.05 7.49999V4.58639L4.58638 11.05H7.49999C7.74852 11.05 7.94999 11.2515 7.94999 11.5C7.94999 11.7485 7.74852 11.95 7.49999 11.95L3.49999 11.95C3.38064 11.95 3.26618 11.9026 3.18179 11.8182C3.0974 11.7338 3.04999 11.6193 3.04999 11.5L3.04999 7.49999C3.04999 7.25146 3.25146 7.04999 3.49999 7.04999C3.74852 7.04999 3.94999 7.25146 3.94999 7.49999L3.94999 10.4136L10.4136 3.94999L7.49999 3.94999C7.25146 3.94999 7.04999 3.74852 7.04999 3.49999C7.04999 3.25146 7.25146 3.04999 7.49999 3.04999L11.5 3.04999Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path></svg
                ><span>Condense</span>
              </div>
              <div
                class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover-bg-change"
                id=":r46:"
                cmdk-item=""
                role="option"
                data-value="mix it up"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-4 w-4"
                >
                  <path
                    d="M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path></svg
                ><span>Mix it up</span>
              </div>
              <div
                class="aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover-bg-change"
                id=":r47:"
                cmdk-item=""
                role="option"
                data-value="improve structure & spacing"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <line x1="21" x2="3" y1="6" y2="6"></line>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                  <line x1="17" x2="3" y1="18" y2="18"></line></svg
                ><span>Improve structure &amp; spacing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-sm px-2 py-2 mt-2 hidden" id="ai-output"></p>
    </div>
  </div>
</div>
`;

// This is the configuration object that Outerbase passes to your plugin.
// Define all of the configuration options that your plugin requires here.
class OuterbasePluginConfig {
  constructor(object) {
    // No custom properties needed in this plugin.
  }
}

class OuterbasePluginCell extends HTMLElement {
  static get observedAttributes() {
    return privileges;
  }

  config = new OuterbasePluginConfig({});

  constructor() {
    super();

    // The shadow DOM is a separate DOM tree that is attached to the element.
    // This allows us to encapsulate our styles and markup. It also prevents
    // styles from the parent page from leaking into our plugin.
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(templateCell.content.cloneNode(true));
  }

  // This function is called when the UI is made available into the DOM. Put any
  // logic that you want to run when the element is first stood up here, such as
  // event listeners, default values to display, etc.
  connectedCallback() {
    // Parse the configuration object from the `configuration` attribute
    // and store it in the `config` property.
    this.config = new OuterbasePluginConfig(
      JSON.parse(this.getAttribute("configuration")),
    );

    // Set default value based on input
    this.shadow.querySelector("#cell_value").textContent =
      this.getAttribute("cellValue");

    const aiButton = this.shadow.getElementById("custom-button");
    if (aiButton) {
      aiButton.addEventListener("click", () => {
        this.callCustomEvent({
          action: "onedit",
          value: true,
        });
      });
    }

    const handleClickOutside = () => {
      // Tell Outerbase to start editing the cell
      this.callCustomEvent({
        action: "onstopedit",
        value: true,
      });
    };

    // Add a click event listener to the document
    document.addEventListener("click", handleClickOutside);
  }

  callCustomEvent(data) {
    const event = new CustomEvent("custom-change", {
      detail: data,
      bubbles: true, // If you want the event to bubble up through the DOM
      composed: true, // Allows the event to pass through shadow DOM boundaries
    });

    this.dispatchEvent(event);
  }
}

class OuterbasePluginEditor extends HTMLElement {
  static get observedAttributes() {
    return privileges;
  }

  constructor() {
    super();

    // The shadow DOM is a separate DOM tree that is attached to the element.
    // This allows us to encapsulate our styles and markup. It also prevents
    // styles from the parent page from leaking into our plugin.
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(templateEditor_$PLUGIN_ID.content.cloneNode(true));

    // Parse the configuration object from the `configuration` attribute
    // and store it in the `config` property.
    this.config = new OuterbasePluginConfig(
      JSON.parse(this.getAttribute("configuration")),
    );
  }

  // This function is called when the UI is made available into the DOM. Put any
  // logic that you want to run when the element is first stood up here, such as
  // event listeners, default values to display, etc.
  connectedCallback() {
    const inputElem = this.shadow.getElementById("enhance-input");
    const enhanceForm = this.shadow.getElementById("enhance-form");

    if (enhanceForm) {
      enhanceForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = inputElem.value;

        this.submitInput(input);
      });
    }

    // Get all elements with role="option"
    const optionElements = this.shadow.querySelectorAll('[role="option"]');

    // Function to handle the click event
    const handleClick = (event) => {
      // Extract the data-value attribute from the clicked element
      const dataValue = event.target.getAttribute("data-value");

      // Print the data-value to the console or do something else with it
      this.submitInput(dataValue);
    };

    // Add a click event listener to each option element
    optionElements.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
  }

  submitInput(input) {
    const suggestions = this.shadow.getElementById("suggestions");
    const output = this.shadow.getElementById("ai-output");
    console.log("Submitted:", input);

    suggestions.style.display = "none";
    output.style.display = "block";

    // Function to handle incoming data
    const handleData = (data) => {
      output.textContent = data;
    };

    fetch(`https://outerbase-ai-editor-api.vercel.app/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        value: this.getAttribute("cellValue") ?? "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => {
        let stream = "";
        streamText(
          text,
          (char) => {
            stream += char;
            handleData(stream);
          },
          10,
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function streamText(text, callback, delay) {
  let index = 0;
  const intervalId = setInterval(function () {
    if (index < text.length) {
      const char = text.charAt(index);
      callback(char);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, delay);
}

// DO NOT change the name of this variable or the classes defined in this file.
// Changing the name of this variable will cause your plugin to not work properly
// when installed in Outerbase.
window.customElements.define(
  "outerbase-plugin-cell-$PLUGIN_ID",
  OuterbasePluginCell,
);
window.customElements.define(
  "outerbase-plugin-editor-$PLUGIN_ID",
  OuterbasePluginEditor,
);
