import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".app.svelte-z6htzv{display:flex;flex-direction:column;min-height:100vh}main.svelte-z6htzv{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-z6htzv{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\t// import '../app.css';\\n<\/script>\\n\\n<div class=\\"app\\">\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<footer>\\n\\t\\t\\n\\t</footer>\\n</div>\\n\\n<style>\\n\\t.app {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tmin-height: 100vh;\\n\\t}\\n\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 64rem;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 12px;\\n\\t}\\n\\n\\n\\n\\n</style>\\n"],"names":[],"mappings":"AAeC,kBAAK,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KACb,CAEA,kBAAK,CACJ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UACb,CAEA,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACV"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-z6htzv"><main class="svelte-z6htzv">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-z6htzv" data-svelte-h="svelte-owhq1p"></footer> </div>`;
});
export {
  Layout as default
};
