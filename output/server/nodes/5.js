import * as universal from '../entries/pages/sverdle/how-to-play/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.js";
export const imports = ["_app/immutable/nodes/5.YZ8FVs4d.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.CZZ0BjDO.js","_app/immutable/chunks/index.CAI26QMY.js"];
export const stylesheets = ["_app/immutable/assets/5.CU6psp88.css"];
export const fonts = [];
