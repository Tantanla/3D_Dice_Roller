import * as universal from '../entries/pages/sverdle/how-to-play/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.js";
export const imports = ["_app/immutable/nodes/4.BKh_G_tg.js","_app/immutable/chunks/scheduler.CZZ0BjDO.js","_app/immutable/chunks/index.jV1qgJSt.js"];
export const stylesheets = ["_app/immutable/assets/4.CU6psp88.css"];
export const fonts = [];
