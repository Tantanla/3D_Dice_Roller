import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.B3-iuJsB.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.CZZ0BjDO.js","_app/immutable/chunks/index.CAI26QMY.js"];
export const stylesheets = [];
export const fonts = [];
